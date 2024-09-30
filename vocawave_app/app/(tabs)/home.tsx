import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import axios from 'axios';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import Header from '../comp/header';
import Footer from '../comp/footer';
import MyListItem from '../comp/mylistitem';
import { getData } from '../storage';

export default function Home({ navigation }: { navigation: any }) {
  const [myList, setMyList] = useState([]);
  const [query, setQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [listForm, setListForm] = useState({ wtitle: '', cmt: '', id: '' });
  const [login, setLogin] = useState({ id: '', nick: '' });

  const list = async () => {
    const login = await getData('login');
    setListForm(form => ({
      ...form,
      ['id']: login.id,
    }))

    await axiosInstance.get(
      '/main/wordList/' + login.id + '?q=' + query
    ).then(response => {
      setMyList(response.data.wordlist);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    list();
  }, []);

  const inputQuery = (value: string) => {
    setQuery(value);
    console.log(query);
  }

  const inputForm = (name: string, value: string) => {
    setListForm(listForm => ({
      ...listForm,
      [name]: value,
    }));
  }

  const createList = async () => {
    await axiosInstance.post(
      '/main/create',
      listForm
    ).then(response => {
      alert('생성되었습니다.');
      setListForm(listForm => ({
        ...listForm,
        ['wtitle']: '',
        ['cmt']: ''
      }))
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ height: 70 }} />
      <View style={styles.homeTop}>
        <TextInput style={styles.tinput} onChangeText={text => { inputQuery(text) }} />
        <TouchableOpacity onPress={list}>
          <Image
            source={require('../assets/search.png')}
            style={{ margin: 10, width: 30, height: 30 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Image
            source={require('../assets/addfile.png')}
            style={{ margin: 10, width: 30, height: 30 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Modal visible={modalOpen} style={styles.container} transparent={true}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContents}>
              <Text style={styles.title}>새 단어장 생성</Text>
              <TextInput style={styles.input} id='wtitle' value={listForm.wtitle} placeholder="제목을 입력하세요." onChangeText={text => { inputForm('wtitle', text) }} />
              <TextInput style={styles.input} id='cmt' value={listForm.cmt} placeholder="설명을 간략하게 적어주세요." onChangeText={text => { inputForm('cmt', text) }} />
              <TouchableOpacity style={styles.button} onPress={createList}>
                <Text style={styles.buttonText}>
                  단어장 생성
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setModalOpen(false)}>
                <Text style={styles.buttonText}>
                  닫기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.container}>
        <ScrollView>
          {myList.map((item, index) => (
            <MyListItem key={index} item={item} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
      <View style={{ height: 70 }} />
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffffa',
  },
  title: {
    color: '#515233',
    fontSize: 35,
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    width: 300,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#ef9995',
    padding: 10,
    borderRadius: 7,
    margin: 10,
    width: '70%',
    alignItems: 'center',
  },
  tinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 8,
    width: '70%',
    borderRadius: 5,
  },
  tbutton: {
    backgroundColor: '#ef9995',
    padding: 10,
    borderRadius: 7,
    margin: 5,
    width: '10%',
    height: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContents: {
    width: 350,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ece3ca'
  },
  homeTop: {
    flexDirection: 'row',
    backgroundColor: '#fffffa'
  },
});

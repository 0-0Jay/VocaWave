import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import Header from '../comp/header';
import Footer from '../comp/footer';
import MyListItem from '../comp/mylistitem';
import { LOCALHOST } from '../constants';

export default function Home({ navigation }: { navigation: any }) {
  const [myList, setMyList] = useState([]);
  const [query, setQuery] = useState('');

  const list = async () => {
    await axios.get(
      LOCALHOST + '/main/wordList/' + '123' + '?q=' + query
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

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ height: 70 }} />
      <View style={styles.homeTop}>
        <TextInput style={styles.tinput} onChangeText={text => { inputQuery(text) }} />
        <TouchableOpacity style={styles.tbutton} onPress={list}>
          <Text style={styles.buttonText}>
            검색
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tbutton} onPress={() => { }}>
          <Text style={styles.buttonText}>
            추가
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ScrollView>
          {myList.map((item, index) => (
            <MyListItem key={index} item={item} navigation={navigation}/>
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
    width: '45%',
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

import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Footer from '../comp/footer';
import Header from '../comp/header';
import ShareItem from '../comp/shareitem';
import axios from 'axios';
import { LOCALHOST } from '../constants';

export default function Share({ navigation }: { navigation: any }) {
  const [shareList, setShareList] = useState([]);
  const [query, setQuery] = useState('');

  const inputQuery = (value: string) => {
    setQuery(value);
    console.log(query);
  }

  const list = async () => {
    await axios.get(
      LOCALHOST + '/share/search?q=' + query
    ).then(response => {
      setShareList(response.data.wordlist);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    list();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ height: 70 }} />
      <View style={styles.homeTop}>
        <TextInput style={styles.tinput} onChangeText={text => { inputQuery(text) }} />
        <TouchableOpacity style={styles.tbutton} onPress={() => { }}>
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
          {shareList.map((item, index) => (
            <ShareItem key={index} item={item} navigation={navigation} />
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

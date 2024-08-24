import { RouteProp, useRoute } from '@react-navigation/native'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Modal, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../comp/header';
import WordItem from '../comp/worditem';
import axiosInstance from '../axios';
import Exam from '../comp/exam';

export default function Wordlist({ navigation }: { navigation: any }) {
  type paramlist = {
    contentType: {
      code: string,
      wtitle: string,
      cmt: string,
      cnt: number,
      rate: number,
    }
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const [examOpen, setExamOpen] = useState(false);
  const { params } = useRoute<RouteProp<paramlist, 'contentType'>>();
  const [words, setWords] = useState([]);

  const list = async () => {
    await axiosInstance.get(
      '/main/words/' + params.code
    ).then(response => {
      setWords(response.data.words);
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
      <View>
        <View>
          <Text>{params.wtitle}</Text>
          <Text>{params.cmt}</Text>
        </View>
        <TouchableOpacity onPress={() => setMenuOpen(true)}>
          <Text>메뉴</Text>
        </TouchableOpacity>
        <Text>학습률 : {params.rate} %</Text>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ width: '40%', textAlign: 'center' }}>단어</Text>
          <Text style={{ width: '45%', textAlign: 'center' }}>뜻/의미</Text>
          <Text style={{ width: '5%', fontSize: 10 }}>수정</Text>
          <Text style={{ width: '5%', fontSize: 10 }}>삭제</Text>
        </View>
        <ScrollView style={{ width: '100%' }}>
          {words.map((item, index) => (
            <WordItem key={index} item={item} index={index} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttomMenu}>
        <TouchableOpacity style={styles.menuButton} onPress={() => { }}>
          <Text>
            단어 추가
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => { }}>
          <Text>
            단어장 삭제
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => setExamOpen(true)}>
          <Text>
            테스트
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => { }}>
          <Text>
            공유
          </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={examOpen} style={styles.container} transparent={true}>
        <Exam code={params.code} words={words} setExamOpen={setExamOpen}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fffffa',
    width: '100%'
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
    margin: 5,
    width: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
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

  },
  buttomMenu: {
    flex: 0.2,
    position: 'absolute',
    zIndex: 1000,
    bottom: 0,
    backgroundColor: '#ece3ca',
    flexDirection: 'row',
  },
  menuButton: {
    flex: 1,
    backgroundColor: '#ece3ca',
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 5,
    width: '25%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


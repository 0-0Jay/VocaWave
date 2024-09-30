import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react';
import { Image, Modal, StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Header from '../comp/header';
import WordItem from '../comp/worditem';
import axiosInstance from '../axios';
import Exam from '../comp/exam';
import AddWord from '../comp/addword';
import { getData, removeData, storeData } from '../storage';

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
  const [addOpen, setAddOpen] = useState(false);
  const { params } = useRoute<RouteProp<paramlist, 'contentType'>>();
  const [words, setWords] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  const handleDelete = async() => {
    await axiosInstance.get(
      "/main/delete/" + params.code
    ).then(response => {
      alert("삭제되었습니다.");
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }).catch(e => {
      console.log(e);
    })
  }

  const handleShare = async() => {
    const data = await getData('login');
    await axiosInstance.post(
      "/share/update",
      { code: params.code, nick: data.nick}
    ).then(response => {
      if (response.data.result === true) {
        alert("공유되었습니다!");
      } else {
        alert("이미 공유 중인 단어장입니다.");
      }
    }).catch(e => {
      console.log(e);
    })
  }

  const deleteList = async() => {
    Alert.alert(
      "단어장 삭제", "정말로 삭제하시겠습니까?",
      [{text:"취소", style: 'cancel'}, {text : "삭제", onPress: () => handleDelete()}],
      {cancelable : false}
    );
  }

  const shareList = async() => {
    Alert.alert(
      "단어장 공유", "이 단어장을 공유하시겠습니까?",
      [{text:"취소", style: 'cancel'}, {text : "확인", onPress: () => handleShare()}],
      {cancelable : false}
    );
  }


  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ height: 70 }} />
      <View>
        <View>
          <Text>{params.wtitle}</Text>
          <Text>{params.cmt}</Text>
        </View>
        <Text>학습률 : {params.rate} %</Text>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ width: '80%', textAlign: 'center' }}>단어/의미</Text>
          <Text style={{ width: '10%', fontSize: 10 }}>수정</Text>
          <Text style={{ width: '10%', fontSize: 10 }}>삭제</Text>
        </View>
        <ScrollView style={{ width: '100%' }}>
          {words.map((item, index) => (
            <WordItem code={params.code} key={index} item={item} index={index} refresh={refresh} setRefresh={setRefresh} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttomMenu}>
        <TouchableOpacity style={styles.menuButton} onPress={() => setAddOpen(true)}>
          <Text>
            단어 추가
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={deleteList}>
          <Text>
            단어장 삭제
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => setExamOpen(true)}>
          <Text>
            테스트
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={shareList}>
          <Text>
            공유
          </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={examOpen} style={styles.container} transparent={true}>
        <Exam code={params.code} words={words} setExamOpen={setExamOpen}/>
      </Modal>
      <Modal visible={addOpen} style={styles.container} transparent={true}>
        <AddWord code={params.code} setAddOpen={setAddOpen} refresh={refresh} setRefresh={setRefresh}/>
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


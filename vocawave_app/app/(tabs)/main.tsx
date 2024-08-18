import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import axios from 'axios';

export default function Main({ navigation } : {navigation: any}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({id : '', pw : '', nick: ''});

  const inputForm = (name: string, value: string) => {
    setLoginForm(inputForm => ({
      ...inputForm,
      [name]: value,
    }));
  }

  const login = async() => {
    await axios.post(
      'http://192.168.35.3:8099/user/login',
      loginForm
    ).then(response => {
      if (response.data.status === false) {
        alert("ID/PW를 확인해주세요!");
      } else {
        alert("로그인 성공!");
        navigation.navigate('Home');
      }
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('C:/Users/PC/Desktop/project/vocawave-app/assets/images/logo2.png')}
      />
      <Text style={styles.title}>VocaWave</Text>
      <TextInput style={styles.input} placeholder="ID" onChangeText={text => {inputForm('id', text)}} />
      <TextInput style={styles.input} placeholder="PASSWORD" onChangeText={text => {inputForm('pw', text)}} />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>
          로그인
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setModalOpen(true)}>
        <Text style={styles.buttonText}>
          회원가입
        </Text>
      </TouchableOpacity>
      <Modal visible={modalOpen} style={styles.container} transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContents}>
            <Text style={styles.title}>회원가입</Text>
            <TextInput style={styles.input} id='id' placeholder="ID" onChangeText={text => {inputForm('id', text)}} />
            <TextInput style={styles.input} id='pw' placeholder="PASSWORD" onChangeText={text => {inputForm('pw', text)}} />
            <TextInput style={styles.input} id='nick' placeholder="NICKNAME" onChangeText={text => {inputForm('nick', text)}} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                회원가입
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ece3ca',
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
});

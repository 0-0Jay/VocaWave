import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import axiosInstance from '../axios';
import { storeData } from '../storage';

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
    await axiosInstance.post(
      '/user/login',
      loginForm
    ).then(response => {
      if (response.data.status === false) {
        alert("ID/PW를 확인해주세요!");
      } else {
        alert("로그인 성공!");
        storeData('login', JSON.stringify(response.data))
        navigation.navigate('Home');
      }
    }).catch(error => {
      console.log(error);
    })
  }

  const signUp = async () => {
    await axiosInstance.post(
      '/user/signup',
      loginForm
    ).then(response => {
      if (response.data.status === false) {
        alert("이미 존재하는 아이디/닉네임 입니다.");
      } else {
        alert("회원가입 성공! 로그인해주세요.");
        setLoginForm({id : '', pw : '', nick: ''});
        setModalOpen(false);
      }
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo2.png')}
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
            <TextInput style={styles.input} id='id' value={loginForm.id} placeholder="ID" onChangeText={text => {inputForm('id', text)}} />
            <TextInput style={styles.input} id='pw' value={loginForm.pw} placeholder="PASSWORD" onChangeText={text => {inputForm('pw', text)}} />
            <TextInput style={styles.input} id='nick' value={loginForm.nick} placeholder="NICKNAME" onChangeText={text => {inputForm('nick', text)}} />
            <TouchableOpacity style={styles.button} onPress={signUp}>
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

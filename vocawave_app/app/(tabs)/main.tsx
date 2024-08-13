import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { rgbaArrayToRGBAColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function Main({ navigation } : {navigation: any}) {
  const [modalOpen, setModalOpen] = useState(false);

  const login = () => {
    alert("로그인!");
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('C:/Users/PC/Desktop/project/vocawave-app/assets/images/logo2.png')}
      />
      <Text style={styles.title}>VocaWave</Text>
      <TextInput style={styles.input} placeholder="ID" />
      <TextInput style={styles.input} placeholder="PASSWORD" />
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
            <TextInput style={styles.input} placeholder="ID" />
            <TextInput style={styles.input} placeholder="PASSWORD" />
            <TextInput style={styles.input} placeholder="NICKNAME" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                회원가입
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => setModalOpen(false)}>
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

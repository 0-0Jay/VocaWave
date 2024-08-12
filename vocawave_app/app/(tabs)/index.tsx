import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('C:/Users/PC/Desktop/project/vocawave-app/assets/images/logo2.png')} />
      <Text style={styles.title}>VocaWave</Text>
      <TextInput style={styles.input} placeholder="ID" />
      <TextInput style={styles.input} placeholder="PASSWORD" />
      <TouchableOpacity style={styles.button} onPress={() => alert('로그인!')}>
        <Text style={styles.buttonText}>
          로그인
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setModalOpen(true)}>
        <Text style={styles.buttonText}>
          회원가입
        </Text>
      </TouchableOpacity>
      <Modal visible={modalOpen} style={styles.container}>
        <View style={styles.container}>
        <Image source={require('C:/Users/PC/Desktop/project/vocawave-app/assets/images/logo2.png')} />
          <Text style={styles.title}>VocaWave</Text>
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
              메인화면으로
            </Text>
          </TouchableOpacity>
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
});

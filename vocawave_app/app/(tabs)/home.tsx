import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import Header from '../comp/header';
import Footer from '../comp/footer';

export default function Home({ navigation }: { navigation: any }) {

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ height: 70 }} />
      <View style={styles.homeTop}>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={styles.buttonText}>
            단어장 추가
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={styles.buttonText}>
            단어장 삭제
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
          <Text style={{ flex: 1 }}>나의 단어장</Text>
          <Text>테스트 텍스트</Text>
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

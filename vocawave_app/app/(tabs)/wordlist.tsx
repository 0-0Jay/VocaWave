import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Footer from '../comp/footer';
import Header from '../comp/header';

export default function Wordlist({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ height: 70 }} />
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
});


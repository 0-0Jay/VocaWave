import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Footer from '../comp/footer';
import Header from '../comp/header';
import WordItem from '../comp/worditem';

export default function Wordlist({ navigation }: { navigation: any }) {
  type paramlist = {
    contentType: {
      code: string,
      wtitle: string,
      cmt: string,
      cnt: number
    }
  }
  const { params } = useRoute<RouteProp<paramlist, 'contentType'>>();
  const [words, setWords] = useState([]);

  const list = async () => {
    await axios.get(
      'http://192.168.35.3:8099/main/words/' + params.code
    ).then(response => {
      setWords(response.data.words);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    list();
    console.log(words);
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
        <TouchableOpacity>
          <Text>메뉴</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text>No.</Text>
          <Text>Word</Text>
          <Text>Mean</Text>
        </View>
        <ScrollView>
          {words.map((item, index) => (
            <WordItem item={item} />
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


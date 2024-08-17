import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, TextInput } from "react-native";
import { useRoute } from '@react-navigation/native/lib/typescript/src';

export default function Header({ navigation }: { navigation: any }) {
  const [modalOpen, setModalOpen] = useState(false);

  const goHome = () => {
    navigation.navigate('Home');
  }

  const goShare = () => {
    navigation.navigate('Share');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goHome}>
        <Text style={styles.buttonText}>
          나의 단어장
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goShare}>
        <Text style={styles.buttonText}>
          공유 단어장
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    position: 'absolute',
    zIndex: 1000,
    bottom: 0,
    backgroundColor: '#ece3ca',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#ece3ca',
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 20,
    width: '50%',
    height: 70,
    alignItems: 'center',
  },
  buttonText: {
    color: '#515233',
    fontSize: 15
  },
});
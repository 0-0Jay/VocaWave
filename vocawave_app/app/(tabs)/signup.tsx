import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

export default function Signup() {
  return (
    <View style={styles.container}>
      <Image
        source={require('C:/Users/PC/Desktop/project/vocawave-app/assets/images/logo2.png')}
        style={{ width: 200, height: 200}}
        />
      <Text style={styles.title}>VocaWave</Text>
      <TextInput style={styles.input} placeholder="ID"/>
      <TextInput style={styles.input} placeholder="PASSWORD"/>
      <TextInput style={styles.input} placeholder="NICKNAME"/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          SIGN UP
        </Text>
      </TouchableOpacity>
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
    height:40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    width : 300,
    paddingHorizontal : 8,
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
  }
});

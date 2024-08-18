import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, TextInput } from "react-native";
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Header({ navigation }: { navigation: any }) {
    const [modalOpen, setModalOpen] = useState(false);

    const logout = () => {
        alert("로그아웃!");
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>닉네임 님</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setModalOpen(true)}>
                    <Text style={styles.title}>P</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={logout}>
                    <Text style={styles.title}>L</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalOpen} style={styles.container} transparent={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContents}>
                        <Text style={styles.modalTitle}>내 정보</Text>
                        <TextInput style={styles.input} placeholder="ID" />
                        <TextInput style={styles.input} placeholder="PA******" />
                        <TouchableOpacity style={styles.modalButton}>
                            <Text style={styles.buttonText}>
                                비밀번호 변경
                            </Text>
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder="NICKNAME" />
                        <TouchableOpacity style={styles.modalButton}>
                            <Text style={styles.buttonText}>
                                닉네임 변경
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalOpen(false)}>
                            <Text style={styles.buttonText}>
                                닫기
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1000,
        flexDirection: 'row',
        padding: 10,
        position: 'absolute',
        top: 0,
        backgroundColor: '#e4d8b4',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.7,
        width: '100%',
        alignItems: 'center',
        height: 70
    },
    title: {
        color: '#515233',
        fontSize: 25,
    },
    modalTitle: {
        color: '#515233',
        fontSize: 25,
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        margin: 10
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        width: 300,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    modalButton: {
        backgroundColor: '#ef9995',
        padding: 10,
        borderRadius: 7,
        marginBottom: 20,
        width: 300,
        alignItems: 'center',
    },
});
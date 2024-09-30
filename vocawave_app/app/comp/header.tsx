import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, TextInput } from "react-native";
import axiosInstance from '../axios';
import { getData, removeData, storeData } from '../storage';

export default function Header({ navigation }: { navigation: any }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [login, setLogin] = useState({ nick: '', id: '' });
    const [form, setForm] = useState({ id: '', pw: '', newpw: '', nick: '' });

    const getLogin = async () => {
        const data = await getData('login')
        setLogin(data);
        setForm(form => ({
            ...form,
            ['id']: data.id,
            ['nick']: data.nick,
        }))
    }

    useEffect(() => {
        getLogin();
    }, [])

    const logout = async () => {
        alert("로그아웃!");
        await removeData('login');
        navigation.navigate('Main')
    }

    const inputForm = (name: string, value: string) => {
        setForm(form => ({
            ...form,
            [name]: value,
        }));
    }

    const changePw = async () => {
        await axiosInstance.post(
            '/user/changePw',
            form
        ).then(response => {
            if (response.data.result === false) {
                alert("기존 비밀번호가 틀렸습니다. 다시 입력해주세요!");
            } else {
                alert("변경되었습니다!");
                setForm(form => ({
                    ...form,
                    ['pw']: '',
                    ['newpw']: ''
                }))
            }
        }).catch(e => {
            console.log(e);
        })
    }

    const changeNick = async () => {
        await axiosInstance.post(
            '/user/changeNick',
            form
        ).then(response => {
            if (response.data.result === false) {
                alert("이미 존재하는 닉네임입니다.");
            } else {
                alert("변경되었습니다!");
                storeData('login', JSON.stringify({id : form.id, nick: form.nick}));
                getLogin();
            }
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} onPress={() => setModalOpen(true)}>{login.nick} 님</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={logout}>
                    <Text style={{color: '#515233',}}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalOpen} style={styles.container} transparent={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContents}>
                        <Text style={styles.modalTitle}>내 정보</Text>
                        <Text style={{ width: '100%', paddingLeft: '3%' }}>아이디</Text>
                        <TextInput style={styles.input} value={login.id} readOnly />
                        <Text style={{ width: '100%', paddingLeft: '3%' }}>비밀번호 변경</Text>
                        <TextInput style={styles.input} value={form.pw} placeholder='기존 비밀번호 입력' onChangeText={text => { inputForm('pw', text) }} />
                        <TextInput style={styles.input} value={form.newpw} placeholder='새 비밀번호 입력' onChangeText={text => { inputForm('newpw', text) }} />
                        <TouchableOpacity style={styles.modalButton} onPress={changePw}>
                            <Text style={styles.buttonText}>
                                비밀번호 변경
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ width: '100%', paddingLeft: '3%' }}>닉네임 변경</Text>
                        <TextInput style={styles.input} placeholder={login.nick} value={form.nick} onChangeText={text => { inputForm('nick', text) }} />
                        <TouchableOpacity style={styles.modalButton} onPress={changeNick}>
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
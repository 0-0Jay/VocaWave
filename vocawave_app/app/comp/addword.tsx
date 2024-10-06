import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListRenderItem, ScrollView, TextInput } from "react-native";
import axiosInstance from '../axios';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function addword({ code, setAddOpen, refresh, setRefresh }: { code: any, setAddOpen: any, refresh: boolean, setRefresh: any }) {
    const [word, setWord] = useState({ code: code, word: '', mean: '', type: 2 });
    const [share, setShare] = useState({ code: code, sharecode: '' });

    const editWord = async () => {
        await axiosInstance.post(
            '/main/edit',
            word
        ).then(response => {
            alert("추가되었습니다!");
            setRefresh(!refresh);
            setWord(word => ({
                ...word,
                ['word']: '',
                ['mean']: ''
            }));
        })
    }

    const inputWord = (name: string, value: string) => {
        setWord(word => ({
            ...word,
            [name]: value,
        }));
    }

    const inputShare = (name: string, value: string) => {
        setShare(share=> ({
          ...share,
          [name]: value,
        }));
      }


    const addShare = async () => {
        await axiosInstance.post(
            '/main/addcode',
            share
        ).then(response => {
            if (response.data.result) {
                console.log(response.data.status);
                alert("추가되었습니다!");
                setRefresh(!refresh);
            } else {
                alert("코드가 잘못되었거나, 빈 단어장 입니다.");
            }
        })
    }

    return (
        <GestureHandlerRootView style={styles.modalBackground}>
            <View style={styles.modalContents}>
                <Text style={styles.title}>단어 추가</Text>
                <TextInput style={styles.input} placeholder="단어 입력" onChangeText={text => { inputWord('word', text) }} value={word.word}/>
                <TextInput style={styles.input} placeholder="의미 입력" onChangeText={text => { inputWord('mean', text) }} value={word.mean}/>
                <TouchableOpacity style={styles.button} onPress={() => editWord()}>
                    <Text style={styles.buttonText}>추가하기</Text>
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder="코드 입력" onChangeText={text => { inputShare('sharecode', text) }} />
                <TouchableOpacity style={styles.button} onPress={() => addShare()}>
                    <Text style={styles.buttonText}>코드로 추가하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setAddOpen(false)}>
                    <Text style={styles.buttonText}>닫기</Text>
                </TouchableOpacity>
            </View >
        </GestureHandlerRootView >
    )
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
        marginBottom: 5,
        width: 300,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#ef9995',
        padding: 10,
        borderRadius: 7,
        marginBottom: 15,
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
        backgroundColor: '#ece3ca',
        height: 500
    },
});
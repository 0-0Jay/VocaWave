import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListRenderItem, ScrollView, TextInput } from "react-native";
import axiosInstance from '../axios';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function exam({ code, words, setExamOpen }: { code: any, words: any, setExamOpen: any }) {
    interface ExamItem {
        word: string;
        mean: string;
        ans: string;
    }
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState<ExamItem[]>([]);
    const exam = useRef<ExamItem[]>([]);
    const size = useRef(0);

    const reloadExam = () => {
        setScore([]);
        const list = words.map((item: any) => {
            const random = Math.random() > 0.5;
            const addWord = { word: '', mean: '', ans: '' };
            if (random === true) {
                addWord.mean = item.mean;
                addWord.ans = "W" + item.word;
            } else {
                addWord.word = item.word;
                addWord.ans = "M" + item.mean;
            }
            return addWord;
        });
        exam.current = list;
        size.current = exam.current.length;
    }

    useEffect(() => {
        reloadExam();
    }, [words]);

    const writeAnswer = (id: any, name: any, value: any) => {
        if (name === 'word') {
            exam.current[id].word = value;
        } else {
            exam.current[id].mean = value;
        }
    }

    const submit = async () => {
        console.log(exam.current);
        await axios.post(
            'http://192.168.35.243:8000/main/test',
            // 'http://172.26.13.211:8000/main/test',
            { list: exam.current, code: code }
        ).then(response => {
            setScore(response.data.score);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const clickButton = (name: any) => {
        if (name === "left" && index > 0) {
            setIndex(id => id - 1)
        } else if (name === "right" && index < size.current) {
            setIndex(id => id + 1)
        }
    }

    return (
        <GestureHandlerRootView style={styles.modalBackground}>
            <View style={styles.modalContents}>
                <Text style={{ color: '#515233', fontSize: 35, marginBottom: 20,}}>단어 테스트</Text>
                <View style={styles.examRow}>
                    <Text style={{ width: '10%', justifyContent: 'center', textAlign: 'center' }}>No.</Text>
                    <Text style={{ width: '90%', justifyContent: 'center', textAlign: 'center' }}>Word / Mean</Text>
                </View>
                <ScrollView style={styles.scroll}>
                    {exam.current.map((it, index) => (
                        (it.ans.charAt(0) == "W") ? (
                            <View key={index} style={styles.examRow}>
                                <View style={styles.index}>
                                    <Text style={{ fontSize: 20 }}>{index + 1}</Text>
                                </View>
                                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', }}>
                                    <TextInput style={styles.wordBlank} onChangeText={text => writeAnswer(index, 'word', text)} placeholder='단어'></TextInput>
                                    <Text style={styles.mean}>{it.mean}</Text>
                                </View>
                            </View>
                        ) : (
                            <View key={index} style={styles.examRow}>
                                <View style={styles.index}>
                                    <Text style={{ fontSize: 20 }}>{index + 1}</Text>
                                </View>
                                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={styles.word}>{it.word}</Text>
                                    <TextInput style={styles.meanblank} onChangeText={text => writeAnswer(index, 'word', text)} placeholder='의미'></TextInput>
                                </View>
                            </View>
                        )
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.button} onPress={() => submit}>
                    <Text>제출하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setExamOpen(false)}>
                    <Text>닫기</Text>
                </TouchableOpacity>
            </View >
        </GestureHandlerRootView >
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContents: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ece3ca',
        height: '100%'
    },
    examItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    examRow: {
        flexDirection: 'row',
        fontWeight: 'bold',
        borderBottomColor: '#000000',
        borderWidth: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    scroll: {
        height: 10
    },
    word: {
        fontSize: 20,
        backgroundColor: '#ece3ca',
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wordBlank: {
        fontSize: 20,
        backgroundColor: '#ece3ca',
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mean: {
        fontSize: 20,
        backgroundColor: '#FFF',
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    meanblank: {
        fontSize: 20,
        backgroundColor: '#FFF',
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    index: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%'
    },
    button: {
        backgroundColor: '#ef9995',
        padding: 10,
        borderRadius: 7,
        margin: 5,
        width: '70%',
        alignItems: 'center',
    },
});
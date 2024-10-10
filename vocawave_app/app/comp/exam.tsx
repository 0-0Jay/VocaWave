import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal } from "react-native";
import axiosInstance from '../axios';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function exam({ code, words, setExamOpen, refresh, setRefresh, setRate, setNrate }: { code: any, words: any, setExamOpen: any, refresh: boolean, setRefresh: any, setRate:any, setNrate:any }) {
    interface ExamItem {
        word: string;
        mean: string;
        ans: string;
    }
    interface ExamResult {
        submit: string;
        ans: string;
        ox: string;
    }
    const [score, setScore] = useState<ExamResult[]>([]);
    const [resultOpen, setResultOpen] = useState(false);
    const exam = useRef<ExamItem[]>([]);

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
        await axios.post(
            // 'http://192.168.35.243:8000/main/test',
            'http://172.26.13.211:8000/main/test',
            { list: exam.current, code: code }
        ).then(response => {
            setScore(response.data.score);
            setRate(response.data.rate);
            setNrate(response.data.rate);
            setResultOpen(true);
        }).catch(error => {
            console.log(error);
        })
    }

    const reloadPage = async() => {
        setRefresh(!refresh);
        setExamOpen(false); 
        setResultOpen(false); 
    }

    // const clickButton = (name: any) => {
    //     if (name === "left" && index > 0) {
    //         setIndex(id => id - 1)
    //     } else if (name === "right" && index < size.current) {
    //         setIndex(id => id + 1)
    //     }
    // }

    return (
        <GestureHandlerRootView style={styles.modalBackground}>
            <View style={styles.modalContents}>
                <Text style={{ color: '#515233', fontSize: 35, marginBottom: 20, }}>단어 테스트</Text>
                <View style={styles.examHead}>
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
                                    <TextInput style={styles.wordBlank} onChangeText={text => writeAnswer(index, 'word', text)} placeholder='단어 입력'></TextInput>
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
                                    <TextInput style={styles.meanblank} onChangeText={text => writeAnswer(index, 'mean', text)} placeholder='의미 입력'></TextInput>
                                </View>
                            </View>
                        )
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.button} onPress={() => submit()}>
                    <Text>제출하기</Text>
                </TouchableOpacity>
                <Modal visible={resultOpen}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContents}>
                            <Text style={{ color: '#515233', fontSize: 35, marginBottom: 20, }}>단어 테스트</Text>
                            <View style={styles.examHead}>
                                <Text style={{ width: '10%', justifyContent: 'center', textAlign: 'center' }}>No.</Text>
                                <Text style={{ width: '80%', justifyContent: 'center', textAlign: 'center' }}>제출한 답 / 정답</Text>
                                <Text style={{ width: '10%', justifyContent: 'center', textAlign: 'center' }}>O/X</Text>
                            </View>
                            <ScrollView style={styles.scroll}>
                                {score.map((it, index) => (
                                    <View key={index} style={styles.examRow}>
                                        <View style={styles.index}>
                                            <Text style={{ fontSize: 20 }}>{index + 1}</Text>
                                        </View>
                                        <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', }}>
                                            <Text style={styles.result}>{it.submit}</Text>
                                            <Text style={styles.result}>{it.ans.substring(1)}</Text>
                                        </View>
                                        <View style={styles.index}>
                                            <Text style={{ fontSize: 20 }}>{it.ox}</Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                            <TouchableOpacity style={styles.button} onPress={() => reloadPage()}>
                                <Text>
                                    확인
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
    examHead: {
        flexDirection: 'row',
        fontWeight: 'bold',
        borderBottomColor: '#000000',
        borderWidth: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
    },
    examRow: {
        flexDirection: 'row',
        fontWeight: 'bold',
        borderBottomColor: '#000000',
        borderWidth: 1,
        borderTopWidth: 0,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
    },
    scroll: {
        height: 10
    },
    word: {
        fontSize: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 5,
    },
    wordBlank: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5,
        width: 300,
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    mean: {
        fontSize: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    meanblank: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 5,
        width: 300,
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: '#fff'
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
    result: {
        fontSize: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
});
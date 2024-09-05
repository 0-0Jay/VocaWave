import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListRenderItem } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import axiosInstance from '../axios';

export default function exam({ code, words, setExamOpen }: { code: any, words: any, setExamOpen: any }) {
    interface ExamItem {
        word: string;
        mean: string;
        ans: string;
    }
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState<ExamItem[]>([]);
    const exam = useRef<ExamItem[]>([]);
    const size = score.length;

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
        console.log(exam.current);
        await axios.post(
            'http://192.168.35.243:8000/main/test',
            { list: exam.current, code: code }
        ).then(response => {
            setScore(response.data.score);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const clickButton = (name: any) => {
        if (name === "left") {
            setIndex(id => (id + (size - 1)) % size)
        } else {
            setIndex(id => (id + 1) % size)
        }
    }

    return (
        <View style={styles.modalBackground}>
            <View style={styles.modalContents}>
                <View style={styles.examItem}>
                    <TouchableOpacity onPress={() => clickButton('left')}>
                        <Text>{'<'}</Text>
                    </TouchableOpacity>
                    {(exam.current[index].ans[0] === 'W') ? (
                        <View>
                            <Text style={{ width: 200 }}>{exam.current[index].word}</Text>
                            <TextInput style={{ width: 200 }}>{exam.current[index].mean}</TextInput>
                        </View>
                    ) : (
                        <View>
                            <TextInput style={{ width: 200 }}>{exam.current[index].word}</TextInput>
                            <Text style={{ width: 200 }}>{exam.current[index].mean}</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={() => { clickButton('right') }}>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => submit}>
                    <Text>제출하기</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setExamOpen(false)}>
                    <Text>닫기</Text>
                </TouchableOpacity>
            </View >
        </View >
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
        width: 350,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ece3ca',
    },
    examItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
});
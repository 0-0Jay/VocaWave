import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListRenderItem } from "react-native";
import axiosInstance from '../axios';

export default function exam({ code, words, setExamOpen }: { code: any, words: any, setExamOpen: any }) {
    interface ExamItem {
        word: string;
        mean: string;
        ans: string;
    }

    const [score, setScore] = useState<ExamItem[]>([]);
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
        console.log(exam.current);
        await axiosInstance.post(
            '/main/test',
            { list: exam.current, code: code }
        ).then(response => {
            setScore(response.data.score);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <View style={styles.modalBackground}>
            <View style={styles.modalContents}>
                <View style={styles.examItem}>
                    <TouchableOpacity>
                        <Text>{'<'}</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{width: 200}}>단어</Text>
                        <Text style={{width: 200}}>뜻</Text>
                    </View>
                    <TouchableOpacity>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => submit}>
                    <Text>제출하기</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setExamOpen(false)}>
                    <Text>닫기</Text>
                </TouchableOpacity>
            </View>
        </View>
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
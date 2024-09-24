import { View, Text, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import axiosInstance from '../axios';

export default function WordItem({ code, item, index, refresh, setRefresh }: { code: any, item: any, index: any, refresh: boolean, setRefresh: any }) {
    const [word, setWord] = useState({ code: code, wordcode: item.wordcode, word: item.word, mean: item.mean, type: 1 });
    const [modalOpen, setModalOpen] = useState(false);

    const editWord = async () => {
        console.log(word);
        await axiosInstance.post(
            '/main/edit',
            word
        ).then(response => {
            alert("수정되었습니다.");
            setRefresh(!refresh);
        })
    }

    const deleteWord = async () => {
        Alert.alert(
            "단어장 삭제", "정말로 삭제하시겠습니까?",
            [{ text: "취소", style: 'cancel' }, { text: "삭제", onPress: () => handleDelete() }],
            { cancelable: false }
        );
    }

    const handleDelete = async () => {
        await axiosInstance.post(
            '/main/edit',
            { wordcode: item.wordcode, type: 0 }
        ).then(response => {
            alert("삭제되었습니다.");
            setRefresh(!refresh);
        })
    }

    const inputWord = (name: string, value: string) => {
        setWord(word => ({
            ...word,
            [name]: value,
        }));
    }

    return (
        <View key={item.code} style={(index % 2 == 0) ? styles.oddRow : styles.evenRow}>
            <View style={styles.view}>
                <Text style={styles.word} numberOfLines={1}>{item.word}</Text>
                <Text style={styles.mean}>{item.mean}</Text>
            </View>
            <TouchableOpacity style={{ width: '5%' }} onPress={() => setModalOpen(true)}>
                <Text style={styles.ed}>수정</Text>
            </TouchableOpacity>
            <Modal visible={modalOpen} style={styles.container} transparent={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContents}>
                        <Text style={styles.title}>단어 수정</Text>
                        <Text style={{ textAlign: 'left', width: '95%' }}>WORD</Text>
                        <TextInput style={styles.input} id='word' value={word.word} placeholder="WORD" onChangeText={text => { inputWord('word', text) }} />
                        <Text style={{ textAlign: 'left', width: '95%' }}>MEAN</Text>
                        <TextInput style={styles.input} id='mean' value={word.mean} placeholder="MEAN" onChangeText={text => { inputWord('mean', text) }} />
                        <TouchableOpacity style={styles.button} onPress={() => editWord()}>
                            <Text style={styles.buttonText}>
                                수정하기
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => setModalOpen(false)}>
                            <Text style={styles.buttonText}>
                                닫기
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={{ width: '15%' }} onPress={() => deleteWord()}>
                <Text style={styles.ed}>삭제</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    oddRow: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    evenRow: {
        backgroundColor: '#F0E3BD',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    word: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingLeft: 10,
        flexWrap: 'wrap'
    },
    ed: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 10,
    },
    mean: {
        fontSize: 20,
        color: '#70767D',
        justifyContent: 'center',
        paddingLeft: 10,
        flexWrap: 'wrap',
    },
    view: {
        width: '80%',
    },
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
});

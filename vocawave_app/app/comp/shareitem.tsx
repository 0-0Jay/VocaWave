import { View, TouchableOpacity, Text, StyleSheet, Modal, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import axiosInstance from '../axios';

export default function ShareItem({ navigation, item }: { navigation: any, item: any }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [sharelist, setSharelist] = useState([]);

    const openShare = async () => {
        await axiosInstance.get(
            '/share/code/' + item.code
        ).then(response => {
            setSharelist(response.data.words);
        }).catch(error => {
            console.log(error);
        })
        setModalOpen(true);
    }

    const copyCode = () => {
        // Clipboard.setString('111');
        alert('클립보드에 복사되었습니다.');
    };

    return (
        <View>
            <TouchableOpacity onPress={openShare}>
                <View key={item.code} style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.title} numberOfLines={1}>{item.stitle}</Text>
                        <Text style={styles.cnt}>단어수 : {item.cnt} 개</Text>
                        <Text style={styles.cmt} numberOfLines={1}>{item.contents}</Text>
                    </View>
                    <Text style={styles.rate}>제작자{'\n'}{item.nick}</Text>
                </View>
            </TouchableOpacity>
            <Modal visible={modalOpen} style={styles.container} transparent={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContents}>
                        <Text style={styles.title}>{item.stitle}</Text>
                        <View style={styles.evenRow}>
                            <Text style={{ width: '10%', textAlign: 'center' }}>No.</Text>
                            <Text style={{ width: '40%', textAlign: 'center' }}>단어</Text>
                            <Text style={{ width: '50%', textAlign: 'center' }}>뜻</Text>
                        </View>
                        <View style={styles.wordTable}>
                            <ScrollView>
                                {sharelist.map((it: any, index) => (
                                    <View style={(index % 2 == 0) ? styles.oddRow : styles.evenRow} key={index}>
                                        <Text style={{ width: '10%', textAlign: 'center' }}>{index + 1}</Text>
                                        <Text style={{ width: '40%', textAlign: 'center' }}>{it.word}</Text>
                                        <Text style={{ width: '50%', textAlign: 'center' }}>{it.mean}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <Text>제작자 : {item.nick}</Text>
                        <Text style={{ color: 'gray' }}>단어 수 : {item.cnt}</Text>
                        <Text style={{marginTop: 5}}>단어장 코드</Text>
                        <Text style={styles.code} selectable>{item.code}</Text>
                        {/* <TouchableOpacity style={styles.button} onPress={copyCode}>
                            <Text style={styles.buttonText}>
                                복사하기
                            </Text>
                        </TouchableOpacity> */}
                        <Text>복사해서 사용하세요.</Text>
                        <TouchableOpacity style={styles.button} onPress={() => setModalOpen(false)}>
                            <Text style={styles.buttonText} >
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
        borderWidth: 0.5,
        borderTopColor: '#000000',
        borderBottomColor: '#000000',
        flexDirection: 'row',
    },
    content: {
        width: '70%',
        marginLeft: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    cmt: {
        fontSize: 15,
    },
    cnt: {
        fontSize: 10,
        color: '#868e96'
    },
    rate: {
        paddingLeft: 20,
        width: '30%',
        fontSize: 20,
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
    wordTable: {
        height: 200,
        width: '100%'
    },
    evenRow: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fffff0'
    },
    oddRow: {
        width: '100%',
        flexDirection: 'row',
    },
    code: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 5,
        width: 300,
        padding: 5,
        borderRadius: 5,
        fontSize:20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray'
    }
});
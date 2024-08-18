import { View, TouchableOpacity, Text, StyleSheet, Modal, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

export default function ShareItem({ navigation, item }: { navigation: any, item: any }) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <TouchableOpacity onPress={() => setModalOpen(true)}>
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
                        <View>
                            <Text>No.</Text>
                            <Text>단어</Text>
                            <Text>뜻</Text>
                        </View>
                        <View style={styles.container}>
                            <ScrollView>
                                <View>
                                    <Text>단어</Text>
                                    <Text>뜻</Text>
                                </View>
                            </ScrollView>
                        </View>
                        <Text>단어장 코드</Text>
                        <TextInput value={item.code} readOnly/>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                복사하기
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => setModalOpen(false)}>
                            <Text style={styles.buttonText} >
                                닫기
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
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
});
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default function WordItem({ item }: { item: any }) {

    return (
            <View key={item.code} style={styles.container}>
                <Text>{item.no}</Text>
                <Text style={styles.title} numberOfLines={1}>{item.word}</Text>
                <Text style={styles.cnt}>{item.mean}</Text>
                <TouchableOpacity><Text>수정</Text></TouchableOpacity>
                <TouchableOpacity><Text>삭제</Text></TouchableOpacity>
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
    }
});

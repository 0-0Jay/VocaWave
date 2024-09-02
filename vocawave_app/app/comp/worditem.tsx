import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default function WordItem({ item, index }: { item: any, index: any }) {

    return (
        <View key={item.code} style={(index % 2 == 0) ? styles.oddRow : styles.evenRow}>
            <View style={styles.view}>
                <Text style={styles.word} numberOfLines={1}>{item.word}</Text>
                <Text style={styles.mean}>{item.mean}</Text>
            </View>
            <TouchableOpacity style={{ width: '5%' }}><Text style={styles.ed}>수정</Text></TouchableOpacity>
            <TouchableOpacity style={{ width: '15%' }}><Text style={styles.ed}>삭제</Text></TouchableOpacity>
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
    }
});

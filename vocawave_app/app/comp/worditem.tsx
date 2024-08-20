import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default function WordItem({ item, index }: { item: any, index: any }) {

    return (
        <View key={item.code} style={(index % 2 == 0)? styles.oddRow : styles.evenRow}>
            <Text style={styles.word} numberOfLines={1}>{item.word}</Text>
            <Text style={styles.mean}>{item.mean}</Text>
            <TouchableOpacity style={{width: '5%'}}><Text style={styles.ed}>수정</Text></TouchableOpacity>
            <TouchableOpacity style={{width: '5%'}}><Text style={styles.ed}>삭제</Text></TouchableOpacity>
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
        backgroundColor:'#F0E3BD',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    word: {
        width: '40%',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    ed: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 10,
    },
    mean: {
        width: '45%',
        fontSize: 20,
        color: '#70767D',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
});

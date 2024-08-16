import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function MyListItem({ navigation, item }: { navigation: any, item: any }) {
    return (
        <View key={item.code} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={1}>{item.wtitle}</Text>
                <Text style={styles.cnt}>단어수 : {item.cnt} 개</Text>
                <Text style={styles.cmt} numberOfLines={1}>{item.cmt}</Text>
            </View>
            <Text style={styles.rate}>학습률{'\n'}{item.rate} %</Text>
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

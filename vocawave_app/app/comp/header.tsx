import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Header() {
    const nav = useNavigation();
    const openDrawer = () => {
        nav.dispatch(DrawerActions.openDrawer());
    }
    
    return (
        <View style={styles.header}>
            <Button title="Drawer" onPress={openDrawer} />
            <Text>헤더 영역</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
    },
});
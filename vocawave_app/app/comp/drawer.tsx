import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyWordList from '../(tabs)/home';
import ShareWordList from '../(tabs)/share';
import header from './header';

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNav.Navigator initialRouteName="header">
            <DrawerNav.Screen name="header" component={header} />
            <DrawerNav.Screen name="MyWordList" component={MyWordList} />
            <DrawerNav.Screen name="ShareWordList" component={ShareWordList} />
        </DrawerNav.Navigator>
    )
}
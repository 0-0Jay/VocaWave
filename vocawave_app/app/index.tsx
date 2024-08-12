import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyWordList from './(tabs)/home';
import ShareWordList from './(tabs)/share';
import Main from './(tabs)/main';
import Header from './comp/header';


const Stack = createNativeStackNavigator();
const DrawerNav = createDrawerNavigator();

function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName="MyWordList">
      <DrawerNav.Screen name="MyWordList" component={MyWordList} />
      <DrawerNav.Screen name="ShareWordList" component={ShareWordList} />
    </DrawerNav.Navigator>
  )
}

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Drawer" component={Drawer} 
      options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
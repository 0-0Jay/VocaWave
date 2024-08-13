import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './(tabs)/home';
import Share from './(tabs)/share';
import Main from './(tabs)/main';
import Wordlist from './(tabs)/wordlist';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Main" >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Home" component={Home} options={{animation : 'none'}} />
      <Stack.Screen name="Share" component={Share} options={{animation : 'none'}} />
      <Stack.Screen name="Wordlist" component={Wordlist} options={{animation : 'none'}} />
    </Stack.Navigator>
  );
}
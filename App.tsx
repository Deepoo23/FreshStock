
import React from 'react';
import {StyleSheet, useColorScheme, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from "./components/Login";
import Register from './components/Register';
import Home from './components/Home';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home:undefined;
};
const stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name = 'Login' component = {Login}/>
          <stack.Screen name = 'Register' component={Register}/>
          <stack.Screen name = 'Home' component={Home}/>
        </stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  MainContainer:{
    flex:1
  }
});

export default App;

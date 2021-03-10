import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Home  from "./src/screens/Home";
import 'react-native-gesture-handler';
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { isSignedIn } from './src/components/services/security';

export default function App() {

  const Stack = createStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator 
    initialRouteName={isSignedIn() ? "Home" : "Login"} 
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>

  </NavigationContainer>
  );
}


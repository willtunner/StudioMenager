import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import firebase from './src/services/firebaseConnection';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

//Desabilitar o YellowBox
console.disableYellowBox = true;

import AuthProvider from './src/Context/auth'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

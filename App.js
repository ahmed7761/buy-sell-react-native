import React from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";


export default function App() {
  return (
    // <WelcomeScreen/>
      <ViewImageScreen/>
  );
}
import React from 'react';
import Constants from "expo-constants";
import {FlatList, SafeAreaView, StyleSheet, StatusBar, Platform} from "react-native";

const Screen = ({children, style}) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
});

export default Screen;
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from "../config/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons'


const ImageInput = ({ imageUri }) => {
 return (
  <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40}  />}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image}  />}
  </View>
 );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        overflow: 'hidden',
        height: 100,
        width: 100,
    },
    image: {
        height: '100%',
        width: '100%',
    }
});

export default ImageInput;
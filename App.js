import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image, Platform, StatusBar, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";



export default function App() {

  const [firstName, setFirstName] = useState('');

  return (
    // <WelcomeScreen/>
     //  <ViewImageScreen/>
    //   <View style={{
    //     backgroundColor: '#f8f4f4',
    //     padding: 20,
    //     paddingTop: 100
    //   }}>
    //     <Card
    //       title="Red jacket for sale"
    //       subTitle="$100"
    //       image={require("./app/assets/jacket.jpg")}
    //     />
    //   </View>
    //   <ListingDetailsScreen />
    //    <MessageScreen/>
    //   <Screen>
    //     <ListItem
    //         title="Title"
    //         ImageComponent={<Icon
    //                         name="email"
    //                         size={50}
    //                         backgroundColor='red'
    //                         iconColor='white' />
    //         }
    //     />
    //   </Screen>
    //   <AccountScreen/>
    //   <ListingsScreen/>
      <Screen>
        {/*<Text>{firstName}</Text>*/}
        {/*<TextInput*/}
        {/*  placeholder="First Name"*/}
        {/*  style={{*/}
        {/*    borderBottomColor: '#ccc',*/}
        {/*    borderBottomWidth: 1,*/}
        {/*  }}*/}
        {/*  onChangeText={(text) => setFirstName(text)}*/}
        {/*  keyboardType="numeric"*/}
        {/*  secureTextEntry*/}
        {/*/>*/}

        <AppTextInput placeholder="Username" icon='email' />
      </Screen>
  );
}
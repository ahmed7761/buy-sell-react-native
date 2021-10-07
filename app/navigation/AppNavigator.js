import React, {useEffect} from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import * as Notifications from 'expo-notifications';
import expoPushTokensApi from '../api/expoPushTokens';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    useEffect(() => {
        registerForPushNotifications();
    },[]);

    const registerForPushNotifications =  async () => {
        try {
            const token = await Notifications.getExpoPushTokenAsync();
            console.log(token['data']);
            expoPushTokensApi.register(token['data']);
        } catch (e) {
            console.log("error", e)
        }
    };

    return (
        <Tab.Navigator>
            <Tab.Screen
                name={routes.FEED}
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({color, size}) =>
                        <MaterialCommunityIcons name='home' color={color} size={size}/>
                }}
            />
            <Tab.Screen
                name={routes.LISTING_EDIT}
                component={ListingEditScreen}
                options={({navigation}) => ({
                    tabBarButton: () =>
                        <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>,
                    tabBarIcon: ({color, size}) =>
                        <MaterialCommunityIcons name='plus-circle' color={color} size={size}/>
                })}
            />
            <Tab.Screen
                name={routes.ACCOUNT}
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({color, size}) =>
                        <MaterialCommunityIcons name='account' color={color} size={size}/>
                }}
            />
        </Tab.Navigator>
    )
};

export default AppNavigator;
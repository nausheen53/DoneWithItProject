import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
import ListingScreen from '../screens/ListingScreen';


const Stack = createStackNavigator();

const AccountNavigator = ()=>
(
    <Stack.Navigator >
        <Stack.Screen name="Account" component={AccountScreen} ></Stack.Screen>
        <Stack.Screen name="Listing" component={ListingScreen}></Stack.Screen>
        <Stack.Screen name="Message" component={MessageScreen}  ></Stack.Screen>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:"hidden"}}></Stack.Screen> */}

    </Stack.Navigator>
);

export default AccountNavigator;
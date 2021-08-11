import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';


const Stack = createStackNavigator();

const FeedNavigator = ()=>
(
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Listing" component={ListingScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}  ></Stack.Screen>
    </Stack.Navigator>
);

//options={{headerShown:false}}
export default FeedNavigator;



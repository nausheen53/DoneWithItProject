import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';


const Stack = createStackNavigator();
const AuthNavigation =()=>
(
        <Stack.Navigator initialRouteName={WelcomeScreen}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                headerShown:false,
            }}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
        )



export default AuthNavigation;
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingScreen from '../screens/ListingScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = ()=>
(
    <Tab.Navigator tabBarOptions={{
        activeBackgroundColor:"white",
        activeTintColor:"black",
        inactiveBackgroundColor:"white",
        inactiveTintColor:"black"
      }}>
        <Tab.Screen name="Feed" component={FeedNavigator} 
          options={{
        tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="home" size={size} color={color}/>)}}>
       </Tab.Screen>

        <Tab.Screen 
        name="ListingEdit" 
        component={ListingEditScreen} 
         options={({navigation})=>({
         tabBarButton:()=> 
         <NewListingButton name="plus-circle" 
         onPress={()=>navigation.navigate("ListingEdit")}/>}
         )}
         >  
         </Tab.Screen>
        <Tab.Screen name="Account" component={AccountNavigator} options={{
      tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="account" size={size} color={color}/>)
    }} ></Tab.Screen>
        
    </Tab.Navigator>
)

export default AppNavigator
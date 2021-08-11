// import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {ImageBackground ,Dimensions, StyleSheet, Text,Image,TouchableOpacity ,Alert, View, SafeAreaView, Button, Platform,StatusBar, TextInput, Switch} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import AppText from './app/components/AppText';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import * as ImagePicker from 'expo-image-picker'
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigation from './app/navigation/AuthNavigation';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import FeedNavigator from './app/navigation/FeedNavigator';
import NetInfo from '@react-native-community/netinfo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import jwtDecode from 'jwt-decode';
// const Link=()=>    // link omponent , child of tweet
// {
//     const navigation =  useNavigation();
//   return(
//     <Button title="Show tweet details" onPress={()=>navigation.navigate("TweetDetailScreen",{id:1})}/>
//   );
// }


export default function App() {
  console.log('App executed');
const[user,setUser]=useState();
const [isReady,setIsReady] = useState(false);

const restoreUser = async()=>
{
  try {
  const user =  await authStorage.getUser();
  if(!user) return;
    setUser(user);
  } catch (error) {
    console.log("cannot get user",error);
  }
}

useEffect(()=>{restoreUser();},[]);
  // if(!isReady)
  // {
  //   return <Apploading startAsync={restoreToken()} onFinish={()=>setIsReady(true)}/>
  // }
  return (  
    // <WelcomeScreen/>
    // <ViewImageScreen/>
    // <View style={{backgroundColor:"grey" ,flex:1} }><ListingDetailsScreen/></View>
    // <MessageScreen/>

    // <View>
    // <ListItem title="Some title sgnlehleahhsighigigir hfhighwhihie hdiweiiwhgihgri hfionvbkjfihighrhh cjsdoufisfihwif" subtitle="something somethingidafwtuwtvvbxbxndowtue jfowuut josfojtjrtc,xnv jfjfjrjgjg" ImageComponent={<Icon size={60} backgroundColor="tomato" iconColor="white" name="email"/>}/>
    // </View>

    // <AccountScreen ></AccountScreen>
    // <ListingScreen/>

    
    // <View >
    //   <AppPicker selectedItem={catagory} onSelectItem={item=>setCatagory(item)}   items={catagories}  placeholder="catagory" icon="caretdown"/>
    // </View>

    // <LoginScreen></LoginScreen>

    // <ListingEditScreen></ListingEditScreen>

   
    // <View style={{backgroundColor:"white",justifyContent:"center",alignItems:'center',flex:1}}>
    //   {/* <ImageInput onChangeImage={uri=>setImageUri(uri)} imageUri={imageUri}/> */}
    //   <ImageInputList onAddImage={(uri)=>handleAdd(uri)} onDeleteImage={(uri)=>handleDelete(uri)} imageUris={imageUris}  />
    // </View>
    <AuthContext.Provider value={{user,setUser}}>

    <OfflineNotice/>
     <NavigationContainer theme={navigationTheme}>
    {/* <FeedNavigator/> */}
     {user?<AppNavigator/>:<AuthNavigation/>}
      {/* <AppNavigator/> */}
      </NavigationContainer> 
     
    </AuthContext.Provider>



  );
  
}



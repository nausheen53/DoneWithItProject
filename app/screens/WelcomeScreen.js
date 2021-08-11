import React from 'react';
import { ImageBackground,StyleSheet,Image,View,StatusBar,Platform,Text, Button,Alert, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const handleLogin=()=>
{
    return Alert.alert("login","login to your account",
    [
        {text:"Yes",onPress:()=>console.log("clicked yes")},
        {text:"No",onPress:()=>console.log("clicked No")}
    ])
}

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground   //wrapper
        source={require("../assets/background.jpg")}
        style={styles.bgimage}>

        <View style={styles.Logocontainer}>
        <Image 
          source={require("../assets/logo1.png")}
          style={styles.logo}
          fadeDuration={1000}
  
           ></Image>  
           <Text>Done with it Thrift Store,Bye Bye!!</Text>
        </View>


        <AppButton title="login" onPress={()=>navigation.navigate("Login")} color="tomato"></AppButton>
        <AppButton title="register" onPress={()=>navigation.navigate("Register")} color="dodgerblue"></AppButton>
 
        </ImageBackground>   
        );
}


const styles = StyleSheet.create({
    Logocontainer: {
      top:80,
      alignItems:"center",
      position:"absolute", 
      margin:5,
    },
    bgimage: {
      flex: 1,
      paddingTop:Platform.OS === 'android'?  StatusBar.currentHeight :0,
      justifyContent:"flex-end",
      alignItems:"center",

    },
    logo:
    {
        height:100,
        width:100, 
    },
  });


export default WelcomeScreen;
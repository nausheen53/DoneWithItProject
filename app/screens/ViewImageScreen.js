import React from 'react';
import { ImageBackground,StyleSheet,Image,View,StatusBar,Platform,Text, Button,Alert, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons';
//rsf

function ViewImageScreen(props) {
    return (
        

            <View style={styles.maincontainer}>
                <View style={styles.iconContainer}>
                    <MaterialIcons name="close" color="white" size={35}/>
                    <TouchableWithoutFeedback onPress={()=>console.log("delete presses")}>
                        <MaterialIcons name="delete" color="white"  size={35}/>
                    </TouchableWithoutFeedback>
                    
                </View>
                <View style={styles.container}>
                    <Image style={styles.image}
                    source={require("../assets/camera.jpg")}/>
                </View>
            </View>
        
    );
}

//rnss
const styles = StyleSheet.create(
    {
        maincontainer:
        {
            flex:1,
            backgroundColor:colors.black,
            
        },
        container:
        {
            justifyContent:'flex-end',
            alignContent:'flex-end',
            flex:1
        },
        iconContainer:
        {
            flexDirection:"row",
            justifyContent:'space-between',
            alignContent:'space-between'
            
        },
        image:{
            
            height:"70%",
            width:"100%",
        },
        
    }
);

export default ViewImageScreen;
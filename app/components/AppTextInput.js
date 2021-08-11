import React from 'react';
import {Platform, StyleSheet, TextInput, View  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles'

function AppTextInput({icon,width="95%",...otherProps}) {
    return (
        <View style={[styles.container,{width}]}>
            {icon && <MaterialIcons name={icon} color="black" size={25} style={styles.icon} ></MaterialIcons>}
            <TextInput style={{color:"black", fontSize:20,fontFamily:"Roboto"}} {...otherProps}></TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    container:
    {
        backgroundColor:"lightgrey",
        padding:15,
        borderRadius:15,
        flexDirection:"row",
        marginVertical:5,
        // marginHorizontal:10,
        marginLeft:10,
        marginRight:10,

    },
    
    icon:
    {
        marginRight:10
    }
})

export default AppTextInput;
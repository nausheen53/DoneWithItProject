import React from 'react';
import {StyleSheet,View  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Icon({name,size=40,backgroundColor="black",iconColor="white"}) {
    return (
        <View style={{backgroundColor:backgroundColor,
            height:size,
            width:size,
            borderRadius:size/2,
            justifyContent:"center",
            alignItems:'center' }}>
            <MaterialIcons name={name} size={size*0.5} color={iconColor} backgroundColor={backgroundColor}></MaterialIcons>
        </View>

    );
}


export default Icon;
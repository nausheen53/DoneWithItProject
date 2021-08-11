import React from 'react';
import { View,Text,StyleSheet,Image, TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';


function Card({imageUrl,title,subtitle,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            
            <Image source={{uri: imageUrl}} style={styles.imag}></Image>
            <View style={styles.description}>
                <AppText style={{color:"black"}} >{title} </AppText>
                <AppText style={{color:"green"}}>{subtitle}</AppText>
            </View>
          
        </View>
          </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container:
    {
        width:"100%",
        borderRadius:25,
        marginBottom:10,
        overflow:"hidden",
        backgroundColor:"white"

    },
    description:
    {
        padding:20,
        marginBottom:5
        
    },
    imag:
    {
        height:200,
        width:"100%",
    }

})
export default Card;
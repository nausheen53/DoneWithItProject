import { View,Text,StyleSheet ,TouchableOpacity} from 'react-native';

import React from 'react';
import colors from '../config/colors';



function AppButton(props) {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:props.color}]}  onPress={props.onPress}>
            <Text style={styles.text} >{props.title} </Text>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    button:
    {
        backgroundColor:colors.primary,
        width:"95%",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:20,
        padding:15,
        marginHorizontal:3,
        marginVertical:3,

    },
    text:
    {
        textAlign:'center',
        fontSize:15,
        fontWeight:"bold",
        color:"#fff"
    }
})

export default AppButton;
import React from 'react';
import { Text,StyleSheet} from 'react-native';


function AppText({style,children,...otherProps}) {
    return (
        <Text style={[styles.text,style]} {...otherProps}>{children}</Text>
    );
}



const styles = StyleSheet.create({
    text:
    {
        color:"purple",
     
                fontSize:20,
                fontFamily:"Roboto"
           
            }
        })



export default AppText;
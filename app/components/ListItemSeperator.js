import React from 'react';
import { StyleSheet,View } from 'react-native';

function ListItemSeperator() {
    console.log("imside list seperator")
    return (
        <View style={styles.seperator} />
            
    );
}
const styles = StyleSheet.create({
    seperator:
    {
        backgroundColor:"grey",
        width:"100%",
        height:1
    }
})
export default ListItemSeperator;
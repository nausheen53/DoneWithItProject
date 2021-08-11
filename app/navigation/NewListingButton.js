import React from 'react';
import { View,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function NewListingButton({name,onPress}) {
 return (
     <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container]}>
    <MaterialCommunityIcons name={name} size={25} color="white" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
 container:
   {
        height:60,
        width:60,
        borderRadius:30,
        borderWidth:10,
        bottom:20,
        borderColor:"white",
        backgroundColor:"tomato",
        justifyContent:"center",
        alignItems:'center'
  }
});

export default NewListingButton;
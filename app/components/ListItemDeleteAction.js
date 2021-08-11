import React from 'react';
import { View,TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
function ListItemDeleteAction({onPress}) {
    console.log("inside delete action");
    return (
        
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{flexDirection:"row" ,justifyContent:"center",alignItems:"center",backgroundColor:"tomato",width:75}}>
            <MaterialIcons name="close" size={35} color="black"></MaterialIcons>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ListItemDeleteAction;
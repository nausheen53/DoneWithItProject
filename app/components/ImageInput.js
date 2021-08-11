import React,{useState} from 'react';
import { View,StyleSheet, TouchableWithoutFeedback,Image, Alert } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'

//onChangeImage //  event this component going to raise , to notify consume of this component
function ImageInput({imageUri,onChangeImage}) {

    const selectImage= async()=>
    {
        try {
        const result =  await ImagePicker.launchImageLibraryAsync(
        {  mediaTypes:  ImagePicker.MediaTypeOptions.Images,
          quality: 0.5
        }
        );
        if(!result.cancelled)
        {
            onChangeImage(result.uri);
        }
        } 
        catch (error) {
            alert("user didnot selected image")
        }
    }

const handlePress=()=>
{
    if(!imageUri)
    {
        selectImage();
    }
    else
    {
        Alert.alert("Delete","are you sure you want to delete this image",[
            {text:"YES",onPress:()=>{onChangeImage(null)}},
            {
                text:"NO"
            }
        ])
    }
}

 return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
    { !imageUri && <MaterialIcons name={"camera-front"} size={40} color={"grey"}></MaterialIcons>} 
        { imageUri&&   <Image source={{uri:imageUri}}  style={styles.image} resizeMode={"contain"} />}
        </View>
        </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
 container:
   {
        height:100,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        backgroundColor:"lightgrey",
        overflow:'hidden',
        marginHorizontal:10,
        marginVertical:5,

    },
    image:
    {
        height:100,
        width:100,
        
    }
});
 
export default ImageInput;
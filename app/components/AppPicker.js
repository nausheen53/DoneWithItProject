import React, { useState } from 'react';
import {Button, FlatList, Modal, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles'
import AppText from './AppText';
import react from 'react';
import PickerItem from './PickerItem';

function AppPicker({selectedItem,
     onSelectItem,
     items,
     icon,
     PickerItemComponent = PickerItem,
     placeholder,
     numberOfColumns=1,
     width="100%",
     ...otherProps})
      {
   const[modalVisible, setModalVisible]= useState(false);
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={[styles.container,{width}]}>
            {icon && <MaterialIcons name="apps" color="black" size={25} style={styles.icon} ></MaterialIcons>}

            {selectedItem? <AppText style={{flex:1,color:"black"}}>{selectedItem.label}</AppText> : <AppText style={{flex:1,color:"grey"}}>{placeholder}</AppText> }

            {icon && <MaterialIcons name="arrow-downward" color="black" size={25}  ></MaterialIcons>}
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <FlatList 
                data={items}
                keyExtractor={mitem=>mitem.id.toString()}
                numColumns={numberOfColumns}
                renderItem={({item})=>
                <PickerItemComponent 
                    item={item}
                    title={item.label} 
                    onPress={()=> {setModalVisible(false);
                        onSelectItem(item)}
                    }/>}
            ></FlatList>
            <Button title="Close" onPress={()=>setModalVisible(false)}/>
        </Modal>
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    container:
    {
        backgroundColor:"lightgrey",
        padding:20,
        borderRadius:25,
        flexDirection:"row",
        marginVertical:5,
        marginLeft:10,
        marginRight:10,

    },
    
    icon:
    {
        marginRight:10
    }
})

export default AppPicker;
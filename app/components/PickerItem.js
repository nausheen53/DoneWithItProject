import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
function PickerItem({item,title,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{padding:20}}>
            <AppText >{item.label}</AppText>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    
})

export default PickerItem;
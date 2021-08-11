import React from 'react';
import { Text,View,StyleSheet,Image,TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ListItemDeleteAction from './ListItemDeleteAction';
import { MaterialIcons } from '@expo/vector-icons';
function ListItem({title,subtitle,image,onPress, ImageComponent ,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
        onPress={onPress}
        underlayColor="grey"
        >
       <View style={styles.container}>
           <View >
            {ImageComponent}
           {image && <Image source={image} style={styles.image}></Image>}
           </View>
           <View style={styles.detailsContainer}> 
                <AppText style={{color:"black",fontWeight:"bold",fontSize:15}} numberOfLines={1} >{title}</AppText>
                {subtitle && <AppText style={{color:"grey",fontSize:13}} numberOfLines={2} >{subtitle}</AppText>}
           </View>
           <MaterialIcons  name="chevron-right" color="black" size={25} ></MaterialIcons>
           </View>
           </TouchableHighlight>
           </Swipeable>
      
    );
}



const styles = StyleSheet.create({
    container:
    {
        flexDirection:'row',
        padding:20,
        backgroundColor:"white",
        alignItems:'center'
      
    },
    image:
    {
        height:70,
        width:70,
        borderRadius:35,
        
        backgroundColor:"black"
    },
    detailsContainer:
    {
        marginLeft:10,
        justifyContent:'center',
        flex:1
    }
})
export default ListItem;
import React from 'react';
import { Text,View,Image,StyleSheet,ScrollView } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function ListingDetailsScreen({route}) {
    const listing = route.params;
    console.log("listings recieve in listings details ",listing);
    console.log(listing.images[0]['url'])
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image}
            source={{
                uri: listing.images[0]['url'],
              }}
           />
            <View style={{marginBottom:10}}>
                <AppText style={{color:"black",fontWeight:"bold"}} >{listing.title}</AppText>
                <AppText style={{color:"green",fontSize:15}}>${listing.price}</AppText>
            </View>

                <ListItem 
                image={require('../assets/naush.jpg')}
                 title="Nausheen Khan" 
                 subtitle="15 posts">
                 </ListItem>
            </View>
 
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:20,
        marginBottom:10,
        borderRadius:12,
        overflow:"hidden"
    },
    image:
    {
        height:"70%",
        width:"100%",
        marginBottom:10,
        borderRadius:15
    },
    listItem:
    {
        marginVertical:10,
    }
})
export default ListingDetailsScreen;
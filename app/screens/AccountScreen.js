import React,{useContext} from 'react';
import { Platform,StatusBar,View,StyleSheet,FlatList } from 'react-native';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import navigationTheme from '../navigation/navigationTheme';

const menuItems=[
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:"tomato",
        },
        target:"Listing"
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:"green",
        },
        target:"Message"
    }
]

function AccountScreen({navigation}) {
    const authContext = useContext(AuthContext); //destructure
    const handleLogout= ()=>
    {
        authContext.setUser(null);
        authStorage.removeToken();
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ListItem title={authContext.user.name} subtitle={authContext.user.email} image={require("../assets/naush.jpg")}/>
            </View>

            <View style={styles.flatlist}>
                <FlatList data={menuItems}
                            keyExtractor={mitem => mitem.title.toString()}
                            renderItem={({item})=><ListItem title={item.title} 
                            ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                            onPress={()=>navigation.navigate(item.target)}
                            ></ListItem>}
                            // ItemSeparatorComponent={ListItemSeperator}
                >
                </FlatList>
            </View>
            <View>
                <ListItem title="logout" ImageComponent={<Icon name="logout" backgroundColor="yellow"  ></Icon>} 
                onPress={handleLogout}
                ></ListItem>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container:
    {
        paddingTop: Platform.OS==='android'? StatusBar.currentHeight:0,
        backgroundColor:"lightgrey",
        flex:1,
        
    },
    header:
    {
        marginVertical:20,
    },
    flatlist:
    {
        marginBottom:15,
    }
})

export default AccountScreen;
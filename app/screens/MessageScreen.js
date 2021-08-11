import React,{useState} from 'react';
import { FlatList,StyleSheet,Platform,StatusBar, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';

const initialmessages=[
    {
        id:1,
        description:"this is descripton 1",
        title:"title 1",
        image:require("../assets/naush.jpg")
    },
    {
        id:2,
        description:"this is descripton 2",
        title:"title 2",
        image:require("../assets/camera.jpg")
    }
]



function MessageScreen(props) {
   const[messages,setMessages]=useState(initialmessages);
   const[refreshing,setRefreshing]=useState(false);

   const handleDelete=(message)=>
   {
       const newMessages = messages.filter(m=>m.id !== message.id);
       setMessages(newMessages);

   }

    return (
        <View style={styles.screen}>
            <FlatList
                data={messages} 
                keyExtractor={message=>message.id.toString()}
                renderItem={({item})=>
                    (<ListItem 
                        title={item.title} 
                        subtitle={item.description} 
                        image={item.image}
                        onPress={()=>console.log("pressed item")}
                        renderRightActions={()=><ListItemDeleteAction onPress={()=>handleDelete(item)} />} 
                    ></ListItem>)}
                        
            ItemSeparatorComponent={ListItemSeperator}  //function component
            refreshing={refreshing} // state variable
            onRefresh={
                ()=>{
                    setMessages([{
                        id:2,
                        description:"this is descripton 2",
                        title:"title 2",
                        image:require("../assets/camera.jpg")
                    }])
                }
            }
            
            />
        
        </View>
    );
}



const styles = StyleSheet.create({
    screen:
    {
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
        flex:1,
    }
})

export default MessageScreen;
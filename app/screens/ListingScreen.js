import React, { useState ,useEffect} from 'react';
import { FlatList,View, StyleSheet,Text, ActivityIndicator} from 'react-native';
import Card from '../components/Card';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppButton from '../components/AppButton';



function ListingScreen({navigation}) {
    const [listingsArray, setListingsArray]=useState([]);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);
    const [refresh,setRefresh] = useState(false);

    const loadListings = async()=>{
        setLoading(true);
        setRefresh(true);
        const response =  await listingsApi.getListings();
        setLoading(false);
        setRefresh(false);
       
        
    //    console.log(response.problem)
        // console.log("Http status ",response.status);
        // console.log('http axos error ',response.originalError);
       if(!response.ok)
       {
            console.log("response.not.ok")
           setError(true);
           return;
       }
        setError(false);
       setListingsArray(response.data);
    }


    useEffect(()=>{loadListings()},[])
    return (

        
        <View style={styles.container}>
            {error && <View><Text>Error loading this page</Text><AppButton title="retry" onPress={()=>loadListings()}/> </View>}
            {loading && <ActivityIndicator size='large' color="blue"/>}
            <FlatList refreshing={refresh} onRefresh={()=>loadListings()}
                data={listingsArray}
                keyExtractor={listings=>listings.id.toString()}
                renderItem={ 
                    ({item})=><Card title={item.title} subtitle={item.price} imageUrl={item.images[0].url} onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}/>
                }
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        padding : 20,
        marginVertical:20,
        backgroundColor:"#ddd",
        flex:1,
        
    }
})
export default ListingScreen;
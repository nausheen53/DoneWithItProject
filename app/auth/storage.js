import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
//json web tokens
const key ="authToken";
const storeToken = async(authToken) => {
    try{
        await AsyncStorage.setItem(key,JSON.stringify(authToken) );
    }
    catch(error)
    {
        console.log("error storing auth token ",error);
    }
}


const getToken = async()=>
{
    try {
        const value = await AsyncStorage.getItem(key);
        const authToken = JSON.parse(value);
        return authToken;
    } catch (error) {
        console.log("error getting auth token ",error);

    }
}

const getUser = async()=>
{
    try{
        const token = await getToken();
        return token ? jwtDecode(token):null;

    }
    catch(error)
    {
        console.log('cannot get token');
    }
}

const removeToken=async()=>
{
    try {
        await AsyncStorage.removeItem(key);
        
    } catch (error) {
        console.log('Error removing auth token ',error)
    }
}


export default{
    getToken,getUser,storeToken,removeToken,
}
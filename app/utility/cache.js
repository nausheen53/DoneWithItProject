import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
// import dayjs from "dayjs";

const expiryInMinutes = 5;

const isExpired=(item)=>
{
    const now = moment(Date.now());
    const storedTime = moment(item.timeStamp);
   return now.diff(storedTime,'minute') > expiryInMinutes;
}

const store = async(key,value)=>
{
    try {
      const item={
            value,
            timeStamp:Date.now(),
        }
        await AsyncStorage.setItem(key,JSON.stringify(item));
        // console.log("inside cache .js");
        // console.log(item);
    } catch (error) {
        console.log(error)
    }
}

const get=async(key)=>
{
    try {
        const value = await AsyncStorage.getItem(key);
        const item = JSON.parse(value);

        if(!item) return null;
        // to see if item expired
        
        if(isExpired(item))
        {
           await AsyncStorage.removeItem(key);
           return null;
        }
        return item.value;

    } catch (error) {
        console.log(error);
    }
}

export default{
    store,get
}
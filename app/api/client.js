import { create } from 'apisauce';
import cache from '../utility/cache';
import authStorage from '../auth/storage';
// implementation to get data from server as well as from cache

//create function which return api object
const apiClient = create({baseURL:'http://192.168.29.111:9000/api'}) ;


const get = apiClient.get; // geting the reference of apiclient get method in const get
// redefine get function so that it can look into both server and cache 
apiClient.get=async(url,params,axiosConfig)=> //setting it to new function 
{
   const response = await get(url,params,axiosConfig);
//    console.log(response.ok)
   if(response.ok)
   {
       console.log("respnse was ok , storing in cashe now")
       cache.store(url,response.data);
       return response;
   }
   console.log("response was not okay, so getting from cache")
 const data =  await cache.get(url);
 return data ? {ok:true,data} : response;    
 // if we get data from cache, we return object that look like successfull response
 //response contains the informtion about why the call fail
}

/* When we have end points that can be called only authenticated users */
//when we send request to server , we automatically add authentication token for request
apiClient.addAsyncRequestTransform(async(request)=>{
  const authToken= await authStorage.getToken();
  if(!authToken) return;
  request.headers['x-auth-token']=authToken;   //backend project request header require key and token for communicating with protected api
});

export default apiClient;


 // problem is string ... client error,server error , timeout error etc.

import apiClient from './client';   

const endpoint = '/listings';
const getListings =  ()=> apiClient.get(endpoint)  //  getting the list from server
const addListing = (listing,onUploadProgress) => // listing object to be post to server
{
    const data = new FormData();
    data.append('title',listing.title);
    data.append('price',listing.price);
    // console.log("inside api client listings catagory id",listing.category['id']);
    data.append('categoryId',listing.category['id']);
    data.append('description',listing.description);
    for(let img in listing.images)
    {
        data.append('images',{
            name:'image'+img,
            type:'image/jpeg',
            uri:listing.images[img],
        })
    }

    if(listing.location)
    {
        data.append('location',JSON.stringify(listing.location));
    }

   return  apiClient.post(endpoint,data,{
       onUploadProgress:(progress)=>onUploadProgress(progress.loaded/progress.total),
   }); //this return function will return a promise , so we return it from api func as well.
}


export default    // export default object , we can export all methods we want to export.
{
    getListings,
    addListing
};

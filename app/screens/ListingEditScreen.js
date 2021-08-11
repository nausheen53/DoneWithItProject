import React,{useState} from 'react';
import { View } from 'react-native';

import * as Yup from 'yup';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import SubmitButton from '../components/SubmitButton';

import listingsApi  from '../api/listings';
// import { useState } from 'react/cjs/react.development';
import UploadScreen from './UploadScreen';

const categories=[
    {label:"Furniture", id:1,backgroundColor:"tomato",icon:"apps"},
    {label:"Electronics", id:2,backgroundColor:"blue",icon:"camera"},
    {label:"Clothing", id:3,backgroundColor:"pink",icon:"tag"},
    {label:"groceries", id:4,backgroundColor:"green",icon:"add-shopping-cart"},
    {label:"Home", id:5,backgroundColor:"grey",icon:"pets"},
    {label:"SkinCare", id:6,backgroundColor:"steelblue",icon:"android"}
]

const validationSchema=Yup.object().shape({
    title: Yup.string().min(1).max(50).required().label("Title"),
    price: Yup.number().min(1).max(10000).required().label("Price"),
    description: Yup.string().label("description"),
    category:Yup.object().required().nullable().label("Category"),
    images:Yup.array().min(1,"Please select atleast one image"),
})




function ListingEditScreen(props) {
    const [uploadScreenVisisble,setUploadScreenVisible]=useState(false);
    const [progress,setProgress]=useState(0);
    //resetForm property from formikbag object
  const  handleSubmit=async (listing,{resetForm})=>
    {
        setProgress(0);
        setUploadScreenVisible(true);
        console.log("listings####",{...listing});
        const result = await listingsApi.addListing({...listing},(progress)=>setProgress(progress)); // call back function 
        // setUploadScreenVisible(false);
        console.log("result********",result.problem);
        console.log(result.status);
     if(result.ok)
     {
        // alert('Success');
        resetForm();
         
     }
     else
     {
         setUploadScreenVisible(false);
        alert('could not save your listings');
        return;
     }
     
    }
    return (
        
        <View>
        < UploadScreen progress={progress} visible={uploadScreenVisisble} onDone={()=>setUploadScreenVisible(false)}/>           
        <AppForm 
                initialValues={{
                title:"",
                price:"",
                description:"",
                category:null,
                images:[]}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images"/>

                <AppFormField 
                    placeholder="title"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="title"
                    ></AppFormField>

                    <AppFormField 
                    placeholder="price"
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    width={120}
                    ></AppFormField>

                    <AppFormPicker placeholder="category"
                    name="category"
                    items={categories}
                    width="50%"
                    // numberOfColumns={3}
                    // PickerItemComponent={CategoryPickerItem} // CategoryPickerItem is a new component
                    >

                    </AppFormPicker>
                    <AppFormField 
                    placeholder="description"
                    keyboardType="default"
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    name="description"
                    ></AppFormField>
                    <SubmitButton  title="Submit" color="tomato" />
            </AppForm>
        </View>
    );
}

export default ListingEditScreen;
import React from 'react';
import ImageInputList from './ImageInputList';
import { useFormikContext } from 'formik';
import AppErrorMessage from './AppErrorMessage';


function FormImagePicker({name}) {
    const {touched,errors,setFieldValue,values} = useFormikContext();
    const handleDelete=(uri)=>
    {
        setFieldValue(name,values[name].filter(imageUri=>imageUri!==uri));
    }
  
    const handleAdd=(uri)=>
    {
        setFieldValue(name,[...values[name],uri]);
    }
    return (
        <>
        <ImageInputList imageUris={values[name]} onAddImage={handleAdd} onDeleteImage={handleDelete} />
        <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default FormImagePicker;
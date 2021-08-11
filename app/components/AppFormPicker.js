import React from 'react';
import { useFormikContext } from 'formik';
import AppErrorMessage from './AppErrorMessage';
import AppPicker from './AppPicker';

function AppFormPicker({items,name,placeholder,width,PickerItemComponent,numberOfColumns}) {
    const {touched,errors,setFieldValue,values} = useFormikContext();
    return (
        <>
            <AppPicker
            onSelectItem={(item)=>setFieldValue(name,item)} // setFieldValue has 2 field name and value
            selectedItem={values[name]}
            items={items}
            placeholder={placeholder}
            numberOfColumns={numberOfColumns}
            PickerItemComponent={PickerItemComponent}
            icon="apps"
            width={width}
             >

            </AppPicker>
            <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;
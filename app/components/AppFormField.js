import React from 'react';

import { useFormikContext } from 'formik';

import AppErrorMessage from './AppErrorMessage';
import AppTextInput from './AppTextInput';
import { Value } from 'react-native-reanimated';




function AppFormField({name,width,...otherProps}) {
const {setFieldTouched,touched,setFieldValue,values,errors} = useFormikContext();
    return (
        <>
                    <AppTextInput 
                    // icon="email"
                    // placeholder="email"
                    // keyboardType="email-address"
                    // autoCapitalize="none"
                    // autoCorrect={false}
                    {...otherProps}
                    onChangeText={text=>setFieldValue(name,text)}
                    value={values[name]}
                    onBlur={()=>setFieldTouched(name)}
                    width={width}
                    ></AppTextInput>
                    <AppErrorMessage error={errors[name]} visible={touched[name]} ></AppErrorMessage>
        </>
    );
}

export default AppFormField;
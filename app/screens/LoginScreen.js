import React, { useState,useContext } from 'react';
import { Image, View,StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppFormField from '../components/AppFormField';
import AppErrorMessage from '../components/AppErrorMessage';
import SubmitButton from '../components/SubmitButton'; 
import AppForm from '../components/AppForm';
import authApi from '../api/auth';
import jwtDecode from 'jwt-decode';
// import { useContext } from 'react/cjs/react.production.min';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const validationSchema=Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})




function LoginScreen(props) {
    const [loginFail, setLoginFail] = useState(false);
    const authContext = useContext(AuthContext);

    
    const handleSubmit= async({email,password})=>
    {
     const result = await authApi.login(email,password);
     if(!result.ok)
     {
        setLoginFail(true);
        return ;
     }
     setLoginFail(false);
     const user = jwtDecode(result.data);
     authContext.setUser(user);
     authStorage.storeToken(result.data);
     console.log(user);
    }

    return (
        <View>
            <Image source={require('../assets/logo1.png')}style={styles.logo}/>
            <AppForm
                initialValues={{email:"",password:""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppErrorMessage error ="Invalid email or password" visible={loginFail}/>
                    <AppFormField icon="email"
                    placeholder="email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="email"
                    // onChangeText={handleChange("email")}
                    // onBlur={()=>setFieldTouched("email")}
                    ></AppFormField>
                    <AppFormField icon="lock"
                    placeholder="password"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password"
                    // onChangeText={handleChange("password")}
                    // onBlur={()=>setFieldTouched("password")}
                    ></AppFormField>
                    <SubmitButton  title="login" color="tomato" />
                    
            </AppForm>
            
            
            
        </View>
    );
}
const styles = StyleSheet.create({
    logo:
    {
        height:80,
        width:80,
        alignSelf:"center",
        marginBottom:20,
        marginTop:60,
        padding:20,
    }
})

export default LoginScreen;
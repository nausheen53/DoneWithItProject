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
import usersApi from '../api/users';
import jwtDecode from 'jwt-decode';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import authApi from '../api/auth';
import { ActivityIndicator } from 'react-native';

const validationSchema=Yup.object().shape({
    name:Yup.string().required().min(1).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})




function RegisterScreen(props) {
    const [registerFail, setRegisterFail] = useState(false);
    const [error,setError]=useState();
    const [listingsArray, setListingsArray]=useState([]);
    const [loading,setLoading] = useState(false);




    const authContext = useContext(AuthContext);
    const handleSubmit= async({name,email,password})=>
    {
        setLoading(true);
     const result = await usersApi.register(name,email,password);
     if(!result.ok)
     {
        setRegisterFail(true);
        if(result.data) setError(result.data.error);
        else{
            setError("Unexpected error occured");
            console.log(result);
        }
        return ;
     }
     setLoading(false);
     setRegisterFail(false);


     //login
     const response = await authApi.login(email,password);
     const user = jwtDecode(response.data);
     authContext.setUser(user);
     authStorage.storeToken(response.data);
     console.log(user);
    }

    return (
        <View>
            <Image source={require('../assets/logo1.png')}style={styles.logo}/>
            {!registerFail && loading && <View style={styles.activity}><ActivityIndicator size='large' color="blue"/></View>}
            <AppForm
                initialValues={{name:"",email:"",password:""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppErrorMessage error ={error} visible={registerFail}/>
                    
                <AppFormField icon="account-box"
                    placeholder="name"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="name"
                    // onChangeText={handleChange("email")}
                    // onBlur={()=>setFieldTouched("email")}
                    ></AppFormField>
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
                    <SubmitButton  title="Register" color="tomato" />
                    
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
    },
    activity:
    {
        position:'absolute',
        backgroundColor:"white",
        height:"100%",
        width:"100%",
        flex:1,
        elevation:1,
        opacity:0.8,
    }
})

export default RegisterScreen;
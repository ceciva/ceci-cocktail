import { StyleSheet, Text, View, TextInput , Pressable} from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { useState } from 'react';
import { firebase_auth } from '../firebase/firebase_auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setIdToken, setUser } from '../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleLogin= async()=>{
        try{

          const response = await signInWithEmailAndPassword (firebase_auth, email, password);  
          AsyncStorage.setItem("userEmail", response.user.email);
          console.log ("este es el mail ingresado", response.user.email);
          dispatch (setUser(response.user.email));
          dispatch (setIdToken(response._tokenResponse.idToken));

        }
        catch (error){
          if (email.length === 0){
            setEmailError(" * Mandatory fiels!");

          } else if(error.message === "Firebase: Error (auth/invalid-email)."){
            setEmailError("* Invalid mail");
          }

          if (password.length === 0){
            setPasswordError(" *Mandatory field!");

          } else if(password.length<6){
            setPasswordError (" * password must have at least 6 digits!");
          }

        }
    }

  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style= {styles.email}
        placeholder= "email"
        defaultValue={email}
        onChangeText={(text)=> {
          setEmail(text);
          setEmailError("");
        }}
      />
      {emailError && (
        <Text style= {styles.errorText}>{emailError}</Text>
      )}

      <TextInput
        style= {styles.email}
        placeholder= "password"
        defaultValue={password}
        onChangeText={(text)=> {
          setPassword(text);
          setPasswordError("");
        }}
      />
      {passwordError && (
        <Text style= {styles.errorText}> {passwordError} </Text>
      )}


      <Pressable onPress={()=> handleLogin()}>
        <Text style={styles.registrarse}>
            Login
        </Text>
      </Pressable>  
      <Pressable onPress={()=>navigation.navigate("register")}>
        <Text style={styles.yaTienes}>
            Don't have an account yet? Register
        </Text>    
       </Pressable> 
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.lightAqua,
        flex:1,
        justifyContent: "center",
        alignItems: "center",

    },
    title:{
        fontSize: 25,
        fontFamily: "dancing",
        color: colors.violet,
        marginBottom:10,

    },
    email:{
        width: "85%",
        height: 50,
        borderColor: colors.violet,
        borderRadius: 30,
        borderWidth: 3,
        paddingHorizontal:20,
        marginTop:10,
        fontSize:20,
        color: colors.violet,
        fontFamily: "dancing",


    },
    yaTienes:{ 
       color: colors.violet,
       fontFamily: "dancing",
       marginTop: 20,
       fontSize:15,

    },
    registrarse:{
        width: "60%",
        height: 50,
        borderColor: colors.violet,
        borderRadius: 30,
        borderWidth: 3,
        paddingHorizontal:20,
        marginTop:30,
        fontSize:20,
        color: colors.violet,
        fontFamily: "dancing",

    },
    errorText:{
      color: "red",
      marginTop: 5,
      marginBottom: 5,
    },
})
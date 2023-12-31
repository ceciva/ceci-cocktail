import { StyleSheet, Text, View, TextInput , Pressable} from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { useState } from 'react';
import { firebase_auth } from '../firebase/firebase_auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Register = ({navigation}) => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleRegister= async() =>{
        
        try{
          const response= await createUserWithEmailAndPassword(firebase_auth, email, password) ;
          navigation.navigate("login");

        }
        catch (error){
          if (email.length === 0){
            setEmailError(" * Mandatory field!");

          } else if(error.message === "Firebase: Error (auth/invalid-email)."){
            setEmailError("* Invalid mail!");
          }

          if (password.length === 0){
            setPasswordError(" *Password is mandatory!");

          } else if(password.length<6){
            setPasswordError ("* Password must have at least 6 digits!");
          }

        }
    }

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      <TextInput
        style= {styles.email}
        placeholder= "email adress"
        value={email}
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
        value={password}
        onChangeText={(text)=> {
          setPassword(text);
          setPasswordError("");
        }}
        
      />
      {passwordError && (
        <Text style= {styles.errorText}> {passwordError} </Text>
      )}

      <Pressable onPress={()=> handleRegister()}>
        <Text style={styles.registrarse}>
            Register
        </Text>
       </Pressable> 

      <Pressable onPress={()=>navigation.navigate("login")} >
        <Text style={styles.yaTienes}>
            Already have an account? Login
        </Text> 
       </Pressable>    

      
    </View>
  )
}

export default Register

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
        width: "50%",
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
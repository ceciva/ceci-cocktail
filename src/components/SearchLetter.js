import { StyleSheet, TextInput, View, Pressable, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../theme/colors'
import { Feather } from '@expo/vector-icons';

const SearchLetter = ()=>{
    const [letter, setLetter]= useState("");
    

const clearLetter=()=>{
   setLetter(null); 
};    
  return (
    <SafeAreaView style= {styles.container}>
       <TextInput 
            style= {styles.input} 
            onChangeText={(value)=>setLetter(value)}
            value={letter}
            placeholder = "Search by first letter"
        />   

            <Pressable onPress={() => clearLetter()}>
                <Feather name="x-circle" size={30} color= "#614BC3"/>
            </Pressable>   
      
    </SafeAreaView>
  
  );
}

export default SearchLetter

const styles = StyleSheet.create({
    container:{
        paddingVertical:15,
        backgroundColor: colors.lightAqua,
        justifyContent: "center",
        flexDirection: "row", 
        alignItems: "center",
        

    },
    searchContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 15,
    },
    input:{
        fontFamily: "dancing",
        width: "88%",
        fontSize: 25,
        margin: 2,
        color: colors.violet,
        padding: 5,
        borderColor: colors.violet,
        borderWidth: 4,
        borderRadius: 20,
        textAlign: "center"

    },

});
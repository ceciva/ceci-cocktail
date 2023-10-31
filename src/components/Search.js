import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../theme/colors'
import { Feather } from '@expo/vector-icons';

const Search = ()=>{
    const [text, setText]= useState("");
    

const clearText=()=>{
   setText(null); 
};    
  return (
    <View style= {styles.container}>
       <TextInput 
            style= {styles.input} 
            onChangeText={(value)=>setText(value)}
            value={text}
            placeholder = "Name of cocktail"
        />   

            <Pressable onPress={() => clearText()}>
                <Feather name="x-circle" size={30} color= "#614BC3"/>
            </Pressable>   
      
    </View>
  
  );
}

export default Search

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: colors.white,
        justifyContent: "center",
        flexDirection: "row", 
        alignItems: "center",
        marginVertical: 10,

    },
    searchContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 15,
    },
    input:{
        // fontFamily: "dancing",
        width: "88%",
        fontSize: 20,
        margin: 2,
        color: colors.violet,
        padding: 5,
        borderColor: colors.violet,
        borderWidth: 4,
        borderRadius: 20,
        textAlign: "center"

    },

});
import { StyleSheet, TextInput, View, Pressable, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../theme/colors'
import { Feather } from '@expo/vector-icons';
import Header from './Header';


const Search = ()=>{
    const [ingredient, setIngredient]= useState("");
    const [name, setName]= useState("");
    const [letter, setLetter]= useState("");


const clearIngredient=()=>{
   setIngredient(null); 
}; 

const clearName=()=>{
    setName(null);
};

const clearLetter=()=>{
    setLetter(null);
};




  return (
    <SafeAreaView style= {styles.container}>
       <Header title= "Search menu" /> 
       <View>
        <TextInput 
                style= {styles.input} 
                onChangeIngredient={(value)=>setIngredient(value)}
                value={ingredient}
                
                placeholder = "Search by ingredient"
            />   
            
            <Pressable onPress={() => clearIngredient()}>
                <Feather name="x-circle" size={30} color= "#614BC3"/>
            </Pressable> 
        </View>
        <View>
            <TextInput 
                style= {styles.input} 
                onChangeName={(value)=>setName(value)}
                value={name}
                
                placeholder = "Search by name"
            />   
            
            <Pressable onPress={() => clearName()}>
                <Feather name="x-circle" size={30} color= "#614BC3"/>
            </Pressable>   
        </View>

        <View>
            <TextInput 
                style= {styles.input} 
                onChangeLetter={(value)=>setLetter(value)}
                value={letter}
                
                placeholder = "Search by letter"
            />   
            
            <Pressable onPress={() => clearLetter()}>
                <Feather name="x-circle" size={30} color= "#614BC3"/>
            </Pressable>       
        </View>
    </SafeAreaView>
  
  );
}

export default Search

const styles = StyleSheet.create({
    container:{
        paddingVertical:25,
        backgroundColor: colors.lightAqua,
        justifyContent: "center",
        flexDirection: "row", 
        alignItems: "center"
        

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
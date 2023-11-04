import { StyleSheet, Text, View , Image, Pressable, ScrollView} from 'react-native'
import React from 'react'
import Header from './Header'
import { drinks } from '../data/drinks'
import { colors } from '../theme/colors'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const DrinkDetail = ({route,navigation}) => {
    
const {item}= route.params
 
  return (
    
    <ScrollView>
      <Header title= "Drink detail"/>
      <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={30} color= "#614BC3"/>
      </Pressable>
      <Text style= { styles.drinkTitle}>{item.strDrink}</Text>
      
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
            uri: item.strDrinkThumb,
        }}
        />
      </View>
      <View style={styles.infoDrink}>
        <Text style={ styles.ingredientsTitle}>Ingredients: </Text>

        <Text style={styles.ingredients}>{item.strIngredient1}: {item.strMeasure1} / {item.strIngredient2}: {item.strMeasure2} / {item.strIngredient3}: {item.strMeasure3} / {item.strIngredient4}: {item.strMeasure4}</Text> 
        <Text style={styles.size}>Type of glass: {item.strGlass}</Text>
        <Text style={styles.instructions}>Instructions: {item.strInstructions} </Text>
         
        <Pressable style={ styles.heart} onPress={() => console.log("favorite")}>
            <MaterialIcons name="favorite" size={35} color="#614BC3" />
        </Pressable> 

      </View>  
    </ScrollView>
    
  )
}

export default DrinkDetail

const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200,
        borderRadius: 15,
    },
    imageContainer:{
        alignItems: "center",
        marginTop: 10
    },
    drinkTitle:{
        fontFamily: "dancingBold",
        fontSize: 30,
        color: colors.violet,
        alignSelf: "center",
    },
    ingredientsTitle:{
        fontSize: 20,
        fontFamily: "dancingBold",
        color: colors.violet
    },
    infoDrink:{
        flexDirection: "column",
        alignItems: "center",
    },
    instructions:{
        marginHorizontal: 15,
        fontFamily: "dancing",
        fontSize: 20,
        color: colors.violet
    },
    ingredients:{
        marginHorizontal: 15,
        fontFamily: "dancing",
        fontSize: 15,
        color: colors.turquesa
    },
    heart:{
        marginTop: 15,
    },
    size:{
        fontSize:15,
        fontFamily: "dancing",
        color: colors.turquesa,
    },
    goBack:{
        position:"absolute",
        top: 27,
        left: 5,
    
    },


})
import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import { colors } from '../theme/colors'
import React from 'react'


const DrinkItem = ({item, navigation}) => {
    
  return (
    <View style= {styles.container}>
      <Pressable style={ styles.button}onPress={()=>navigation.navigate("drinkDetail",{item:item} )}>

        <Text style={styles.text}>{item.strDrink}</Text>
        <Image style={styles.images} source= {{uri: item.strDrinkThumb}}/>

      </Pressable>
    </View>
  )
}

export default DrinkItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.violet,
        marginHorizontal:5,
        marginVertical: 5,
        borderColor: colors.heavyAqua,
        borderWidth: 2,
        borderRadius: 20,
        height:100,
        justifyContent: "center",

    },
    text: {
        fontFamily: "dancingBold",
        fontSize: 20,
        margin: 2,
        color: colors.lightAqua,
        padding: 5,
        textAlign: "center",
        fontWeight:"400"
 
     },
     images:{
      height:60,
      width:60,
      borderRadius:10,
      resizeMode: "cover"
     },
     button:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      alignItems: "center"
     }
    

})
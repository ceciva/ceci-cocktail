import { StyleSheet, Text, View , Image} from 'react-native'
import { colors } from '../theme/colors'
import React from 'react'
import { drinks } from '../data/drinks'
const DrinkItem = ({item}) => {
    
  return (
    <View style= {styles.container}>
      <Text style={styles.text}>{item.strDrink}</Text>
      
    </View>
  )
}

export default DrinkItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        marginHorizontal:20,
        marginVertical: 10,
        borderColor: colors.orange,
        borderWidth: 3,
        borderRadius: 20,
        height:100,
        justifyContent: "center",

    },
    text: {
        // fontFamily: "dancing",
        fontSize: 20,
        margin: 2,
        color: colors.lightnavy,
        padding: 5,
        textAlign: "center",
        fontWeight:"400"
 
     },
    

})
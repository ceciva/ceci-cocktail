import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'


const CategoryItem = ({item, navigation}) => {
  return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate("drinks")}>
      
      <Text style= {styles.categoryText}>{item}</Text>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  categoryText: {
    fontFamily: "dancing",
    fontSize: 20,
    margin: 2,
    color: colors.violet,
    padding: 10,
    borderColor: colors.violet,
    borderWidth: 3,
    borderRadius: 20,
    textAlign: "center",
    paddingVertical: 15,


 },
 container: {
    backgroundColor: colors.lightAqua
 }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
const CategoyItem = ({item}) => {
  return (
    <View>
      <Text style= {styles.categoryText}>{item.strDrink}</Text>
    </View>
  )
}

export default CategoyItem

const styles = StyleSheet.create({
  categoryText: {
    // fontFamily: "dancing",
    fontSize: 20,
    margin: 2,
    color: colors.orange,
    padding: 5,
    borderColor: colors.navy,
    borderWidth: 3,
    borderRadius: 20,
    textAlign: "center"

 },
})
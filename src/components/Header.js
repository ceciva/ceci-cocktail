import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      
      <Text style={ styles.text}> {title} </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height: 75,
        width: "100%",
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: colors.lightAqua,
        
    
      },
      text:{
        color: colors.violet,
        fontSize: 25,
        fontWeight: "600",
        fontFamily: "dancingBold",
        
      },
      
});
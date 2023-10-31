import { StyleSheet, Text, View, FlatList, Image} from 'react-native'
import React from 'react'
import Search from '../components/Search';
import Header from '../components/Header';
import { drinks } from '../data/drinks';
import DrinkItem from '../components/DrinkItem';
import { colors } from '../theme/colors';


const Drinks = () => {
  return (
    <View style={ styles.container}>
        <Header title= "Drinks"/>
        <Search/>
        

        <FlatList 
            data={drinks}
            keyExtractor={drinks.id}
            renderItem={({item})=> <DrinkItem item={item}/>}
        />
        
        
    </View>
  )
}

export default Drinks

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: colors.lightAqua
 }
})
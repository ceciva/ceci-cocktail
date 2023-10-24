import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import Search from '../components/Search';
import Header from '../components/Header';
import { drinks } from '../data/drinks';
import DrinkItem from '../components/DrinkItem';
const Drinks = () => {
  return (
    <View>
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
})
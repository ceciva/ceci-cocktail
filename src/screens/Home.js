import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'

import Search from '../components/Search'
import SearchName from '../components/SearchName'
import SearchLetter from '../components/SearchLetter'
import SearchIngredient from '../components/SearchIngredient'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'
import { useCocktailWithAlcoholQuery } from '../services/cocktailApi'

const Home = ({navigation}) => {
const datos= useCocktailWithAlcoholQuery();
console.log(JSON.stringify(datos, null, " "));

  const categories= useSelector(state=>state.homeSlice.allCategories);
  // console.log("categorías desde store:", categories);


  return (
    <View>
      <Header title= "Search categories"/>
      <SearchName/>
      <SearchLetter/>
      <SearchIngredient/>
      <FlatList
        data= {categories}
        keyExtractor= {key => key}
        renderItem= {({item}) => <CategoryItem navigation= {navigation} item={item} />}

      />
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
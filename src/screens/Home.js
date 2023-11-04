import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { categories } from '../data/categories'
import Search from '../components/Search'
import SearchName from '../components/SearchName'
import SearchLetter from '../components/SearchLetter'
import SearchIngredient from '../components/SearchIngredient'
import CategoryItem from '../components/CategoryItem'
const Home = ({navigation}) => {
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
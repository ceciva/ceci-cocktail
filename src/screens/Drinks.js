import { StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native'
import React from 'react'
import Search from '../components/Search';
import Header from '../components/Header';
import { drinks } from '../data/drinks';
import DrinkItem from '../components/DrinkItem';
import { colors } from '../theme/colors';
import SearchName from '../components/SearchName';
import { Ionicons } from '@expo/vector-icons';

const Drinks = ({navigation}) => {
  
  
  return (
    <View style={ styles.container}>
        <Header title= "Drinks"/>

        <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={30} color= "#614BC3"/>
        </Pressable>
        
        <SearchName/>
        <FlatList 
            data={drinks}
            keyExtractor={drinks.id}
            renderItem={({item})=> <DrinkItem navigation={navigation} item={item}/>}
        />
        
    </View>
  )
}

export default Drinks

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: colors.lightAqua
 },
 goBack:{
  position:"absolute",
  top: 27,
  left: 5,

},
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Drinks from '../screens/Drinks';
import DrinkDetail from '../components/DrinkDetail';

const Stack= createNativeStackNavigator();
const RootNavigation = () => {
    
  return (
   <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen component={Home} name= "home" />
        <Stack.Screen component={Drinks} name= "drinks"/>
        <Stack.Screen component={DrinkDetail} name= "drinkDetail"/>

   </Stack.Navigator>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})
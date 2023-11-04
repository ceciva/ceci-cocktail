import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootNavigation from './RootNavigation';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

import { Entypo } from '@expo/vector-icons';
const Tab= createBottomTabNavigator();
const TabNav = () => {
  return (
   <Tab.Navigator screenOptions={{title:"", headerShown: false}}>
    <Tab.Screen 
    options={{
        tabBarIcon:({focused})=> <Entypo name="drink" size={30 } color={focused? colors.turquesa: colors.violet} />}}
        name="rootNavigation" component={RootNavigation}/>

    <Tab.Screen options={{
        tabBarIcon:({focused})=> <Ionicons name="person" size={30}  color={focused? colors.turquesa: colors.violet} />}} name="profile" component={Profile}/>
    
    <Tab.Screen options={{
        tabBarIcon:({focused})=><MaterialIcons name="favorite" size={30} color={focused? colors.turquesa: colors.violet} /> }} name="favorites" component={Favorites}/>

   </Tab.Navigator>
  )
}

export default TabNav

const styles = StyleSheet.create({})
import { StyleSheet} from 'react-native'
import React from 'react'
import MapLoc from '../screens/MapLoc';
import Profile from '../screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



const ProfileNav = () => {
    return (
      <Stack.Navigator
        initialRouteName="profile"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen component={Profile} name="profile" />
        <Stack.Screen component={MapLoc} name="mapLoc"/>
      </Stack.Navigator>
    );
  };
  
  export default ProfileNav;
  
  const styles = StyleSheet.create({})
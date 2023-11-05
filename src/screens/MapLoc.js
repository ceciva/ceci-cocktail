import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import Header from '../components/Header';

const MapLoc = ({route, navigation}) => {
  const {location} = route.params;

  
  return (
    <View style={styles.container}>
      <Header title="My location" navigation={navigation}/>
      <MapView
      pointerEvents={true}
      showsUserLocation={true}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
      
        style={styles.map} />
      
    </View>
  )
}

export default MapLoc

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
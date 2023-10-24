
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Drinks from './src/screens/Drinks';
import DrinkItem from './src/components/DrinkItem';
export default function App() {
  

  return (
    <View style={styles.container}>
      {/* <Home/>  */}
      {/* <Search/>        */}
      <Drinks/>
      {/* <DrinkItem/> */}
    </View>
  );
}

const styles = StyleSheet.create({

  text:{
    color: colors.orange,
    // fontWeight: 700,
  }
  
});

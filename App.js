
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { colors } from './src/theme/colors';
import Home from './src/screens/Home';
import Search from './src/components/SearchName';
import Drinks from './src/screens/Drinks';
import DrinkItem from './src/components/DrinkItem';
import { useFonts } from 'expo-font';
import DrinkDetail from './src/components/DrinkDetail';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';

export default function App() {

  const [fontsLoaded] = useFonts({
    dancing: require("./assets/Fonts/DancingScript-Regular.ttf"),
    dancingBold: require("./assets/Fonts/DancingScript-SemiBold.ttf"),
  });
  
  if (!fontsLoaded){
    return;
  }

  return (
    <NavigationContainer>
      {/* <Home/>  */}
      {/* <Search/>        */}
      {/* <Drinks category= "strCategory"/> */}
      {/* <DrinkItem/> */}
      {/* <DrinkDetail/> */}
      <TabNav/>
      
    </NavigationContainer>
  );
}

  


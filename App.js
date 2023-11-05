
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';

import { useFonts } from 'expo-font';
import DrinkDetail from './src/components/DrinkDetail';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainNav from './src/navigation/MainNav';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import AuthNav from './src/navigation/AuthNav';

export default function App() {

  const [fontsLoaded] = useFonts({
    dancing: require("./assets/Fonts/DancingScript-Regular.ttf"),
    dancingBold: require("./assets/Fonts/DancingScript-SemiBold.ttf"),
  });
  
  if (!fontsLoaded){
    return;
  }

  return (
    <Provider store={store}>
      
        {/* <Home/>  */}
        {/* <Search/>        */}
        {/* <Drinks category= "strCategory"/> */}
        {/* <DrinkItem/> */}
        {/* <DrinkDetail/> */}
        {/* <TabNav/> */}
        {/* <MainNav/> */}
        {/* <Login/> */}
        {/* <Register/> */}
        {/* <AuthNav/> */}
        <MainNav/>
      
      </Provider>
  );
}

  


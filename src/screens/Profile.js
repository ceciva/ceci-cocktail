import { StyleSheet, Text, View , Image, Pressable, Alert} from 'react-native'
import React, {useState} from 'react'
import Header from '../components/Header';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker'; 
import * as Location from "expo-location";
import {usePutImageMutation}from "../services/firebasedb";
import { useGetImageQuery } from '../services/firebasedb';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearUser } from '../redux/slices/authSlice';


const Profile = ({navigation}) => {
    // const dispatch= useDispatch()
    
    const [putImage, result]= usePutImageMutation();
    const [location, setLocation]= useState();
    // const [errorMsg, setErrorMsg] = useState(null);
    const {data, isLoading, error, isError, refetch} = useGetImageQuery();
    console.log("data de foto:", data);
    const defaultImage=
    "https://img.freepik.com/free-vector/flat-design-summer-facebook-frame-design_23-2149451966.jpg?size=626&ext=jpg&ga=GA1.1.183660694.1699052091&semt=ais" ;
    
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        base64: true,
      });
  
      if (!result.canceled) {
        await putImage({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`,
        });
  
        refetch();
      }
    };
      
    const openCamera = async () => {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("No le has dado permiso a la Aplicación para acceder a tu cámara!");
        return;
      } else {
        const result = await ImagePicker.launchCameraAsync({
          base64: true,
        });
  
        console.log(result);
  
        if (!result.canceled) {
          await putImage({
            image: `data:image/jpeg;base64,${result.assets[0].base64}`,
          });
          refetch();
        }
      }
    };  

      const getCoords= async () => {
      
        let { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          console.log(errorMsg)
          return;
        };
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        
        navigation.navigate("mapLoc", {location});
      };

      const handleLogOut= async()=>{
        try {
          
          dispatch(clearUser()) ;
          await AsyncStorage.removeItem("userEmail");

        } catch (error) {
          
        }
      };

      const onLogout= () => 
        Alert.alert ('Logout', 'Are you sure you want to Logout?', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {text: 'OK', onPress: () => handleLogOut()},
          ]);
  return (
    <View >
        <Header title= "My Profile" />
        <View style={ styles.avatarContainer}>
        <Image style={styles.profileImage} source= {{
            uri: data? data.image : defaultImage,
        }}
        />
        </View>
       
  <View style={styles.iconsContainer}>
    {/* abre cámara */}

      <Pressable onPress={()=> openCamera()}>
          <FontAwesome name="camera" size={50} color= {colors.violet} />
          <Text style={styles.iconsText}>Camera</Text>
      </Pressable>

    {/*abre galería  */}

      <Pressable onPress={()=> pickImage()}>
      <FontAwesome name="photo" size={50} color={colors.violet} />
      <Text style={styles.iconsText}>Galery</Text>
      </Pressable>

    {/* location */}

      <Pressable onPress={()=> getCoords()}>
      <Ionicons name="location-sharp" size={50} color={colors.violet} />
      <Text style={styles.iconsText}>Map</Text>
      </Pressable>
  </View>

  {/*logout  */}
  
  <View style={styles.logoutContainer}>
    <Pressable onPress={()=> onLogout()}>
      <Ionicons name="person-remove-sharp" size={50} color={colors.violet} />
      <Text style={styles.iconsText}>Logout</Text>
    </Pressable>
  </View>
    </View>    
    );

}

export default Profile

const styles = StyleSheet.create({
    
    profileImage:{
        width: 150,
        height: 150,
        borderRadius: 150
    },
    avatarContainer:{
        alignItems: "center",
        marginTop: 30,
    },
    iconsContainer:{
        
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:20
    },
    logoutContainer:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop:100,
    },
    iconsText:{
        fontFamily: "dancing",
        fontSize: 15,
        color: colors.turquesa,
        
    }
})
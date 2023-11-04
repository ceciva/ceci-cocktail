import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import Header from '../components/Header';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const Profile = () => {
  return (
    <View >
        <Header title= "My Profile" />
        <View style={ styles.avatarContainer}>
        <Image style={styles.profileImage} source= {{
            uri: "https://img.freepik.com/free-vector/flat-design-summer-facebook-frame-design_23-2149451966.jpg?size=626&ext=jpg&ga=GA1.1.183660694.1699052091&semt=ais"
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
      <Text style={styles.iconsText}>Galería</Text>
      </Pressable>

{/* location */}

      <Pressable onPress={()=> getCoords()}>
      <Ionicons name="location-sharp" size={50} color={colors.violet} />
      <Text style={styles.iconsText}>Mapa</Text>
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
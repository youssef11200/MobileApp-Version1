import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/Ionicons';


// const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props} >
      <ImageBackground  source={require('../screens/assets/green.jpg')} style={{padding:20}}> 
      <Image source={require('../screens/assets/users.png')} style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}} />
      <Text style={{ color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,}}>Youssef Nasser</Text>
            </ImageBackground> 
      <View >
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
    <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

export default CustomDrawer;

// const styles = StyleSheet.create({
//   // userImg: {
//   //   width:50,
//   //   height: 110,
//   //   borderRadius: 100 / 2,
//   //   position: 'absolute',
//   //   left: width / 2 - 100,
//   //   bottom: -100 / 2,
//   //   borderWidth: 4,
//   //   borderColor: "white",
//   // },
//   // drawerListWrapper: {
//   //   marginTop: 65,
//   // },
// });

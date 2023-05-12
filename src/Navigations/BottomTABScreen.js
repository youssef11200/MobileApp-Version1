import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home'
import FarmerView from '../screens/Home/FarmerView';
import Favorite from '../screens/Home/Favorite';
import BuyerView from '../screens/Home/BuyerView';
import Order from '../screens/Home/Order';
import { Image } from 'react-native';
import Notification from '../screens/Home/Notification';
import MapBox from '../screens/Home/MapBox';
import Profile from '../screens/Home/Profile';


const Tab = createBottomTabNavigator();

const CustomTabBarIcon = (name, focused) => {
  return (
    <Icon
      name={'md-'+name}
      size={30}
      style={{ marginBottom: -3 }}
      color={focused ? '#2979FF' : '#999999'}
    />
  );
  
};
const Iconmarket=(focused)=>{
  return(
  <Image tintColor={focused ? '#2979FF' : '#999999'} style={{width:35,height:30,}} source={(require('../screens/assets/marketplaceicon.png'))} />  
  )
}
// const Iconpanier=(focused)=>{
//   return(
//   <Image tintColor={focused ? '#2979FF' : '#999999'} style={{width:35,height:30,}} source={(require('../screens/assets/panier.png'))} />  
//   )
// }

// const CustomTabBarButton = ({ children, onPress }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         top: -30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         ...styles.shadow,
//       }}
//       onPress={onPress}>
//       <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#2979FF' }}>
//         {children}
//       </View>
//     </TouchableOpacity>
//   );
// };

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,}}   >
      <Tab.Screen
        name="MapBox"
        component={MapBox}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('map-outline', focused),
        }}
      />
      <Tab.Screen
        name="Home-buyer"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => Iconmarket(focused),
        }} 
      />
      
    
      <Tab.Screen
        name="BuyerVieww"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('person-outline', focused),
        }}
      />
       <Tab.Screen
       
       
       name="FARMERvIEW"
        component={FarmerView}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('settings-outline', focused),
        }}
      />
      
      {/* <Tab.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('add-outline', focused),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('AddProduct');
          },
        })}
      /> */}
       
       {/* <Tab.Screen
        name="AddCoop"
        component={Addcoop}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('heart-sharp', focused),
        }} 
      /> */}

      
      
      
      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('user', focused),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;



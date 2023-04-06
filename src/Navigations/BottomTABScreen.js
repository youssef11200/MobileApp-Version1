import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home'
import Profile from '../screens/Home/Profile'
import AddProduct from '../screens/Home/AddProduct'
import FarmerView from '../screens/Home/FarmerView';
import Favorite from '../screens/Home/Favorite';
import Addcoop from '../screens/Home/Addcoop';


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
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:[{display:'flex'},null]}} 
      initialRouteName="Home"
    
     >
      
      <Tab.Screen
        name="armerView"
        component={FarmerView}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('person', focused),
        }} 
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('home-outline', focused),
        }}
      />
      <Tab.Screen
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
      />
       <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('heart', focused),
        }} 
      />
       <Tab.Screen
        name="AddCoop"
        component={Addcoop}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBarIcon('heart', focused),
        }} 
      />

      
      
      
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

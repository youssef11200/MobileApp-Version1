// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
// import { ROUTES} from '../constants';
// import AddProduct from '../screens/Home/AddProduct'
// import FarmerView from '../screens/Home/FarmerView';
// import Home from '../screens/Home/Home'
// import Icon from 'react-native-vector-icons/Ionicons';
// import CustomTabBar from '../Components/CustomTabBar'
// import CustomTabBarButton from '../Components/CustomTabBarButton'
// import {useNavigation} from '@react-navigation/native';

// const Tab = createBottomTabNavigator();

// function BottomTabNavigator() {
//   const navigation = useNavigation();

//   return (
//     <Tab.Navigator
//       tabBar={props => <CustomTabBar {...props} />}
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarInactiveTintColor:"black",
//         tabBarStyle: styles.tabBarStyle,
//         tabBarActiveTintColor: '#337722',
//         tabBarIcon: ({  focused}) => {
//           let iconName;

//           if (route.name === ROUTES.HOME_TAB) {
//             iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
//           } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
//             iconName = focused ? 'settings' : 'settings-outline';
//           } else if (route.name === ROUTES.Framer_View) {
//             iconName = focused ? 'wallet' : 'wallet-outline';
//           }

//           return <Icon name={iconName} size={22} color='black' />;
//         },
//       })}>
//       <Tab.Screen
//         name={ROUTES.Home_Tab}
//         component={Home}
//         options={{
//           tabBarButton: props => <CustomTabBarButton route="home" {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name={ROUTES.Framer_View}
//         component={FarmerView}
//         options={{
//           tabBarButton: props => <CustomTabBarButton {...props} />,
//         }}
//       />
//       {/* <Tab.Screen
//         name={ROUTES.NOTIFICATIONS}
//         component={AddProduct}
//         options={{
//           tabBarButton: props => <CustomTabBarButton {...props} />,
//         }}
//       /> */}
//       <Tab.Screen
//         name={ROUTES.SETTINGS_NAVIGATOR}
//         component={AddProduct}
//         options={{
//           tabBarLabel: 'Settings',
//           title: 'Settings',
//           headerShown: true,
//           tabBarButton: props => (
//             <CustomTabBarButton route="settings" {...props} />
//           ),
//           headerRight: () => {
//             return (
//               <TouchableOpacity onPress={() => navigation.openDrawer()}>
//                 <Icon
//                   name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
//                   size={30}
//                   color='balck'
//                   style={{marginRight: 10}}
//                 />
//               </TouchableOpacity>
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default BottomTabNavigator;

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     position: 'absolute',
//     backgroundColor: COLORS.transparent,
//     borderTopWidth: 0,
//     bottom: 15,
//     right: 10,
//     left: 10,
//     height: 92,
//   },
// });

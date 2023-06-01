import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import CustomDrawer from '../Components/CustomDrawer'
import AddProduct from '../screens/Home/AddProduct';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/Home/Setting';
import BottomTABScreen from './BottomTABScreen'
import Addcoop from '../screens/Home/Addcoop';
import Order from '../screens/Home/Order';
const Drawer = createDrawerNavigator();

const MyDrawer=() =>{
  return (
    <Drawer.Navigator
     screenOptions={{headerShown:false,drawerLabelStyle: {
      marginLeft: -25,
      fontFamily: 'Roboto-Medium',
      fontSize: 15,
    },
      }}
       drawerContent={props=><CustomDrawer {...props} />}>
        <Drawer.Screen name="Explore" component={BottomTABScreen}  options={{drawerIcon: ()=>( <Icon name="file-tray-stacked-outline" size={20} color='black'/>) }}  />

    <Drawer.Screen name="Add Production" component={AddProduct}  options={{drawerIcon: ()=>( <Icon name="add-outline" size={20} color='black'/>) }}  />
    <Drawer.Screen name="Add Cooperative" component={Addcoop} options={{drawerIcon: ()=>( <Icon name="add" size={22} color='black'/>) }}  />
    <Drawer.Screen name="Orders" component={Order} options={{drawerIcon: ()=>( <Icon name="add" size={22} color='black'/>) }}  />
    <Drawer.Screen  name="Settings" component={Profile} options={{drawerIcon: ()=>( <Icon name="settings-outline" size={22} color='black'/>) }} />
   
     {/* afiichage on drawer to active screen */}
    </Drawer.Navigator>
  );
}
export default MyDrawer
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'

import CustomDrawer from './CustomDrawer';
import AddProduct from '../screens/Home/AddProduct';
import EditProduct from '../screens/Home/EditProduct';
import BottomTABScreen from './BottomTABScreen'
import Profile from '../screens/Home/Profile';
import FarmerView from '../screens/Home/FarmerView';
const Drawer = createDrawerNavigator();

const MyDrawer=() =>{
  return (
    <Drawer.Navigator screenOptions={{headerShown:false,
        drawerActiveBackgroundColor:'rgb(220,220, 220)',drawerActiveTintColor:'black'}}
       drawerContent={props=><CustomDrawer {...props}/>}
       >
        <Drawer.Screen name="bottomtab" component={BottomTABScreen}   />
      <Drawer.Screen name="Farmer view" component={FarmerView}   />
    <Drawer.Screen name="Add Product" component={AddProduct}   />
    <Drawer.Screen name="Edit Product" component={EditProduct}   />
    <Drawer.Screen  name="Profile" component={Profile} />
   
     {/* afiichage on drawer to active screen */}
    </Drawer.Navigator>
  );
}
export default MyDrawer
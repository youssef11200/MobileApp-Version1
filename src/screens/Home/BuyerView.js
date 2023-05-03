import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


import EditCoop from './EditCoop';
// import EditProduct from './EditProduct';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './Home';
// import Order from './Order';

// const axiosRequest =require("axios")
// async function getProduction(){
//   let respons = await axiosRequest.get('https://jsonplaceholder.typicode.com/users')
// }
const categoryIcons = [
  <Text>All</Text>,<Text>Olive</Text>,
  <Text>Amond</Text>,
  <Text>pistachio</Text>,
  <Text>Orange</Text>,
  <Text>Orange</Text>,
  <Text>Orange</Text>,
];
// const TabBuyer = createBottomTabNavigator();
// const CustomTabBuyerIcon = (name, focused) => {
//   return (
//     <Icon
//       name={'md-'+name}
//       size={30}
//       style={{ marginBottom: -3 }}
//       color={focused ? '#2979FF' : '#999999'}
//     />
//   );
  
// };
// const Iconmarket=(focused)=>{
//   return(
//   <Image tintColor={focused ? '#2979FF' : '#999999'} style={{width:35,height:30,}} source={(require('../assets/marketplaceicon.png'))} />  
//   )
// }

const BuyerView = () => {
  const ListCategory = () => {
    return (
      <View style={styles.ListCategory}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };
  // const Products = () => {
  //   return <ImageBackground></ImageBackground>;
  // };
  // const Coop = () => {
  //   return <ImageBackground></ImageBackground>;
  // };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#337722" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <View>
           
            <View style={styles.famertopview}>
            <Icon
                name="reorder-four-outline"
                size={28}
                color="white"
                style={{paddingTop: 35,paddingRight:80}}
              />
               <Icon
                name="person-circle-sharp"
                size={50}
                color="white"
                style={{paddingTop: 35,paddingLeft:80}}
              />
              </View>
              <Text style={styles.headerTitle}>Welcome Youssef Nasser</Text>
            <View style={styles.inputProduct}>
           
              <Icon
                name="md-search-outline"
                size={28}
                color="#c3c3c3"
                style={{paddingTop: 10,}}
              />
              <TextInput placeholder="Search Place" style={{color: 'grey'}} />
            </View>
          </View>
        </View>
        <View style={{marginTop:100}}>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ListCategory />
        </ScrollView>
        </View>
        <View style={styles.textInputproduct}>
          <Text style={styles.textProduct}> Cooperatives</Text>
          <Text
            style={{
              paddingTop: 35,
              paddingRight: 15,
              fontSize: 17,
              color: '#3A86FF',
            }}>
            See all
          </Text>
        </View>
       
        <View style={styles.productContainer}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <EditCoop/>
          <EditCoop/>
          <EditCoop/>
          </ScrollView>
         </View>

        </View>
       
       
       
      </ScrollView>
      {/* <TabBuyer.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,}}   >
      
      <TabBuyer.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => Iconmarket(focused),
        }} 
      />
     
    
      <TabBuyer.Screen
        name="BuyerView"
        component={BuyerView}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBuyerIcon('notifications-outline', focused),
        }}
      />
      
      
       <TabBuyer.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ focused }) => CustomTabBuyerIcon('heart-outline', focused),
        }} 
      />
    </TabBuyer.Navigator > */}
    
    </SafeAreaView>
    
  );
};
export default BuyerView;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#337722',
   
  },
  search: {
    backgroundColor: '#337722',
    height: '20%',
    paddingHorizontal: 10,
    position: 'relative',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    paddingTop:20
  },
  headerTitle: {
    fontSize: 16,
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  inputProduct: {
    height: 60,
    widht: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 5,
    marginTop: 35,
    flexDirection: 'row',
    paddingHorizontal: 10,
    elevation: 10,
  },
  ListCategory: {
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight:30,
    width:500,
  
  },
  iconContainer: {
    marginTop: 20,
    padding:5,
    borderRadius:5,
    widht: 60,
    borderColor:'black',
    borderWidth:2,
    borderColor:'#c8c8c8'
  },
  textProduct: {
    marginHorizontal: 5,
    marginVertical: 30,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#808080',
  },
  textInputproduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  searchproduct: {
    width: 150,
    marginHorizontal: 1,
    marginVertical: 30,
    height: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    paddingTop: 0,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
  },
  linewidht: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    position: 'relative',
    top: -20,
  },
  productContainer: {
    height: 300,
    backgroundColor: '#E5FBDB',
  },
  cooperativeContainer: {
    height:300,
    backgroundColor: '#E5FBDB',
    marginBottom: 50,
    
  },
  filterCat:{
    borderBottomColor: 'balck'
  },
  famertopview:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  
  }
});

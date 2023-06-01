import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EditCoop from './EditCoop';
import EditProduct from './EditProduct';
import {CooperativesData} from '../CooperativesData.js';

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
const FarmerView = ({navigation}) => {
const CooperativesList = () => {
  return CooperativesData.map((item, index) => (

    <View style={styles.container3}>        
            <Image
              source={{uri: item?.image[0]}}
              alt="No picture available"
              style={{
                height: 180,
                width: 250,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                margin: 15,
                paddingLeft: 35,
              }}
            />     
      <View /*style={{justifyContent: 'flex-start', alignItems: 'flex-start',}}*/ >
      <Text style={styles.Text}>
        <Icon
          name="cart-sharp"
          size={22}
          color="#c3c3c3"
          style={{paddingRight: 5, paddingTop: 10}}
        />{' '}
        Product Name:{' '}
        <Text style={styles.innerText}>{item?.productName}</Text>{' '}
      </Text>
      <Text style={styles.Text}>
        <Icon
          name="leaf"
          size={22}
          color="#c3c3c3"
          style={{paddingRight: 5, paddingTop: 10}}
        />{' '}
        Product Type:{' '}
        <Text style={styles.innerText}>{item?.productType}</Text>{' '}
      </Text>
      <Text style={styles.Text}>
        <Icon
          name="server"
          size={22}
          color="#c3c3c3"
          style={{paddingRight: 5, paddingTop: 10}}
        />{' '}
        Available quantity:{' '}
        <Text style={styles.innerText}>{item?.availableQuantity}</Text>{' '}
      </Text>
      <Text style={styles.Text}>
        <Icon
          name="logo-usd"
          size={22}
          color="#c3c3c3"
          style={{paddingRight: 5, paddingTop: 10}}
        />{' '}
        Price: <Text style={styles.innerText}>{item?.price}</Text>
      </Text>
      <Text style={styles.Text}>
        <Icon
          name="toggle"
          size={22}
          color="#c3c3c3"
          style={{paddingRight: 5, paddingTop: 10}}
        />{' '}
        Status: <Text style={styles.innerText}>{item?.sattus}</Text>
      </Text>
      
      
      </View>
    <Pressable
    style={[styles.button3, styles.buttonOpen3]}
    //onPress={() => setModalVisible(true)}
    onPress={() => navigation.navigate("Details")}
    >
    <Text style={styles.textStyle}>Show Details</Text>
  </Pressable>
  </View>
  ));
};


  
  
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
  const Products = () => {
    return <ImageBackground></ImageBackground>;
  };
  const Coop = () => {
    return <ImageBackground></ImageBackground>;
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#18a34a" />

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
        <View style=
              {{flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                paddingBottom:20,}}>
          <Text style={{paddingTop:30,fontSize:25,fontWeight:'bold',paddingLeft:10}}>Cooperative</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity><Text style={{ paddingTop: 30,
              paddingRight: 15,
              fontSize: 20,
              color: '#3A86FF',}}>See all</Text></TouchableOpacity>
                    
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Addcoop')
          }}><Icon name="add-circle" size={30} color="#000" style={{paddingLeft:15,paddingRight:15,paddingTop:28}}/></TouchableOpacity>  
          </View>
        </View>
       
        <View style={styles.productContainer}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {CooperativesList()}
          </ScrollView>
         </View>

        </View>
        <View style=
              {{flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
                paddingBottom:20,}}>
          <Text style={{paddingTop:30,fontSize:25,fontWeight:'bold',paddingLeft:10}}>Productions</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity><Text style={{ paddingTop: 30,
              paddingRight: 15,
              fontSize: 20,
              color: '#3A86FF',}}>See all</Text></TouchableOpacity>
                    
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Addproduct')
          }}><Icon name="add-circle" size={30} color="#000" style={{paddingLeft:15,paddingRight:15,paddingTop:28}}/></TouchableOpacity>  
          </View>
        </View>
    
        <View style={styles.cooperativeContainer}>
       
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <EditProduct/>
          <EditProduct/>
          <EditProduct/>
          </ScrollView>
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};
export default FarmerView;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#18a34a',
   
  },
  search: {
    backgroundColor: '#18a34a',
    height: '13%',
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
    height: 400,
    
  },
  cooperativeContainer: {
    height:400,
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
  
  },
  button3: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 180,
  },
  buttonOpen3: {
    backgroundColor: '#337722',
    margin: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  
  },
});

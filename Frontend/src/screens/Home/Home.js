import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Button,
  Pressable,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import EditProduct from './EditProduct';
import Details from './Details';
import Production from './Production';
import EditCoop from './EditCoop';
import {CooperativesData} from '../CooperativesData.js';
import Background from './Background';

const Home = ({navigation}) => {


  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = CooperativesData.filter(
        function (item) {
          const itemData = item.productName
            ? item.productName.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.productName.toUpperCase()} 
        {'---'}
        {item.price}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert(' Title : ' + item.productName + 'Price : ' + item.Price );
    //onPress={() => navigation.navigate("Details")}
  };

  ///cooperatives list
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
          Price: <Text style={styles.innerText}>{item?.price}</Text>{' '}
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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} />
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            source={require('../assets/green.jpg')}
            style={{width: '100%', height: 300, backgroundColor: '#308126'}}>
            <Text
              style={{
                color: '#AEE9D7',
                fontSize: 24,
                fontFamily: 'sans-serif-medium',
                fontWeight: 'bold',
                letterSpacing: 1,
                lineHeight: 35,
                textAlign: 'left',
                marginTop: 50,
                marginLeft: 25,
                marginRight: 40,
              }}>
              Discover more customers products
            </Text>
            <Pressable onPress={() => navigation.navigate("Search")}>
            <TextInput
              //style={styles.textInputStyle}
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              //underlineColorAndroid="transparent"
              placeholder="Search Here"
              style={styles.input}
            />
            </Pressable>
            <View style={{ backgroundColor: '#308126',alignItems: 'center',}}> 
            <Pressable onPress={() => navigation.navigate("Production")}>
            <FlatList
          data={filteredDataSource}//width: 200, height: 300,
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          
        /></Pressable>
        </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginBottom: 25,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'sans-serif-medium',
                  fontWeight: '800',
                  letterSpacing: 1,
                  textAlign: 'left',
                  marginTop: 15,
                  marginLeft: 5,
                  color: '#003366',
                  paddingRight: 70,
                }}>
                Popular Cooperatives
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: 'Rototo-medium',
                    paddingTop: 15,
                  }}>
                  See All
                </Text>
              </TouchableOpacity>
             
            </View>
          </View>
          <View >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {CooperativesList()}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  containerscrollh: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 200,
    backgroundColor: 'rgb(19,209,123)',
    margin: 10,

    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },

  input: {
    fontSize: 16,
    height: 50,
    backgroundColor: '#EAEEF2',
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 30,
  },
  iconContainer: {
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderColor: '#c8c8c8',
  },
  ListCategoryhome: {
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 30,
    width: '100%',
  },
  post: {
    color: 'black',
    fontSize: 20,
  },
  container3: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 300,
    height: 380,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },

  title3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
  Text: {
    //padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  innerText: {
    //padding: 5,
    fontSize: 15,
    color: '#000000',
  },
  itemStyle: {
    padding: 1,
    BackgroundColor:'#fff',
    color:'#fff'
  },
});
/*

           <View 
          style={{width:200}}>
          <Button 
          title="Go to mapBox" 
          onPress={() => navigation.navigate("MapBox")}/> 
          </View>
             

          <View style={{height:400,zIndex:-1,}} backgroundColor='#F3F3F3'>
            <View style={{display:'flex',justifyContent:'space-around',flexDirection:'row',marginBottom:25}}>
            <Text style={{color:'#003366',paddingRight:80, fontSize:16,fontWeight:'800'}}> Popular Productions </Text>
            <TouchableOpacity><Text style={{fontSize:16,color:'#000000'}}>See All</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{fontSize:16,color:'#000000'}}> 
            <Icon name="add-circle" size={22} color="#000" style={{paddingRight:5,paddingTop:10}}  />
            </Text></TouchableOpacity>
            </View>
              <View>
              <View style={{height:300}}>
              <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}  >
              <EditProduct/>
              <EditProduct/>
              <EditProduct/>
            </ScrollView>
             </View>
              </View>
            </View>


            <Text style={styles.Text}>
          <Icon
            name="call"
            size={22}
            color="#c3c3c3"
            style={{paddingRight: 5, paddingTop: 10}}
          />{' '}
          Phone number:{' '}
          <Text style={styles.innerText}>{item?.phoneNumber}</Text>{' '}
        </Text>
        <Text style={styles.Text}>
          <Icon
            name="location"
            size={22}
            color="#c3c3c3"
            style={{paddingRight: 5, paddingTop: 10}}
          />{' '}
          Adress: <Text style={styles.innerText}>{item?.adress}</Text>{' '}
        </Text>
         <TouchableOpacity>
                  <Text 
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: 'Rototo-medium',
                    paddingTop: 15,
                  }}>
                    <Icon
                      name="add-circle"
                      size={22}
                      color="#000"
                     // style={{paddingRight: 5, paddingTop: 10}} , alignItems: 'center',style={{justifyContent: 'center'}}
                    />
                  </Text>
                </TouchableOpacity>
            
*/

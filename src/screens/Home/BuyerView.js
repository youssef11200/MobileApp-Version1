import {
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

const categoryIcons = [
  <Text>All</Text>,<Text>Olive</Text>,
  <Text>Amond</Text>,
  <Text>pistachio</Text>,
  <Text>Orange</Text>,
];

const FarmerView = () => {
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
      <StatusBar backgroundColor="#337722" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <View>
          
            <View style={styles.famertopview}>
            <Icon
                name="reorder-four-outline"
                size={28}
                color="white"
                style={{paddingTop: 20,paddingRight:80}}
              />
               <Icon
                name="person-circle-sharp"
                size={50}
                color="white"
                style={{paddingTop: 20,paddingLeft:80}}
              />
              
              </View>
              <Text style={styles.headerTitle}>Welcome Buyer name</Text>
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
        <ListCategory />
        <View style={styles.textInputproduct}>
          <Text style={styles.textProduct}> Productions Recommanded</Text>
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
        
        <View style={styles.productContainer}></View>
        <View style=
              {{flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
                paddingBottom:20,}}>
          <Text style={{paddingTop:30,fontSize:18,fontWeight:'bold'}}>Recommanded cooperative</Text>
           <Text style={{ paddingTop: 30,
              paddingRight: 15,
              fontSize: 17,
              color: '#3A86FF',}}>See all</Text>
        </View>
        <View style={styles.cooperativeContainer}></View>
        <View style={styles.cooperativeContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default FarmerView;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#337722',
  },
  search: {
    backgroundColor: '#337722',
    height: '13%',
    paddingHorizontal: 20,
    position: 'relative',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
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
    marginTop: 25,
    flexDirection: 'row',
    paddingHorizontal: 10,

    elevation: 10,
  },
  ListCategory: {
    marginTop: 40,
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight:30,width:'100%',
  
  },
  iconContainer: {
    marginTop: 40,
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
    fontSize: 18,
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
    height: 320,
    backgroundColor: '#E5FBDB',
  },
  cooperativeContainer: {
    height: 200,
    backgroundColor: '#E5FBDB',
    marginBottom: 50,
    position: 'relative',
  },
  filterCat:{
    borderBottomColor: 'balck'
  },
  famertopview:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:20
  
  }
});

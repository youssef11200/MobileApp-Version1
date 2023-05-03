import { SafeAreaView, StatusBar, StyleSheet,  Text,  TextInput, TouchableOpacity, View,ScrollView, FlatList } from 'react-native'
import React ,{ useState,useEffect,} from 'react'
import EditProduct from './EditProduct';
import Details from './Details'
import Production from './Production';
import EditCoop from './EditCoop';


const Home = () => {
    // const [data,setData]=useState([])
    // const url='https://jsonplaceholder.typicode.com/users'
    // useEffect(()=>{
    //  fetch(url).
    //  then((response)=>response.json())
    //  .then((json)=>setData(json))
    //  .catch((error)=>console.log(error))
     
    // })
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar translucent={true}  />
       <View>
       <ScrollView  showsVerticalScrollIndicator={false}>
      <View  source={require('../assets/green.jpg')} style={{width:'100%',height:300,backgroundColor:'#308126'}}> 
      
      <Text style={{ color: '#AEE9D7',
              fontSize: 24,
              fontFamily: 'sans-serif-medium',
              fontWeight:'bold',
              letterSpacing:1,
              lineHeight:35,
              textAlign:'left',
              marginTop:50,
              marginLeft:25,marginRight:40
             }}>Discover more customers products</Text>
             <TextInput
          placeholder="Search"
          placeholderTextColor="#999999"
          importantForAutofill='yes'
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}

        />
        <View style={{display:'flex',justifyContent:'space-around',flexDirection:'row',marginBottom:25,}}>
             <Text 
             style={{
              fontSize: 16,
              fontFamily: 'sans-serif-medium',
              fontWeight:'800',
              letterSpacing:1,
              textAlign:'left',
              marginTop:15,
              marginLeft:5,
              color:"#003366",paddingRight:70
              
             }}>Popular Cooperatives</Text>
             <TouchableOpacity ><Text style={{color:'#000000',fontSize:16,fontWeight:'600',fontFamily:'Rototo-medium',paddingTop:15}}>See All</Text></TouchableOpacity>
             </View>
            
             

            </View>
           <View style={{height:300}}>
            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}  >
            <EditCoop/>
            <EditCoop/>
            <EditCoop/>
             </ScrollView> 
             </View>
            <View style={{height:400,zIndex:-1,}} backgroundColor='#F3F3F3'>
            <View style={{display:'flex',justifyContent:'space-around',flexDirection:'row',marginBottom:25}}>
            <Text style={{color:'#003366',paddingRight:80, fontSize:16,fontWeight:'800'}}> Popular Productions </Text>
            <TouchableOpacity><Text style={{fontSize:16,color:'#000000'}}>See All</Text></TouchableOpacity>
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
            </ScrollView> 
            </View>

      
      
     
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
   
   
  },
  containerscrollh: {
    flexDirection: 'column',
    justifyContent:'center',
    height:200,
    backgroundColor:'rgb(19,209,123)', margin:10,
  
    
    
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
    backgroundColor:'#EAEEF2',
    borderRadius:5,
    marginRight:20,
    marginLeft:20,
    marginTop:30
  
  },iconContainer: {
   
    padding:5,
    borderRadius:5,
    borderColor:'black',
    borderWidth:2,
    borderColor:'#c8c8c8'
  }, 
  ListCategoryhome: {
   
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight:30,width:'100%',
  
  },
  post:{
    color:'black',
    fontSize:20
  }
  
});



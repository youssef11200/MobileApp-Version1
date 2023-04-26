import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Picker} from 'react-native';
import React,{useState} from 'react';
import Field from './Field';
import Icon from 'react-native-vector-icons/Ionicons';



const AddProduct = () => {
  // const [selectedValue, setSelectedValue] = useState('option1');
  return (
    <SafeAreaView >
       
    
    <View style={styles.header}>
    <Icon
                name="reorder-four-outline"
                size={28}
                color="white"
                style={{paddingRight:100}}
              />
               <Icon
                name="person-circle-sharp"
                size={50}
                color="white"
                style={{paddingLeft:80}}
              />
    </View>
    <ScrollView showsVerticalScrollIndicator={false} >
    <View >
    
    <Text style={{fontSize:16,fontWeight:'700',color:'#b97a56',fontWeight:'900',paddingLeft:20,fontFamily:"robuto"}}>Description </Text>
    <TextInput
        
        cursorColor='#337722'  placeholderTextColor={'#585858'} style={styles.inputDescription}
        placeholder="Type here For Description !"
       
      />
    {/* icon edit */}
    </View>
    <Text style={{fontSize:16,fontWeight:'700',color:'#000000',fontWeight:'600',paddingLeft:20}}>Gallery</Text>
    <View style={styles.gallerys}>
    
      {/* image
      Viewimage
      image
      image */}
    </View>
    <Text style={{fontSize:16,fontWeight:'700',color:'#b97a56',fontWeight:'900',paddingLeft:20,fontFamily:'robuto'}}>Details</Text>
      
    <View style={styles.inputAddProduct}>
    <Text style={styles.textinputProduct}>Production Name </Text>
    <Field placeholder="Production Name ?" backgroundColor='#f0f2f5' style={styles.fieldSpace}   keyboardType="numeric" /> 
      
    <Text style={styles.textinputProduct}> Price</Text>
      <Field placeholder="Price ?" backgroundColor='#f0f2f5' style={styles.fieldSpace}     keyboardType="numeric" /> 
      <Text style={styles.textinputProduct}>PH</Text>
      <Field placeholder='Write PH Value ?' backgroundColor='#f0f2f5' style={styles.fieldSpace}  keyboardType="numeric"/> 
      <Text style={styles.textinputProduct}>Moisture</Text>
      <Field placeholder='Write Land nature ?' backgroundColor='#f0f2f5' style={styles.fieldSpace} /> 
      <Text style={styles.textinputProduct}>Product</Text>
      <Field placeholder='Kind of fruits ?' backgroundColor='#f0f2f5' style={styles.fieldSpace}   placeholderTextColor={'#'}/> 
      <TouchableOpacity  style={styles.button}>
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
    <View>
       <Text>Select an option:</Text>
      
     </View>
    </View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default AddProduct;
const styles = StyleSheet.create({
  header:{
    paddingVertical:'15%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#337722',
    
  },
  inputDescription:{
    backgroundColor:'#f0f2f5',
    height:100,
    paddingTop:5,
    marginTop:20,
    marginLeft:5,
    marginRight:20,
   paddingHorizontal:10,
   elevation:2,
    
   
  },
  gallerys:{
    height:120,
    backgroundColor:'#f0f2f5',
    width:'100%',
    marginTop:20
  },
  inputAddProduct:{
  
    flexDirection:'column',
   paddingLeft:30
    
  },
  textinputProduct:{
    color:'#000000',
    fontSize:14,
    paddingLeft:10,
    marginTop:20,
    elevation:3
  },inputAddProduct:{
    height:900,
  },
  fieldSpace:{
    elevation:7
  },
  button: {
    backgroundColor: '#337722',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 25,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },






  }
  
 
  
)


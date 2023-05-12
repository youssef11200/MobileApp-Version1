// import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import Field from  './Field';
// const Addcoop = () => {
  
//   return (
//     <SafeAreaView >
//        <StatusBar  />
    
//     <View style={styles.header}>
      {/* icon user image */}
      {/* icon user */}
      {/* icon parametre */}
//     </View>
//     <ScrollView showsVerticalScrollIndicator={false} >
//     <View >
    
//     <Text style={{fontSize:16,fontWeight:'700',color:'#b97a56',fontWeight:'900',paddingLeft:20,fontFamily:"robuto"}}>Description </Text>
//     <TextInput
        
//         cursorColor='#337722'  placeholderTextColor={'#585858'} style={styles.inputDescription}
//         placeholder="Type here For Description !"
       
//       />
//     {/* icon edit */}
//     </View>
//     <Text style={{fontSize:16,fontWeight:'700',color:'#000000',fontWeight:'600',paddingLeft:20}}>Gallery</Text>
//     <View style={styles.gallerys}>
    
//       {/* image
//       Viewimage
//       image
//       image */}
//     </View>
//     <Text style={{fontSize:16,fontWeight:'700',color:'#b97a56',fontWeight:'900',paddingLeft:20,fontFamily:'robuto'}}>Details</Text>
      
//     <View style={styles.inputAddProduct}>
//     <Text style={styles.textinputProduct}>Product</Text>
//       <Field placeholder='Cooperative Name ?' backgroundColor='#f0f2f5' style={styles.fieldSpace}   placeholderTextColor={'#'}/> 
     
//     <Text style={styles.textinputProduct}>Type</Text>
    
      
//     <Text style={styles.textinputProduct}> Price</Text>
//       <Field placeholder="Price ?" backgroundColor='#f0f2f5' style={styles.fieldSpace}     keyboardType="numeric" /> 
//       <Text style={styles.textinputProduct}> Max Qunatity</Text>
//       <Field placeholder=' Max Quantity ?' backgroundColor='#f0f2f5' style={styles.fieldSpace}  keyboardType="numeric"/> 
//       <Text style={styles.textinputProduct}>Quality</Text>
//       <Field placeholder='Quality ?' backgroundColor='#f0f2f5' style={styles.fieldSpace} /> 
     
//        <TouchableOpacity  style={styles.button}>
//       <Text style={styles.text}>Submit</Text>
//     </TouchableOpacity>
//     </View>

//     </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default Addcoop;
// const styles = StyleSheet.create({
//   header:{
//     paddingVertical:'20%',
//     flexDirection:'row',
//     justifyContent:'space-between',
//     backgroundColor:'#337722',
    
//   },
//   inputDescription:{
//     backgroundColor:'#f0f2f5',
//     height:100,
//     paddingTop:5,
//     marginTop:20,
//     marginLeft:5,
//     marginRight:20,
//    paddingHorizontal:10,
//    elevation:2,
    
   
//   },
//   gallerys:{
//     height:120,
//     backgroundColor:'#f0f2f5',
//     width:'100%',
//     marginTop:20
//   },
//   inputAddProduct:{
  
//     flexDirection:'column',
//    paddingLeft:30
    
//   },
//   textinputProduct:{
//     color:'#000000',
//     fontSize:14,
//     paddingLeft:10,
//     marginTop:20,
//     elevation:3
//   },inputAddProduct:{
//     height:900,
//   },
//   fieldSpace:{
//     elevation:7
//   },
//   button: {
//     backgroundColor: '#337722',
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     borderRadius: 25,
//     width: '80%',
//     alignSelf: 'center',
//     marginVertical: 10,
//   },
//   text: {
//     color: '#fff',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     fontSize: 16,
//     textAlign: 'center',
//   },






//   }
  
 
  
// )


import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';


const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const product = ['Pistache','Amond','Olive','Date']
const Naturel = ['Bio','Not Bio']
const method =['Per Quote','Per Percentage','Per Equity']
const AnimatedForm = () => {
  
 
  return (
    <View   style={{backgroundColor:'#c5c6d0',flex:1 }}>
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
    <Text style={{marginTop:80,backgroundColor:'#ffff',height:70,paddingVertical:1,fontSize:19,fontWeight:'600',paddingHorizontal:1}}> Coperative characteristics</Text>
      <View style={{ flexDirection:'row',marginBottom:30}} >
       
 
       <SelectDropdown  buttonStyle={{borderColor:'black',borderBottomWidth:1,marginTop:70,marginRight:20,width:180,}} data={product}
        defaultButtonText='1.Product' 
        renderDropdownIcon={()=>{
          return(<View><Icon
                         name="chevron-down-outline"
                         size={22}
                         color="black"
                         style={{paddingTop: 10,}}
                       /></View>)}}/>
        <SelectDropdown  buttonStyle={{borderColor:'black',borderBottomWidth:1,marginTop:70,marginRight:20,width:180,}}
       defaultButtonText='2.Product type' data={Naturel}  renderDropdownIcon={()=>{
 return(<View><Icon
                name="chevron-down-outline"
                size={22}
                color="black"
                style={{paddingTop: 10,}}
              />
   </View>)   }}/>
  
</View>

    <View style={styles.container}>
      <Animated.View style={styles.formField }>
      <Text> Max Qunatity</Text>
        <AnimatedTextInput style={styles.input} placeholder="Quantity ?" />
        </Animated.View>
           <Animated.View style={styles.formField}>
        <Text>Price</Text>
        <AnimatedTextInput style={styles.input} placeholder="price ?" />
        </Animated.View>
        <Animated.View style={styles.formField}>
        <Text>description</Text>
        <AnimatedTextInput style={styles.input} placeholder="description ?" />
        </Animated.View>
       
        </View>
        <SelectDropdown  buttonStyle={{borderColor:'black',borderBottomWidth:1,marginTop:7,marginRight:20,width:220,left:20}} data={method}

        defaultButtonText='Method of Charge' 
        renderDropdownIcon={()=>{
          return(<View><Icon
                         name="chevron-down-outline"
                         size={22}
                         color="black"
                         style={{paddingTop: 10,}}
                       /></View>)}}/>
                        <View>
   <TouchableOpacity style={{backgroundColor:'#18a34a',width:200,justifyContent:'center',alignItems:'center',borderRadius:5,marginLeft:60,marginTop:20,marginBottom:20}}>
      <Text style={{fontSize:25,padding:10,color:'#ffff',}}>
        Submit
      </Text>
     </TouchableOpacity>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      
    alignItems: 'center',
    flexDirection:'row',
   // marginTop:20,
   // marginLeft:15
  },
  formField: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom:10,
    width:125,
    margin:"1%",
  },
  input: {
    fontSize: 12,
    fontWeight: 'bold',
    borderBottomWidth:1,

  },
  header:{
    paddingTop:60,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#18a34a',
    paddingBottom:40,

    
  },
});

export default AnimatedForm;

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import StarReview from './Review';
const Production = () => {
  return (
    <View style={{height:'90%'}}>
      
      <LinearGradient colors={['#337722' ,'#96e6a1']} style={{borderBottomRightRadius:10,padding:10,borderBottomLeftRadius:10,height:700}}>
      <View >
     <View>
     <Image source={require('../assets/agri4u.png')} style={{height:340,width:'100%',borderBottomRightRadius:50,borderBottomLeftRadius:50}}  />
       <View style={{height:40,width:40,borderRadius:100,backgroundColor:'white',position:'absolute',right:20,top:20}}>
        <Icon name="heart-outline"
                size={28}
                color="black"
                style={{paddingLeft:6,paddingTop:6}} 
               />
       </View>
       </View> 
     <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{paddingLeft:15,paddingTop:30,fontSize:20,color:'black',marginBottom:20,fontWeight:'bold'}}>Almond </Text>
        <Text style={{fontSize:19,paddingTop:30,paddingRight:20,color:'black',fontWeight:'bold'}}> 300 KG</Text>
      </View>
      
  
      <Text style={{fontSize:16,marginBottom:20,paddingLeft:10,color:'white',lineHeight:30}}> Relation entre une quantité produite et les quantités des différents facteurs de production (capital, travail) utilisés pour l'obtenir.</Text>
      
      <Text style={styles.ProductionDetail}>Moisture: 30% </Text>
      <Text style={styles.ProductionDetail}>PH:10</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:20,fontWeight:'800'}}> Review : </Text>
      <StarReview/>
      </View>
      </View>
     
    </View>
    
    </LinearGradient>
    </View>
  )
}

export default Production

const styles = StyleSheet.create({
  ProductionDetail:{
    fontSize:16,
    color:'white',
    paddingTop:10
  }
})
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
const Production = () => {
  return (
    <View>
      
      <LinearGradient colors={['#337722' ,'#96e6a1']}>
      <View style={{borderColor:'#040425',}}>
      
     <Image source={require('../assets/agri4u.png')} style={{height:340,width:415,borderBottomRightRadius:50,borderBottomLeftRadius:50}}  />
       <View style={{height:40,width:40,borderRadius:100,backgroundColor:'white',position:'absolute',right:20,top:20}}>
        <Icon name="heart-outline"
                size={28}
                color="black"
                style={{paddingLeft:5,paddingTop:5}} 
               />
       </View>
     <View style={{flexDirection:'column',}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{paddingLeft:15,paddingTop:30,fontSize:18,color:'white'}}>Almond Du Sidi Bouzid</Text>
        <Text style={{fontSize:18,paddingTop:30,paddingRight:20,color:'white'}}> 30DT/KG</Text>
      </View>
      
      <Text style={{fontSize:16,marginTop:20,marginBottom:10,paddingLeft:15,color:'white'}}>Production Details: </Text>
      <Text style={{fontSize:14,marginBottom:10,paddingLeft:15,color:'white'}}> relation entre une quantité produite et les quantités des différents facteurs de production (capital, travail) utilisés pour l'obtenir.</Text>
      
      <Text style={styles.ProductionDetail}>Moisture: 30% </Text>
      <Text style={styles.ProductionDetail}>PH:10</Text>
      <Text style={styles.ProductionDetail}>Rating:5/5</Text>
      </View>
     
    </View>
    
    </LinearGradient>
    </View>
  )
}

export default Production

const styles = StyleSheet.create({
  ProductionDetail:{
    padding:5,
    fontSize:16,
    color:'white'
  }
})
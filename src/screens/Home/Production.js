import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const Production = () => {
  return (
    <View>
      
      <LinearGradient colors={['#337722' ,'#96e6a1']}>
    <View style={{borderColor:'#040425',paddingRight:40,paddingTop:30,paddingBottom:20,paddingLeft:40}}>
      
     <Image source={require('../assets/agri4u.png')} style={{height:200,width:200,alignItems:'center',justifyContent:'center',}}  />
     <View style={{flexDirection:'column',}}>
      <Text style={styles.ProductionDetail}>Production TiTle: almond</Text>
      <Text style={styles.ProductionDetail}>Description: one of the most fruits about taste</Text>
      <Text style={styles.ProductionDetail}>Price: 30DT/KG</Text>
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
    fontSize:14,
    color:'white'
  }
})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import StarReview from './Review';



 

 
const Production = () => {
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={{height:'90%',marginTop:20}}>
      
      <LinearGradient colors={['#18a34a' ,'#96e6a1']} style={{borderBottomRightRadius:10,padding:10,borderBottomLeftRadius:10,height:800}}>
      <View >
     <View>
     <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BXfzkl9ZeyaTVLWRXi-Zk-2QYYf-JpJ9Xw&usqp=CAU"}} style={{height:340,width:'100%',borderBottomRightRadius:50,borderBottomLeftRadius:50}}  />
       </View> 
     <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{paddingLeft:15,paddingTop:30,fontSize:20,color:'black',marginBottom:20,fontWeight:'bold'}}>Almond </Text>
        <Text style={{fontSize:19,paddingTop:30,paddingRight:20,color:'black',fontWeight:'bold'}}> 1200 KG</Text>
        
      </View>
      
  
      <Text style={{fontSize:16,marginBottom:20,paddingLeft:10,color:'white',lineHeight:30}}> Relation entre une quantité produite et les quantités des différents facteurs de production (capital, travail) utilisés pour l'obtenir.</Text>
      <Text style={styles.ProductionDetail}>Member: 5/6
      </Text>
      <Text style={styles.ProductionDetail}>Contact:
      </Text>
      <View style={{flexDirection:'row',marginLeft:10}}>
      <Icon name='call' size={22} /><Text> +216 55 555 555</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,padding:10}}>
      <View style={{flexDirection:'row'}}>
      <StarReview/>
      </View>
      <TouchableOpacity  onPress={handlePress}>
        <Icon name={'heart'}
                size={33}
                color={isPressed ? 'red' : 'white'}
                style={{height:40,width:40,}} 
               />
       </TouchableOpacity>
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
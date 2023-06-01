import React from 'react' ;
import {Text ,Image ,View, ScrollView, StyleSheet,ImageBackground,TouchableOpacity} from 'react-native'

 const SignUp =()=>{
    return(
        <View >
 <ImageBackground source={require('../assets/background-rg.png')} style={styles.bg} resizeMode='cover'></ImageBackground>
 
 <Image source={require('../assets/agri4u.png')}  style={styles.topscreen}  /> 
<Text style={styles.textlogo}>AGRI4U App provides cost effective acess  </Text>
<TouchableOpacity style={styles.rectangle1}  onPress={onPress}><Text style={styles.startedtext}  > Get Started </Text></TouchableOpacity>
<TouchableOpacity style={styles.rectangle2} onPress={onPress}><Text style={styles.exploretext}>Explore</Text></TouchableOpacity>
 </View>  
 )

}
const styles= StyleSheet.create({
bg:{
widht:"100%", height:'100%'
},
topscreen:{
    position:'absolute',
    left:-40,
    top:0,
    height:'50%'
},
textlogo:{
    position:'absolute',
    left:20,
    top:300,
    color:"rgba(0,0,0,1)",
    fontSize:14,
    letterSpacing:0,
    fontStyle:'normal'
    ,textAlign:"center"
},
startedtext:{
    color:"white",
    fontWeight:700
},
rectangle1:{
    position:'absolute',
    left:70,
    top:350,
    fontSize:20,
    letterSpacing:0,
    fontStyle:'normal'
    ,textAlign:"center",
    backgroundColor:"#337722",
    color:'white',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:40,
    paddingRight:40,
    borderRadius:5
    
   

},
rectangle2:{
    position:'absolute',
    left:70,
    top:400,
    color:'#1776C7',
    fontSize:20,
    letterSpacing:0,
    fontStyle:'normal'
    ,textAlign:"center",
    backgroundColor:"white",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:60,
    paddingRight:60,
    borderRadius:5,
    marginTop:10
    
   

},
exploretext:{
    color:'#1776C7',
    fontWeight:700
}

})
export default SignUp
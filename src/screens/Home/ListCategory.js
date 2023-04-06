import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/Icon'

const ListCategory = () => {
    const categoryIcon =[  {/* <Icon/>
    <Icon/>
    <Icon/>
    <Icon/> */} ]
  return (
    <View style={styles.ListCategory}>
  {categoryIcon.map((icon,index)=>(
    <View key={index} style={styles.iconContainer}>
    {icon}
    </View>
  ))}
     
    </View>
  )
}

export default ListCategory

const styles = StyleSheet.create({
    ListCategory:{

    },
    iconContainer:{
        height:60,
        widht:60,
        backgroundColor:"E5FBDB",justifyContent:'center'


    }

})
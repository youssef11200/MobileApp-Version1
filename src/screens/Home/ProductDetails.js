import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetails = () => {
  return (
    <View>
      <Image source={require('../assets/agri4u.png')}/>
      <Text>Product TiTle</Text>
      <Text>Price</Text>
      <Text>Description</Text>
      <Text>ph land </Text>
      <Text>nature of fruits</Text>
      <Text>Rating ******</Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})
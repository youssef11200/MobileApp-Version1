import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Addcoop = () => {
  
    const [title, setTitle] = useState('');
    const [coopqte, setCoopqte] = useState('');
    const [price, setPrice] = useState('');
    const [expanded, setExpanded] = useState(false);
  return (
    <View>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Title</Text>
       <TextInput
      style={{ borderWidth: 1, borderColor: '#ccc', padding: 10 }}
      placeholder="Enter Title here"
      value={title}
      onChangeText={setTitle}
    />
     <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Quantity</Text>
     <TextInput
      style={{ borderWidth: 1, borderColor: '#ccc', padding: 10 }}
      placeholder="Enter Max Quantity here"
      value={coopqte}
      onChangeText={setCoopqte}
    />
     <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Price</Text>
     <TextInput
      style={{ borderWidth: 1, borderColor: '#ccc', padding: 10 }}
      placeholder="Enter Price here"
      value={price}
      onChangeText={setPrice}
    />
    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          <Text>{expanded ? '-' : '+'}</Text>
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={{ padding: 10 }}>
          <Text>{content}</Text>
        </View>
      )}
    </View>
  )
}

export default Addcoop

const styles = StyleSheet.create({})
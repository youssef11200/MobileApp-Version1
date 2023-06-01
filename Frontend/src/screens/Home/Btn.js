import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press,}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: '90%',
        paddingVertical: 5,
        marginVertical: '10%'
      }} activeOpacity={0.4}>
      <Text style={{color: textColor, fontSize: 25,letterSpacing:2, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}

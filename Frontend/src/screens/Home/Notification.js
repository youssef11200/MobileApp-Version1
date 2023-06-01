import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <SafeAreaView>
    <ScrollView>
     <View>
        <Text style={{fontSize:24 }}>
            notification
        </Text>
     </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({})
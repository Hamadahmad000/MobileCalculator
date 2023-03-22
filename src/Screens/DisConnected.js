import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DisConnected = () => {
  return (
    <View style={{backgroundColor:'red',justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,bottom:0,right:0}}>
      <Text style={{fontWeight:'500',fontSize:20,color:'white'}}>Oops! No Internet Connection</Text>
    </View>
  )
}

export default DisConnected

const styles = StyleSheet.create({})
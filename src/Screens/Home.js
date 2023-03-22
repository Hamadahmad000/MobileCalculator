import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NetInfo,{useNetInfo} from '@react-native-community/netinfo'
import { State } from 'react-native-gesture-handler'
import DisConnected from './DisConnected'
const Home = () => {
  const net = useNetInfo()
   
  
  return (
    <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
      <Text style={{fontWeight:'bold',fontSize:20}}>Type = {net.type}
      </Text>
      <Text style={{fontWeight:'bold',fontSize:20}}>Connection = {net.isConnected ? 'Connected' : "DisConnected"}
      </Text>
    {!net.isConnected?   <DisConnected/>:null}
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({})
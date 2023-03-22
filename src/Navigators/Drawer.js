import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../Screens/Home'
export default function Drawer() {
    const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}/>
      </Drawer.Navigator>
     </NavigationContainer>
    // <View>
    //     <Text>Hello World</Text>
    // </View>
  )
}

const styles = StyleSheet.create({})
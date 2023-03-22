import {StyleSheet, Text, View,TouchableOpacity,StatusBar} from 'react-native';
import React,{useState} from 'react';

const App = () => {
  const [buttonsValue, setbuttonsValue] = useState('')
  const BtnValue = (myValue)=>{
    console.log(myValue)
    setbuttonsValue(buttonsValue + myValue)
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <View style={styles.UpperView}>
        <View style={styles.UpperInnerView}>
          <Text style={{fontWeight:'500',fontSize:34,color:'white'}}>{buttonsValue}</Text>
        </View>
      </View>
      <View style={{height:.5,backgroundColor:'grey'}}></View>
      <View style={styles.BottomView}>
        <View style={styles.BottomInnerView}>
          <View style={styles.buttonColumn}>
            <TouchableOpacity onPress={()=>setbuttonsValue('')}><Text style={styles.BtnCommon}>C</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('7')}><Text style={styles.BtnCommon}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('4')}><Text style={styles.BtnCommon}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('1')}><Text style={styles.BtnCommon}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('.')}><Text style={styles.BtnCommon}>.</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonColumn}>
          <TouchableOpacity onPress={()=>BtnValue('+/-')}><Text style={styles.BtnCommon}>+/-</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('8')}><Text style={styles.BtnCommon}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('5')}><Text style={styles.BtnCommon}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('2')}><Text style={styles.BtnCommon}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('0')}><Text style={styles.BtnCommon}>0</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonColumn}>
          <TouchableOpacity onPress={()=>BtnValue('%')}><Text style={styles.BtnCommon}>%</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('9')}><Text style={styles.BtnCommon}>9</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('6')}><Text style={styles.BtnCommon}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('3')}><Text style={styles.BtnCommon}>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('00')}><Text style={styles.BtnCommon}>00</Text></TouchableOpacity>
          </View>
          <View style={[styles.buttonColumn,{backgroundColor:'#313032',borderRadius:50}]}>
          <TouchableOpacity onPress={()=>BtnValue('/')}><Text style={styles.BtnCommon}>/</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('*')}><Text style={styles.BtnCommon}>*</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('-')}><Text style={styles.BtnCommon}>-</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>BtnValue('+')}><Text style={styles.BtnCommon}>+</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              const output = eval(buttonsValue)
              setbuttonsValue(output)
            }} style={{backgroundColor:'white',borderRadius:50,width:80,height:80,alignItems:'center',justifyContent:'center'}}><Text style={[styles.BtnCommon,{color:'black'}]}>=</Text></TouchableOpacity>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  UpperView: {
    flex: 1,
    backgroundColor: '#3E3F40',
  },
  BottomView: {
    flex: 1,
    backgroundColor: '#3E3F40',
    justifyContent:'center',
    alignItems:'center'
  },
  BottomInnerView: {
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    padding:20
   
  },
  buttonColumn: {
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  BtnCommon: {
    color:'white',
    fontSize:26,
  
    padding:10
  },
  UpperInnerView:{
   flex:1,
   justifyContent:'flex-end',
   alignItems:'flex-end',
   padding:13
  }
});

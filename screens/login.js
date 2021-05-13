import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component() {
  constructor(){
    super()
      this.state = {emailId:'', passward:''}}
  render (){
   return(
<View>
  <TextInput
  placeholder = 'abc@xyz.com'
  keyboardType ={'email-address'}
  onChangeText={(text)=>{
    this.setState({
      emailId: text
    })
  }}
      />
  <TextInput
    style={styles.textInput}
    placeholder ={"Password"}
    secureTextEntry = {true}
    onChangeText={(text)=>{
    this.setState({
       password: text
           })
         }}
        />
  <TouchableOpacity style={styles.button}
  onPress={()=>{}}>
<Text>SIGN UP</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}
  onPress={()=>{}}>
<Text>LOGIN</Text>
    </TouchableOpacity>
  </View>
)
  }}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#68C6B8',
  },
  text:{
    marginTop:10,
    marginBottom:500,
    alignSelf:'center',
    fontSize:25,
    textDecorationLine: 'underline',
  },
  text2:{
    marginTop:10,
    alignSelf:'center',
    fontSize:15,
  },
  loginbox:{
    borderColor:'black',
    justifyContent:'center',
    backgroundColor:'white',
    marginBottom:5,
    borderRadius:10
  },
  container2:{
    flex:1,
    alignItems:'center',
    marginTop:1,
  },
  button:{
    borderColor:'white',
    justifyContent:'center',
    backgroundColor:'#E35E28',
    marginBottom:5,
    borderRadius:8,
    width:100 ,
    alignItems:'center'   
  }
});
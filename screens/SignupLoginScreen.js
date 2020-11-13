import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet,
    TextInput
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import App from '../App';

export default class SignupLoginScreen extends App(){
    constructor(){
        super();
        this.state = {
            emailId: '',
            password: '',
            username: ''
        }
    }

    userLogin=(username,password)=>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(()=>{
            return Alert.alert("Successfully Logined")
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }

    userSignUp=(username,password)=>{
        firebase.auth().createUserWithEmailAndPassword(username,password)
        .then((response)=>{
            return Alert.alert("User Added Successfully")
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }

    <Text style={{color:'#ff5722',fontSize: 18,fontWeight:'bold',marginLeft:55}}>UserName</Text>
    <View style={{alignItems:'center'}}>
    <TextInput
    style={styles.loginBox}
    keyboardType='email-address'
    onChangeText={(text)=>{
        this.setState({
            username: text
            })
        }}
        />
    </View>

        <View style={{alignItems:'center'}}>
        <TouchableOpacity
        style={[styles.button,{marginBottom: 10}]}
        onPress={()=>{this.userLogin(this.state.username,this.state.password)}}>
        <Text style={{color:'#ff5722',fontSize: 18,fontWeight:'bold'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>{this.userSignUp(this.state.username,this.state.password)}}>
        <Text style={{color:'#ff5722',fontSize: 18,fontWeight:'bold'}}>SIGN UP</Text>    
        </TouchableOpacity>
    </View>

}

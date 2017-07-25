import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
	ScrollView
} from 'react-native';
var Login = React.createClass({
	getInitialState:function(){
 		return{
 			userName:"",
            password:"",
 		};
 	},

	
    render:function() {
	      return (
			    <View style={styles.loginview}>
			    <Text>登录</Text>
			     </View>
			   )
	  }
});

var styles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff',
  }
});

module.exports = Login;
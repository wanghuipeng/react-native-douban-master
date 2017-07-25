/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

var SearchBar = React.createClass({
	render:function(){
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
				    <TextInput style={styles.input} {...this.props} underlineColorAndroid='transparent' />
				</View>
				<TouchableOpacity style={styles.btn} {...this.props}>
				    <Text style={styles.search}>搜索</Text>
				</TouchableOpacity>
			</View>
		);
	}
});

var styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems: "center",
    height:40,
    marginTop:10,
    marginBottom:10
  },
  inputContainer: {
    flex:1,
    marginLeft: 5,
  },
  input: {
  	flex:1,
  	height:40,
  	borderWidth:1,
  	borderRadius:4,
  	borderColor:"#ddd",
  	paddingLeft:5,
  	backgroundColor:"#fff",
  	fontSize:14
  },
  btn:{
  	width:65,
  	marginLeft:5,
  	marginRight:5,
  	backgroundColor:"#2bb7ab",
  	borderRadius:4,
  	justifyContent:"center",
  	alignItems: "center",
  },
  search:{
  	flex:1,
  	color:"#fff",
  	fontSize:14,
  	fontWeight:"bold",
  	textAlign:"center",
  	lineHeight:30
  }
});

module.exports = SearchBar;

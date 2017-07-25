/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
 
var Icon = require("./left_icon");
var Header = React.createClass({
	render:function(){
		var headerContent = this.props.initObj;
		return (
			<View style={styles.header}>
				<TouchableOpacity style={styles.left_btn} onPress={this._pop}>
				    <Icon/>
				    <Text style={styles.btn_text}>{headerContent.backName}</Text>
				</TouchableOpacity>
				<View style={styles.title_container}>
					<Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
				</View>
			</View>
		);
	},
	//返回按钮事件
    _pop:function(){
    	this.props.navigator.pop();
    }
});

var styles = StyleSheet.create({
  header: {
  	height:40,
  	backgroundColor:"#2bb7ab",
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center"
  },
  left_btn:{
  	flexDirection:"row",
  	justifyContent:"center",
  	alignItems:"center"
  },
  btn_text:{
  	color:"#fff",
  	fontSize:14
  },
  title_container:{
  	flex:1,
  	justifyContent:"center",
  	alignItems:"center"
  },
  title:{
  	color:"#fff",
  	fontSize:14,
  	lineHeight:18,
  	width:100,
  	textAlign:"center",
  	marginLeft:-40
  }
});

module.exports = Header;

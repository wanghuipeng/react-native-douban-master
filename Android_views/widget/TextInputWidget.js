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
  TouchableOpacity,
  TextInput,
} from 'react-native';
var Arrow = require("./../common/arrow");
var TextInputWidget = React.createClass({
	render:function(){
		var textImagePart = this.props.initObj;
		return (
			<View style={styles.listHeader} >
                <View style={styles.titleContainer}>
                    <Text style={{color:"#999",alignSelf: "flex-start"}}>{textImagePart.title}</Text>
				</View>
				<View style={styles.inputContainer}>
				    <TextInput style={styles.input} {...this.props}  underlineColorAndroid='transparent' />
				</View>
				<View style={{justifyContent:"center"}}>
				     <Arrow></Arrow>
				</View>
            </View>
		);
	},

});

var styles = StyleSheet.create({
	listHeader: {
	  	flexDirection:"row",
	  	flexWrap:"wrap",
	  	height:50,
	  	paddingLeft:10,
	  	paddingRight:10,
	  	backgroundColor:"#fff",
	  	borderBottomWidth:StyleSheet.hairlineWidth,
		borderBottomColor: '#eee',
	  },
	titleContainer:{
	  	justifyContent:"center",
	  	alignItems:"flex-start",
	  	flex:1,
	 },
	  inputContainer:{
	  	flex:2,
	  	alignItems:"flex-end",
	  },
	  input: {
	  	width:160,
	  	backgroundColor:"#fff",
	  	fontSize:14,
	  	textAlign: 'right',
	  },
});
module.exports = TextInputWidget;

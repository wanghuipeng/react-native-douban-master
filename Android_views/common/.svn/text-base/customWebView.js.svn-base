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
  WebView
} from 'react-native';
 
var Header = require("./header");

var CustomWebView = React.createClass({
	render:function(){
		return (
			<View style={{backgroundColor:"#fff",flex:1}}>
				<Header 
				navigator={this.props.navigator}
				initObj={{
					backName:this.props.backName,
					barTitle:this.props.title,
				}}/>
				<WebView 
				startInLoadingState={true}
				contentInset={{top:-44,bottom:-120}}
				source={{uri:this.props.url}}
				/>
			</View>
		);
	}
});

module.exports = CustomWebView;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  Image
} from 'react-native';
 
 var Util = {
 	//屏幕尺寸
 	windowSize:{
 		width:Dimensions.get("window").width,
 		height:Dimensions.get("window").height,
 	},
 	//fetch
 	getRequest:function(url,successCallback,failCallback){
 		fetch(url)
 		.then((response) => response.json())
 		.then((responseData) => successCallback(responseData))
 		.catch((error) => failCallback(error));
 	},
 	//loading
 	loading:<ActivityIndicator style={{marginTop:180}} color="#00aa00" />
 }

module.exports = Util;
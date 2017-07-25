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
  Image,
  TouchableOpacity,
  ListView,
  ScrollView
} from 'react-native';
var SwiperBanner = require('./swiperBanner');
var CardList = require('./cardList');
var Grid = require('./grid');
var Util = require("./../common/util");
var HomeList = require("./homeList");

var Home = React.createClass({
	render:function(){
		return (
			<View style={{flex:1,backgroundColor:'white',width:Util.windowSize.width}}>
			    <ScrollView>
			        <SwiperBanner route={this.props.route} navigator={this.props.navigator} />
			        <CardList route={this.props.route} navigator={this.props.navigator} />
			        <View style={{height : 8, backgroundColor : '#F2F2F2'}} />
			        <Grid route={this.props.route} navigator={this.props.navigator} />
			        <View style={{height : 8, backgroundColor : '#F2F2F2'}} />
			        <HomeList route={this.props.route} navigator={this.props.navigator} />
				</ScrollView>
			</View>
		);
	},
	
});

module.exports = Home;

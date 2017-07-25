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
  Image,
  TouchableHighlight,
  ListView,
  ScrollView,
  ToastAndroid
} from 'react-native';
var Util = require("./../common/util");

var Grid = React.createClass({

	_onPress:function(){
		ToastAndroid.show('被点击了',ToastAndroid.SHORT);
	},
	render:function(){
		return (
			<View style={{flex:1,flexWrap:'wrap'}}>
				<View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>
					<TouchableHighlight onPress={this._onPress}>
					    <View style={styles.cell}>
					      <Text style={styles.title1}>周三半价</Text>
					      <Text style={styles.title2}>江南皮革仓倒闭了</Text>
					      <Image source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}} style={styles.image}></Image>
					    </View>
					</TouchableHighlight>
					<TouchableHighlight onPress={this._onPress}>
					    <View style={styles.cell}>
					      <Text style={styles.title1}>周三半价</Text>
					      <Text style={styles.title2}>疯抢仅一天</Text>
					      <Image source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}} style={styles.image}></Image>
					    </View>
					</TouchableHighlight>
					<TouchableHighlight onPress={this._onPress}>
					    <View style={styles.cell}>
					      <Text style={styles.title1}>周三半价</Text>
					      <Text style={styles.title2}>疯抢仅一天</Text>
					      <Image source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}} style={styles.image}></Image>
					    </View>
					</TouchableHighlight>
				</View>
				<View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>
					<TouchableHighlight onPress={this._onPress}>
					    <View style={styles.cell}>
					      <Text style={styles.title1}>周三半价</Text>
					      <Text style={styles.title2}>疯抢仅一天</Text>
					      <Image source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}} style={styles.image}></Image>
					    </View>
					</TouchableHighlight>
					<TouchableHighlight onPress={this._onPress}>
					    <View style={styles.cell}>
					      <Text style={styles.title1}>周三半价</Text>
					      <Text style={styles.title2}>疯抢仅一天</Text>
					      <Image source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}} style={styles.image}></Image>
					    </View>
					</TouchableHighlight>
					<TouchableHighlight onPress={this._onPress}>
					    <View style={styles.cell}>
					      <Text style={styles.title1}>周三半价</Text>
					      <Text style={styles.title2}>疯抢仅一天</Text>
					      <Image source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}} style={styles.image}></Image>
					    </View>
					</TouchableHighlight>
				</View>
			</View>
		);
	},
	
});

var styles = StyleSheet.create({
	cell:{
		width:Util.windowSize.width/3,
		flex:1,
		backgroundColor:'white',
		borderWidth:0.2,
		borderColor:'#eee',
		height:100,
	},
	title1:{
		color:'#333',
		fontSize:14,
		fontWeight:'bold',
		textAlign:'center',
		paddingTop:10
	},
	title2:{
		color:'red',
		fontSize:10,
		textAlign:'center' 
	},
	image:{
		borderWidth:1,
		borderColor:'#eee',
		borderRadius:40,
		width:40,
		height:40,
		alignSelf:'center',
		marginTop:10,
		marginBottom:10
	}
});

module.exports = Grid;

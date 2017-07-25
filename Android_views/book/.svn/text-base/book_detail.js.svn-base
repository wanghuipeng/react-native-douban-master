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
  ScrollView
} from 'react-native';
 
var ServiceURL = require("./../common/service");
var Util = require("./../common/util");
var Header = require("./../common/header");
var BookItem = require("./book_item");

var BookDetail = React.createClass({
	getInitialState:function(){
		return {
			bookData:null   //图书对象详情信息
		};
	},
	getData:function(){
		var that = this;
		var url = ServiceURL.book_detail_id+this.props.bookID;
		Util.getRequest(url,function(data){
			that.setState({
				bookData:data
			});
		},function(error){
			alert(error);
		});
	},
	render:function(){
		return (
			<ScrollView style={styles.container}>
				{
			    	this.state.bookData?
			    	<View>
			    	    <Header
			    	    initObj={{backName:"图书",barTitle:this.state.bookData.title}}
			    	    navigator={this.props.navigator} />
			    	    <BookItem book={this.state.bookData} />
			    	    <View style={{height:1,backgroundColor:"#eee"}} ></View>
			    	    <View>
				    	   <Text style={styles.title}>图书简介</Text>
				    	   <Text style={styles.text}>{this.state.bookData.summary}</Text>
				        </View>
				        <View style={{marginTop:10}}>
				    	   <Text style={styles.title}>作者简介</Text>
				    	   <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
				        </View>
				        <View style={{height:55}}></View>
			    	</View>
			    	:Util.loading
			    }
			</ScrollView>
		);
	},
	componentDidMount:function(){
		this.getData();
	}
});

var styles = StyleSheet.create({
  container: {
  	flex:1,
  	backgroundColor:"#fff"
  },
  title:{
  	fontSize:14,
  	marginTop:10,
  	marginLeft:10,
  	marginBottom:10,
  	fontWeight:"bold",
  	color:"#666"
  },
  text:{
  	marginLeft:10,
  	marginRight:10,
  	color:"#999",
  	lineHeight:22,
  	fontSize:12,
  	padding:10,
  	borderWidth:1,
  	borderColor:"#ddd",
  	borderRadius:6,
  	backgroundColor:"#eee"
  }
});

module.exports = BookDetail;

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
  TouchableOpacity
} from 'react-native';
 
var Arrow = require("./../common/arrow");

var BookItem = React.createClass({
	render:function(){
		var book = this.props.book;
		return (
			<TouchableOpacity style={styles.item} {...this.props}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{uri:book.image}}/>
				</View>
				<View style={styles.contentContainer}>
					<View style={styles.textContainer}>
						<Text numberOfLines={1} style={{color:"#666",fontWeight:"bold"}}>{book.title}</Text>
					</View>
					<View  style={styles.textContainer}>
						<Text style={styles.publisher_author}>{book.publisher}</Text>
					</View>
					<View  style={styles.textContainer}>
						<Text style={styles.publisher_author} numberOfLines={1}>{book.author}</Text>
					</View>
					<View style={{flexDirection:"row",flex:1,alignItems:"center"}}>
						<Text style={styles.price}>{book.price}</Text>
						<Text style={styles.pages}>{book.pages}页</Text> 
					</View>
				</View>
				<View style={styles.contentContainer,{justifyContent:"center"}}>
				     <Arrow></Arrow>
				</View>
			</TouchableOpacity>
			
		);
	}
});

var styles = StyleSheet.create({
  item: {
  	flexDirection:"row",
  	height:80,
  	padding:10,
  	backgroundColor:"#fff"
  },
  imageContainer:{
  	justifyContent:"center",
  	alignItems:"center"
  },
  image:{
  	width:50,
  	height:60
  },
  contentContainer:{
  	flex:1,
  	marginLeft:15
  },
  textContainer:{
  	flex:1,
  	justifyContent:"center"
  },
  publisher_author:{
  	color:"#A3A3A3",
  	fontSize:10
  },
  price:{
  	color:"#2bb7ab",
  	fontSize:12
  },
  pages:{
  	marginLeft:10,
  	color:"#A7A0A0"
  }
});

module.exports = BookItem;

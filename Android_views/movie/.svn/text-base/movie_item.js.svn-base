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

var MovieItem = React.createClass({
	render:function(){
		var movie = this.props.movie;
		
		var actors = [];
		for(var i in movie.casts){
			actors.push(movie.casts[i].name);
		}
		
		return (
			<TouchableOpacity style={styles.item} {...this.props}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} resizeMode="contain" source={{uri:movie.images.medium}}/>
				</View>
				<View style={styles.contentContainer}>
					<View style={styles.textContainer}>
						<Text numberOfLines={1} style={styles.text}>名称: {movie.title}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text numberOfLines={1} style={styles.text}>演员: {actors}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text numberOfLines={1} style={styles.text}>评分: {movie.rating.average}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text numberOfLines={1} style={styles.text}>时间: {movie.year}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text numberOfLines={1} style={styles.text}>标签: {movie.genres}</Text>
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
  	height:100,
  	padding:10,
  	backgroundColor:"#fff"
  },
  imageContainer:{
  	justifyContent:"center", 
  	alignItems:"center"
  },
  image:{
  	width:60,
  	height:75
  },
  contentContainer:{
  	flex:1,
  	marginLeft:15
  },
  textContainer:{
  	flex:1,
  	justifyContent:"center"
  },
  text:{
  	fontSize:12
  }
});

module.exports = MovieItem;

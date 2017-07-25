/**
 * Created by edagarli on 16/3/16.
 * https://github.com/edagarli
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
    } from 'react-native';
var Util = require('./../common/util');
var Arrow = require("./../common/arrow");

module.exports = React.createClass({

    render: function(){
        var row = this.props.row;
        return(
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: row.book.image}} style={styles.image}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1} style={{color:"#666",fontWeight:"bold"}}>{row.book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1} style={styles.publisher_author}>{row.book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1} style={styles.publisher_author}>{row.book.author}</Text>
                    </View>
                    <View style={{flexDirection:"row",flex:1,alignItems:"center"}}>
                        <Text style={styles.price}>{row.book.price}</Text>
                        <Text style={styles.pages}>{row.book.pages}页</Text>
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
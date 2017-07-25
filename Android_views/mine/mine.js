


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ScrollView,
    TouchableHighlight
    } from 'react-native';
    var Util = require('./../common/util');
var ServiceURL = require('./../common/service');
var HasRead = require('./has_read_books');
var WantRead = require('./want_read_books');
var Me = require("./../form/me");
var Login = require("./../login/LoginView");
var Arrow = require("./../common/arrow");
var History = require("./history");
var MyCollect = require("./myCollect");
var Mine = React.createClass({
		showHistory:function(bookID){
			var history = {
				component:History,
			}
			this.props.navigator.push(history);
		},
		showCollect:function(bookID){
			var myCollect = {
				component:MyCollect,
			}
			this.props.navigator.push(myCollect);
		},
    render: function () {
        var urls = [ServiceURL.has_read_book, ServiceURL.want_read_book];
        var items = ['我读过的书', '我想读的书'];
        var components = [HasRead, WantRead];
        var JSXDOM = [];
        for (var i in items) {
            JSXDOM.push(
                <TouchableHighlight key={items[i]} onPress={this._loadPage.bind(this, components[i], items[i], urls[i])}>
                    <View style={[styles.item, {flexDirection:'row'}]}>
                        <View style={i==0 && styles.circle0}></View>
                        <View style={i==1 && styles.circle1}></View>
                        <Text style={[styles.font,{flex:1}]}>{items[i]}</Text>
                    </View>
                </TouchableHighlight>
            );
        }
        return (
            <ScrollView style={styles.container} navigator={this.props.navigator} >
                <TouchableHighlight onPress={this._editForm.bind(this)}>
	                <View style={styles.listHeader} >
	                    <View style={styles.imageContainer}>
							<Image style={styles.image} source={require('image!navicon5')}/>
						</View>
						<View style={styles.contentContainer}>
							<View style={styles.textContainer}>
								<Text numberOfLines={1} style={{color:"#666",fontWeight:"bold"}}>王会鹏</Text>
							</View>
						</View>
						<View style={styles.contentContainer,{justifyContent:"center"}}>
						     <Arrow></Arrow>
						</View>
	                </View>
	            </TouchableHighlight>
	            
                <View style={{height : 8, backgroundColor : '#F2F2F2'}} />
                <View>
                    {JSXDOM}
                </View>
                <View style={{height : 8, backgroundColor : '#F2F2F2'}} />
                <TouchableHighlight onPress={this.showHistory.bind(this)}>
	                <View style={[styles.item, {flexDirection:'row'}]}>
	                        <View style={styles.circle0}></View>
	                        <Text style={[styles.font,{flex:1}]}>浏览历史</Text>
	                </View>
	              </TouchableHighlight>
	              <TouchableHighlight onPress={this.showCollect.bind(this)}>
	                <View style={[styles.item, {flexDirection:'row'}]}>
	                        <View style={styles.circle1}></View>
	                        <Text style={[styles.font,{flex:1}]}>我的收藏</Text>
	                </View>
	              </TouchableHighlight>
                <View style={{height : 8, backgroundColor : '#F2F2F2'}} />
                <TouchableHighlight onPress={this._loginForm.bind(this)}>
	                <View style={[styles.item, {flexDirection:'row'}]}>
	                        <Text style={{flex:1,textAlign:'center'}}>登录</Text>
	                </View>
	            </TouchableHighlight>
	            <View style={{height : 8, backgroundColor : '#F2F2F2'}} />
            </ScrollView>
        );
    },
    _loadPage: function(component, title, url){
        this.props.navigator.push({
            component: component,
            passProps:{
                backName: '我的',
                title: title,
                url: url
            }
        });
    },
    _editForm:function(){
		var me = {
			component:Me
		}
		
		this.props.navigator.push(me);
	},
	_loginForm:function(){
		var login = {
			component:Login
		}
		
		this.props.navigator.push(login);
	},
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    item: {
        height: 45,
        justifyContent: 'center',
        borderTopWidth: Util.pixel,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth:StyleSheet.hairlineWidth,
		borderBottomColor: '#eee'
    },
    font: {
        fontSize: 14,
        marginLeft: 15,
        marginRight: 10,
    },
    
    tag: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    circle0:{
    	width:14,
    	height:14,

    	marginLeft:15,
    	backgroundColor:"gray"
    },
    circle1:{
    	width:14,
    	height:14,

    	marginLeft:15,
    	backgroundColor:"yellow"
    },
	  imageContainer:{
	  	justifyContent:"center",
	  	alignItems:"center"
	  },
	  contentContainer:{
	  	flex:1,
	  	marginLeft:15
	  },
	  textContainer:{
	  	flex:1,
	  	justifyContent:"center"
	  },
	  listHeader: {
	  	flexDirection:"row",
	  	height:70,
	  	padding:10,
	  	backgroundColor:"#fff"
	  },
	  image:{
	  	width:50,
	  	height:50,
	  	borderWidth:1,
		borderColor:'#eee',
		borderRadius:40,
      }
});

module.exports = Mine;
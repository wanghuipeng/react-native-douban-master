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
  TouchableOpacity
} from 'react-native';
var Util = require("./../common/util");
var MovieWebView = require("./../common/customWebView");
var cardData = [{
  img : 'navicon1',
  text : '房产',
  link : 'http://m.58.com/sh/house.shtml?58hm=m_home_house_new&58cid=2&from=home_house'                      
},{
  img : 'navicon2',
  text : '二手车',
  link : 'http://m.58.com/sh/house.shtml?58hm=m_home_house_new&58cid=2&from=home_house'                      
},{
  img : 'navicon3',
  text : '二手',
  link : 'http://m.58.com/sh/house.shtml?58hm=m_home_house_new&58cid=2&from=home_house'                      
},{
  img : 'navicon4',
  text : '宠物',
  link : 'http://m.58.com/sh/house.shtml?58hm=m_home_house_new&58cid=2&from=home_house'                      
},{
  img : 'navicon5',
  text : '招聘',
  link : 'http://m.58.com/sh/house.shtml?58hm=m_home_house_new&58cid=2&from=home_house'                      
},{
  img : 'navicon6',
  text : '本地',
  link : 'http://m.58.com/sh/house.shtml?58hm=m_home_house_new&58cid=2&from=home_house'                      
},{
  img : 'navicon7',
  text : '兼职',
  link : 'http://m.58.com/sh/house.shtml?58hm=m_home_house_new&58cid=2&from=home_house'                      
},{
  img : 'navicon8',
  text : '送话费',
  link : 'http://m.58.com/sh/house.shtml?58hm=m_home_house_new&58cid=2&from=home_house'                      
}

];
var CardList = React.createClass({
	_link:function(title,url){
		var detailRoute = {
			component:MovieWebView,
			passProps:{
				backName:null,
				title:title,
				url:url
			}
		}
		
		this.props.navigator.push(detailRoute);
	},
    renderItems:function(items){
		return (
	    <View>
			<View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>
			  <TouchableOpacity onPress={this._link.bind(this,items[0].text,items[0].link)}>
		        <View  style={{width:Util.windowSize.width/4,height:65,flex:1}} >
					<Image source={{uri : items[0].img}} style={{alignSelf:'center',width:25,height:25,marginTop:10}} />
					<Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}} >
						{items[0].text}
					</Text>
				</View>
		      </TouchableOpacity>
		      <TouchableOpacity onPress={this._link.bind(this,items[1].text,items[1].link)} >
		        <View  style={{width:Util.windowSize.width/4,height:65,flex:1}} >
						<Image source={{uri : items[1].img}} style={{alignSelf:'center',width:25,height:25,marginTop:10}} />
						<Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}} >
							{items[1].text}
						</Text>
				</View>
		      </TouchableOpacity>  
		      <TouchableOpacity onPress={this._link.bind(this,items[2].text,items[2].link)} >
		        <View  style={{width:Util.windowSize.width/4,height:65}} >
						<Image source={{uri : items[2].img}} style={{alignSelf:'center',width:25,height:25,marginTop:10}} />
						<Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}} >
							{items[2].text}
						</Text>
				</View>
		      </TouchableOpacity>
		      <TouchableOpacity onPress={this._link.bind(this,items[3].text,items[3].link)}>
		        <View  style={{width:Util.windowSize.width/4,height:65}} >
						<Image source={{uri : items[3].img}} style={{alignSelf:'center',width:25,height:25,marginTop:10}} />
						<Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}} >
							{items[3].text}
						</Text>
				</View>
		      </TouchableOpacity>
		    </View>
		    <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>
			  <TouchableOpacity onPress={this._link.bind(this,items[4].text,items[4].link)}>
		        <View  style={{width:Util.windowSize.width/4,height:65,flex:1}} >
						<Image source={{uri : items[4].img}} style={{alignSelf:'center',width:25,height:25,marginTop:10}} />
						<Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}} >
							{items[4].text}
						</Text>
				</View>
		      </TouchableOpacity>
		      <TouchableOpacity onPress={this._link.bind(this,items[5].text,items[5].link)} >
		        <View  style={{width:Util.windowSize.width/4,height:65,flex:1}} >
						<Image source={{uri : items[5].img}} style={{alignSelf:'center',width:25,height:25,marginTop:10}} />
						<Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}} >
							{items[5].text}
						</Text>
				</View>
		      </TouchableOpacity>  
		      <TouchableOpacity onPress={this._link.bind(this,items[6].text,items[6].link)} >
		        <View  style={{width:Util.windowSize.width/4,height:65}} >
						<Image source={{uri : items[6].img}} style={{alignSelf:'center',width:25,height:25,marginTop:10}} />
						<Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}} >
							{items[6].text}
						</Text>
				</View>
		      </TouchableOpacity>
		      <TouchableOpacity onPress={this._link.bind(this,items[7].text,items[7].link)}>
		        <View  style={{width:Util.windowSize.width/4,height:65}} >
						<Image source={{uri : items[7].img}} style={{alignSelf:'center',width:25,height:25,marginTop:10}} />
						<Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}} >
							{items[7].text}
						</Text>
				</View>
		      </TouchableOpacity>
		    </View>
		</View>
		);
	},
	render:function(){
		return (
				<View style={{flex:1,flexWrap:'wrap'}}>
					{this.renderItems(cardData)}
				</View>
		);
	},
	
});


module.exports = CardList;

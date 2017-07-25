import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
var Util = require("./../common/util");
var MovieWebView = require("./../common/customWebView");
var SwiperBanner = React.createClass({
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
  render: function() {
    return (
      <Swiper height={59}  
                loop={true}  
                index={0}  
                autoplay={true}  
                horizontal={true}
                dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 5, height: 5, borderRadius: 5, marginLeft: 5, marginRight: 5}} />}
		            activeDot={<View style={{backgroundColor: '#fff', width: 5, height: 5, borderRadius: 5, marginLeft: 5, marginRight:5}} />}
		            paginationStyle={{
		              bottom: 13
                }}
                >
      <TouchableOpacity onPress={this._link.bind(this,"优蓝网","http://m.youlanw.com/sh/")} style={{flex:1,flexDirection:"row",flexWrap:'wrap'}}>
        <View style={styles.slide}>
          <Image style={styles.image} source={require('image!bannerone')} />
        </View>
      </TouchableOpacity>  
        <TouchableOpacity onPress={this._link.bind(this,"百度","https://www.baidu.com/")} style={{flex:1,flexDirection:"row",flexWrap:'wrap'}}>
        <View style={styles.slide}>
          <Image style={styles.image} source={require('image!bannertwo')}  />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._link.bind(this,"腾讯","http://xw.qq.com/index.htm")} style={{flex:1,flexDirection:"row",flexWrap:'wrap'}}>
        <View style={styles.slide}>
          <Image style={styles.image} source={require('image!bannerthree')}  />
        </View>
        </TouchableOpacity>
      </Swiper>
    )
  }
});

var styles = StyleSheet.create({
  slide:{
  	flex: 1,
    backgroundColor: 'transparent'
    },
		image: {
		width:Util.windowSize.width,
		height:Util.windowSize.width/5.8181,
		resizeMode: 'cover'
		}
});
module.exports = SwiperBanner;

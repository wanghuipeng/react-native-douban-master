import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import Swiper from 'react-native-swiper';
var Util = require("./../common/util");

var pics = [{
			  img : 'bannerone'            
			},{
			  img : 'bannertwo'                
			},{
			  img : 'bannerthree'
			}
		];
var SwiperBanner = React.createClass({
	renderItems:function(data){
		return data.map(function(items,i){
			return (

					<View style={styles.slide} key={i} >
							<Image source={{uri : items.img}} style={styles.image}  resizeMode = "contain"  />
					</View>

			)
		});
	},
  render: function() {
    return (
	      <Swiper height={59.3}  
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
	        {this.renderItems(pics)}
	      </Swiper>
      
    )
  },
  
});

var styles = StyleSheet.create({
  slide:{
  	flex: 1,
    backgroundColor: 'transparent'
    },
		image: {
		width:Util.windowSize.width,
		height:60,
		flex: 1
		}
});
module.exports = SwiperBanner;

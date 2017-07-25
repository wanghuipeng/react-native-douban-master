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
  ScrollView,
} from 'react-native';

var ServiceURL = require("./../common/service");
var Util = require("./../common/util");
var Header = require("./../common/header");
var TextInputWidget = require("./../widget/TextInputWidget");  
var TextImageWidget = require("./../widget/TextImageWidget");  
var TextTipsWidget1 = require("./../widget/TextTipsWidget1"); 
var TextTipsWidget2 = require("./../widget/TextTipsWidget2"); 
var TextTipsWidget3 = require("./../widget/TextTipsWidget3"); 
var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
};
var Me = React.createClass({

	
	render:function(){
		return (
			<ScrollView style={styles.container}>
			    	<View>
			    	    <Header
			    	    initObj={{barTitle:"个人资料"}}
			    	    navigator={this.props.navigator} />
			    	    <View>  

					        <TextImageWidget  initObj={{title:'头像'}}  />  
					    </View>  
					    <View>  
					        <TextInputWidget  initObj={{title:'昵称'}} placeholder="请填写昵称"/> 
					    </View> 
					    <View>  
					        <TextTipsWidget1  initObj={{title:'性别'}} /> 
					    </View>
					    <View>  
					        <TextTipsWidget2  initObj={{title:'生日'}} /> 
					    </View>
					    <View style={{height : 8, backgroundColor : '#F2F2F2'}} />
			    	    <View>  
					        <TextTipsWidget3  initObj={{title:'学历'}} /> 
					    </View> 
					    <View>  
					        <TextInputWidget  initObj={{title:'院校'}} placeholder="请填写院校"/> 
					    </View>
					    <View>  
					        <TextInputWidget  initObj={{title:'专业'}} placeholder="请填写专业"/> 
					    </View>
			    	</View>
			</ScrollView>
		);
	},
	  
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

module.exports = Me;

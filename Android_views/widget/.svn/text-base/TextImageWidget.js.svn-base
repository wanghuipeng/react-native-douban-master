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
  TouchableOpacity,
  Image,
} from 'react-native';
import  ImagePicker from 'react-native-image-picker'; //第三方相机
import  FileUpload from 'react-native-fileupload';     //上传图片
var Arrow = require("./../common/arrow");
var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,                                   //很重要，不设置会导致app很卡
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
};
var TextImageWidget = React.createClass({
	getInitialState:function() {
	    return {
	      user: {},
	    };
	  },
	cameraAction:function(){
         ImagePicker.showImagePicker(photoOptions,(didCancel,response) =>{
            if (!didCancel) {
		        // You can display the image using either:
		        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
		        //const source = {uri: response.uri.replace('file://', ''), isStatic: true};
		        console.log(response);
		
		        FileUpload.upload({
		            uploadUrl: 'http://123.57.6.75:8080/source/user/complete',
		            method: 'POST', // default 'POST',support 'POST' and 'PUT'
		            headers: {
		              'Accept': 'application/json',
		              "AUTH": that.state.user.session,
		            },
		            fields: { //todo 这里其实应该是当前用户真实的相关数据，由于服务接口修改头像捆绑在用户信息提交上了～
		                'realName': '',
		                "nickName": "",
		                "sex": "0",
		                "birth": "",
		                "phone": "",
		                "icdNum": "",
		            },
		            files: [
		              {
		                name: 'faceFile', //todo 这里要叮嘱一下，由于所使用的FileUpload组件版本bug，这个参数并没有被使用，可以看https://github.com/PhilippKrone/react-native-fileupload/issues/5
		                filename: response.uri.substring(response.uri.lastIndexOf("/")+1), // require, file name
		                filepath: response.uri // require, file absoluete path
		              },
		            ]
		        }, function(err, result) {
		          console.log('upload:', err, result);
		        });
		      }
		})
    },
	render:function(){
		var textImagePart = this.props.initObj;
		return (
			<View style={styles.listHeader} >
                <View style={styles.titleContainer}>
                    <Text style={{color:"#999",alignSelf: "flex-start"}}>{textImagePart.title}</Text>
				</View>
				<TouchableOpacity onPress={this.cameraAction.bind(this)}>
					{
		              this.state.user.face ?
		              <Image
		              style={styles.image}
		              source={{uri: this.state.user.face}}
		              />
		              :
		              <Image style={styles.image}  source={require('image!navicon5')} />
		            }
			    </TouchableOpacity>
				<View style={{justifyContent:"center"}}>
				     <Arrow></Arrow>
				</View>
            </View>
		);
	},

});

var styles = StyleSheet.create({
	listHeader: {
	  	flexDirection:"row",
	  	flexWrap:"wrap",
	  	height:70,
	  	padding:10,
	  	backgroundColor:"#fff",
	  	borderBottomWidth:StyleSheet.hairlineWidth,
		borderBottomColor: '#eee',
	  },
	titleContainer:{
	  	justifyContent:"center",
	  	alignItems:"flex-start",
	  	flex:1,
	 },
	  imageContainer:{
	  	flex:2,
	  	marginLeft:15,
	  	alignItems:"flex-end",
	  },
	  image:{
	  	width:50,
	  	height:50,
	  	borderWidth:1,
		borderColor:'#eee',
		borderRadius:40,
      }
});
module.exports = TextImageWidget;

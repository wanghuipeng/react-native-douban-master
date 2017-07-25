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
} from 'react-native';
import Picker from 'react-native-picker';
var Arrow = require("./../common/arrow");
var TextTipsWidget3 = React.createClass({
	getInitialState: function() {  
	    return {  
	      language: '',  
	      text:'请选择学历',
	    };  
	  },  
	  _createEdu:function(){
        var data = ['初中','高中'];
        return data;
      },
	   _edu:function(){
         Picker.init({
         	pickerCancelBtnText:'取消',
         	pickerTitleText:'选择学历',
         	pickerConfirmBtnText:'确认',
            pickerData: this._createEdu(),
            selectedValue: ['初中'],
            onPickerConfirm: pickedValue => {
                console.log('学历为：', pickedValue);
                 this.setState({
                	text:pickedValue+'',
                });
            },
            onPickerCancel: pickedValue => {
                console.log('学历为：', pickedValue);
            },
            onPickerSelect: pickedValue => {
                console.log(pickedValue);
            }
        });
        Picker.show();
    },
	render:function(){
		var textImagePart = this.props.initObj;
		return (
			<View style={styles.listHeader} >
                <View style={styles.titleContainer}>
                    <Text style={{color:"#999",alignSelf: "flex-start"}}>{textImagePart.title}</Text>
				</View>
				<View style={styles.inputContainer}>
			        <TouchableOpacity onPress={this._edu.bind(this)}>
	                    <Text style={styles.input}>{this.state.text}</Text>
	                </TouchableOpacity>
				</View>
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
	  	height:50,
	  	paddingLeft:10,
	  	paddingRight:10,
	  	backgroundColor:"#fff",
	  	borderBottomWidth:StyleSheet.hairlineWidth,
		borderBottomColor: '#eee',
	  },
	titleContainer:{
	  	justifyContent:"center",
	  	alignItems:"flex-start",
	  	flex:1,
	 },
	  inputContainer:{
	  	justifyContent: 'center',
	  	alignItems:"flex-end",
	  	flex:2,
	  },
	  input: {
	  	width:160,
	  	backgroundColor:"#fff",
	  	fontSize:14,
	  	textAlign: 'right',
	  	paddingRight:40
	  },
});
module.exports = TextTipsWidget3;

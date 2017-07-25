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
  TouchableOpacity,
  ListView,
  ScrollView,
  RefreshControl
} from 'react-native';
 
var Util = require("./../common/util");
var ServiceURL = require("./../common/service");
var BookItem = require("./../book/book_item");
var BookDetail = require("./../book/book_detail");

var HomeList = React.createClass({
	getInitialState:function(){
		var ds = new ListView.DataSource({
			rowHasChanged:(oldRow,newRow) => oldRow !== newRow 
		});
		
		return {
			dataSource:ds,
			show:false,
			keywords:"React"
		};
	},
	getData:function(){
		this.setState({
			show:false
		});
		
		//请求数据
		var that = this;
		var url = ServiceURL.book_search + "?count=20&q=" + this.state.keywords;
		Util.getRequest(url,function(data){
			if(!data.books || data.books.length == 0){
				return alert("未找到相关书籍") 
			}
			
			//设置下载状态和数据源
			var ds = new ListView.DataSource({
				rowHasChanged:(oldRow,newRow) => oldRow !== newRow 
			});
			that.setState({
				show:true,
				dataSource:ds.cloneWithRows(data.books)
			});
		},function(error){
			alert(error)
		});
	},
	
	_showDetail:function(bookID){
		var detailRoutes = {
			component:BookDetail,
			passProps:{
				bookID:bookID
			}
		}
		
		this.props.navigator.push(detailRoutes);
	},
	
	render:function(){
		return (
			<View>
				<ScrollView 
					showVerticalScrollIndicator={true}
					
					/*refreshControl={
				    	<RefreshControl
				    	refreshing={true}
				    	tintColor="red"
				    	title="正在刷新..."
				         />
				    	}*/
				    	
					>
				    {
				    	this.state.show?
				    	<ListView dataSource={this.state.dataSource} 
				    	initialListSize={10}
				    	renderRow={this._renderRow}
				    	renderSeparator={this._renderSeparator}/> 
				    	:Util.loading
				    }
				</ScrollView>
		    </View>
		);
	},
	componentDidMount:function(){
		this.getData();
	},
	_renderRow:function(book){
		return <BookItem book={book} onPress={this._showDetail.bind(this,book.id)} />
	},
	_renderSeparator:function(sectionID:number,rowID:number){
		var style={
			height:1,
			backgroundColor:"#eee" 
		}
		
		return <View style={style} key={sectionID+rowID} />
	}
});

module.exports = HomeList;

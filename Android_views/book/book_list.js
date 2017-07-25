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
  RefreshControl,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';
var Util = require("./../common/util");
var SearchBar = require("./../common/searchBar");
var ServiceURL = require("./../common/service");
var BookItem = require("./book_item");
var BookDetail = require("./book_detail");
let pageSize = 10;
var BookList = React.createClass({
	getInitialState:function(){
		
		return {
			show:false,
			keywords:"React",
			isRefreshing: false,
            loading: true,
            data: [],
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            index: 2,
            seletedAry: []
		};
	},
	getData:function(){
		this.setState({
			show:false
		});
		
		 fetch('https://api.douban.com/v2/book/search?q=react&count='+pageSize)
      .then(res=> {
        if(res.status === 200) {
          let data = JSON.parse(res._bodyInit).books;
          this.setState({
            loading: false,
            data: data,
            dataSource: this.state.dataSource.cloneWithRows(data),
          });
        }
      })
      .catch(err=> {
        alert(JSON.stringify(err));
      })
	},
	
	_showDetail:function(bookID){
		var detailRoute = {
			component:BookDetail,
			passProps:{
				bookID:bookID
			}
		}
		
		this.props.navigator.push(detailRoute);
	},
	
	render:function(){
		//自定义的loading图标
		if(this.state.loading) {
	      return (
	        /*自定义的loading图标
	         * <View style = {styles.empty}>
	          <Image style={{width:50,height:50}} source={require('image!loader')} />
	          
	        </View>*/
	        <ActivityIndicator style={{marginTop:180}} color="#00aa00" />
	      )
	    }
		return (
			<View stylw={{flex:1}}>
		    	<ListView renderScrollComponent={(props) => <PullRefreshScrollView     onLoadMore={this.onLoadMore} useLoadMore={1} {...props} />}                   
                  dataSource={this.state.dataSource}             
                  renderRow={this._renderRow}  
                  renderSeparator={this._renderSeparator}
                  refreshControl={
			          <RefreshControl
			            refreshing={this.state.isRefreshing}
			            onRefresh={this._onRefresh}
			            colors={['#ff0000', '#00ff00', '#0000ff','#3ad564']}
			            progressBackgroundColor="#ffffff" 
			          />}
                />       
		    </View>
		);
	},
	//下拉刷新
  _onRefresh:function() {  
	    this.setState({isRefreshing: true});  
	    setTimeout(() => {  
	      ToastAndroid.show('已刷新',ToastAndroid.SHORT);
	      this.setState({isRefreshing: false});
	    }, 1000);  
	  }, 
	// 请求网络数据将加载更多数据状态改为已加载完成   
  onLoadMore:function(){
          
		this.setState({
			show:false
		});
		//设定一个起始位置，从之前获取过的之后开始获取
    let start = (this.state.index-1)*pageSize;
    fetch(`https://api.douban.com/v2/book/search?q=react&start=${start}&count=${pageSize}`)
      .then(res=> {
        if(res.status === 200) {
          let response = JSON.parse(res._bodyInit).books;
          if(response.length === 0) {
            alert('no data response');
            return;
          }else {
          	let oldAry = [...this.state.data];
            let newAry = [...oldAry, ...response];
            this.setState({
              loading: false,
              loadingMore: false,
              data: newAry,
              dataSource: this.state.dataSource.cloneWithRows(newAry),
              index: this.state.index+1
            });
          }
        }
      })
      .catch(err=> {
        alert(JSON.stringify(err));
      })
		
  },   

	componentWillMount:function(){
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

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  }
});
module.exports = BookList;

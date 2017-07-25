/**
 * Created by edagarli on 16/3/17.
 * https://github.com/edagarli
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ScrollView,
    TouchableOpacity
    } from 'react-native';

var Util = require('./../common/util');
var ServiceURL = require('./../common/service');
var BookItem = require('./../book/collection_book_item');
var BookDetail = require('./../book/book_detail');
var Header = require('./../common/header');


var HasBook = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({
			rowHasChanged:(oldRow,newRow) => oldRow !== newRow 
		});
        return {
            dataSource: ds.cloneWithRows([]),
            show: false
        };
    },
    _loadPage: function(bookID){
        this.props.navigator.push({
            component: BookDetail,
            passProps:{
                bookID: bookID
            }
        });
    },
    _getData: function(){
    	//开启loading
        this.setState({
            show: false
        });
        var ds = new ListView.DataSource({
			rowHasChanged:(oldRow,newRow) => oldRow !== newRow 
		});
        var that = this;
        var baseURL = ServiceURL.has_read_book;
        
        Util.getRequest(baseURL, function(data){
            if(!data.collections || !data.collections.length){
                that.setState({
                    show: true
                });
                return alert('没有相应数据');
            }
            var collections = data.collections;
            that.setState({
                dataSource: ds.cloneWithRows(collections),
                show: true
            });
        }, function(err){
            alert(err);
        });
    },
    render: function () {
        return (
            <ScrollView style={styles.flex_1} >
                {
                    this.state.show ?
                    <View>
	                    <Header
	                        navigator={this.props.navigator}
	                        initObj={{
	                        backName: this.props.backName,
	                        title: this.props.title
	                      }}/>
                        <ListView
                            dataSource = {this.state.dataSource}
                            initialListSize={10}
                            renderRow={this._renderRow}
                            renderSeparator={this._renderSeparator}
                        /> 
                    </View>
                    : Util.loading
                      
                }
            </ScrollView>
        );
    },

    componentDidMount: function(){
        this._getData();
    },

    //渲染图书列表项
    _renderRow: function(row){
        return (
            <BookItem row={row} onPress={this._loadPage.bind(this, row.book_id)}/>
        );
    },
    _renderSeparator:function(sectionID:number,rowID:number){
		var style={
			height:1,
			backgroundColor:"#eee" 
		}
		
		return <View style={style} key={sectionID+rowID} />
	},
    
    
});

var styles = StyleSheet.create({
    flex_1: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    search: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 45
    },
    btn: {
        width: 50,
        backgroundColor: '#0091FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontFFF: {
        color: '#fff'
    },
    row: {
        flexDirection: 'row'
    }
});

module.exports = HasBook;
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
  StatusBar,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
 
var TabNavigatorItem =TabNavigator.Item;  
var TAB_ITEM = [{
	code : 'Index',
	name : '主页',
	icon_n : require('../../images/home.png'),
	icon_p : require('../../images/homeActive.png'),
	contentView : require('./../home/home'),
},{
	code : 'Book',
	name : '图书',
	icon_n : require('../../images/book.png'),
	icon_p : require('../../images/bookActive.png'),
	contentView : require('./../book/book_list')
},{
	code : 'Movie',
	name : '电影',
	icon_n : require('../../images/movie.png'),
	icon_p : require('../../images/movieActive.png'),
	contentView :  require('./../movie/movie_list')
},{
	code : 'Mine',
	name : '我的',
	icon_n : require('../../images/mine.png'),
	icon_p : require('../../images/mineActive.png'),
	contentView :  require('./../mine/mine')
}];

 var TabNavigators = React.createClass({
 	
 	getInitialState:function(){
 		return{
 			items : TAB_ITEM,
			selectedTab : TAB_ITEM[0].code
 		};
 	},
 		/*
	 * tab点击方法 
	 */  
	onPress:function(tabCode){  
		if(tabCode){  
			this.setState({  
				selectedTab : tabCode
			});  
		}  
	},
 	/*
     *渲染每项 
     */  
	renderTabView:function(options){  
		var tabNomal = options.icon_n;  
		var tabPress = options.icon_p;  
 
		return(  
			<TabNavigatorItem  
			    titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
				key={options.code} 
				title={options.name}  
				renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}  
				renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}  
				selected={this.state.selectedTab === options.code}  
				onPress={()=>this.onPress(options.code)}  
				renderBadge= {()=>options.badgeNum?<View style={styles.badgeView}>
											<Text style={styles.badgeText}>options.badgeNum</Text>
										  </View>:null}>  
				<options.contentView route={this.props.route} navigator={this.props.navigator}/>
			</TabNavigatorItem>  
		);  
	},  
 	render:function(){ 
 		var items = [];
        for (var i=0; i< this.state.items.length; i++) {
            items.push(this.renderTabView(this.state.items[i]));
        }
		return (  
			<View style={styles.container}>  
				<TabNavigator tabBarStyle={styles.tab}>  
					{items}
				</TabNavigator>  
			</View>  
		);  
 	}
 });

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#F5FCFF',  
  },    
  tab:{  
    height: 45,  
    alignItems:'center',  
    backgroundColor:'#f4f5f6',  
  },  
  tabIcon:{  
    width:15,  
    height:15,  
  },  
  badgeView:{  
    width:22,  
    height:14 ,  
    backgroundColor:'#f85959',  
    borderWidth:1,  
    marginLeft:10,  
    marginTop:3,  
    borderColor:'#FFF',  
    alignItems:'center',  
    justifyContent:'center',  
    borderRadius:8,  
  },  
  badgeText:{  
    color:'#fff',  
    fontSize:8,  
  },  
  tabText:{
  	color:"#666",
  	fontSize:12
  },
  selectedTabText:{
  	color:"#2bb7ab"
  }
});  


module.exports = TabNavigators;

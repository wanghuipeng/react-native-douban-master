/**
 * Created by liyongfei on 16/12/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Text,
    View,
    Navigator,
    StatusBar
} from 'react-native';



import NetUtil from './NetUtil';
import Util from './Util';
import MainView from './../form/some';
var LoginView = React.createClass({

    getInitialState: function () {
        return {
            userNameText:"13918068798",
            passwordText:"1234554321"
        };
    },

    loginClick:function(){

/*
        let data={'seller_name':this.state.userNameText,'password':this.state.passwordText};
        let url="http://www.slh8.com/mobile/index.php?act=login&op=seller_login";
        url='http://192.168.0.85/mobile/index.php?act=login&op=seller_login';
        var common=NetUtil.commonParamsWithAct('login','seller_login');
*/
       var  _this=this;
       /* NetUtil.post(url,data,common,function (set){

            if(set.code==10000){
                Util.saveItem('member_id',set.datas.member_info.member_id);
                Util.saveItem('member_name',set.datas.member_info.member_name);
                Util.saveItem('member_nickname',set.datas.member_info.member_nickname);
                Util.saveItem('member_avatar',set.datas.member_info.member_avatar);
                Util.saveItem('store_id',set.datas.store_info.store_id);
                Util.saveItem('store_name',set.datas.store_info.store_name);
                Util.saveItem('TOKEN',set.datas.token);

                Util.saveItem('IsLogin','YES');*/

                const { navigator } = _this.props;
                if(navigator) {
                    navigator.push({
                        name: '主页面',
                        component: MainView,
                    })
                }

           /* }else{

                Util.saveItem('member_id','');
                Util.saveItem('member_name','');
                Util.saveItem('member_nickname','');
                Util.saveItem('member_avatar','');
                Util.saveItem('store_id','');
                Util.saveItem('store_name','');
                Util.saveItem('TOKEN','');

                Util.saveItem('IsLogin','NO');
            }


        });*/


    },

    render:function() {

        var Dimensions = require('Dimensions');
        var {width, height} = Dimensions.get('window');
        var _this=this;

        return (

             <Image source={require('../../images/loginBackImage.png')} style={{ flex:1, width:width,height:height,backgroundColor:'white'}}>
                <Image source={require('../../images/slh.png')} style={styles.iconImage} />
                 <StatusBar
                     backgroundColor="white"
                     barStyle="light-content"/>
                 <Text  style={styles.titleStyle}>商 · 家 · 管 · 理 · 中 · 心</Text>
                 <TextInput style={[styles.inputUsreName ,{width:width-40} ]}
                            placeholder="请输入用户名"
                            onChangeText = {(text) => {
                                _this.setState({
                                    userNameText:text
                                })
                              }
                            }
                            placeholderTextColor='white'/>
                 <View  style={ {width:width-40,height:1,backgroundColor:'#696969', alignSelf:'center',}}/>
                 <TextInput style={[styles.inputPassword,{width:width-40} ]}
                            placeholder="请输入密码"
                            onChangeText = {(text) => {
                                _this.setState({
                                    passwordText:text
                                })
                            }
                            }
                            placeholderTextColor='white'
                            secureTextEntry={true}  />
                 <View  style={ {width:width-40,height:1,backgroundColor:'#696969', alignSelf:'center',}}/>
                 <TouchableOpacity onPress={this.loginClick.bind(this)}>
                     <Text style={[styles.loginBtn ,{width:width-40}, ]}>登录</Text>
                 </TouchableOpacity>
             </Image>

        )

    }

});

var styles = StyleSheet.create({
   iconImage:{
       width:70,
       height:70,
       marginTop:50,
       alignSelf:'center',
    },
    titleStyle:{
        marginTop:20,
        width:200,
        color:'white',
        fontSize:18,
        alignSelf:'center',
        textAlign:'center',
        backgroundColor:'transparent'

    },
    inputUsreName:{
        marginTop:40,
        height:35,
        color:'white',
        alignSelf:'center',
    },
    inputPassword:{
        marginTop:10,
        height:35,
        color:'white',
        alignSelf:'center',
    },
    loginBtn:{
        marginTop:20,
        height:40,
        alignSelf:'center',
        textAlign:'center',
        padding:10,
        fontSize:16,
        backgroundColor:'#696969',
        color:'white',
        borderWidth:2,
        borderRadius:15,
        borderColor:'#696969',

    }

});

module.exports = LoginView;
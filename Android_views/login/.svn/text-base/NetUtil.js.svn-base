/**
 * Created by liyongfei on 16/12/23.
 */

import React, { Component } from 'react';
import {

    AsyncStorage

} from 'react-native';

import MD5 from './md5';

class NetUtil extends React.Component {

    //post请求
    /**
     *url :请求地址
     *data:参数
     *callback:回调函数
     */
    static  postFrom(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'data='+data+''//这里我参数只有一个data,大家可以还有更多的参数
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }
    /**
     *url :请求地址
     *data:参数(Json对象)
     *callback:回调函数
     */
    static postJson (url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //json形式
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }

    /**
     *url :请求地址
     *data:参数(Json对象)
     *callback:回调函数
     */
    static post (url, data,common, callback) {
        var sign=this.sign(data,common);
        var timestamp = (new Date()).valueOf();

        var arr=[];
        for (var key in data) {
            var obj=key+'='+data[key];
            arr.push(obj);
        }



        AsyncStorage.getItem('TOKEN')
            .then((value) => {
                if (value !== null){

                    var fetchOptions = {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type':'application/x-www-form-urlencoded',
                            'PROJECTID':'2',
                            'CLIENT':'51355579f87bb4bcc06ff980e26e10b473d7b72a',
                            'TIMESTAMP':timestamp,
                            'VERSION':'1.0.0',
                            'SIGN':sign,
                            'TOKEN':value
                        },
                        body: arr.join('&')
                    };

                    fetch(url, fetchOptions)
                        .then((response) => response.text())
                        .then((responseText) => {
                            callback(JSON.parse(responseText));
                        }).done();

                }else {
                    var fetchOptions = {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type':'application/x-www-form-urlencoded',
                            'PROJECTID':'2',
                            'CLIENT':'51355579f87bb4bcc06ff980e26e10b473d7b72a',
                            'TIMESTAMP':timestamp,
                            'VERSION':'1.0.0',
                            'SIGN':sign,
                            'TOKEN':""
                        },
                        body: arr.join('&')
                    };

                    fetch(url, fetchOptions)
                        .then((response) => response.text())
                        .then((responseText) => {
                            callback(JSON.parse(responseText));
                        }).done();

                }
            }).done();



    }

    static commonParamsWithAct(act,op){
        var timestamp = (new Date()).valueOf();

            return {
                   'PROJECTID':'2',
                   'CLIENT':'51355579f87bb4bcc06ff980e26e10b473d7b72a',
                    'TIMESTAMP':timestamp,
                    'VERSION':'1.0.0',
                    'TOKEN':'',
                    'act':act,
                    'op':op
           };

    }



    static sign(data,common){
        var arr=[];
        for (var key in data) {
            var obj=key+'='+data[key];
             arr.push(obj);
        }

        for (var key in common) {
            var obj=key+'='+common[key];
            arr.push(obj);
        }

        arr.sort();

       var sign= arr.join('&');

        var result= MD5.hex_md5(sign);

       return result;

    }
    //get请求
    /**
     *url :请求地址
     *callback:回调函数
     */
    static  get(url, callback) {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }

}

module.exports = NetUtil;

{/*
get的调用方法：
NetUtil.get("http://v.juhe.cn/weather/index?format="+format+"&key="+key+"&cityname="+cityname,function  (ret) {
    //回调的结果处理;
})

postJson的调用
let data={'username':'123','password':'123456','token':'HSHSIHIFAUINNSNAFKSKJFNKFKFNFNFNK'};
NetUitl.postJson(url,,function (set){
    switch (set.retCode) {
        case "0000":
            alert("登录成功");
            break;
        case "0001":
            alert("登录失败");
            break;
        default:
            alert("登录失败");
    }
});
  */}
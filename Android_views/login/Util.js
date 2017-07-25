/**
 * Created by liyongfei on 16/12/26.
 */
import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native';

class Util extends React.Component {

    static saveItem(key,value){
        AsyncStorage.setItem(key,value,function(errs){
            if (!errs) {
                console.log('保存成功');
            }
        });
    }

    static getItem(key){

        AsyncStorage.getItem(key,function(errs,text){
            if (!errs) {

            }
        });

    }

    static removeItem(key) {
        AsyncStorage.removeItem(keyName, function (errs) {
            if (!errs) {
                console.log('移除成功');
            }
        });
    }

}

module.exports = Util;
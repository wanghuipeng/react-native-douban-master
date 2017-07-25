/**
 * react-native-douban-master
 * author : muslim
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import CodePush from "react-native-code-push";
import Navigation from './Android_views/common/navigation';

var lastClickTime = 0;
// @CodePush({ checkFrequency: CodePush.CheckFrequency.MANUAL })
//在 项目文件夹下面创建一个文件夹bundles，代码创建：mkdir bundles;
//打包文件的代码 ：react-native bundle --platform android --entry-file index.android.js --bundle-output ./bundles/index.android.bundle --assets-dest ./bundles --dev false
    //其中platform是平台，分android和ios, entry-file是入口文件，ios的为index.ios.js，output为打包文件的路径，如果是苹果是./bundles/index.ios.bundle --assets-dest ./bundles --dev false
//上传文件到codepush：code-push release codepush01 ./bundles 1.0.3 --deploymentName Staging --description "第8次更新" --mandatory false
//code-push release <应用名称> <Bundles所在目录> <对应的应用版本> --deploymentName： 更新环境 --description： 更新描述  --mandatory： 是否强制更新
//更新环境默认为Staging,如果是发布生产的话是Production ，描述为在codepush上的更新描述，强制更新默认是false，为了友好，还是默认不强制更新
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };
export default class DoubanProject extends Component {
	constructor() {
	    super();
	}

  render() {
    return (
        <Navigation />
    )
   }
  
    codePushStatusDidChange(syncStatus) {
    switch(syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({ syncMessage: "检查更新." });
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({ syncMessage: "下载安装包." });
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({ syncMessage: "等待用户的操作." });
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({ syncMessage: "安装更新." });
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({ syncMessage: "APP已更新", progress: false });
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.setState({ syncMessage: "更新被打断.", progress: false });
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({ syncMessage: "更新已安装需要重启.", progress: false });
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({ syncMessage: "未知错误.", progress: false });
        break;
    }
  }

  codePushDownloadDidProgress(progress) {
    this.setState({ progress });
  }
	/** Update is downloaded silently, and applied on restart (recommended) */
  sync() {
    CodePush.sync(
      {},
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }

  /** Update pops a confirmation dialog, and then immediately reboots the app */
  syncImmediate() {
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,//启动模式三种：ON_NEXT_RESUME、ON_NEXT_RESTART、IMMEDIATE
        updateDialog: {
          appendReleaseDescription:true,//是否显示更新description，默认为false
          descriptionPrefix:"更新内容：",//更新说明的前缀。 默认是” Description:
          mandatoryContinueButtonLabel:"立即更新",//强制更新的按钮文字，默认为continue
          mandatoryUpdateMessage:"",//- 强制更新时，更新通知. Defaults to “An update is available that must be installed.”.
          optionalIgnoreButtonLabel: '稍后',//非强制更新时，取消按钮文字,默认是ignore
          optionalInstallButtonLabel: '后台更新',//非强制更新时，确认文字. Defaults to “Install”
          optionalUpdateMessage: '有新版本了，是否更新？',//非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.
          title: '更新提示'//要显示的更新通知的标题. Defaults to “Update available”.
        },
       },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }

	componentWillMount() {
		this.syncImmediate();      //热更新
	  	CodePush.disallowRestart();//页面加载的禁止重启，在加载完了可以允许重启
	    
	  }
		 componentDidMount(){
		
		    CodePush.allowRestart();//在加载完了可以允许重启
		    
		}

}
DoubanProject = CodePush(codePushOptions)(DoubanProject);
AppRegistry.registerComponent('DoubanProject', () => DoubanProject);

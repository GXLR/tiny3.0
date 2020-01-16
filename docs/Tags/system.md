## System

### 描述

System对象为tiny内置对象，提供获取一些设备的基本信息的功能

### 方法

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td><a href='#1F'>version</a></td>
      <td>设备类型，系统版本号</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#2F'>resourceVersion</a></td>
      <td>资源版本号</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#3F'>setResourceVersion</a></td>
      <td>设置资源版本号</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#4F'>info</a></td>
      <td>设备基本信息</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#5F'>appLang</a></td>
      <td>获取app当前语言</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#6F'>macAddress</a></td>
      <td>获取mac地址</td>
      <td>iOS不支持</td>
   </tr>
   <tr>
      <td><a href='#7F'>checkScreenLock</a></td>
      <td>检查当前是否设置了锁屏</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#8F'>getTinyConfig</a></td>
      <td>获取当前应用配置</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#9F'>checkRoot</a></td>
      <td>是否越狱</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#10F'>exchangeKey</a></td>
      <td>交换密钥</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#11F'>setLang</a></td>
      <td>设置多语言</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#12F'> systemLang </a></td>
      <td>获取系统语言</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#13F'> setTheme </a></td>
      <td>设置主题</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#14F'> setDarkTheme </a></td>
      <td>设置黑暗模式</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#15F'> setDefaultTheme </a></td>
      <td>设置默认主题</td>
      <td></td>
   </tr>
</table>

#### <a name='1F'>version</a>
获取设备类型，系统版本号

    var info = System.version()

##### return

* 设备类型，系统版本号。如IOS/2.0.1


***

#### <a name='2F'>resourceVersion</a>

获取资源版本号

    var info = System.resourceVersion()

##### return

* 资源版本号。如1.0.

  iOS 资源版本号初始化配置在 CustomerConfig.plist 文件 resourceVersion 字段。

  Android 资源版本号初始化配置在 assets 目录下的 resourceVersion.properties。

***
#### <a name='3F'>setResourceVersion</a>

设置资源版本号。

一般在资源更新后，需要重新设置资源版本号。

    System.setResourceVersion(version)

##### params

* version:资源版本号。

***

#### <a name='4F'>info</a>

获取设备信息

    var info = System.info() 

##### return

* 设备信息，json格式

##### 设备信息

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>info</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>name</td>
      <td>设备名称</td>
      <td></td>
   </tr>
   <tr>
      <td>model</td>
      <td>设备型号</td>
      <td></td>
   </tr>
   <tr>
      <td>systemName</td>
      <td>操作系统名称</td>
      <td></td>
   </tr>
   <tr>
      <td>systemVersion</td>
      <td>操作系统版本</td>
      <td></td>
   </tr>
   <tr>
      <td>deviceId</td>
      <td>设备ID</td>
      <td>ios设备ID由tiny平台生成</td>
   </tr>
   <tr>
      <td>IP</td>
      <td>手机所在网络的 ip 地址</td>
      <td></td>
   </tr>
   <tr>
      <td>appName</td>
      <td>app 的名称</td>
      <td></td>
   </tr>
</table>


#### 示例：

在使用 System.info() 方法获取设备信息的时候，我们获取到的是不是 json 字符串，控制台打印或者使用 alert() 方法调式的时候会发现打印/提示的内容是空的，这时候我们需要使用 JSON.stringify() 方法将JavaScript 值转换为一个 JSON 字符串，以便解析使用。

	function setting(){
		var setinfo = System.info();
		log("设备名：" + setinfo.name);
		log("设备型号： " + setinfo.model);
		log("操作系统名称： " + setinfo.systemName);
		log("操作系统版本： " + setinfo.systemVersion);
		log("设备ID： " + setinfo.deviceId);
		log("IP 地址： " + setinfo.ip);
		log("appName： " + setinfo.appName);
		// log(JSON.stringify(setinfo));	通过此方法获得 json 字符串之后解析
	}

执行以上的方法，输入内容如下所示：

	// IOS 
	设备名：Chaixiaomu
	设备型号： iPhone 5
	操作系统名称： iOS
	操作系统版本： 10.3.1
	设备ID： 26DF163E-A68E-4822-9A83-9CA9783C4DE5
	IP 地址：10.25.0.70
	appName：TinyLoader

	
	//Android 
	设备名：flyme
	设备型号： MX5
	操作系统名称： Android
	操作系统版本： 5.1
	设备ID： ffffffff-dda2-08b0-ffff-ffffc7385c1a
	IP 地址：10.25.0.70
	appName：TinyLoader
	
	
***

#### <a name='5F'>lang</a>

获取app当前语言信息。


    System.appLang()

##### return

* 语言国家


***

#### <a name='6F'>macAddress</a>

获取当前手机mac地址。


    System.macAddress()

##### return

* mac地址

***

#### <a name='7F'>checkScreenLock</a>

检查当前手机是否设置了安全保护，如pin、手势密码、指纹等措施


    System.checkScreenLock()

##### return

* true已设置，false未设置

***
#### <a name='8F'>getTinyConfig</a>

获取当前应用配置信息


    System.getTinyConfig()

##### return

示例

```
{
    "languageBean": {
        "backupLanguage":"en",  
        "defLanguage":"",
        "matchedLanguage":[
           {"name":"en"},
           {"name":"zh-Hans"}],
        "multiLanguage":false},
    "securityBean":{
        "antiDebug":false,
        "limitScreenShot":false,
        "rootCheck":false,
        "screenFuzzy":false },
    "tinyComBean":{
        "alertBackgroundColor":"",
        "alertTextColor":"",
        "appBaseUrl":"http://10.25.0.50:9400",
        "clickInterval":800,
        "dimAmount":0.6,
        "encryptType":"01-10",
        "externalFonts":true,
        "hideStatusBar":false,
        "keepDeviceId":true,
        "resEncrypt":false,
        "showLog":true,
        "signRequest":false,
        "tinyIDE":false,
        "useGoogleMap":false,
        "versionResUpdate":false},
    "traceBean":{
        "enable":false,
        "url":""},
    "xmppBean":{
        "domain":"",
        "host":"",
        "imUrl":"",
        "port":0,
        "subDomain":""
    }
 }
```
***

#### <a name='9F'> checkRoot </a>

检测是否越狱

    var info = System. checkRoot()

***

#### <a name='10F'> exchangeKey </a>

交换密钥

    var callback = function(data){
        alert("ExchangeKey Result",data);
    }
    System.exchangeKey("http://10.25.0.50:9400",callback);
    
***

#### <a name='11F'> setLang </a>

设置多语言

     System.setLang('zh');
     
***

#### <a name='12F'> systemLang </a>

获取系统语言

     System.systemLang();
     
***

#### <a name='13F'> setTheme </a>

设置主题

     System.setTheme();
 
***

#### <a name='14F'> setDarkTheme </a>

设置黑暗模式

     System.setDarkTheme();
     
***

#### <a name='15F'> setDefaultTheme </a>

设置默认主题

     System.setDefaultTheme();
     
***
# tinyBuilder配置清单说明
## 1.概述  
为解决需要修改im等配置参数时。iOS和Android两个平台没有统一配置文件，改动的区域不一致，导致开发和测试对平台内改动需要平台研发人员去改动。  
现平台提供统一的配置文件，方便开发和测试人员修改平台的配置信息。  
## 2.配置文件路径  
平台对外的配置文件名为**tinyBuilder.json**。

*  文件路径：**../config/**  
  
## 3.配置文件内容  
配置文件内为json数据，**禁止书写说明性注释**。  
**tinyBuidler.json**具体内容如下：  
  
  ```  
{
  "common": {
    "showLog": "true",
    "clickInterval": "800",
    "externalFonts": "true",
    "useGoogleMap": "false",
    "hidesStatusBar": "true",
    "dimAmount": "0.6f",
    "appBaseUrl":"http://10.25.0.50:9400",
    "tinyIDE":"false",
    "encryptType":"01-10",
    "signRequest":"false",
    "lockCancelable": "false",
    "lockTimeout": "0",
    "automationTest": "false",
    "alertBackgroundColor": "",
    "alertTextColor": "",
    "resEncrypt": "false",
    "keepDeviceId": "true"
  },
  "im": {
    "domain": "",
    "host": "",
    "port": "",
    "subDomain": "",
    "imUrl": ""
  },
  "trace": {
    "url": "",
    "enable": ""
  },
  "language": {
    "multiLanguage": "true",
    "defLanguage": "en",
    "backupLanguage":"en",
    "matchedLanguage": [
      {
        "path": "config/lang/en.json"
      },
      {
        "path": "config/lang/zh.json"
      }
    ]
  },
  "security":{
    "antiDebug":"false",
    "rootCheck":"false",
    "limitScreenShot":"false",
    "screenFuzzy":"false"
  }  
}

  ```  
    
## 4.字段说明  
### 4.1 tinyBuidler.json  
     
配置对象主要分为4个模块：  
  
* common 通用配置  
* im 客服聊天配置  
* trace 行为分析配置  
* language 多语言配置  

common配置字段说明  

| 字段名 | 真实类型 |  使用平台 | 说明 |
| :----- | :-----: | :-----: | :----- | 
| automationTest | bool | iOS&android | 是否开启自动化测试 |  
| appBaseUrl | stirng | iOS&android | 用于平台加密初始化 | 
| encrypt | bool | iOS&android | 是否使用平台加密 | 
| signRequest | bool | iOS&android | 是否使用平台加签 | 
| resourceEncrypted | bool | iOS&android | 是否开启tml资源加密 | 
| useGoogleMap | bool | iOS&android | 是否使用google地图 | 
| cacheImage | bool | iOS | 图片缓存 同时保存内存和沙盒 | 
| keyboardfeedback | bool | iOS | 键盘按钮是否高亮 |  
| boxModel | string | iOS | 盒子模型 |
| resourceVersion | string | iOS | 资源版本号 |  
| showlog | bool | android | 是否显示log信息 | 
| clickInterval | int | android  | 有效点击时间，单位毫秒| 
| externalFonts | bool | android  | 是否使用自定义字体 |
| hidesStatusBar | bool | android  | 是否隐藏状态栏 | 
| dimAmount | float | android  | loading透明度 （0-1，0为全透明 ，1为不透明） | 
| clickInterval | float | iOS&android  | 点击时间间隔，时间单位为ms | 
| hidesStatusBar | bool | iOS&android  | 是否使用沉浸式状态栏 | 
| tinyIDE | bool | iOS&android  | 是否开启调试模式 | 
| encryptType | string | iOS&android  | 网络加密类型 | 
| signRequest | bool | iOS&android  | 是否使用网络加签 |   
| lockCancelable | bool | iOS&android  | loading弹窗是否能够点击外部关闭 |   
| lockTimeout | bool | iOS&android  | loading弹窗超时关闭，单位S | 
| alertBackgroundColor | string | iOS&android  | toast弹窗背景颜色 | 
| alertTextColor | string | iOS&android  | toast弹窗文字颜色 | 
| resEncrypt | bool | iOS&android  | tml资源是否加密 | 
| keepDeviceId | bool | iOS&android  | 设备号是否保持 | 

language 多语言字段说明  

| 字段名 | 真实类型 |  使用平台 | 说明 |
| :----- | :-----: | :-----: | :----- |  
| multiLanguage | bool | iOS&android | 是否使用多语言 | 
| defLanguage | string | iOS&android | 默认语言 | 
| matchedLanguage | list | iOS&android | 语种类型 | 
  
im 客服字段说明  

| 字段名 | 真实类型 |  使用平台 | 说明 |
| :----- | :-----: | :-----: | :----- |  
| domain | string | iOS&android | 域名 | 
| host | string | iOS&android | 主机地址 | 
| port | int | iOS&android | 端口号 | 
| imUrl | string | iOS&android | 图片服务器地址 | 
| subDomain | string | iOS&android | 子域名(群聊使用) |  


trace 行为分析字段说明  

| 字段名 | 真实类型 |  使用平台 | 说明 |
| :----- | :-----: | :-----: | :----- | 
| url | string | iOS&android | 服务器地址 | 
| enable | bool | iOS&android | 是否开启行为分析 | 



   
    
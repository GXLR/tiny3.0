## Request

### 描述

tiny提供了Request类封装http/https网络请求,实现了文件上传和下载功能。

### 属性

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>属性</td>
      <td>取值</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>url</td>
      <td></td>
      <td>请求地址</td>
      <td>支持本地(file:///)和网络(http://)</td>
   </tr>
   <tr>
      <td>method</td>
      <td>get / post / delete / put</td>
      <td>网络请求的方法</td>
      <td>string</td>
   </tr>
   <tr>
      <td>success</td>
      <td>function(data){}</td>
      <td>网络请求成功的回调函数</td>
      <td></td>
   </tr>
   <tr>
      <td>error</td>
      <td>function(info, errorCode){}</td>
      <td>网络请求失败的回调函数</td>
      <td></td>
   </tr>
   <tr>
      <td>progress</td>
      <td>function(percent){}</td>
      <td>网络请求上传 / 下载进度的回调函数 </td>
      <td></td>
   </tr>
   <tr>
      <td>name</td>
      <td></td>
      <td>接口规范</td>
      <td></td>
   </tr>
   <tr>
      <td>data</td>
      <td></td>
      <td>post请求体</td>
      <td></td>
   </tr>
   <tr>
      <td>file</td>
      <td></td>
      <td>form表单形式上传文件</td>
      <td> array </td>
   </tr>
   <tr>
      <td>options</td>
      <td></td>
      <td>下载扩展</td>
      <td> dictionary </td>
   </tr>
   <tr>
      <td>timeout</td>
      <td></td>
      <td>超时时间，单位毫秒</td>
      <td> string </td>
   </tr>
   <tr>
      <td>unEncrypt</td>
      <td>true / false </td>
      <td>是否加密</td>
      <td> string </td>
   </tr>
</table>

### 方法
 
<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>send</td>
      <td>发送网络请求</td>
      <td></td>
   </tr>
   <tr>
      <td>cancel</td>
      <td>取消网络请求</td>
      <td></td>
   </tr>
   <tr>
      <td>addHeader</td>
      <td>增加http请求头部信息</td>
      <td></td>
   </tr>
</table>

***

#### send

发送网络请求

request.send()

***

#### cancel

取消网络请求

request.cancel()

***

#### addHeader

增加http请求头部字段

request.addHeader(key, value)

##### params

* key:header头部key值
* value:header头部value值

***

### 网络请求示例

 1.特定格式的请求方式, 添加相应的请求头
 
 	 var request = new Request();
     request.url = serverIp;
     request.method = "post";
	 request.addHeader("token","token2")
     request.data = "{'info':'aaaa'}";
	 request.success = function(data){
        alert(data);
     };
     request.error = function(e){
        alert(e);
     };
     request.send();

2.标准form表单传递数据

	 var request = new Request();
     request.url = serverIp;
     request.method = "post";
     request.file = [{"fileURL":"url","fileName":"picfile","name":"a","mimeType","image/png"}];
	 request.success = function(data){
        alert(data);
     };
     request.error = function(e){
        alert(e);
     };
     request.send();

***


## 数据映射（Request新增功能）
### 功能说明  
在页面数据绑定中，为方便数据提交。根据数据接口规范返回值，从数据绑定中取值，自动形成body。
### 使用说明  
每个tml文件都有自己对应的Model数据配置和Api请求配置。如**login.tml**,对应数据文件为**loginData.js**；使用的接口为**login.json**。  

### 新增属性  
request新增参数

| 方法  | 描述  | 备注 |
|:------------- |:---------------:| :--------:|
| name | 接口名称|  |    
    
  
### 示例  
用例：用户登录，获取用户信息。  
接口：（1）login.tml;(2)getUserInfo.tml  
login请求参数：  
      
| 参数  | 描述  |
|:------------- |:---------------:| 
| username | 用户名 |     
| password | 密码 |

login返回参数：  

| 参数  | 描述  |
|:------------- |:---------------:| 
| token | 用户令牌 |     
| code | 状态码 |

getUserInfo请求参数：  

| 参数  | 描述  |
|:------------- |:---------------:| 
| token | 用户令牌 |   
| deviceId | 设备ID | 
  
getUserInfo返回参数：   
   
| 参数  | 描述  |
|:------------- |:---------------:| 
| nikename | 昵称 |
| age | 年龄 |
| sex | 性别 |
| avatar | 头像 |


loginData.js如下：  
  
```  
var DATA = {
    userName : "user",
    passWord : "",
    UserInfo: {
    	nikename:"" 
    	token: ""
    	age: "", 
    	sex: "",
    	avatar:"" 
    },
    deviceId:""
};
var getUserInfo = {   //注释1
	token = DATA.UserInfo.token; //注释2
}
```    

请求如下：   
 
```  
  var request = new Request();
  request.name = "login"; 
//或者使用以下代码
//request.name = "getUserInfo";
  request.success = new Function(data){
      //do somethings in success
  }
  request.error = new Function(data){
      //do something in error
  }
  request.send(); 
```
  
* 在使用request.interfaceName这个字段时，body的数据会从**Data.js**中获取且只会匹配**根字段**。
* 注释1: 某些特殊情况中，需要的字段并不在根内容中，需要声明。这时需要声明**var name = {}**;
* 注释2: 在申明的接口中去申明key对应的value值具体是DATA数据中的哪个字段。




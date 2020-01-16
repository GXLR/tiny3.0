## mvvm数据绑定

### 新增页面数据文件
每个tml文件对应一个数据文件，定义tml的Model数据。文件名采用"页面名Data.js"的命名格式。比如login.tml，对应数据文件为loginData.js。
 
在数据文件中，支持js方法调用。

* 支持多语言函数Window.lang(key)

* 原有loadValue(key, false) 替换为**$pub.key**  
* 原有loadValue(key, true) 替换为**$local.key**  
  
  

```
var DATA = {
    name: "jerry",
    pubData :"$pub.name"
    cocalData : "$local.token"
    country: "china",
    age:"11",
    title:Window.lang("name"),
    info: { age: 12, sex: "man" },
    color: ["yellow", "red", "blue"],
    color: ["yellow", "red", "blue"],
    Days: [
        { "name": "Monday", "value": "0" },
        { "name": "Tuesday", "value": "1" },
        { "name": "Wednesday", "value": "2" },
        { "name": "Thursday", "value": "3" },
        { "name": "Friday", "value": "4" },
        { "name": "Saturday", "value": "5" },
        { "name": "Sunday", "value": "6" }
    ],
    index:0,
    lang:Window.lange("helloword")
};
```
### 页面绑定说明
tml中支持属性、node绑定，采用模版表达式{{key}}。key值支持属性、对象属性、数组。
原有的多语言表达式${key}，继续采用。

 
```
	<label value = "{{name}}">
	
	<label value = "{{Days[1].name}}">

	<label value = "{{colors[0]}}">
	
	<text>{{country}}</text>

```

### JS API

####  vm
* 描述

  新增vm内置对象，提供数据绑定，数据赋值功能.
  
* 方法

| 方法  | 描述  |  参数 | 
|:------------- |:---------------:| :---------------: |
|     vm.setData()      | 数据更新。调用方法，更新视图        |        |

参考案例

 ```
function protoc() {
    data.info.age = 30;
    vm.setData()
}

function confirm() {

    data.name = "sun"
    data.color[0] = "green"
    
    vm.setData()
}
 ```
 

 
#### 禁用 API

禁用下列API，js通过Model设置或获取值。


| 方法  | 描述  |  状态 | 
|:------------- |:---------------:| :---------------: |
| setValue     | 设置Value值 | 禁用 |  
| getValue     | 获取Value值 | 禁用 |  
| setAttribute     | 设置属性值 | 禁用 |  
| getAttribute     | 获取属性值 | 禁用 |    
| saveValue     | 储存全局数据 | 禁用 |    
| loadValue     | 获取全局数据 | 禁用 |  

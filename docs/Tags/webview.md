## webview

### 标签属性
---

| 属性 | 取值|描述 |
| :-----| :---- | :---- |
|id    |string|规定元素的唯一id|
| url|string| html地址 |
| class |string| 样式类名 |
|loadCookie|string| |


### js方法
---

| 属性 | 描述 |
| :-----| :---- |
| executeScript | 手动加载一段js |
| goForward | 到访问页列表中的下一页 |
| goBack | 到访问页列表中的上一页 |
| setData | 加载一段html代码片段 |
| postUrl | post形式访问url |

### 用例
---
#### 标签及样式
```
.web{
	width:100%;
	height:100%;
}

<webview id = "webview" class = "web" url = "http://www.mtiny.cn/tiny/index.html" loadCookie = "true"/>
```


#### executeScript方法
```
var webview = $('webview');
webview.executeScript('alert("I am an alert box!!")');
```

#### goBack方法
```
var webview = $('webview');
webview.goBack();
```

#### goForward方法
```
var webview = $('webview');
webview.goForward();
```

#### setData方法
```
var htmlStr = "<input type="file"  accept="image/*" capture="camera" size="30">";
var webview = $('webview');
webview.setData(htmlStr);
```
#### postUrl方法
```
var url = "http://www.example.com";
var postData = "username=admin&password=123456";
var webview = $('webview');
webview.postUrl(url, postData);

```
#### load监听
```
$('webview').addEventListener("load",function(){
    console.print("加载完成");
});

```

#### 检测滑到顶部或底部
```
$('webview').addEventListener("scrollCallBack",function(place){
    console.print("top or bottom="+place);
});

```

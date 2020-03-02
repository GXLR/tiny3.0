## Window

### 描述

Window 对象为tiny 内置对象，提供一些程序设备相关的基本操作。如本地存储、拨打电话、拍照相册等功能。

### 事件

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>openKeyBoard</td>
      <td>打开键盘事件</td>
      <td></td>
   </tr>
   <tr>
      <td>closeKeyBoard</td>
      <td>关闭键盘事件</td>
      <td></td>
   </tr>
</table>


### 方法

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>方法</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td><a href='#1F'>assign</a></td>
      <td>页面跳转</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#2F'>back</a></td>
      <td>页面返回</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#3F'>open</a></td>
      <td>打开新的窗体</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#4F'>close</a></td>
      <td>关闭新的窗体</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#5F'>addEventListener</a></td>
      <td>增加事件监听</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#6F'>closeKeyBoard</a></td>
      <td>关闭键盘</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#7F'>tel</a></td>
      <td>拨打电话</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#8F'>info</a></td>
      <td>弹出提示信息</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#9F'>alert</a></td>
      <td>弹出提示信息</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#10F'>lock</a></td>
      <td>弹出进度条提示</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#11F'>unlock</a></td>
      <td>关闭进度条提示</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#12F'>confirm</a></td>
      <td>弹出选择对话框</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#13F'>setInterval</a></td>
      <td>设置定时器</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#14F'>clearInterval</a></td>
      <td>清除定时器</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#15F'>setTimeout</a></td>
      <td>设置延迟执行</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#16F'>addNotification</a></td>
      <td>增加通知</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#17F'>postNotification</a></td>
      <td>发送通知</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#18F'>removeNotification</a></td>
      <td>移除通知</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#19F'>copyToPasteboard</a></td>
      <td>复制剪切板</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#20F'>setStatusBar</a></td>
      <td>设置状态栏</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#21F'>firstLanguage</a></td>
      <td>获取手机语言</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#22F'>fileIsExists</a></td>
      <td>文件是否存在</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#23F'>exitApp</a></td>
      <td>退出app</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#24F'>getfilePath</a></td>
      <td>获取文件路径</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#25F'>deleteDir</a></td>
      <td>删除当前路径下的文件</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#26F'>isImage</a></td>
      <td>图片是否损坏</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#27F'>getStatusBarHeight</a></td>
      <td>获取状态栏高度</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#28F'>startVibrate</a></td>
      <td>震动</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#29F'>stopVibrate</a></td>
      <td>停止震动</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#30F'>photo</a></td>
      <td>选择本地相册</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#31F'>camera</a></td>
      <td>拍照</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#32F'>forward</a></td>
      <td>前向跳转</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#33F'>backward</a></td>
      <td>后退</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#34F'>closeBottomAds</a></td>
      <td>关闭广告页</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#35F'>closeOpenAds</a></td>
      <td>关闭广告页</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#36F'>getFileData</a></td>
      <td>图片base64编码</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#37F'>getEncryptFileData</a></td>
      <td>读取本地文件</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#38F'>encryptFile</a></td>
      <td>转出base64写到路径中</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#39F'>allContact</a></td>
      <td>抓取通讯录所有联系人</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#40F'>contact</a></td>
      <td>选择联系人</td>
      <td></td>
   </tr>
      <tr>
      <td><a href='#41F'>saveValue</a></td>
      <td>保存全局变量</td>
      <td>当数据命名为"$pub.value"或者"$local.value"，与数据绑定具有联动效果</td>
   </tr>
   <tr>
      <td><a href='#42F'>loadValue</a></td>
      <td>加载全局变量</td>
      <td>当数据命名为"$pub.value"或者"$local.value"，与数据绑定具有联动效果</td>
   </tr>
   <tr>
      <td><a href='#43F'>removeValue</a></td>
      <td>移除全局变量</td>
      <td>当数据命名为"$pub.value"或者"$local.value"，与数据绑定具有联动效果</td>
   </tr>
</table>
 
***
#### <a name='1F'>assign</a>

**1.页面跳转**

    Window.assign(url)

如果要实现应用内页面之间的跳转，可以使用这个语法，此处的 url 一般是TML 文件。

##### params

* url:tml地址

**2.应用商店或者浏览器跳转**

    Window.assign('browser://'+'url') 

如果要实现应用与应用商店、浏览器或者其他应用的通讯，使用这条语句即可。省略的


##### params

* browser:// : 是跳转的关键语句，不可省略。
* url : 要访问的目标地址，不能为空，没有确定模板，而只需要跳转到浏览器，可以使用以下语句：

        Window.assign('browser://'+'https:') 


***

#### <a name='2F'>back</a>
根据页面ID，返回页面。如果id为空，则直接返回上一页面；如果id在栈顶或者id非空但不存在则不操作

    Window.back(id)

##### params

* id:页面id。如果为空，直接返回上一页面。<br/>

***

#### <a name='3F'>open</a>

打开新的窗体，打开窗体页面剧中显示

    Window.open(url, width, height, animationType)

##### params

* url:tml页面地址
* width:页面宽度，支持百分比，为暂用当前屏幕的百分比。
* height:页面高度，支持百分比，为暂用当前屏幕的百分比。
* animationType:动画类型。

示例：

    Window.open("login.tml", "50%", "60%", "scaleFromTopRight");

###### 动画类型

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>animationType</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>none</td>
      <td>无动画</td>
      <td></td>
   </tr>
   <tr>
      <td>slideFromBottom</td>
      <td>从底部进入视图</td>
      <td></td>
   </tr>
   <tr>
      <td>slideFromTop</td>
      <td>从头部进入视图</td>
      <td></td>
   </tr>
   <tr>
      <td>slideFromLeft</td>
      <td>从左边进入视图</td>
      <td></td>
   </tr>
   <tr>
      <td>slideFromRight</td>
      <td>从右边进入视图</td>
      <td></td>
   </tr>
   <tr>
      <td>popShake</td>
      <td>视图抖动形式</td>
      <td></td>
   </tr>
   <tr>
      <td>scaleFromTopRight</td>
      <td>从头部右上角进入视图</td>
      <td></td>
   </tr>
   <tr>
      <td>scaleFromBottomRight </td>
      <td>从底部右下角进入视图</td>
      <td></td>
   </tr>
</table>


#### <a name='4F'>close</a>

关闭当前弹出视图 

	Window.close()

***

#### <a name='5F'>addEventListener</a>

增加事件监听

	element.addEventListener(event, function())

##### params

* event:事件名称。字符串格式。<br />
  openKeyBoard打开键盘<br />
  closeKeyBoard关闭键盘<br />

* callback

示例：

       Window.addEventListener('openKeyBoard', function(){
            Window.info('打开键盘');
       });
       Window.addEventListener('closeKeyBoard', function(){
            Window.info('关闭键盘');
       });

***

#### <a name='6F'>closeKeyBoard</a>

关闭键盘 

	Window.closeKeyBoard()

***
#### <a name='7F'>tel</a>

拨打电话

	Window.tel(phone)

##### params

* phone:电话号码

***

#### <a name='8F'>info</a>

弹出提示信息

	Window.info(msg)

***

#### <a name='9F'>alert</a>

弹出提示框

	Window.alert(info)

##### params

* info:提示信息

***

#### <a name='10F'>lock</a>

弹出进度条提示，在使用lock方法后，需要通过unlock关闭提示框。

	Window.lock()。

***

#### <a name='11F'>unlock</a>

关闭进度条提示

	Window.unlock()

***

#### <a name='12F'>confirm</a>

弹出提示框

	Window.confirm(message, function(index){})

##### params

* message:提示信息
* callback:返回按钮索引

***

#### <a name='13F'>setInterval</a>

设置定时器<br />

	var id = Window.setInterval(callback, period)

setInterval 只会执行回调函数一次，不过 setInterval 会每隔 X 毫秒执行函数一次。想要清除这个定时器，可以使用 clearInterval 方法。

##### params

* callback:定时执行的callback方法
* period:时间 单位毫秒

##### return

* id:定时器id

eg:

设置定时器

    var setIntervalId = Window.setInterval(function(){
            console.log("hello world");
    }, 0,5000);

***

#### <a name='14F'>clearInterval</a>

清理定时器

	var id = Window.clearInterval(id)

##### params

* id:定时器id

***

#### <a name='15F'>setTimeout</a>

延时执行callback方法

	Window.setTimeout(callback, delay)

##### params

* callback:延时执行的callback方法
* delay:时间 单位毫秒

***

#### <a name='16F'>addNotification</a>

监听通知

	Window.addNotification(name, function(data){})

##### params

* name:通知名称
* data:通知执行的回调，含通知发送的参数

***

#### <a name='17F'>postNotification</a>

发送通知

	Window.postNotification(name, data)

##### params

* name:通知名称
* data:发送通知的参数

通知的使用方法：

一般来说，我们都是先发送通知，然后在去接收通知，比如下例，我们在 A 页面发送了一个 name 是closeAm 的通知，这个通知会在网络请求失败之后触发：

        r.error = function(error) {
        Window.postNotification("closeAm", "Am");
        log(error);
    }

当网络请求失败之后，然后通过通知的 name 属性，B 页面会接收到这个信息，B 页面接收这个通知的写法应该在相应的 JavaScript 里增加：

    Window.addNotification("closeAm", function(data){
        Window.close();
    })
    
***

#### <a name='18F'> removeNotification </a>

移除通知

	Window.removeNotification('notification')

##### params
* name:通知名称

***

####  <a name='19F'>copyToPasteboard</a>

复制内容到系统剪贴板

	Window.copyToPasteboard(string)

##### params

* string:复制的内容

#### exp ####


    // js

    function copy(){
        var lab = document.getElementById('lab1');
        var value = lab.attributeForName('value');
            Window.copyToPasteboard(value);
            alert("已复制 " + value);
        }


    //tml
        <label value="TinyBuilder" class="" id="lab1"/>
        <button value="复制" class="btn_blue" id="" onclick="copy()" />   
        
***

####  <a name='20F'> setStatusBar </a>
设置状态栏

     var options = {
         "backgroundColor": "#ff0000"
     }
     Window.setStatusBar(options);

***

####  <a name='21F'> firstLanguage </a>
获取手机语言

	Window.firstLanguage(function(data){})

***

####  <a name='22F'> fileIsExists </a>
获取手机语言

	Window.fileIsExists(fileName)

##### params

* fileName:文件路径

***

####  <a name='23F'> exitApp </a>
退出app

	Window.exitApp()

***

####  <a name='24F'> getfilePath </a>
获取文件路径

	Window.getfilePath(fileName)

##### params

* fileName:文件名

***

####  <a name='25F'> deleteDir </a>
删除当前路径下的文件

	Window.deleteDir(filePath)

##### params

* filePath:文件路径

***

####  <a name='26F'> isImage </a>
图片是否损坏

	Window.isImage(filePath)

##### params

* filePath:图片路径

***

####  <a name='27F'> getStatusBarHeight </a>
获取状态栏高度

	Window.getStatusBarHeight()

***

####  <a name='28F'> startVibrate </a>
震动

	Window.startVibrate(flag)

##### params

* flag:true:一直震动, false:震动一次

***

####  <a name='29F'> stopVibrate </a>
停止震动

	Window.stopVibrate()

***

#### <a name='30F'>photo</a>

选择本地相册

	Window.photo(options, function(path){} ,function(cancel){});

##### params

* options:json参数
* callback:返回本地图片路径


<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>options</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>crop</td>
      <td>是否允许修改</td>
      <td>true:允许修改 false:不允许修改</td>
   </tr>
   <tr>
      <td>format</td>
      <td>图片格式 jpg png</td>
      <td></td>
   </tr>
   <tr>
      <td>height</td>
      <td>图片高度</td>
      <td></td>
   </tr>
   <tr>
      <td>width</td>
      <td>图片宽度</td>
      <td></td>
   </tr>
   <tr>
      <td>scale</td>
      <td>是否压缩到指定宽高</td>
      <td>true:压缩到指定宽高 false:根据设定的宽高的最大值，按比例压缩</td>
   </tr>
   <tr>
      <td>quality</td>
      <td>图片质量 0-100</td>
      <td></td>
   </tr>
</table>
***

#### <a name='31F'>camera</a>

照相机功能

	Window.camera(options, function(path){},function(cancel){});

##### params

* options:json参数,参考photo参数。
* callback:返回本地图片路径

***

#### <a name='32F'>forward</a>

前进一个页面

	Window.forward();

***

#### <a name='33F'> backward </a>

后退

	Window.backward();

***

#### <a name='34F'> closeBottomAds </a>

关闭广告页

	Window.closeBottomAds();

***

#### <a name='35F'> closeOpenAds </a>

关闭广告页

	Window.closeOpenAds();

***

#### <a name='36F'> getFileData </a>

图片base64编码

	Window.getFileData(path);

##### params

* path:图片路径

***

#### <a name='37F'> getEncryptFileData </a>

读取本地文件

	Window.getEncryptFileData(path);

##### params

* path:文件路径

***

#### <a name='38F'> encryptFile </a>

转出base64写到路径中

	Window.encryptFile(path);

##### params

* path:文件路径

***

####  <a name='39F'>allContact</a>

用于抓取通讯录所有联系人

    Window.allContact(function (data){
    //data 是抓取到的数据；
    });

如果要遍历抓取的所有联系人，可以采取如下方法

    Window.allContact(function(data){
            for(var i=0;i<data.length;i++){
                var id =data[i].id;
                var name =data[i].name;
                var phone= data[i].mobile;
    //            var phone=json.phone;
                console.print('id====='+id);
                console.print('name==='+name);                
            for(var j=0;j<phone.length;j++){
                console.print('phone'+j+'======'+phone[j]);
                }
            }
          });

 
***

####  <a name='40F'>contact</a>

读取通讯录

	Window.contact(function(opt){} ,function( ){});

##### params

* opt.name：姓名
* opt.mobile：电话号码，是以数组形式存在的

使用方法：

    Window.contact(function(opt) {
        console.log(opt.mobile);
        console.log(opt.name);        
    }, function() {
    });
    
***

####  <a name='41F'>saveValue</a>

根据键值对，保存数据到客户端的内存中/本地。

**方法：**

	Window.saveValue(key, value)

##### params

* key:存储key值
* value:存储value值

##### 注意事项  

当key 为**$pub.**或者**$local** 标识，这个值会与数据绑定中Data.js中的值互通，在数据绑定中改变这个值，会影响JS的取值，在JS中赋值会影响Data.JS的取值。  

key申明时没有标示以上开头字段则该值表包在内存中。    
  
**举例：**  

	在frame中赋值，在页面中取值。   
	
	nav.tml 代码片段  
	<frame>
    		<head>
        		<script src="nav.js"/>
    		</head>
    		<navigator id="nav">
        		<page url="entrylist/entrylist.tml"  hidesStatusBar="true"/>
    		</navigator>
	</frame>  
	
	nav.js 代码片段  
	Window.saveValue("$pub.value","the value save in frame");
	
	在取值页面Data.js 中代码片段
	var DATA = {
    		pubValue :"$pub.value",
   		value :"",
    		a: 1,
    		b: 2
	}
	  
	在tml中片段 
	<label value="pub = {{pubValue}} " class="labelBtn" />
	
	运行结果  
	这个label会显示成 pub = the value save in frame
	
***

####  <a name='42F'>loadValue</a>

根据键值对，从客户端的内存/本地中加载数据。

**方法：**

	Window.loadValue(key)

##### params

* key:存储key值	
	
***

####  <a name='43F'>removeValue</a>

根据键值对，从客户端的内存/本地中移除数据

**方法：**

	Window.removeValue(key)

##### params

* key:存储key值
* flag：true沙盒，false内存





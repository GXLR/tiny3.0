## element

### 描述

element对象定义了tml文档中的节点结构。

### 方法

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td><a href='#1F'>attributeForName</a></td>
      <td>通过属性名称，获取属性</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#2F'>setAttribute</a></td>
      <td>设置属性</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#3F'>setStyle</a></td>
      <td>设置样式</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#4F'>removeChild</a></td>
      <td>删除子元素</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#5F'>removeChildren</a></td>
      <td>删除所有子元素</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#6F'>addEventListener</a></td>
      <td>增加事件监听</td>
      <td></td>
   </tr>
  <!-- <tr>
      <td><a href='#7F'>addAnimation</a></td>
      <td>增加动画</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#8F'>startAnimations</a></td>
      <td>开始动画</td>
      <td></td>
   </tr>-->
   
   <tr>
      <td><a href='#9F'> childNodes </a></td>
      <td>获取所有子项</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#10F'> getData </a></td>
      <td>imgae获取图片base64</td>
      <td></td>
   </tr>
  
</table>

***
#### <a name='1F'>attributeForName</a>

通过属性名称，获取属性

	element.attributeForName(name)

##### params

* name:节点名称

***
#### <a name='2F'>setAttribute</a>

设置属性

	element.setAttribute(name, value)

##### params

* name:属性名称
* value:属性值

***
#### <a name='3F'>setStyle</a>

设置style样式

	element.setStyle(name, value)

##### params

* name:样式名称
* value:样式值


***
#### <a name='4F'>removeChild</a>

删除子元素

	element.removeChild(id)

##### params

* id:子元素节点id
***
#### <a name='5F'>removeChildren</a>

删除所有子节点

	element.removeChildren()

<!--***
#### <a name='6F'>insertInnerTML</a>

插入tml元素

element.insertInnerTML(direction, tml)

##### params

* direction:up|down。往上或往下追加节点。
* tml:tml内容


**示例: **
		
		//tml
		<vpanel id="div_1">
			<button value="一级" class="btn_blue" id="" onclick="zhan()" />
		</vpanel>


		//js
		function zhan(){	
			
			var tml = ' <label class="btn_blue" value = "分级2" />';
			
			 $('div_1').insertInnerTML('down',tml);
		}-->

<!--***

#### <a name='7F'>insertInnerTMLByIndex</a>

插入tml元素

element.insertInnerTML(index, tml)

##### params

* index:子元素索引。
* tml:tml内容
-->
***

#### <a name='6F'>addEventListener</a>

增加事件监听

	element.addEventListener(event, function())

##### params

* event:事件名称。字符串格式
* callback

<!--***

#### <a name='9F'>addAnimation</a>

开始动画

element.addAnimation(type, startValue, endValue, duration)

##### params

* type:动画类型
* startValue:动画开始值
* endValue:动画结束值值
* duration:持续时间。单位毫秒

##### 动画类型

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>rotation</td>
      <td>旋转，同时在x,y轴旋转 单位角度</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>rotationX</td>
      <td>X轴旋转</td>
      <td></td>
   </tr>
   <tr>
      <td>rotationY</td>
      <td>Y轴旋转</td>
      <td></td>
   </tr>
   <tr>
      <td>translationX</td>
      <td>X轴移动距离</td>
      <td>只有相对或绝对定位才支持</td>
   </tr>
   <tr>
      <td>translationY</td>
      <td>Y轴移动距离</td>
      <td>只有相对或绝对定位才支持</td>
   </tr>
   <tr>
      <td>scale</td>
      <td>按比例放大缩小</td>
      <td></td>
   </tr>
   <tr>
      <td>scaleX</td>
      <td>在X轴，按比例放大缩小</td>
      <td></td>
   </tr>
   <tr>
      <td>scaleY</td>
      <td>在Y轴，按比例放大缩小</td>
      <td></td>
   </tr>
   <tr>
      <td>alpha</td>
      <td>透明度。从0-1.</td>
      <td></td>
   </tr>
</table>-->

<!--***

#### <a name='10F'>startAnimations</a>

开始动画

element.startAnimations()

### example ###

	//js

	function start(){

		var div1 = document.getElementById('div1');

		div1.addAnimation('rotation', 1000, 2000, 5000);
	
		div1.startAnimations();
	}

	//tml
		<button value="rotation" class="btn_blue" id="" onclick="start()" />
		<div class="divs" id="div1">		
		</div>

	//css
	.divs{
		height:100;
		width:100;
		background-color:#339999;
		margin:20 0 20 0;
		align:center;	
	}
-->
<!--***

#### <a name='11F'>getWidth</a>

获取控件宽度

element.getWidth()

***
#### <a name='12F'>getHeight</a>

获取控件高度

element.getHeight()

***
#### <a name='13F'>getX</a>

获取控件x轴距离，getX()方法是获得获取元素在父容器中X轴距离，其原点是父容器左上角。

element.getX()

***
#### <a name='14F'>getY</a>

获取控件y轴距离，getY()方法是获得获取元素在父容器中Y轴距离，其原点是父容器左上角。

element.getY()

***

#### <a name='15F'>getXonScreen</a>

获取控件x轴距离，getXonScreen() 方法是获取元素在手机屏幕上X轴距离，其原点是屏幕左上角。

element.getXonScreen()

示例：

	 $('btn_1').getXonScreen();

***

#### <a name='16F'>getYonScreen</a>

获取控件y轴距离，getYonScreen() 方法是获取元素在手机屏幕上Y轴距离，其原点是屏幕左上角。

element.getYonScreen()

示例：

	 $('btn_1').getYonScreen();

***

#### <a name='17F'>saveImage</a>

由 tinyBuilder 提供的截图方法；

element.saveImage()

示例：

	var option = {"saveToGallary":true}

	$('divContext').saveImage(option,function(saveImage){
							log("data======="+data);
					});-->
					
***

#### <a name='9F'> childNodes </a>

获取所有子项

	element.childNodes()
	
***
#### <a name='10F'> getData </a>

image获取图片base64

	element.getData()



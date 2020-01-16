## label

### 标签属性
---

| 属性 | 取值|描述 |
| :-----| :---- | :---- |
|id    |string|规定元素的唯一id|
| value|string| 文本内容 |
| class |string| 样式类名 |

### 样式属性
---

| 属性 | 描述 |缺省值|
| :-----| :---- |:---- |
| <a href='#1F'>color</a> | 字体颜色|#000000|
| <a href='#2F'>font-style</a>|斜体(italic)，粗体(bold)，正常(normal)|normal|
|font-family|字体||
|font-size|字体大小|14|
|<a href='#3F'>text-decoration</a>|下划线(underline)，中划线(line-through)||
|text-align|对齐方式:left，center，right|left|
|max-lines|最大行数|最大行数大于0可换行|
|max-height|最大高度||


### 标签事件
---

| 属性 | 描述 |
| :-----| :---- |
| onclick | 点击事件 |
| longPress | 长按事件 |


#### onclick

点击文本执行的事件<br />
	
	<label value="TinyBuilder" class="f1" onclick="camera()">
	
#### longPress
	var label = Document.getElementById("label")
	label.addEventListener("longPress", function () {
	     info("longPress");
	})



### 样式示例

#### <a name='1F'>color</a>

	<label value="TinyBuilder" class="c1"></label>
	<label value="TinyBuilder" class="c2"></label>

	.c1{
		color:#ff0000;
	}
	
	.c2{
		color:#00ff00;
	}

#### <a name='2F'>font-style</a>

	<label value="TinyBuilder" class="s1"></label>
	<label value="TinyBuilder" class="s2"></label>
	<label value="TinyBuilder" class="s3"></label>

	.s1{
		font-style:normal;
	}
	
	.s2{
		font-style:italic;
	}
	
	.s3{
		font-style:bold;
	}

#### <a name='3F'>text-decoration</a>
	
	<label value="TinyBuilder" class="de1"></label>
	<label value="TinyBuilder" class="de2"></label>

	.de1{
		text-decoration:line-through;
	}
	
	.de2{
		text-decoration:underline;
	}


### 富文本标签
---

| 属性 | 描述 |缺省值|
| :-----| :---- |:---- |
| <a href='#4F'>a</a> | 超链接||
| <a href='#5F'>strong</a> |粗体||
|<a href='#5F'>br/</a>|换行||


#### <a name='4F'>a</a>

	<label class="c1">Hello <a href="www.baidu.com">World</a>!</label>

	.c1{
		color:#ff0000;
	}


#### <a name='5F'> strong </a>

	<label class="c1">Hello <strong>World</strong>!</label>

	.c1{
		color:#ff0000;
	}
	
#### <a name='6F'> br/ </a>

	<label class="rich2">Hello <br/>World<br/>!</label>
	
***

### 渐变
1.文字渐变

 	<label class="label2 text_l_t" value="文字渐变"/>

	.text_l_t{
	    text-gradient:left right #dd5c87 #0e67ec;
	}

2.背景渐变

	<label class="label3 box_gradient" value="背景渐变"/>
	
	.box_gradient{
		background-color: #ffffff;
	    background-gradient:left right #dd5c87 #0e67ec;
	}

### 阴影

 	<label class="label4 box_shadow" value="带阴影的label"/>
 
 	.box_shadow{
		background-shadow:0 0 10 #FF0000;
		background-color: #FFFFFF;
	}

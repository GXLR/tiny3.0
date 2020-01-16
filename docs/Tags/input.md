## input

### 描述

`<input>`标签用于搜集用户输入的信息。
根据不同的 type 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、密码字段、数字字段等等。


### 属性

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>属性</td>
      <td>取值</td>
      <td>描述</td>
      <td>缺省值</td>
   </tr>
   <tr>
      <td>id</td>
      <td></td>
      <td>规定元素的唯一id</td>
      <td></td>
   </tr>
   <tr>
      <td>class</td>
      <td>classname</td>
      <td>规定元素的类名（classname)</td>
      <td></td>
   </tr>
   <tr>
      <td>value</td>
      <td>string</td>
      <td>文本内容</td>
      <td></td>
   </tr>
   <tr>
      <td>tip</td>
      <td>string</td>
      <td>提示信息</td>
      <td></td>
   </tr>
    <tr>
      <td>tipColor</td>
      <td>string</td>
      <td>tip颜色</td>
      <td></td>
   </tr>
   <tr>
      <td>type</td>
      <td> password / email / digital / telephone / number / bankCard / cash </td>
      <td>规定 input 元素的类型。</td>
      <td>input控件type为idCard时增加 xChar 属性修改自定义键盘 X 位置</td>
   </tr>
   <tr>
      <td>maxLength</td>
      <td></td>
      <td>最大输入长度</td>
      <td>达到最大长度后，就无法输入字符。</td>
   </tr>
   <tr>
      <td>fixed</td>
      <td>string</td>
      <td>小数点后几位</td>
      <td></td>
   </tr>
   <tr>
      <td>disable</td>
      <td>true/false</td>
      <td>是否禁用</td>
      <td></td>
   </tr>
   <tr>
      <td>allowLongClick </td>
      <td>string</td>
      <td>屏蔽粘贴复制功能</td>
      <td>默认为 true；值为false，则屏蔽粘贴复制功能</td>
   </tr>
   <tr>
      <td>showClearButton</td>
      <td>string</td>
      <td>是否禁用控件中的快捷删除按钮</td>
      <td>默认为 true，不禁用</td>
	</tr>
	<tr>
      <td>newStyle</td>
      <td>string</td>
      <td>是否使用新样式</td>
      <td>默认为 false，不使用</td>	
	<tr>
      <td>errorTip</td>
      <td>string</td>
      <td>错误提示</td>
      <td></td>
	<tr>
      <td>showCounter</td>
      <td>string</td>
      <td>是否显示最大字数限制</td>
      <td>默认为 false，不显示</td>
	<tr>
      <td>showError</td>
      <td>string</td>
      <td>是否显示错误提示</td>
      <td>默认为 false，不显示</td>
	</tr>

</table>

### 样式属性
---

| 属性 | 描述 |缺省值|
| :-----| :---- |:---- |
|max-lines|最大行数|最大行数大于0可换行|
|max-height|最大高度||
| font-style|斜体(italic)，粗体(bold)，正常(normal)|normal|
| color | 字体颜色|#000000|
|font-family|字体||
|font-size|字体大小|14|
|text-align|对齐方式:left，center，right|left|
|cursor-color|光标颜色||
|tipColor|水印颜色||
|top-tip-font-size|input上浮提示文字大小|12|
|top-tip-color|input上浮提示文字颜色|#cccccc|
|error-tip-color|input错误提示文字颜色|#ff0000|
|error-tip-font-size|input错误提示文字大小|12|
|counter-tip-color|input最大字数限制文字颜色|#cccccc|
|counter-tip-font-size|input最大字数限制文字大小|12|
|show-underliner|input是否显示下划线（boolean）|true|


	
### 事件

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>focus</td>
      <td>input 获取焦点时，执行的事件</td>
      <td></td>
   </tr>
   <tr>
      <td>blur</td>
      <td>input 失去焦点时，执行的事件</td>
      <td></td>
   </tr>
   <tr>
      <td>textChange</td>
      <td>文本发生变化时执行的事件</td>
      <td></td>
   </tr>
</table>
	


#### textChange

文本发生变化时执行的事件<br />

	element.addEventListener("textChange", function(text){})

#####  callback params

* text:input的文本内容。<br />

#####  参考
	
	var input = $('input')
	input1.addEventListener('textChange',function(txt, index, length){
        alert(txt + "  " + index + "  " + length);
    })

### 方法

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>方法</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>focus</td>
      <td>input 获取焦点</td>
      <td></td>
   </tr>
   <tr>
      <td>blur</td>
      <td>input 失去焦点</td>
      <td></td>
   </tr>
</table>

示例

	var input1 = $("input1")
	
	input1.addEventListener("focus", function(){window.alert("获取焦点");});

	input1.focus();//获取焦点

                          
      
    var input = document.getElementById("inputID")

    input.addEventListener("blur", function () {
        window.alert("失去焦点")      
    })

	 input.blur();//失去焦点
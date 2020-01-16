## img

### 描述

`<img>` 标签定义tml页面中的图像。


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
      <td>src</td>
      <td>string</td>
      <td>图片地址</td>
      <td>支持本地file:/// 和服务器http://</td>
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
      <td>getData</td>
      <td>返回图图片的字节，并进行base64加密</td>
      <td></td>
   </tr>
</table>


### 例子

      <img src="file:///img.png" class="classname"/>


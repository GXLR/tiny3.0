## Navigator

### 描述

Navigator对象为tiny内置对象，提供页面跳转的方法。

### 方法

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>方法</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td><a href='#1F'>present</a></td>
      <td>框架跳转</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#2F'>dismiss</a></td>
      <td>关闭框架</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#3F'>push</a></td>
      <td>跳转下一级页面</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#4F'>pop</a></td>
      <td>返回上一级页面</td>
      <td></td>
   </tr>
   <tr>
      <td><a href='#5F'>popToTop</a></td>
      <td>返回到顶层页面</td>
      <td></td>
   </tr>
    <tr>
      <td><a href='#6F'>popToPage</a></td>
      <td>返回到指定页面</td>
      <td></td>
   </tr>
</table>
 
***
#### <a name='1F'>present</a>

**跳转框架**

##### 参数
<table>
<tr>
<td>属性</td>
<td>取值</td>
<td>描述</td>
<td>缺省值</td>
<td>备注</td>
</tr>
<tr>
<td>url</td>
<td> </td>
<td>到打开的frame页面的地址</td>
<td></td>
<td></td>
</tr>
<tr>
<td>animate</td>
<td>default/none/slideFromBottom/
slideFromLeft/slideFromRight/
slideFromTop</td>
<td>执行的动画类型</td>
<td>default</td>
<td></td>
</tr>
<tr>
<td>closePrevious</td>
<td>true/false</td>
<td>是否关闭之前的界面</td>
<td>false</td>
<td>建议写成true 关闭之前的界面，节省内存</td>
</tr>
</table>

#### 示例
```
var opts = {"url":"nav.tml", "animate":"slideFromRight", "closePrevious":"true"}
Navigator.present(opts);

```
***

#### <a name='2F'> dismiss </a>

**关闭框架**

##### 参数
<table>
<tr>
<td>属性</td>
<td>取值</td>
<td>描述</td>
<td>缺省值</td>
<td>备注</td>
</tr>
<tr>
<td>opts.animate</td>
<td>default/none/slideFromBottom/
slideFromLeft/slideFromRight/
slideFromTop</td>
<td>执行的动画类型</td>
<td> default </td>
<td></td>
</tr>
</table>

#### 示例
```
var opts = {"animate":"default"};
Navigator.dismiss(opts);

```
***

#### <a name='3F'> push </a>

**跳转到下一级页面**

##### 参数
<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>属性</td>
      <td>取值</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
     <tr>
     <td>url</td> 
     <td>xxx.tml</td>
     <td>页面对应的tinyview的请求地址</td>
     <td></td>
   </tr>

   <tr>
     <td>hidesStatusBar</td> 
     <td>true/false</td>
     <td>是否隐藏状态栏</td>
     <td>只针对IOS平台。当statusBar显示时，tinyView的高度为屏幕高度-statusBar高度-tabBar高度齐刘海屏建议不隐藏</td>
   </tr>
    <tr>
     <td>hideSafeArea</td> 
     <td>true/false</td>
     <td>齐刘海屏是否隐藏底部安全区</td>
     <td>IOS 特有齐刘海屏专用属性，false可以在底部显示安全区，不会影响底部按钮点击</td>
   </tr>
    <tr>
     <td>hidesTabBar</td> 
     <td>true/false</td>
     <td>是否隐藏TabBar</td>
     <td></td>
   </tr>
   <tr>
     <td>bottomColor</td> 
     <td></td>
     <td>安全区颜色</td>
     <td></td>
   </tr>
   <tr>
   <td>animate</td>
   <td>default/none/slideFromBottom/
	slideFromLeft/slideFromRight/
	slideFromTop</td>
	<td>执行的动画类型</td>
	<td>default</td>
	</tr>
</table>

#### 示例
```
var opts = {"animate":"slideFromRight","url":url,"hidesStatusBar":"true","hidesTabBar":"true"};
Navigator.push(opts);
```
***

#### <a name='4F'> pop </a>

**返回上一级页面**

##### 参数
<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>属性</td>
      <td>取值</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
   <td>animate</td>
   <td>default/none/slideFromBottom/
	slideFromLeft/slideFromRight/
	slideFromTop</td>
	<td>执行的动画类型</td>
	<td>default</td>
	</tr>
</table>

#### 示例

```
var opts = {"animate":"default"};
Navigator.pop(opts);
```

***

#### <a name='5F'> popToTop </a>

**返回到顶层页面**

##### 参数
<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>属性</td>
      <td>取值</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
   <td>animate</td>
   <td>default/none/slideFromBottom/
	slideFromLeft/slideFromRight/
	slideFromTop</td>
	<td>执行的动画类型</td>
	<td>default</td>
	</tr>
</table>

#### 示例

```
var opts = {"animate":"default"};
Navigator.popToTop(opts);
```

***

#### <a name='6F'> popToPage </a>

**返回到指定页面**
 
##### 参数
<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>属性</td>
      <td>取值</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
   <td>id</td>
   <td></td>
	<td>页面id</td>
	<td></td>
	</tr>
   <tr>
   <td>animate</td>
   <td>default/none/slideFromBottom/
	slideFromLeft/slideFromRight/
	slideFromTop</td>
	<td>执行的动画类型</td>
	<td>default</td>
	</tr>
</table>

#### 示例

```
var opts = {"id":"login","animate":"default"};
Navigator.popToPage(opts);
```
***


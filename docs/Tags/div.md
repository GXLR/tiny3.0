## div

### 描述


`<div>` 标签定义TML文档中的分隔（division）或部分（section）。
`<div>` 标签常用于组合块级元素，以便通过样式表来对这些元素进行格式化。
div元素的内容是竖向布局的。


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
      <td>scrolling</td>
      <td>true false</td>
      <td>是否显示滚动条</td>
      <td></td>
   </tr>
   <tr>
      <td>scrollsToTop</td>
      <td>true false</td>
      <td>点击状态滚动到头部，页面只支持一个为true的属性</td>
      <td>false</td>
   </tr>
</table>

### 事件

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>scroll</td>
      <td>div滑动时执行</td>
      <td></td>
   </tr>
</table>

#### scroll
##### params

* size:div容器的高度
* scrolled:滑动的距离。往下滑动为正，往上滑动为负。
* range:内容的高度。
* overscroll:滑动超出size的距离。往下为正，往上为负。

### 方法

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>scrollToElement</td>
      <td>滑动到指定子元素</td>
      <td></td>
   </tr>
</table>

#### scrollToElement
##### params
* ID:子元素id


### 例子
                          
      var div = document.getElementById("id")
      div.addEventListener("scroll", function (size,scrolled,range,overscroll) {
        if(scrolled<=0){
           console.print("滑倒顶部了")
        }else if((size + scrolled) >= range){
           console.print("滑倒底部了")
        }
      
      })



## Document

### 描述

document对象定义了tml文档树结构，定义了获取element节点的方法，以及增加事件监听。

### 方法
 
<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>getElementById</td>
      <td>根据节点ID，获取节点</td>
      <td></td>
   </tr>
   <tr>
      <td>addEventListener</td>
      <td>增加事件监听</td>
      <td></td>
   </tr>
   <tr>
      <td>createElement</td>
      <td>创建节点</td>
      <td></td>
   </tr>
</table>

#### getElementById

##### params

* id:节点ID


示例

    var element = document.getElementById(id);

***
#### addEventListener
增加事件监听

##### params

* event:事件名称。字符串格式
  didAppear 事件需要使用 tinyFrame 框架后支持。
* callback

***
#### createElement

创建节点

示例

    var element = document.createElement(elementTag);
    /*
     * elementTag : 创建节点的名称,如 label、button、div、img 等。
     * 	返回值：创建的元素节点
     */

***

### 事件
 
<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>didAppear</td>
      <td>页面打开即执行的事件</td>
      <td></td>
   </tr>
   <tr>
      <td>load</td>
      <td>页面加载完之后执行的事件</td>
      <td></td>
   </tr>
</table>

### 例子
                          
     document.addEventListener("didAppear",function(){
                          alert("didAppear main")
                      }); 

     document.addEventListener("load",function(){
                          alert("didAppear main")
                      });




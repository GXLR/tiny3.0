## tml

### 描述

`<tml>`根节点标签，标识文档为TML规范的文档，TML文件中必须有的结构标签。
此元素可告知客户端其自身是一个 TML文档。`<tml >` 与 `</tml >` 标签限定了文档的开始点和结束点，在它们之间是文档的头部和主体。正如您所了解的那样，文档的头部由 `<head>` 标签定义，而主体由 `<body>` 标签定义。

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
</table>
	
### 事件

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>onload</td>
      <td>文档加载时执行</td>
      <td></td>
   </tr>
   <tr>
      <td>didAppear</td>
      <td>tml显示时执行</td>
      <td></td>
   </tr>
</table>

### 示例

```                
Document.addEventListener("didAppear",function(){
                            alert("didAppear main")
                        }); 
                        
Document.addEventListener("load",function(){
                            alert("didAppear main")
                        }); 
```

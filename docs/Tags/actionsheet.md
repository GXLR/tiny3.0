##  ActionSheet

从底部弹出列表项

### 方法
 
<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>事件</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td><a href='#1F'>show</a></td>
      <td>显示弹出框</td>
      <td></td>
   </tr>
</table>


***
#### <a name='1F'> show </a>

##### 显示弹出框


##### params
* options:{"buttons":["红色", "白色", "黑色"]}
* click:点击时执行的方法

示例：

	var sheet = new ActionSheet();
	sheet.options = {"buttons":["红色", "白色", "黑色"]};
	sheet.click = function(index) {
	    window.alert(index)
	};
	sheet.show();

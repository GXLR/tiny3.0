## select

### 描述

`<select>`元素可创建单选菜单

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
      <td>value值</td>
      <td></td>
   </tr>
   <tr>
      <td>tip</td>
      <td>string</td>
      <td>提示信息</td>
      <td></td>
   </tr>
   <tr>
      <td>disable</td>
      <td>true/false</td>
      <td>是否禁用</td>
      <td></td>
   </tr>
   <tr>
      <td>dataSource</td>
      <td></td>
      <td>数据源</td>
      <td></td>
   </tr>
   <tr>
      <td>flat</td>
      <td>true/false</td>
      <td>两种样式</td>
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
      <td>focus</td>
      <td>select 获取焦点时，执行的事件</td>
      <td></td>
   </tr>
   <tr>
      <td>blur</td>
      <td>select 失去焦点时，执行的事件</td>
      <td></td>
   </tr>
</table>

### 示例

#### selectData.js

	var DATA = {
	   value : "reason",
      tip : "请选择协议状态",
      options:[{"option_value": "01", "option_caption": "正常"},
	             {"option_value": "02", "option_caption": "异常"}
	             ]
	}
	
	
#### select.js


	(function(){
		var select = $("select")
	
		select.addEventListener("focus", function(){
			alert("获取焦点");
		})
		select.focus();
	})();


	(function(){
		var select = $("select");
		select.addEventListener("blur", function() { 
			alert("失去焦点，完成输入。");
		});

	})();

#### select.tml

```
<select id="select" flat="false" tip="{{tip}}" class="s1" dataSource = "{{options}}" >
	 <option  value="{{item.option_value}}" caption="{{item.option_caption}}" />
</select>
```


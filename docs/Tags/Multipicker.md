##  MultiPicker

选择组件

#### 参数

* type:选择类型
* data:多个选择数据
* select: 选择后触发事件，传参数jsonarray类型

#### 方法

* show:显示弹窗


### 类型

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>类型</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td><a href="#1F">normal</a></td>
      <td>多组选择非联动</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#2F">link</a></td>
      <td>多组选择联动</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#3F">datetime</a></td>
      <td>日期选择</td>
      <td></td>
   </tr>
</table>


#### <a name="1F"> normal </a>


##### params

* type:选择类型
* data:多个选择数据
* select: 选择后触发事件，传参数jsonarray类型


#### 示例： ####

	var picker = new MultiPicker();
	picker.type = "normal";// normal-非级联多选 datetime-日期时间选择 link-多级选择
	picker.data = [ {
		"label" : "个",
		"data" : [ "1", "2" ]
	}, {
		"label" : "人",
		"data" : [ "大", "想", "小", "男" ]
	}, {
		"data" : [ "金", "人2", "啊3", "发", "5" ]
	}, {
		"data" : [ "拍照", "相机", "测试", "测试2222222", "取消" ]
	} ];

	
	picker.select = function(data) {
		alert(data[0]+" "+data[1]+" "+data[2]+" "+data[3])
	}
	picker.show();

***


#### <a name="2F"> link </a>


#### 示例： ####

var data = [

	{ "name": "北京", "value":"01", "children":
	    [{"name":"北京", "value":"0101", 
	"children":[{"name":"东城区", "value":"1"},
	{"name":"西城区", "value":"2"},
	{"name":"崇文区", "value":"3"},
	{"name":"宣武区", "value":"4"},
	{"name":"朝阳区", "value":"0101"}]}]}]

***


#### <a name="3F"> datetime </a>

#### 参数

* options:时间格式

#### 示例： ####

	var picker = new MultiPicker();
	picker.type = "datetime";// normal-非级联多选 datetime-日期时间选择 link-多级选择
	picker.options = {
			"format" : "HH:mm"
		};
	picker.select = function(data) {
		alert(data)
	}
	picker.show();

***
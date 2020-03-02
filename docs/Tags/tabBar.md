## tabBar标签
tabBar与tab标签配套使用，实现多页面效果

### tab标签
#### 1、tab标签属性
---

| 属性 | 取值|描述 |
| :-----| :---- | :---- |
| id    |string|规定元素的唯一id|
| title |string| 文本内容 |
| lazyLoad |string| tab是否懒加载 |
| selected | string | 是否选中当前页|

  
#### 2、tab样式属性
---

| 属性 | 描述 |缺省值|
| :-----| :---- |:---- |
|tab-image-percent|文本与图片高度比例||
|background-image|图片地址|left|


### tabBar使用方法

#### 1、frame实例

**selected属性为true时，lazyLoad不可为true**

```
<tabBar class="tabBar" id="tabBar">
    <tab id="home" title="首页" selected="true" class="tab tab1" >
        <navigator id="nav1">
            <page id="tml1" url="../label/label.tml" hidesStatusBar="true" style="background-color:#f3f3f3"></page>
        </navigator>
    </tab>
    <tab id="loan" title="长亮贷" selected="false" class="tab tab2"
            lazyLoad="true" >
        <navigator id="nav2">
             <page id="tml2" url="../input/input.tml"  hidesStatusBar="false" style="background-color:#f3f3f3" ></page>
        </navigator>
     </tab>
     <tab id="myInfo" title="我" selected="false" class="tab tab3"
            lazyLoad="false">
        <navigator id="nav3">
             <page id="tml3" url="../image/image.tml" hidesStatusBar="false" style="background-color:#f3f3f3"></page>
        </navigator>
     </tab>
</tabBar>
   
```

#### 2、css实例

选中时的效果变化通过 :focus来实现

```
.tab{
    width:33.3%;
    height:100%;
    text-align:center;
    font-size:16;
    color:#666666;
    tab-image-percent:60%;
}

.tab:focus {
    color:#009af8;
}

.tab1 {
    background-image:url(../../image/nav/Home.png);
}

.tab1:focus {
    background-image:url(../../image/nav/Home2.png);
}

.tab2 {
    background-image:url(../../image/nav/Transfer.png);
}

.tab2:focus {
    background-image:url(../../image/nav/Transfer2.png);
}

.tab3 {
    background-image:url(../../image/nav/More.png);
}

.tab3:focus {
    background-image:url(../../image/nav/More2.png);
}
   
```

#### 3、js实例

* 有添加click事件，则会拦截tab选中，需手动选中tab
* 没有添加click事件，则会自动选中tab

```
var tabBar = $("tabBar");

tabBar.addEventListener("click", function(position){
	Console.log("点击:" + position);

   Console.log("当前:" + tabBar.getSelectedIndex());

	tabBar.selectIndex(position);
});

tabBar.addEventListener("tabSelected", function(position){
	Console.log("选中:" + position);

	info("选中：" + position);
});

```

#### tabBar事件
---

| 属性 | 描述 |
| :-----| :---- |
| click | tab点击事件 |
| tabSelected | tab选中事件 |


##### click

点击tab时触发的事件，若添加了此事件，则会拦截默认的tab选中事件，需主动调用selectIndex(position)来选中tab

##### tabSelected

选中tab时触发的事件

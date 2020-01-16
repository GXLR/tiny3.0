## paging

### 标签属性
---

| 属性 | 取值|描述 |
| :-----| :---- | :---- |
|id    |string|规定元素的唯一id|
| class |string| 样式类名 |
|currentPage|string| 当前page |
| flipInterval|string| 翻转间隔 |
| slideable | string | 是否可以滑动翻转，默认为true |

#### 标签及样式
```
.page{
    width:100%;
    height:200;
    border:1 solid #000000;
}

.image{
    width:100%;
    height:100%;
}

.plabel{
    width:100%;
    height:100%;
    font-size:22;
    color:#ffffff;
    text-align:center;
}

<paging id="page" class="page" currentPage="2" flipInterval="2500" slideable="true">
	<label class="plabel" value="label 0"/>
    <img class="image" src="1.png"/>
    <label class="plabel" value="label 2"/>
</paging>
```


### js方法
---

| 属性 | 描述 |
| :-----| :---- |
| setCurrentPage | 翻转至指定下标page |

#### setCurrentPage方法
```
var page = $('page');
page.setCurrentPage(0);
```

### 事件
| 属性 | 描述 |
| :-----| :---- |
| addEventListener('paged')| 翻转监听 |
| addEventListener('pagedEnd')| 手动滑动至最后一页 |

#### 翻转监听
```
var page = $('page');
page('paged', function (index) {
  console.print("滑动的索引":index);   
})
```

#### 手动滑动至最后一页
```
var page = $('page');
page('pagedEnd', function () {
  console.print("滑动至最后一页");   
})
```







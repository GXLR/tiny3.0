## list

### 1 布局

支持内部视图Flex布局，contentSize根据内部的视图自适应

例如：

```
<listview id="listview" class="listview" dataSource="{{list}}" swipeAble="true" refreshType="circle" refreshTop="true" refreshButtom="true">
    <template class="template" type="cell1">
        <label class="layout1 cellcolor0_1" value="{{value}}" />
        <label class="layout2 cellcolor0_2" value="{{value}}" />
    </template>
    <template class="template" type ="cell2">
        <label class="layout1 cellcolor1_1" value="{{value}}" />
        <label class="layout2 cellcolor1_2" value="{{value}}" />
    </template>
    <template class="template" type ="cell3">
        <label class="layout1 cellcolor2_1" value="{{value}}" />
        <label class="layout2 cellcolor2_1" value="{{value}}" />
    </template>
    <template class="header" type ="section1">
        <label class="sectionHeaderTitle sectioncolor1" value="{{text}}" />
    </template>
    <template class="header" type ="section2">
        <label class="sectionHeaderTitle sectioncolor2" value="{{text}}" />
    </template>
    <listHead class="listHead" type ="head">
    </listHead>
    <listFooter class="listHead" type ="footer">
    </listFooter>
</listview>
```

### 2 方向

垂直方向滚动，目前不支持水平方向滚动

### 3 下拉刷新

```
通过refreshTop控制是否需要添加下拉刷新功能
tml配置如下：
    <listview id="listview" refreshTop="true" /> // 缺省值
    <listview id="listview" refreshTop="false" /> 
js内部添加下拉刷新执行的事件:
$('listview').addEventListener('top', function(){
    $('listview').endRefreshTop();
});
⚠️：下拉刷新执行的事件，在调用结束后需要调用$('listview').endRefreshTop(),用以结束下拉刷新的状态
```

**
**

### 4 上拉加载更多

```
通过refreshBottom控制是否需要添加上拉加载功能
tml配置如下：
    <listview id="listview" refreshBottom="true" /> // 缺省值
    <listview id="listview" refreshBottom="false" /> 
js内部添加下拉刷新执行的事件:
$('listview').addEventListener('bottom', function(){
    $('listview').endRefreshBottom();
});
⚠️：下拉刷新执行的事件，在调用结束后需要调用$('listview').endRefreshBottom(),用以结束上拉加载的状态
```

### 5 头部视图 listHead

```
<listview class="" datas="" >
     <listHead class="">
          <label class="" value="1234" />
          <div class="" />
          <img class="" src="" />
     </listHead>
</listview>
注释：listHead 支持数据绑定，listHead在UI上会解析成Div,原则上<listHead    />在listview内部只会出现一次
```

### 6 尾部视图：listFooter

```
<listview class="" datas="" >
     <listFooter>
          <label class="" value="1234" />
          <div class="" />
          <img class="" src="" />
     </listFooter>
</listview>
注释：listFooter 支持数据绑定，listFooter在UI上会解析成Div,原则上<listFooter    />在listview内部只会出现一次
```

### 7 模版 ：template

```
<listview class="listview" datas="{{list}}" >
     <template class="", type="cell">
          <label class="" value="1234" />
     </template>
</listview>
```  
1 template标签来描述可以被复用的UI，
2 type属性描述了template应该被那种数据复用，该字段对应数据源中单条数据的**reuse_id**。  
3  如果数据源中没有reuse_id字段，则使用第一个模版  

### 8 索引：section  
```
<listview class="listview" datas="{{list}}" >
     <section class="", type="cell">
          <label class="" value="1234" />
     </section>
</listview>
```  
1 section标签用来描述分组信息。  
2 平台android端现只支持一种section样式。


### 8 数据绑定

```
Example1:
```

> ```
> var DATA ={ 
>     list = [{reuse_id:'demo',value:'text1',person:{name:'jack'}},
>             {reuse_id:'demo',value:'text2',person:{name:'jerry'}},
>             {reuse_id:'demo',value:'text3',person:{name:'tom'}}]
> }
> <listview id="listview" dataSource="{{list}}" refreshBottom="false">
>     <template templateType="demo">
>          <label value="{{item.value}}" />
>          <label value="{{item.person.name}}" />
>     <template>
> </listview>
> ```

```
Example2:
```

> ```
> var DATA={
>    list:[{header:{reuse_id:'section1',text:'index section 0'},
>           datas:[{reuse_id:'cell1',value:'index 0-0'}]
>        }]
> }
> <listview id="listview" dataSource="{{list}}" refreshBottom="false">
>     <template templateType="cell1">
>          <label value="{{item.datas.item.value}}" />
>     <template>
>     <template templateType="section1">
>          <label value="{{item.header.text}}" />
>     <template>
> </listview>
> ```

```
注释：
1 Example1 描述了非分组数据的绑定，Example2 描述了分组数据的绑定，
2 item: 表明需要到数组里面通过下标去获取当前的元素的值，如Example1里面
 <label value="{{item.value}}" />，需要到list里面通过label所在的cell索引去获取元素，获取到元素是个对象，对象里面有value这个property
```

### 9 listview 数据格式

分组数据格式：

> ```
> list:[{header:{reuse_id:'section1',text:'index section 0'},datas:[{reuse_id:'cell1',value:'index 0-0'},{reuse_id:'cell1',value:'index 0-1'},{reuse_id:'cell1',value:'index 0-2'}]},{footer:{reuse_id:'section1',text:'index section 2'},datas:[{reuse_id:'cell3',value:'index 2-0'},{reuse_id:'cell3',value:'index 2-1'},{reuse_id:'cell3',value:'index 2-2'}]}]
> ```

```
非分组数据格式
```

> ```
> list:[{reuse_id:'cell0',first:'0-1',second:'0----1'},{reuse_id:'cell2',first:'0-2',second:'0----2'},{reuse_id:'cell4',first:'0-4',second:'0----4'},{reuse_id:'cell5',first:'0-6',second:'0----6'},{reuse_id:'cell5',first:'0-7',second:'0----7'}]
> ```

```
注释：
分组样式下：
```

> ```
> header：描述了分组sectionHeader的数据
> footer：描述了分组sectionFooter的数据
> datas: 描述了每一个分组里面有多少个单元格，单元的数据
> ```

```
非分组样式下：
```

> ```
> list就描述了有多少单元格，单元格的数据，类似分组模式下的datas
> ```

```
⚠️：listview 会根据传入的数据来判断是否需要使用分组数据，如果需要使用分组，请确保list数组的首元素符合分组数据的标准
⚠️：reuse_id 复用标识符不能为空
⚠️：reuse_id 和 templateType 相对应，复用的核心就是匹配二者的值
```

### 10 addEventListener 事件

```
10.1 上拉加载事件
```

> ```
> $('viewid').addEventListener('bottom', function(){
>      // do some thing, after finished load more, need call $('listview').stopLoadMore();
> });
> ```

```
10.2 下拉刷新事件
```

> ```
> $('viewid').addEventListener('top', function(){
>      // do some thing, after finished update, need call $('listview').stopUpdate();
> });
> ```

```
10.3 单元格点击事件
```

> ```
> $('viewid').addEventListener('select', function(section,  row){
>      // do something 
> });
> section 分组索引：非分组模式返回固定值0，row单元格的索引
> ```

### 11 listview 开放给js的接口Api

```
11.1 结束下拉刷新
```

> ```
> 方法名：stopUpdate();
> 参数：null
> ```

```
11.2 结束上拉加载
```

> ```
> 方法名：stopLoadMore();
> 参数：null
> ```

```
11.3 前面拼接数据
```

> ```
> 方法名：appendDataToFront(datas);
> 参数：datas为数组类型
> ```

```
11.4 后面拼接数据
```

> ```
> 方法名：appendDataToBack(datas);
> 参数：datas为数组类型
> ```

```
11.5 指定分组添加数据
```

> ```
> 方法名：appendCellData(object,  section, row);
> 参数：object单元格数据，应该是一个对象，section分组索引，row单元格索引
> ```

```
11.6 删除分组数据
```

> ```
> 方法名：removeDataAtSection(section);
> 参数：section分组索引
> ```

```
11.7 删除分组里面的某条数据
```

> ```
> 方法名：removeData(section,  row);
> 参数：section分组索引，row单元格行索引
> ```

### 12 侧滑

###### Tml 配置属性：

```
<listview swipeAble="true", swipeImage="imageurl", swipeText="buttonName" />
swipeAble: 侧滑开关, true 开启， false 关闭
swipeImage: 按钮图标
swipeText: 按钮标题
```

###### 支持配置的css样式：

```
swipe-font-color：字体颜色
swipe-font-size: 字体大小
swipe-font-family: 字体名称
```
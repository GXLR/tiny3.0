## scroller

### 示例

        <div class="container" >
            <label value="返回" class="labelBack" onclick="Window.back()"/>
            <scroller class="scroller" direction="vertical" >
                <div class="layout1" />
                <div class="layout2" />
                <div class="layout3" />
            </scroller>
            <scroller class="horscroller" direction="horizontal" >
                <div class="hor1" />
                <div class="hor2" />
                <div class="hor3" />
            </scroller>
        </div>
        
        
### 属性
---

| 属性 | 描述 |类型|缺省值|
| :-----| :---- |:---- |:---- |
|verBar|是否显示垂直滚动条|string|true|
|horBar|是否显示水平滚动条|string|true|
|scrollsToTop|点击状态栏回到顶部|string|true|
|scrollEnabled|是否可以滚动|string|true|
|direction|滚动方向(horizontal,vertical)|string| vertical |
|refreshTop|下拉刷新控件|string|true|
|refreshBottom|上拉加载|string|true|

        
### 事件
***

#### scroll
滚动事件

	参数列表: (scrollview_height, scroll_offset, scrollview_contentsize, overscroll) – (滚动视图的高度，当前的偏移量，内容的高度，弹簧效果的正负值)

#### scrollEnd

滚动结束

	参数列表：空

#### touchesMove

手指触摸滑动事件

	参数列表：(scrollview_height, 0, scrollview_contentsize, 0，movedistance) – (滚动视图的高度，固定值0，内容的高度，固定值0，手指滑动的距离)

#### touchesEnd

手指触摸结束事件

	参数列表： 空
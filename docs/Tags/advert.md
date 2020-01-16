## 营销广告页

### 配置文件

##### 目录结构
公共跳转目标配置文件pubPagecol.xml，存放于项目根目录/config/pageControls 中。
营销管理前端代码单独存放于项目根目录/advert中。
##### 配置文件规则

```
<advertPaths>
    <advertBottom>//  path标签换名
        <advertPath ty:if="DATA.successCode==1" boardUrl="pageA.tml,pageB.tml"  url="advertTml.tml" class=""/><!--if 语句里判断条件可以从跳转前的界面的DATA中取 计划是需要加入界面名称判断（需要数据绑定支持记录界面名称） 只在某些业务成功码获得后，以及特定的几个界面才会有营销广告页-->
        <advertPath ty:if=""  boardUrl="" url="" class=""/>
        <advertPath ty:elif="" boardUrl="" url="" class=""/>
        <advertPath ty:else="" boardUrl="" url="" class=""/><!--else 劲量不要写，否则会有太多界面会有营销界面 或者Url不要写-->
    </advertBottom>
    <advertOpen>
        <advertPath ty:if=""  boardUrl="" url="" class=""/>
        <advertPath ty:elif="" boardUrl="" url="" class=""/>
        <advertPath ty:else="" boardUrl="" url="" class=""/>
    </advertOpen>
</advertPaths>

1.if 语句里判断条件从数据绑定中获取,只在某些业务成功码获得后，以及特定的几个界面才会有营销广告页。
如果else中 boardUrl 为空则不显示。 

2. boardUrl 需要加入营销view的界面的名称。

3.advertBottom代表底部营销页面，
advertOpen代表弹窗营销页面，
class指向了跳转配置文件pageControlConfig.xml中的页面展示规则,
需要注意的是，advertBottom指向的跳转配置需要指定view高度height.

4.营销广告片段view判断条件所用的数据为跳转前上一界面的DATA.中的数据。
5.限制条件正常open出来的界面没有营销广告界面。



pageControlConfig.xml示例
公共的跳转配置中增加<advertBottom><advertOpen>

<config>
    <forward  class="default"  hidesTabBar="true"  hidesStatusBar="true" disableGestureBack="false" animate="slideFromRight"/>
    <forward  class="push"  hidesTabBar="false"  hidesStatusBar="true"/>
    <forward  class="open"  pageType ="open"/>
    <forward  class="present"  pageType ="frame"  animate ="slideFromRight" closePrevious="true"/>
    
    <backward class="default"/>
    <backward class="close" pageType="open"/>
    <backward class="dismiss" pageType="frame" animate="slideFromBottom"/>
    
    <advertBottom  class="adBottom" height="45"  animate="slideFromRight"      /><!--高支持百分比 宽度全屏-->
    <advertOpen     class="adOpen" height="61.8%" width="230"  animate="slideFromRight" /><!--宽高支持百分比 -->
    
</config>

```

### 错误码
营销广告页的错误码以31开头

|错误代码 | 详细信息 | 
|---|---|
|31000  | 正确无误|
|31001  | 无公共营销配置文件|
|31002  | 逻辑表达式有误|
|31003  | 没有找到匹配的界面|
|31004  | 无跳转效果配置文件|

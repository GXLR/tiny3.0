## 页面流

### 配置文件
---

#### 目录结构

##### 跳转目标配置文件：xxxxPagecol.xml
每个界面都有一个与之对应的xxxxPagecol.xml 用于配置界面流。目录与界面同级。

##### 跳转配置文件：pageControlConfig.xml
跳转效果也配置pageControlConfig.xml也存放于项目根目录/config/pageControls 中

##### 营销管理配置：pubPagecol.xml
跳转效果也配置pubPagecol.xml也存放于项目根目录/config/pageControls 中

#### 配置文件规则 
##### 配置界面跳转效果 pageControlConfig.xml
```
<config>
   <forward  class="push" pageType="page" animate="slideFromRight" hidesTabBar="true" hideSafeArea="true" hidesStatusBar="true" startX="" startY="" delay=""/>
   <forward  class="present" pageType="frame" animate="slideFromRight" closePrevious="false" disableGestureBack="true"/>
   <forward  class="open" pageType="open" width="" height="" animate="slideFromBottom"/>
   <forward  class="default" pageType="page" animate="slideFromRight" hidesTabBar="true" hideSafeArea="true" hidesStatusBar="true" startX="" startY="" delay=""/>
   <backward  class="pop" pageType="page" animate="slideFromRight" delay=""/>
   <backward  class="dismiss" pageType="frame" animate="slideFromRight"/>
   <backward  class="close" pageType="open" animate="slideFromBottom"/>
   <backward  class="default" pageType="page" animate="slideFromRight" delay=""/>
</config>
```
##### 前向跳转效果

普通界面跳转 （push）

|  参数|取值   | 取值   | 
|  ----  | ----  | ----  |
| pageType  | page(默认可不写)| 界面类型 |
|   animate   | default、none、slideFromTop、slideFromBottom、slideFromLeft、slideFromRight、slideFromIn|过渡动画类型|
| disableGestureBack  | true/false | 是否禁用手势(push) |
| hideSafeArea  | true/false | 是否隐藏安全区(push) |
| hidesTabBar  | true/false | 是否隐藏状态栏tabbar(push) |
| hidesStatusBar  | true/false | 是否隐藏状态栏（push) |
| startX  | float | 跳转坐标X |
| startY  | float  |跳转坐标Y |
| delay  | int| 延迟跳转,单位ms |

跳转框架界面 （ \<frame>  present）

|  参数|取值   | 取值   | 
|  ----  | ----  | ----  |
| pageType | frame | 框架 |
| animate | default,none,slideFromBottom, slideFromLeft, slideFromRight, slideFromTop | 执行的动画类型  |
| closePrevious  | true/false |  是否在跳转框架后移除前面的界面（建议移除，否则会有内存问题）。 |


弹窗界面 (open)

|  参数|取值   | 取值   | 
|  ----  | ----  | ----  |
|  pageType  | open | 如果是open界面则必须填写此参数 取值为true |
|  width  | float  | 页面宽度，支持百分比，为暂用当前屏幕的百分比 |
|  height  | float  | 页面高度，支持百分比，为暂用当前屏幕的百分比|
|  animate  | popShake(默认 视图抖动形式), none，slideFromBottom(从底部进入视图)，slideFromTop(从头部进入视图)，slideFromLeft, slideFromRight, scaleFromTopRight(从头部右上角进入视图), scaleFromBottomRight(从底部右下角进入视图) | 动画类型 |

##### back跳转效果

###### 普通出栈pop(back)

普通pop只有一种效果只需

```
 <backward class="default" />
```


###### open界面close


```
 <backward class="close" pageType="open"/>
```

###### frame 框架 dismiss
|  参数|取值   | 取值   | 
|  ----  | ----  | ----  |
|  pageType  | frame | 框架|
|  animate  | default,none,slideFromBottom, slideFromLeft, slideFromRight, slideFromTop  | 动画效果 |


```
 <backward class="classC" pageType="frame" animate="slideFromBottom"/>

```

##### 普通模块存放界面流配置的 xxxxPagecol.xml
每个界面都有一个与之对应的xxxxPagecol.xml 用于配置界面流。目录与界面同级。

```
<paths>

    <forward>

        <path ty:if="DATA.state==1&&DATA.name=='kern'" url="page/start/start.tml" class=""/> <!-- ddefaultefault效果 class 可以不写   class找不到会使用default-->

        <path ty:if="DATA.state==2&&DATA.name=='kern'" url="page/home/notification/notification.tml" class="pushClassA"/>

        <path ty:elif="!(DATA.userId==28||DATA.useId==1)" url="page/nav2.xml" class="frameClass"/>

        <path ty:elif="DATA.state==90" url="page/openPage.xml" class="openClass"/>

        <path ty:else="" url="page3.tml"/>

    </forward>

    <backward>

        <path ty:if="DATA.persons.length==5" /> <!-- ddefaultefault效果 class 可以不写   class找不到会使用default  url不写默认返回上一界面 -->

        <path ty:elif="DATA.number==7" url="start" /> <!--back的时候 url只需要填界面名称 因为界面已经在栈内，标记Id为界面名称（xxx.tml 名称为 xxx） -->

        <path ty:elif="DATA.number==6" class="frameClass"/>

        <path ty:else="" class="openClass" />

    </backward>

</paths>




每个界面都会包含一个界面流配置文件
格式：(页面名+Pagecol).xml   例：registerPagecol.xml

跳转配置
最外层为根节点<paths></paths>
前向跳转使用<forward></forward>
后退返回<backward></backward>


```
##### 属性：
####1 判断跳转的条件 条件语句:if,else if ,else
```
ty:if=""
ty:elif=""
ty:else=""


例子：ty:if="code==3||(state==1&&(varA>0))"
     ty:elif="code==3||(state==1&&(varA>0))"
     ty:else="code==3||(state==1&&(varA>0))"

组成部分：1 参数：必须存储在数据绑定的xxxData.js
         2 运算符：==,+,-,*,/,%,&&,||,!,(),>,<,>=,<=
         
          
上面的例子中 code,state,varA为参数 存在每张界面中的xxxdata.js中

条件语句不写则为直接跳转 (只适合于只有一种无条件跳转)例：
<forward>
<path url="main.tml" config="configKey1"/> <!--直接跳转界面 使用configKey1效果-->。
</forward>

<backward>
<path/>  <!--直接返回上层界面 使用default-->。
</backward>

config属性不写则使用 pageControConfigMap中key为default的配
置，例子：
push:
--------
<forward>
  <path ty:if="code!=2" url="page1.tml"/>
</forward>
--------
pop:
--------
<backward>
  <path url="page1.tml"/>
</backward>
--------
```
支持的运算符

|  运算符 | 逻辑意义  | 
|  ----  | ----  |
|   ==   | 等于 |
| +  | 算数加 |
| -  | 算数减 |
| *  | 算数乘 |
| /  | 算数除 （整数为整除，有小数为浮点数 ）|
| %  | 算数模除 |
| &&  | 逻辑与 |
| \|\|  | 逻辑或 |
| ！  | 逻辑非 |
|（）  | 括号优先级 |
| >  | 大于 |
| <  | 小于 |
| >=  | 大于等于 |
| <= | 小于等于 |

#### 目标界面：url
url为界面名，界面名需要独一无二  如login.tml

#### 跳转效果配置 config
值为配置在pageControConfig.json 中效果的key
不配置则默认取pageControConfig 中的default效果(backward , forward)

### 前端调用方法
---
前向跳转
Window.forward(callback)

反向后退
Window.backward(callback)

#### 更新方式
采用资源更新方式，资源更新后优先读取资源更新的目录。



###  成功及错误码
---

|错误代码 | 详细信息 |
|---|---|
|30000  | 正确无误|
|30001  | 无配置文件|
|30002  | 逻辑表达式有误|
|30003  | 没有找到匹配的界面|
|30004  | 无跳转效果配置文件|
|30005  | 未找到符合的条件|
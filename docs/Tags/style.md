## style

## 描述

TinyBuilder 移动开发框架通过 CSS 来实现 tml 页面的样式和布局。支持选择器、样式、定位等内容。

CSS 样式可以理解为一系列的键值对，其中的每一对描述了一个特定的样式，例如组件的宽、高或者背景色。

	.btn_blue{
		height:50;
		width:260;
		background-color:#2599EA;
	}

键值对的形式是 prop-name: prop-value;。键名是 prop-name， 键值是 prop-value. 一般情况下，键名按照连接符的方式进行命名，键值可以是数字(**在 TinyBuilder 移动开发框架中，宽高等尺寸类属性没有单位**。)；键和值由 `:` 分隔，每对键值之间由 `;` 分隔。

总结一下，就是这样：

> 花括号中的部分称为声明（declaration）；
> 
> 关键字 `height` 是一个属性, `50` 是其对应的值；
> 
> 同一个声明中的属性和值组成一个键值对（property-value pairs），每对键值之间由 `;` 分隔。

在 TinyBuilder 移动开发框架中，组件样式单独在 css 样式表中书写， tml 文件在头部引用相应的 css 样式表，不支持在 tml 文件中直接属性样式。

样式引用实例：

		<style href="css/public.css"/>

以上就是 CSS 样式表的基本知识，接下来就系统的介绍 TinyBuilder 中的样式以及布局，我们先从选择器开始。

## 选择器

Tiny 支持 类选择器、id 选择器、标签选择器等3类选择器。

id 选择器比类选择器更具优先级, 而类选择器比标签选择器更具优先级。

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>选择器</td>
      <td>描述</td>
      <td>优先级</td>
   </tr>
   <tr>
      <td>id 选择器</td>
      <td> #id{font-size:14} </td>
      <td>高</td>
   </tr>
   <tr>
      <td>类选择器</td>
      <td> .class{font-size:14} </td>
      <td>中</td>
   </tr>
   <tr>
      <td>标签选择器</td>
      <td> input{font-size:14} </td>
      <td>低</td>
   </tr>
</table>

### id选择器

通过设置元素的 id 属性为该元素指定 ID。ID 名由开发者指定。每个ID在文档中必须是唯一的。

在样式表中，ID 选择器是以 `#` 开头的。
   
id 选择器可以为标有特定 id 的 `tml` 元素指定特定的样式，id 选择器以 "#" 来定义。
   
下面的两个 id 选择器，第一个可以定义元素文本颜色为红色，第二个定义元素文本的颜色为绿色：

        <label id="id1" value="文本1"/>
        <label id="id2" value="文本2"/>
        #id1 {color:red;}
        #id2 {color:green;}
    

### 类选择器

类选择器可以为标有指定 class 属性的 `tml` 元素指定样式。

通过设置元素的 class 属性，可以为元素指定类名。类名由开发者自己指定。 文档中的多个元素可以拥有同一个类名。

在写样式表时，类选择器是以英文句号` . `开头的。

下面的两个类选择器，第一个可以定义元素文本颜色为红色，第二个定义元素文本的颜色为绿色：

        <label class="class1" value="文本1"/>
        <label class="class2" value="文本2"/>
        .class1 {color:red;}
        .class2 {color:green;}
    
### 标签选择器

标签选择器可以为标有指定标签的`tml`元素指定样式。

标签选择器直接以标签开头来定义。

下面的标签选择器，定义元素文本颜色为红色：

        <label class="class1" value="文本1"/>
        <label id="class2" value="文本2"/>
        label {color:red;}

> 如果样式中包含冲突的规则，且它们具有相同的确定度。那么，后出现的规则优先级高。
> 
> 如果你遇到规则冲突，你可以增加其中一条的确定度或将之移到后面以使它具有更高优先级。

## 样式

Tiny 通过 css 样式实现了字体文本样式、背景样式、盒模型样式、定位等内容。
 
### 字体、文本样式

CSS 提供了几个属性用来操作字体和文本。

我们先来看一个简写属性 font，使用这个属性可以很方便的指定其他的字体属性。比如：

- 字体的风格：字体加粗、斜体；
- 字体的大小；
- 字体；

示例：

	.text{
		font-size: 18;
		font-style: italic;
		font-family: "Heiti SC";
	}

> 这条规则定义了文本的几个属性，使整个段落文本都变成斜体。
> 
> 字体大小设置为18 号字体，行高设置为 10（比常规的间隔稍大一些）。
> 
> 文本字体设置为 Heiti SC，假如该字体不被手机系统支持则使用手机系统默认的字体，Android 与 iOS 手机默认的字体各不相同。

下面的表格列出了 TinyBuilder 平台支持的所有文本样式。

<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>样式</td>
      <td>取值</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td>color</td>
      <td>十六进制值的RGB颜色</td>
      <td>文本的颜色</td>
      <td></td>
   </tr>
   <tr>
      <td>font-family</td>
      <td></td>
      <td>字体</td>
      <td>参考系统字体</td>
   </tr>
   <tr>
      <td>font-size</td>
      <td>int</td>
      <td>字体大小</td>
      <td></td>
   </tr>
   <tr>
      <td>font-style</td>
      <td>normal italic bold</td>
      <td>字体风格</td>
      <td></td>
   </tr>
   <tr>
      <td>text-align</td>
      <td>left right center</td>
      <td>文本水平对其方式</td>
      <td></td>
   </tr>
   <tr>
      <td>cursor-color</td>
      <td>十六进制值的RGB颜色</td>
      <td>input输入框中光标的颜色</td>
      <td></td>
   </tr>
   <tr>
      <td>text-gradient</td>
      <td></td>
      <td>文字渐变色</td>
      <td></td>
   </tr>
   <tr>
      <td>text-decoration</td>
      <td>none/underline/line-through</td>
      <td>文字装饰</td>
      <td></td>
   </tr>
</table>

### BackGround
背景，支持设置背景颜色和图片，图片支持显示原始图片，等比放大剪裁，等比缩小铺满，放大铺满，repeat-x/repeat-y/repeat-all等形式

### BackGroundColor
- background-color: #ffeebb，目前仅支持16进制颜色;

### BackGroundImage
##### background-repeat:  no-repeat | repeat-x | repeat-y | repeat-all;
- no-repeat: 不重复
- repeat-x: 水平方向重复，如果图片较小，水平方向会重复出现图片，直到铺满水平方向
- repeat-y: 垂直方向重复，直到铺满垂直方向
- repeat: 重复出现铺满整个背景

##### background-position: top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | center-left | center | center-right
描述了图片存在的起始位置

UIView 普通视图仅仅在background-repeat=no-repeat&content-mode=origin的条件下生效

UIImageView 图片视图在content-mode=origin生效

注释： 此条件下视图上仅显示一张图片，具体能否铺满背景有图片的宽高和视图的宽高决定，图片不做任何变形拉伸

##### content-mode: aspect-fill | scale-fit | aspect-fit | origin;
描述了图片在容器里面的填充方式，优先级低于background-repeat
- aspect-fill： 等比铺满容器，可能存在图片被剪裁
- scale-fit: 铺满容器，图片可能会变形，但不会被剪裁
- aspect-fit：等比填充容器，容器可能存在黑边，具体黑边所在的位置，取决于宽高比
- origin: 原始图片的大小


##### background-image：url(xxxxxxx/.png) top right bottom left
- url(xxxxxxx/.png) 加载的图片路径
- top right bottom left： 拉伸区域，可不填写，如果填写隐式设置图片需要拉伸显示

##### background-edge： top right bottom left
图片的拉伸区域，支持类似corner-radius的写法，显示的设置图片拉伸，可覆盖background-image设置的值

##### 默认值：
- background-repeat=no-repeat,；
- content-mode=scaleFit；
- background-position=center；
- background-edge： 0 0 0 0；		

### Corner 
支持以下4种写法
- border-radius: 10px;
- border-radius: 10px 15px;
- border-radius: 10px 15px 20px;
- border-radius: 10px 15px 20px 25px;
###### 注释：
- 输入1个参数 top-left = top-right = bottom-right = bottom-left = 10px;
- 输入2个参数 top-left = botttom-right = 10px, top-right = bottom-left = 15px;
- 输入3个参数 top-left = 10px, top-right = bottom-right = 15px,bottom-left = 20px;
- 输入4个参数 top-left = 10px, top-right = 15px, bottom-right=20px, bottom-left = 25px;

###### 注意：corner 目前仅支持固定数字，不支持%比，忽略px/dp等单位


### Border
边框属性，受corner的影响，也就是说如果存在圆角，边框也会是圆角变化，用法：
- border: width line-type line-color;
- border-top: 4.0 dashed #0000ff;
- border-right: 2.0 solid #0000ff;
- border-bottom: 2.0 solid #0000ff;
- border-left: 3.0 dashed #00ffff;

###### 注释：
- width: 边框的宽度；
- line-type: 边框的线条类型，目前支持实线和虚线；
- line-color: 边框的线条颜色，目前仅支持16位，格式固定；
- border：表明4条边框的属性一致
- border-top/border-right/border-bottom/border-left 会覆盖border的值

### Shadow
阴影，受Corner的影响，后面跟4个或者5个参数,具体写法如下：
- box-shadow: x y radius line-color;
- box-shadow: x y radius line-color opacity;
###### 注释：
- x：水平方向的偏移，仅支持数字
- y：垂直方向的偏移，仅支持数字
- radius：阴影的半径，仅支持数字
- line-color: 阴影的颜色，目前仅支持16进制位的颜色，不支持RBG/RGBA
- opacity: 透明度，取值范围（0～1.0），默认=0.7
		
### height
##### 描述
height 属性设置元素的高度。
对于img对象来说，仅指定此属性，其width值将根据图片源尺寸等比例缩放。按照样式表的规则，对象的实际高度为其下列属性值之和：margin-top + height + margin-bottom



##### 语法：
height : length

##### 示例：
		.code { height:100}

		

### width
##### 描述
width 属性设置元素的宽度。
对应的脚本特性为width。其值为一字符串，按照样式表的规则，对象的实际宽度为其下列属性值之和：margin-left + width + margin-righ



##### 语法：
width : length
##### 示例：
		.code { width:100}

		


### margin
##### 描述
margin 属性在一个声明中设置所有外边距属性。该属性可以有 1 到 4 个值。
这个属性设置一个元素所有外边距的宽度，或者设置各边上外边距的宽度。
如果提供全部四个参数值，将按上－右－下－左的顺序作用于四边。
如果只提供一个，将用于全部的四边。
如果提供两个，第一个用于上－下，第二个用于左－右。
如果提供三个，第一个用于上，第二个用于左－右，第三个用于下。


##### 语法：
margin : length

##### 示例：
		.code { margin:10 10 10 10}

		

### padding
##### 描述
padding 属性在一个声明中设置所有内边距属性。
这个属性设置元素所有内边距的宽度，或者设置各边上内边距的宽度。
如果提供全部四个参数值，将按上－右－下－左的顺序作用于四边。
如果只提供一个，将用于全部的四条边。
如果提供两个，第一个用于上－下，第二个用于左－右。
如果提供三个，第一个用于上，第二个用于左－右，第三个用于下。



##### 语法：
padding : length 
##### 示例：
		.code { padding:10 10 10 10}

		
### Flex

#### 容器属性
#### flex-direction

    flex-direction属性决定主轴的方向（即项目的排列方向）。 
##### 语法
    .box { flex-direction: row | row-reverse | column | column-reverse; }
######  flex-direction的值有:
    row（默认值）：主轴为水平方向，起点在左端。
    row-reverse：主轴为水平方向，起点在右端。
    column：主轴为垂直方向，起点在上沿。
    column-reverse：主轴为垂直方向，起点在下沿。

#### flex-wrap

    默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
##### 语法
    .box{ flex-wrap: no-wrap | wrap | wrap-reverse; } 
######  flex-wrap的值有:
    no-wrap（默认）：不换行。 
    wrap：换行，第一行在上方。 
    wrap-reverse：换行，第一行在下方。 
    
#### flex-flow

     flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row no-wrap。
##### 语法
    .box { flex-flow: <flex-direction> || <flex-wrap>; }
######  flex-flow的值有:    
    <flex-direction> 为flex-direction 属性
    <flex-wrap>为flex-wrap属性
    
#### justify-content

    justify-content属性定义了项目在主轴上的对齐方式。
##### 语法    
    .box { justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly; } 
######  justify-content的值有:     
    flex-start（默认值）：左对齐
    flex-end：右对齐
    center： 居中
    space-between：两端对齐，项目之间的间隔都相等。
    space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    space-evenly: 平分
    
#### align-items

    align-items属性定义项目在交叉轴上如何对齐。
##### 语法 
    .box { align-items: flex-start | flex-end | center | baseline | stretch; } 
######  align-items的值有:
    flex-start：交叉轴的起点对齐。
    flex-end：交叉轴的终点对齐。
    center：交叉轴的中点对齐。
    baseline: 项目的第一行文字的基线对齐。
    stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
    
#### align-content

    align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。 
##### 语法 
    .box { align-content: flex-start | flex-end | center | space-between | space-around | stretch; } 
######  align-content的值有:
    flex-start：与交叉轴的起点对齐。
    flex-end：与交叉轴的终点对齐。
    center：与交叉轴的中点对齐。
    space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    stretch（默认值）：轴线占满整个交叉轴。

#### 项目属性：
        
#### flex-grow 

    flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
##### 语法 
    .item { flex-grow: <number>; /* default 0 */ }
######  flex-grow的值有:    
    如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
    如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

#### flex-shrink

    flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
##### 语法
    .item { flex-shrink: <number>; /* default 1 */ }
    如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
    如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
    负值对该属性无效。

#### flex-basis

    flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
    浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
##### 语法
    .item { flex-basis: <length> | auto; /* default auto */ }
    它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
    
#### flex

    flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
##### 语法
    .item { flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] }
    该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
    建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

#### align-self

    align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
    默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
##### 语法
    .item { align-self: auto | flex-start | flex-end | center | baseline | stretch; }
######  align-self的值有: 
    flex-start：交叉轴的起点对齐。
    flex-end：交叉轴的终点对齐。
    center：交叉轴的中点对齐。
    baseline: 项目的第一行文字的基线对齐。
    stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
    
#### flex-position
定位样式 

	absolute: 绝对定位
	relative: 相对定位

#### max-width 
最大宽度

#### min-width 
最小宽度

#### max-height 
最大高度

#### min-height
最小高度



[实例Demo](http://p.mtiny.cn:9443/TinyAndroid3.0/TmlExample)












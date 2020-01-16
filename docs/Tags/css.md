##  css补充

### 字体颜色

#### 语法
```
.{
  color:#ff0000;
}
```

#### 字体颜色支持ARGB

color:#90ff0000;

#### 支持从父元素继承

如果当前元素未写字体颜色color，而父元素写了color,则使用父元素的color

### 字体大小

#### 语法
```
.{
  font-size:14;
}
```

#### 支持从父元素继承

如果当前元素未写字体大小font-size，而父元素写了font-size,则使用父元素的font-size

### 背景颜色

#### 语法
```
.{
  background-color: #ff0000;
}
```

#### 背景颜色支持ARGB

background-color:#90ff0000;
 
### 边框颜

#### 语法
```
.{
  border-radius:10;
  border:5 solid #ff0000;
}
```

#### 边框颜色支持ARGB
 border:5 solid #90ff0000;

### 字体色渐变

#### 语法
```
.text_l_t{
    text-gradient:left right #ff0000 #0000ff;
}
```
text-gradient:(起始方向) （终点方向）（起始颜色）（终点颜色）

#### 取值
方向取值如下：

left right

top bottom

left-top right-bottom

left-bottom right-top

### 背景色渐变

#### 语法
```
.text_l_t{
    background-gradient:left right #ff0000 #0000ff;
}
```
background-gradient:(起始方向) （终点方向）（起始颜色）（终点颜色）

#### 取值
方向取值如下：

left right

top bottom

left-top right-bottom

left-bottom right-top

### 背景阴影

#### 语法
```
.box_shadow{
    background-shadow: 0 0 10 #ff0000;
}
```

background-shadow: (竖直方向偏移量) （水平方向偏移量） （阴影宽度） （阴影起始颜色）;

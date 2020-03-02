## tiny工程结构 

## 1 概述  
为统一规范，方便开发人员，以下对tiny工程结构作出约定。

## 2 目录结构    
 < img :src="$withBase('/tml-doc.png')" alt="doc">

## 3 说明  
### 3.1 advert   
advert文件为广告营销信息文件目录，其中**bottomAds**为底部广告，**openAds**为弹窗广告  
### 3.2 commonJs  
commonJs存放公共js方法，存在这个文件夹中的js不允许随意修改  
### 3.3 config  
config文件夹中存放的是配置文件，字体，多语言等文件  
#### 3.3.1 api  
api文件夹为接口规范存放的目录，所有接口规范文件都在此文件夹中。  
 < img :src="$withBase('/tml-doc-api.jpg')" alt="api">

#### 3.3.2 fonts  
fonts文件夹存放字体集  
 < img :src="$withBase('/tml-doc-fonts.jpg')" alt="fonts">

#### 3.3.4 lang 
多语言文件夹.其中多语言配置已json文件形式表现。
  
 ```
 {
  "login":"Login",
  "register":"Register",
  "language":"English"
}
{
  "login":"登录",
  "register":"注册",
  "language":"中文"
}
 ```   
 < img :src="$withBase('/tml-doc-lang.jpg')" alt="lang">

#### 3.3.5 pageControls
页面流配置文件    
#### 3.3.6 theme  
主题配置文件    
### 3.4 css 
公共css样式文件  
### 3.5 image  
图片资源文件  
### 3.6 loading  
loading相关资源文件  
### 3.7 page  
tml页面文件，一个完成tml页面由**5个文件**组成，分别为：  

* page.css
* page.tml
* pageData.js
* page.js
* pagePagecol.xml  

 < img :src="$withBase('/tml-doc-page.jpg')" alt="page">

### 3.7.1 nav.tml
tiny启动入口。
 
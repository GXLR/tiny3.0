## nodeJS开发

### 描述

Tiny3.0支持nodeJS开发，以支持前端代码的复用

***
### nodejs环境安装

1、安装node环境，按照官网https://nodejs.org/en/download/步骤   

2、安装nrm（npm私服管理器），npm install -g nrm，以下是基本使用命令  
* nrm ls: 显示所有npm服务器  
* nrm add registry url: 添加私服
* nrm del registry: 删除私服  
* nrm test registry: 测试私服连通性  

3、添加公司npm私服，nrm add registry http://10.25.0.188:4873/，按照步骤设置账户密码邮箱   

4、安装VSCode插件，搜索Tiny3.0IDE，安装插件并重启

***
### Tiny3.0 node开发教程

#### 发布前端库

**1.初始化项目**  
npm init，按照步骤初始化项目配置信息  

![avatar](/project.png)

**2.开发项目**  

![avatar](/develop2.png)

![avatar](/develop.png)

**3.发布项目**  

1、先使用nrm ls,确认当前npm服务器为公司私服  

2、使用npm publish，按步骤登录后，将项目发布至公司私服  

**3.取消发布项目** 

使用npm unpublish 库名 --force 

#### 引用前端库

**1.引用库**

使用npm install tools --save，其中tools为你之前发布的前端库名称

![avatar](/quote.png)

**2.使用库函数**

![avatar](/use.png)

**3.IDE开发**

1)、安装tinypack，tiny3.0的IDE工具, npm install tinypack -D

2)、在tml后缀的文件下上下文菜单中，使用Start Tml Server3.0，即可像以前一样使用IDE热开发
![avatar](/IDE.png)


#### 注意事项

**1.编写tml的注意事项**

* 只添加一个同名的js文件，其余在js文件中导入或引入
* **标签不支持添加事件**，只可通过在同名的js文件中添加事件

**2.编写js的注意事项**

//这是tml的UI绘制完毕事件  
Document.addEventListener("load", function () {  
    
});

//这是tml的退出销毁事件  
Document.addEventListener("unload", function () {  
    
});

//这是tml的显示事件  
Document.addEventListener("didAppear", function () {  
    
});

//这是tml的隐藏事件  
Document.addEventListener("disAppear", function () {  
    
});

在事件之外的地方写js时，**注意此时UI可能未绘制完毕**

**3.前端库支持发布JS、CSS及tml**
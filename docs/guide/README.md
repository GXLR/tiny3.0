#快速上手
## 1 准备IDE环境  
首先需要下载VisualStudioCode,附上[官网地址](https://code.visualstudio.com/)。
<img :src="$withBase('/vscode-http.jpg')" alt="vscodeHttp">
下载完成安装之后在vscode插件中搜索tinyIDE并安装。  
<img :src="$withBase('/vscode-install-ide.jpg')" alt="installIde">
步骤  
1. 点击插件tab  
2. 搜索**tinyide**  
3. 安装**TinyIDE3.0-beta**

## 2 下载ide包
在打包管理台下载对应ide包，登录名tiny3.0、密码12345，[android项目地址](https://p.mtiny.cn:8888/dist/#/applicatList/projectInfo?projects=633)、[iOS项目地址](https://p.mtiny.cn:8888/dist/#/applicatList/projectInfo?projects=639)。  
在手机上安装对应的版本。  
  
## 3 运行demo工程  
 下载[tml demo](https://p.mtiny.cn:9443/laijp/Tiny3.0TmlExample) ，下载完成后在VScode中打开。  
 启动tml服务 nav.tml文件- 右键 Start Tml Server 启动socket服务 以当前的tml为服务入口。 
 <img :src="$withBase('/vscode-start-tml.gif')" alt="start">

## 4 其他  
### 4.1 关于server插件
ide 启动server 后，app 测试包通过udp协议访问到ide，就行开发测试，无需为app 打包特定的 ip 地址。  
Ide 的tml，js，css 修改后，支持app动态刷新，不需要再手动刷新app，或者绕到上一个页面，再返回。方便开发，提供开发效率。  
ide的server默认要求app 访问的页面是tabBar.tml。如果需要修改首访问页面，可以选中对应的项目，右键属性，定位到tiny 节点的基本设置，就行设置。一般推荐首页面使用tabBar.tml ,通过ide 创建的项目，默认会带有可供参考的tabBar.tml 文件。  
tiny支持pc模拟器测试，无需手机即可测试。 需要下载tiny 模拟器，并把tiny 模拟器包放置在ide 对应的workspace 目录下，通过ide 的tiny 菜单—启动模拟器，启动模拟器就行测试。  

### 4.2 IDE 的更新升级
VSCode里面直接搜索Tinyide,检索tinyide的版本，根据需要更新

## 5 IDE 常见问题
没有安装JDK 或者JDK 版本过低。——最好为JDK8;  
Window 操作系统版本对应64位系统——64位JDK，不能装32位的JDK；  
IDE启动服务后，默认会占用9000，9001和9002端口，如果出现server 等问题，请确保没有其它程序占用该端口，并尝试重新启动IDE。    
如果已经安装过旧的ide插件，需要把之前的ide插件卸载。

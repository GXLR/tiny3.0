(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{229:function(t,v,n){"use strict";n.r(v);var r=n(0),_=Object(r.a)({},(function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"nodejs开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs开发"}},[t._v("#")]),t._v(" nodeJS开发")]),t._v(" "),n("h3",{attrs:{id:"描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),n("p",[t._v("Tiny3.0支持nodeJS开发，以支持前端代码的复用")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"nodejs环境安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs环境安装"}},[t._v("#")]),t._v(" nodejs环境安装")]),t._v(" "),n("p",[t._v("1、安装node环境，按照官网https://nodejs.org/en/download/步骤")]),t._v(" "),n("p",[t._v("2、安装nrm（npm私服管理器），npm install -g nrm，以下是基本使用命令")]),t._v(" "),n("ul",[n("li",[t._v("nrm ls: 显示所有npm服务器")]),t._v(" "),n("li",[t._v("nrm add registry url: 添加私服")]),t._v(" "),n("li",[t._v("nrm del registry: 删除私服")]),t._v(" "),n("li",[t._v("nrm test registry: 测试私服连通性")]),t._v(" "),n("li",[t._v("nrm use registry: 切换为私服")])]),t._v(" "),n("p",[t._v("3、添加公司npm私服，nrm add registry http://10.25.0.188:4873/，按照步骤设置账户密码邮箱，然后使用nrm use registry切换为公司私服")]),t._v(" "),n("p",[t._v("4、安装VSCode插件，搜索Tiny3.0IDE，安装插件并重启")]),t._v(" "),n("p",[t._v("依赖版本：")]),t._v(" "),n("p",[t._v("node -v  12.14.1"),n("br"),t._v("\nnpm -v  6.13.4")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"tiny3-0-node开发教程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tiny3-0-node开发教程"}},[t._v("#")]),t._v(" Tiny3.0 node开发教程")]),t._v(" "),n("h4",{attrs:{id:"发布前端库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布前端库"}},[t._v("#")]),t._v(" 发布前端库")]),t._v(" "),n("p",[n("strong",[t._v("1.初始化项目")]),n("br"),t._v("\nnpm init，按照步骤初始化项目配置信息")]),t._v(" "),n("p",[n("img",{attrs:{src:"/project.png",alt:"avatar"}})]),t._v(" "),n("p",[n("strong",[t._v("2.开发项目")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/develop2.png",alt:"avatar"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"/develop.png",alt:"avatar"}})]),t._v(" "),n("p",[n("strong",[t._v("3.发布项目")])]),t._v(" "),n("p",[t._v("1、先使用nrm ls,确认当前npm服务器为公司私服")]),t._v(" "),n("p",[t._v("2、使用npm publish，按步骤登录后，将项目发布至公司私服")]),t._v(" "),n("p",[n("strong",[t._v("4.取消发布项目")])]),t._v(" "),n("p",[t._v("使用npm unpublish 库名 --force")]),t._v(" "),n("h4",{attrs:{id:"引用前端库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用前端库"}},[t._v("#")]),t._v(" 引用前端库")]),t._v(" "),n("p",[n("strong",[t._v("1.引用库")])]),t._v(" "),n("p",[t._v("使用npm install tools --save，其中tools为你之前发布的前端库名称")]),t._v(" "),n("p",[n("img",{attrs:{src:"/quote.png",alt:"avatar"}})]),t._v(" "),n("p",[n("strong",[t._v("2.使用库函数")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/use.png",alt:"avatar"}})]),t._v(" "),n("p",[n("strong",[t._v("3.IDE开发")])]),t._v(" "),n("p",[t._v("1)、安装tinypack，tiny3.0的IDE工具, npm install tinypack -D")]),t._v(" "),n("p",[t._v("2)、在tml后缀的文件下上下文菜单中，使用Start Tml Server3.0，即可像以前一样使用IDE热开发\n"),n("img",{attrs:{src:"/IDE.png",alt:"avatar"}})]),t._v(" "),n("h4",{attrs:{id:"nodejs实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs实例"}},[t._v("#")]),t._v(" nodeJS实例")]),t._v(" "),n("p",[t._v("gitlab:https://p.mtiny.cn:9443/Tiny3.0/TmlExample")]),t._v(" "),n("p",[t._v("clone之后，使用npm install安装依赖包")]),t._v(" "),n("h4",{attrs:{id:"注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),n("p",[n("strong",[t._v("1.编写tml的注意事项")])]),t._v(" "),n("ul",[n("li",[t._v("只添加一个同名的js文件，其余在js文件中导入或引入")]),t._v(" "),n("li",[n("strong",[t._v("标签不支持添加事件")]),t._v("，只可通过在同名的js文件中添加事件")])]),t._v(" "),n("p",[n("strong",[t._v("2.编写js的注意事项")])]),t._v(" "),n("p",[t._v("//这是tml的UI绘制完毕事件"),n("br"),t._v('\nDocument.addEventListener("load", function () {')]),t._v(" "),n("p",[t._v("});")]),t._v(" "),n("p",[t._v("//这是tml的退出销毁事件"),n("br"),t._v('\nDocument.addEventListener("unload", function () {')]),t._v(" "),n("p",[t._v("});")]),t._v(" "),n("p",[t._v("//这是tml的显示事件"),n("br"),t._v('\nDocument.addEventListener("didAppear", function () {')]),t._v(" "),n("p",[t._v("});")]),t._v(" "),n("p",[t._v("//这是tml的隐藏事件"),n("br"),t._v('\nDocument.addEventListener("disAppear", function () {')]),t._v(" "),n("p",[t._v("});")]),t._v(" "),n("p",[t._v("在事件之外的地方写js时，"),n("strong",[t._v("注意此时UI可能未绘制完毕")])]),t._v(" "),n("p",[n("strong",[t._v("3.前端库支持发布JS、CSS及tml")])])])}),[],!1,null,null,null);v.default=_.exports}}]);
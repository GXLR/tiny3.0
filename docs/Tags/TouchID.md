## 生物识别

### 描述
#### Tiny 提供了 TouchID 功能，允许应用程序使用指纹ID进行认证，TouchID 只支持苹果设备。

### 属性
---

| 属性 | 类型 | 描述 | 描述 |
| :-----| :---- | :-----| :---- |
| isSupport | 判断设备是否支持 | TouchID	 | 
| localizedReason | 字符串 | 文字说明 | 	
| localizedFallbackTitle | 字符串 | 密码按钮字样（若该参数不传，指纹第一次验证失败后只有一个取消按钮	 | 
| localizedCancelTitle | 字符串 | 取消按钮字样	 | 
| success | Function | touchID | 认证成功的回调函数	 | 
| error | Function | touchID  | 认证失败的回调函数 | 	
| passwordOpen | Function | 未开启指纹认证 | 

### success/error 的返回码说明
---

| 属性 | 描述 |
| :-----| :---- |
| 0000 | 验证成功 |
| 0001 | 不支持指纹 |
|0002 | 验证指纹失败 |
|0003 | 取消 |
|0004 | 用户选择输入密码 |
|0006 | 系统支持指纹, 但是没有设置指纹 |
|0007 | 多次错误 |
|0008 | 其他错误 |

### 代码实例

```
function tinyTouchID() {
    var touchID = new BiometricsAuth();
    if (touchID.isSupport) {
        touchID.localizedReason = '请输入您的指纹';
        touchID.localizedReason = '通过Home键验证已有指纹';
        touchID.localizedFallbackTitle = ""; //密码按钮字样（若该参数不传，指纹第一次验证失败后只有一个取消按钮）
        touchID.localizedCancelTitle = "取消"; //取消按钮字样
        touchID.success = function(data,code,base64Sign,clientNonce,base64PubKey) {
            alert("指纹登陆已开启");
        }
        touchID.error = function(data1, code) {
            alert(data1 + "===" + code);

        }
        touchID.passwordOpen = function(data1, code) {
            //未开启指纹
            alert(data1 + "====" + code);
        }
        touchID.touch();
    } else {
        alert("不支持指纹");
    }
}
```


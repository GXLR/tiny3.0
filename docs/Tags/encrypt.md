## Encrypt

### 描述

Tiny 提供了 Encrypt 类加密解密的操作，支持sha256、base64、rsa、aes、sm2、sm4等算法。

### 方法
 
<table class="table table-bordered table-striped table-condensed">
   <tr>
      <td>方法</td>
      <td>描述</td>
      <td>备注</td>
   </tr>
   <tr>
      <td><a href="#2F">base64Encode</a></td>
      <td>base64编码</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#3F">base64Decode</a></td>
      <td>base64解码</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#4F">rsaEncryptString</a></td>
      <td>rsa加密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#5F">rsaDecryptString</a></td>
      <td>rsa解密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#7F">signatureRsaWithText</a></td>
      <td>rsa加签</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#13F">aesgcmEncryptString</a></td>
      <td>aesgcm加密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#14F">aesgcmDecryptString</a></td>
      <td>aesgcm解密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#15F">aesEncryptString</a></td>
      <td>aes加密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#16F">aesDecryptString</a></td>
      <td>aes解密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#17F">hmacSHA256</a></td>
      <td>hmacSHA256加密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#18F">SHA256</a></td>
      <td>SHA256加密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#19F">sm2Encrypt</a></td>
      <td>sm2加密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#20F">sm2Derypt</a></td>
      <td>sm2解密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#21F">sm3</a></td>
      <td>sm3加签</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#22F">SM4Encrypt</a></td>
      <td>sm4加密</td>
      <td></td>
   </tr>
   <tr>
      <td><a href="#23F">SM4Decrypt</a></td>
      <td>sm4解密</td>
      <td></td>
   </tr>
</table>

***
#### <a name="2F">base64Encode</a>

base64加密

	encrypt.base64Encode(input)

##### params

* input:加密内容

##### return

* return:base64加密结果

#### 示例 ####

	 var encrypt = new Encrypt();               
	 var md5value = encrypt.base64Encode(value) 
	 
***

#### <a name="3F">base64Decode</a>

base64 解密

	encrypt.base64Decode(value)

##### params

* value:解密内容

##### return

* return:base64解密结果

示例

	var encrypt = new Encrypt();			// 创建一个加密函数
	var md5value = encrypt.base64Decode(value)// 对上例中加密的结果value值执行解压函数	
***

#### <a name="4F"> rsaEncryptString </a>

使用rsa公钥加密

	encrypt.rsaEncryptString(input, publicKey)

##### params

* input:加密内容
* publicKey:rsa公钥

##### return

* return:rsa加密结果

		function rsaEncode() {
	 		var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDZ2eDry6u5fEj0e3ONOjN06PVWWpVC18JsA2fcAoHLhgiRIynK6b67yZoXD5la5ZGzq/n4BPLYoZqZUbN92DdySDVamypYIlqwvvBNq47Mla3hT/gSOZBiUTRiJbj3ernXnH6ol3vx6CZKsNm91aAIzJPw3ZmbUn1XOPPEZ0gFWQIDAQAB";

	 		var encrypt = new Encrypt();
	 		var rsaValue = encrypt.rsaEncryptString(value, publicKey)
		}
		
***
		
#### <a name="5F"> rsaDecryptString </a>

使用rsa私钥解密

	encrypt.rsaDecryptString(input, privateKey)

##### params

* input:密文
* privateKey:rsa私钥

***

#### <a name="7F"> signatureRsaWithText </a>

使用rsa私钥签名

	encrypt.signatureRsaWithText(input, privateKey)

##### params

* input:签名内容
* privateKey:rsa私钥

##### return

* return:rsa签名结果

***

#### <a name="13F"> aesgcmEncryptString </a>

使用aesgcm加密

	encrypt.aesgcmEncryptString(input, key, iv)

##### params

* input:明文
* key:密钥
* iv:偏移量

***

#### <a name="14F"> aesgcmDecryptString </a>

使用aesgcm解密

	encrypt.aesgcmDecryptString(input, key, iv)

##### params

* input:密文
* key:密钥
* iv:偏移量

***

#### <a name="15F"> aesEncryptString </a>

使用aes加密

	encrypt. aesEncryptString(input, key, iv)

##### params

* input:明文
* key:密钥
* iv:偏移量

***

#### <a name="16F"> aesDecryptString </a>

使用aes解密

	encrypt.aesDecryptString(input, key, iv)

##### params

* input:密文
* key:密钥
* iv:偏移量

***

#### <a name="17F"> hmacSHA256 </a>

使用hmacSHA256加密

	encrypt.hmacSHA256(input, key)

##### params

* input:明文
* key:密钥

***

#### <a name="18F"> SHA256 </a>

使用SHA256加密
	
	encrypt.SHA256(input)

##### params

* input:明文

***

#### <a name="19F">SM2Encrypt</a>

使用sm2公钥加密

	encrypt.SM2Encrypt(input, publicKey)

##### params

* input:明文
* publicKey:sm2公钥

##### return

* return:sm2加密结果

		var key = "04DC7327738C66D01970B40CE2084B7F44FFFF3A90789BEDA407D8B85BCF1296551919B21662EE586444696705AAF85FF7156AC64EC204341EB4FA705E5A551E56";
		var tmp = encrypt.SM2Encrypt(value, key);

***

#### <a name="20F">SM2Decrypt</a>

使用sm2私钥解密

	encrypt.SM2Decrypt(input, privateKey)

##### params

* input:密文
* publicKey:私钥

##### return

* return:sm2解密结果

		var key = "7F17B17EABB73E81310D1EC734E30933A5E43096DFB2DA578BA12E3C07DCBABE";
		var tmp = encrypt.SM2Decrypt(value, key);

***

#### <a name="21F">SM3</a>

sm3消息摘要

	encrypt.SM3(input)

* input:加签内容

##### return

* return:sm3 加密结果

#### 示例： ####

	var encrypt = new Encrypt();      
	var sm3value = encrypt.SM3(value);

***

#### <a name="22F">SM4Encrypt</a>

sm4 加密

	encrypt.SM4Encrypt(input, key)

##### params

* input:明文
* key:秘钥

##### return

* return:加密结果

#### 示例 ####

	var key = "0123456789abcdeffedcba9876543210";
	var tmp = encrypt.SM4Encrypt(value, key);

***

#### <a name="23F"> SM4Decrypt</a>

sm4 解密

	encrypt.SM4Decrypt(input, key)

##### params

* input:密文
* key:秘钥

##### return

* return:解密结果

#### 示例 ####

	var key = "0123456789abcdeffedcba9876543210"
	var tmp = encrypt.SM4Decrypt(value, key);


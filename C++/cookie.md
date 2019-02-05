#####前言
由于HTTP协议是无状态的，有时需要保存用户的一些信息或状态，来提高交互性和安全性，Cookie的产生很好地解决了这个问题。

#####Cookie
一般Cookie是由服务器在HTTP的响应头通过Set-Cookie给客户端的一串字符串，比如用户信息等，浏览器收到响应后，会将Cookie保存在客户端一段时间，然后客户端每次访问的相同域名的网页时，浏览器会按照一定的原则将Cookie发送给服务器。

 注意：
1. 客户端可以对Cookie进行修改，通过控制台或者Javascript脚本。
2. Cookie默认在用户关闭页面后就失效（保存在内存中)，后台代码可以通过cache-control任意设置Cookie保存时间等(保存在硬盘中)。

#####Cache-Control

1、public  : 客户端和代理服务器(CDN)都可缓存
2、private : 只在客户端缓存，cache-control的默认值
3、no-cache: 不论是客户端缓存还是服务器缓存，在使用它以前必须用缓存里的值来重新验证
4、no-store: 不允许被缓存
5、max-age=<seconds> : 设置缓存时间
6、s-maxage=<seconds>：覆盖 max-age 属性。只在共享缓存中起作用。
7、immutable：表示文档是不能更改的。
8、must-revalidate：表示客户端（浏览器）必须检查代理服务器上是否存在，即使它已经本地缓存了也要检查。
9、proxy-revalidata：表示共享缓存（CDN）必须要检查源是否存在，即使已经有缓存。


#####Session
考虑到客户端可以对cookie进行修改，为了提高安全性，仅将一个随机数生成的的SessionID通过Set-Cookie发送给客户端，而具体的哈希表则保存在服务器，即用户的状态信息等保存在服务端的内存中，客户端仅通过SessionID获取其对应的信息，服务器通过读取相应的SessionID返回对应用户的隐私信息。 

通过设置cookie保存时间可以使用户访问
经常被使用的一种技术叫做URL重写，就是把session id直接附加在URL路径的后面。还有一种技术叫做表单隐藏字段。就是服务器会自动修改表单，添加一个隐藏字段，以便在表单提交时能够把session id传递回服务器。

#####LocalStorage


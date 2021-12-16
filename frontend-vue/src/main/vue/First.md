
1.
打印日志，如

打印this到浏览器控台
console.log("this ", this)


2.
default.watch: {
  $route: {
    handler: function(route) {

    }
  }
} 方法用于监测页面数据变化，双向绑定，可用于将页面url的参数反填到页面查询条件中


4.TODO nvm npm
http://kail.xyz/Node.js/docs/Npm/NVM/
http://kail.xyz/Node.js/docs/Npm/Quick-Start/


5.JS new Date 时间默认加上8
https://blog.csdn.net/purple25/article/details/103809109

new Date('2020-08-06')
被识别为如下，多加了8小时:
Thu Aug 06 2020 08:00:00 GMT+0800 (China Standard Time)

5.1
方法1，多加个 00:00:00
new Date('2020-08-06 00:00:00')
Thu Aug 06 2020 00:00:00 GMT+0800 (China Standard Time)

5.2
方法2 用/，而非-
new Date('2020/08/06')
Thu Aug 06 2020 00:00:00 GMT+0800 (China Standard Time)

6.








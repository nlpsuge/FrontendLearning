# Node.js 的不足
[Vert.x基础 - 故事背景](https://lang-yu.gitbook.io/vert.x/01-index/01-2-vertx-fundation#1.-gu-shi-bei-jing)
Node.js是单进程、单线程模式。对于CPU密集型的应用，Node.js会不堪重负，主要原因也是由于JS是单线程的，如果存在长时间运行的计算，CPU的时间片无法在有效周期内释放，这使得后续的I/O请求无法继续发起。


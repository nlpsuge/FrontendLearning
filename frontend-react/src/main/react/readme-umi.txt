1.Link / 通过 umi 路由跳转
https://umijs.org/api#history
<Link to="/courses?sort=name">Courses</Link>

https://umijs.org/docs/routing
Link is only used for internal jumps of single page applications, if it is an external address jump, please use the a tag

2.
https://github.com/frontend9/fe9-library/issues/25
umi 是 基于约定 的前端开发框架。umi 深度整合了 dva，使得开发基于 dva 的应用更加便捷。

umi 默认采用了「目录即路由」的约定，并且深度整合了 dva

3.在umi中配置代理 
https://umijs.org/zh-CN/config#proxy
// proxy 配置仅在 dev 时生效
export default defineConfig({
    proxy: {
        "/api": {
            target: "http://jsonplaceholder.typicode.com/",
            changeOrigin: true,
            pathRewrite: { "^/api": "" },
        },
        "/async": {
            target: "http://localhost:9881/",
            changeOrigin: true,
        },
    }
})

4.路由
https://umijs.org/zh-CN/docs/routing
config-route.js

5.

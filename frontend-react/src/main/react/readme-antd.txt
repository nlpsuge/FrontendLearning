0.
https://ant.design/docs/react/introduce-cn

1.
antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

2.
使用 TypeScript 开发，提供完整的类型定义文件。

3.
Module "./antd/es/form/style" does not exist in container.
https://landing.ant.design/docs/use/umi-cn

3.1 对于 umi 3.x
安装插件:
npm install --save-dev @umijs/preset-react

https://www.npmjs.com/package/@umijs/preset-react

3.2 加载页面时，如果报 Module "./antd/es/form/style" does not exist in container.
则，
移除 src/.umi 缓存文件夹，再
npm run start

https://segmentfault.com/q/1010000040438034
https://github.com/ant-design/pro-components/issues/3253

4.
https://ant.design/components/form/#components-form-demo-control-hooks
Note that useForm is a React Hooks that only works in functional component.

5.
https://stackoverflow.com/questions/48494045/how-to-add-dynamic-link-to-table-data
8

Change this
render: text => <a href="#">{text}</a>

to this
render: (text, record) => <a href={'user/' + record.name}>{text}</a>

if you're using router
render: (text, record) => <Link to={'user/' + record.name}>{text}</Link>

6.



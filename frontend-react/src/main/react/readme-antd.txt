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
Select组件的下拉选项不显示对应的中文描述
<Form layout="horizontal" 
    ref={this.formRef} 
    name="modify_service_form" 
    onFinish={this.onFinish}
    initialValues = { row }
    >

    <Form.Item name="itemId" label="服务状态">
        <Select allowClear name="serviceStateSelect" >
        <Option value="1">选项1</Option>
        <Option value="2">选项2</Option>
        </Select>
    </Form.Item>
/>

原因:
row.itemId的类型是int类型，而选项写的value值是string类型，类型不匹配，导致数据渲染不了
修改方式:
<Form.Item name="itemId" label="服务状态">
    <Select allowClear name="serviceStateSelect" >
    <Option value={ 1 }>选项1</Option>
    <Option value={ 2 }>选项2</Option>
    </Select>
</Form.Item>

7.
antd+react 数据更新后,Table组件不刷新
https://blog.csdn.net/qq_33922874/article/details/109181138
antd的Table组件有个rowKey属性，这个值如果不变是不会刷新这一样的，当刷新页面或者切换
到其他组件在切换回来才会刷新，那么我们只需要保证这个key变化就可以了,有的情况下即便这样
设置了也没有生效，可以尝试下将数据用es6的扩展运算符展开，比如 list = [...获取到的数据]，然
后再setState

8.

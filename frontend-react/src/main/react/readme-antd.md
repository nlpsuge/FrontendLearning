# Doc
https://ant.design/docs/react/introduce-cn

antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

使用 TypeScript 开发，提供完整的类型定义文件。

# Fix: Module "./antd/es/form/style" does not exist in container.
https://landing.ant.design/docs/use/umi-cn

## 对于 umi 3.x
安装插件:
npm install --save-dev @umijs/preset-react

https://www.npmjs.com/package/@umijs/preset-react

## 加载页面时，如果报 Module "./antd/es/form/style" does not exist in container.
则，
移除 src/.umi 缓存文件夹，再
npm run start

https://segmentfault.com/q/1010000040438034
https://github.com/ant-design/pro-components/issues/3253

# Note that useForm is a React Hooks that only works in functional component.
https://ant.design/components/form/#components-form-demo-control-hooks

# Add a link to table data
https://stackoverflow.com/questions/48494045/how-to-add-dynamic-link-to-table-data

Change this
```js
render: text => <a href="#">{text}</a>
```

to this
```js
render: (text, record) => <a href={'user/' + record.name}>{text}</a>
```

if you're using router
```js
render: (text, record) => <Link to={'user/' + record.name}>{text}</Link>
```

# Select组件的下拉选项不显示对应的中文描述
```js
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
```

原因:
row.itemId的类型是int类型，而选项写的value值是string类型，类型不匹配，导致数据渲染不了
修改方式:
```js
<Form.Item name="itemId" label="服务状态">
    <Select allowClear name="serviceStateSelect" >
    <Option value={ 1 }>选项1</Option>
    <Option value={ 2 }>选项2</Option>
    </Select>
</Form.Item>
```

# Table 

## antd+react 数据更新后,Table组件不刷新

https://blog.csdn.net/qq_33922874/article/details/109181138

antd的Table组件有个rowKey属性，这个值如果不变是不会刷新这一样的，当刷新页面或者切换
到其他组件在切换回来才会刷新，那么我们只需要保证这个key变化就可以了,有的情况下即便这样
设置了也没有生效，可以尝试下将数据用es6的扩展运算符展开，比如 list = [...获取到的数据]，
然后再setState

## How to hide the expand icon
https://github.com/ant-design/ant-design/issues/24129
https://codesandbox.io/s/antd-reproduction-template-forked-z4z4o

```js
// ...

// Hide the expand icon and keep the tree structure
const expandIcon = () => {
  return null;
};

const expandedRowRender = (record, index, indent, expanded) => {
  return <span> {record.name} </span>;
};

ReactDOM.render(
  <div className="App">
    <Table
      dataSource={tableData}
      columns={columns}
      expandable={{
        expandRowByClick: true,
        expandIcon,
        expandedRowRender,
        // Hide the expand icon, but no more tree structure?
        // expandIconColumnIndex: -1
      }}
    />
  </div>,
  document.getElementById("root")
);
```

# Show and hide the message
[How to hide an AntD message after another Promise (API request) completes?](https://stackoverflow.com/questions/66757708/how-to-hide-an-antd-message-after-another-promise-api-request-completes)
[ant-design message 多线程bug #8201](https://github.com/ant-design/ant-design/issues/8201)

```js
const hide = message.loading('Loading...',0)
API.getUser(id).then(res => {
  // Two methods to hide the message(s)
  
  // Method 1, hide the message asynchronously
  hide()

  // Method 2, destory all messages
  message.destroy();
}
```

1.
React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库, 可以按需引入或多或少的 React 特性。

2.
使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。


3.
JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。

4.
在浏览器中使用 Babel 来编译 JSX 效率是非常低的。

5.
https://www.runoob.com/react/react-install.html
国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ npm config set registry https://registry.npm.taobao.org

这样就可以使用 cnpm 命令来安装模块了：

$ cnpm install [name]

6.
TODO 箭头函数
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions

7.创建一个react前端应用
https://zh-hans.reactjs.org/docs/create-a-new-react-app.html#create-react-app
npx create-react-app my-app
cd my-app
npm start
or
yarn start

Note: create-react-app 只是创建一个前端构建流水线（build pipeline），所以你可以使用它来配合任何你想使用的后端。它在内部使用 Babel 和 webpack，但你无需了解它们的任何细节。

8.
大多数的 React 开发者使用了一种名为 “JSX” 的特殊语法，JSX 可以让你更轻松地书写这些结构。

语法 <div /> 会被编译成 React.createElement('div')。

在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。

每一个 React 元素事实上都是一个 JavaScript 对象，你可以在你的程序中把它保存在变量中或者作为参数传递。

9.
每个组件都是封装好的，并且可以单独运行，这样你就可以通过组合简单的组件来构建复杂的 UI 界面。

10.
Javascript 代码注释规范
https://segmentfault.com/a/1190000015204718

11.
在 React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event] 这样的格式。

12.
调用了 squares.slice() 方法创建了 squares 数组的一个副本，而不是直接在现有的数组上进行修改。
使用 squares.slice() 函数对数组进行拷贝

不可变性使得复杂的特性更容易实现。

13.
不可变性最主要的优势在于它可以帮助我们在 React 中创建 pure components。我们可以很轻松的确定不可变数据是否发生了改变，从而确定何时对组件进行重新渲染。

14.const TODO
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

Constants are block-scoped, much like variables declared using the let keyword. 
The value of a constant can't be changed through reassignment, and 
it can't be redeclared.

 This declaration creates a constant whose scope can be either global or local to 
 the block in which it is declared. Global constants do not become properties 
 of the window object, unlike var variables.

An initializer for a constant is required. 
You must specify its value in the same statement in which it's declared.
 (This makes sense, given that it can't be changed later.) 

14.1
Const declarations require an initialization value

14.2
TypeError: invalid assignment to const 'status'

15.let TODO
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

The let statement declares a block-scoped local variable, optionally initializing it to a value. 

let allows you to declare variables that are limited to the scope of a block statement, 
or expression on which it is used

let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x); // expected output: 2
}

console.log(x); // expected output: 1

16.




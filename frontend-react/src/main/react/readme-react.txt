0.

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

局部静态变量，多数时候用这个修饰变量

Constants are block-scoped, much like variables declared using the let keyword. 
The value of a constant can't be changed through reassignment, and 
it can't be redeclared.

 This declaration creates a constant whose scope can be either global or local to 
 the block in which it is declared. Global constants do not become properties 
 of the window object, unlike var variables.

An initializer for a constant is required. 
You must specify its value in the same statement in which it's declared.
 (This makes sense, given that it can't be changed later.) 

14.1 const
Const declarations require an initialization value



14.2
TypeError: invalid assignment to const 'status'

15.let TODO
局部变量，在方法体里用
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

15.1
var 是全局变量，用的更少

16.
可以不写 ; ?

看习惯，没有强制要求

17.react 是typesript?
不是，普通的js

18.
如果不写 const 和 let 会怎么样，默认是 var 修饰？

不是，必须写

19.
Array#concat() 方法可能与你比较熟悉的 push() 方法不太一样，它并不会改变原数组

20.
如何断点调试？

21.
在前文中提到的 React 元素被视为 JavaScript 一等公民中的对象（first-class JavaScript objects），因此我们可以把 React 元素在应用程序中当作参数来传递。
在 React 中，我们还可以使用 React 元素的数组来渲染多个元素。

22.
render() 函数 返回了一个 React 元素

23.
在 JavaScript 中，数组拥有 map() 方法，
该方法通常用于把某数组映射为另一个数组，例如：
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]


// Arrow function
map((element) => { ... } )
map((element, index) => { ... } )
map((element, index, array) => { ... } )

24.
js 中可以直接用花括号 {} 构造对象，如

const o = {"ll": "3434", "k1" : 2277}
console.log(o);
console.log(o.ll);

25.
js 中 中括号 [] 表示数组

26. Truthy vs Falsy
https://developer.mozilla.org/en-US/docs/Glossary/Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy

Truthy
true
[]
{}
3
"0"
"false"


Falsy:
false
0 / 0.0 / 0x0
-0 / -0.0 / -0x0

26.
简单介绍一下 React 的工作机制
https://www.infoq.cn/article/oczmpgbj*pwpgmkfr4an

当你呈现一个 React 应用时，React 会在所谓虚拟 DOM 中保留 DOM 的副本。虚拟 DOM 充当你的 React 代码与浏览器绘制到 DOM 的内容之间的中间层。

然后当你的数据出现变动时（可能因为你调用了 this.setState，useState），React 会做一些工作来确定如何在屏幕上重新绘制 UI。

它会对比虚拟 DOM 与真实的 DOM，以确定数据更新导致了哪些更改。然后它会仅重新绘制与虚拟 DOM 中的新副本不匹配的 DOM 部分，这样就无需在每次数据更新时重新绘制整个 DOM 了。

这就显著提升了性能，因为更新虚拟 DOM 比更新真实 DOM 要节省很多资源，而 React 只更新真实 DOM 中需要改变的部分。有一篇文章很好地解释了这一过程：
https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e

但你可能会发现这个实现有点问题。如果你没有告诉 React 你的数据已经改变了（比如说调用 this.setState 或 Hooks 之类），那么虚拟 DOM 就不会有变化，React 也不会随之响应（Duang！搞砸了！）。

这就是 Dan 所说的，React 并不是完全的响应式设计的意思。React 需要你手动跟踪应用数据，并在数据变化时告诉 React，这也意味着你得做更多工作。


27.
https://cloud.tencent.com/developer/article/1612867
能用收集依赖的这套体系吗？不能，因为他们(React)遵从Immutable的设计思想，永远不在原对象上修改属性，
那么基于 Object.defineProperty 或 Proxy 的响应式依赖收集机制就无从下手了（你永远返回一个新的对象，我哪知道你修改了旧对象的哪部分？）

同时，由于没有响应式的收集依赖，React 只能递归的把所有子组件都重新 render一遍（除了memo和shouldComponentUpdate这些优化手段），
然后再通过 diff算法 决定要更新哪部分的视图，这个递归的过程叫做 reconciler，听起来很酷，但是性能很灾难。

28.
Vue实现了双向的数据绑定，react数据流动是单向的. React 中 数据从上往下流动。

29.
Error: Promised response from onMessage listener went out of scope

onclick中写的是函数引用，而不是函数返回值(带圆括号())

30.TODO curry 柯里化 

31.如何在 React 中发起 AJAX 请求？
https://zh-hans.reactjs.org/docs/faq-ajax.html#how-can-i-make-an-ajax-call

推荐你在 componentDidMount 这个生命周期函数中发起 AJAX 请求。
这样做你可以拿到 AJAX 请求返回的数据并通过 setState 来更新组件。

32.
https://stackoverflow.com/questions/39523040/concatenating-variables-and-strings-in-react
var text = "world";
{"Hello " + text + " Andrew"}

This will yield:
"Hello world Andrew"

====
var text = "world";
{`Hello ${text} Andrew`}

This will yield:
"Hello world Andrew"

33.
https://zh-hans.reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行

34.




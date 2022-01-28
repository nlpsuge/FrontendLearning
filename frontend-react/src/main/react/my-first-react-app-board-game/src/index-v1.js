import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const var1 = 'var1'
let var2 = 'var2'

/**
 * 把两个 this.props 都替换成了 props
 * 
 * 当我们把 Square 修改成函数组件时，我们同时也把 onClick={() => this.props.onClick()} 
 * 改成了更短的 onClick={props.onClick}（注意两侧都没有括号）。
 */
function Square_FunctionalInterface(props) {
  return (
    <button 
      className="Square_FunctionalInterface"
      onClick={props.onClick}>
        {props.value}
    </button>
  );
}

class Square extends React.Component {

  /**
   * 创建一个构造器具，并在其中初始化 state
   * 
   * this.state 应该被视为一个组件的私有属性。
   * 
   * 
   * 在 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes JavaScript class } 中，
   * 每次你定义其子类的构造函数时，都需要调用 super 方法。
   * 因此，在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。
   * 
   */
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     state: null
  //   }
  // }

    /**
     * “props” 是 “properties” 简写
     * 
     * 在 React 应用中，数据通过 props 的传递，从父组件流向子组件。
     * 
     * 大多数的 React 开发者使用了一种名为 “JSX” 的特殊语法，JSX 可以让你更轻松地书写这些结构。语法 <div /> 会被编译成 React.createElement('div')。
     * 
     * 在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。
     */
    render_1() {
      return (
        <button className="square" onClick={function() { console.log('single click'); }}>
          {this.props.value}
        </button>
      );
    }

    render_2() {
      return (
        /**
         * 为了少输入代码，同时为了避免 this 造成的困扰，我们在这里使用箭头函数(() => ...) 来进行事件处理
         * 
         * 此处使用了 onClick={() => console.log('click')} 的方式向 onClick 这个 prop 传入一个函数。 
         * React 将在单击时调用此函数。但很多人经常忘记编写 () =>，而写成了 onClick={console.log('click')}，
         * 这种常见的错误会导致每次这个组件渲染的时候都会触发弹出框。
         * 
         * 
         * 可以在每次 <button> 被点击的时候通过 this.setState() 方法通知 React 去重新渲染更新 Square 组件，
         * this.state.value 的值会变为 'X'
         * 
         * 每次在组件中调用 this.setState() 时，React 都会自动更新其子组件。
         */ 
        <button 
          className="square" 
          onClick={ () => this.setState({value: 'X'}) }
        >
          {this.state.value}
        </button>
      );
    }

    render() {
      return (
        /**
         * DOM 内置元素 <button>
         * 
         * 
         * 每一个 Square 被点击时，Board 提供的 onClick 函数就会触发。我们回顾一下这是怎么实现的：
         * 1.向 DOM 内置元素 <button> 添加 onClick prop，让 React 开启对点击事件的监听。
         * 2.当 button 被点击时，React 会调用 Square 组件的 render() 方法中的 onClick 事件处理函数。
         * 3.事件处理函数触发了传入其中的 this.props.onClick() 方法。这个方法是由 Board 传递给 Square 的。
         * 4.由于 Board 把 onClick={() => this.handleClick(i)} 传递给了 Square，所以当 Square 中的事件处理函数触发时，其实就是触发的 Board 当中的 this.handleClick(i) 方法。
         * 5.现在我们还尚未定义 handleClick() 方法，所以代码还不能正常工作。如果此时点击 Square，你会在屏幕上看到红色的错误提示，提示内容为：“this.handleClick is not a function”。
         */
        <button 
          className="square" 
          onClick={ () => this.props.onClick() }
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  /**
   * 当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，
   * 需要把子组件的 state 数据提升至其共同的父组件当中保存。之后父组件可以通过 props 
   * 将状态数据传递到子组件当中。这样应用当中所有组件的状态数据就能够更方便地同步共享了。
   * 
   */
  class Board extends React.Component {

    /**
     * 为 Board 组件添加构造函数，将 Board 组件的初始状态设置为长度为 9 的空值数组
     */
    constructor(props) {
      super(props)
      this.state = {
        // 
        squares: Array(9).fill(null),
        // 将 “X” 默认设置为先手棋 
        // 游戏的状态会被保存下来
        xIsNext: true
      }
    }

    renderSquare_1(serialNumber) {
        // 从Board组件中 传递一个名为 serialNumber 的 prop 到 Square 当中
      return <Square serialNumber = {serialNumber}/>;
    }

    renderSquare_2(serialNumber) {
      // 在最外层加了小括号，这样 JavaScript 解析的时候就不会在 return 的后面自动插入一个分号从而破坏代码结构
      // 
      // 从 Board 组件向 Square 组件中传递两个 props 参数：value 和 onClick,
      // 其中，alue 的值可以是 'X'、 'O'、 或 null（null 代表空方格）
      return <Square value={this.state.squares[serialNumber]} />;
    }

    renderSquare_3(serialNumber) {
      // 在最外层加了小括号，这样 JavaScript 解析的时候就不会在 return 的后面自动插入一个分号从而破坏代码结构
      // 
      // 从 Board 组件向 Square 组件中传递两个 props 参数：value 和 onClick,
      // 其中，alue 的值可以是 'X'、 'O'、 或 null（null 代表空方格）
    return (
          <Square 
            value = {this.state.squares[serialNumber]}
            onClick={() => this.handleClick(serialNumber) } 
          />
        );
    }

    renderSquare(serialNumber) {

    return (
          <Square 
            value = {this.state.squares[serialNumber]}
            onClick={() => this.handleClick_X_O_Move_Respectively(serialNumber) } 
          />
        );
    }

    renderSquare_FunctionalInterface(serialNumber) {
      // 在最外层加了小括号，这样 JavaScript 解析的时候就不会在 return 的后面自动插入一个分号从而破坏代码结构
      // 
      // 从 Board 组件向 Square 组件中传递两个 props 参数：value 和 onClick,
      // 其中，alue 的值可以是 'X'、 'O'、 或 null（null 代表空方格）
    return (
          <Square_FunctionalInterface
            value = {this.state.squares[serialNumber]}
            onClick={() => this.handleClick(serialNumber) } 
          />
        );
    }

    /**
     * 当前 state 没有保存在单个的 Square 组件中，而是保存在了 Board 组件中。每当 Board 的 state 
     * 发生变化的时候，这些 Square 组件都会重新渲染一次。
     * 
     * 
     * 因为 Square 组件不再持有 state，因此每次它们被点击的时候，Square 组件就会从 Board 组件中
     * 接收值，并且通知 Board 组件。在 React 术语中，我们把目前的 Square 组件称做“受控组件”。
     * 在这种情况下，Board 组件完全控制了 Square 组件。
     */
    handleClick(serialNumber) {
      // 调用了 .slice() 方法创建了 squares 数组的一个副本，而不是直接在现有的数组上进行修改。
      // 使用 .slice() 函数对数组进行拷贝
      const squares = this.state.squares.slice();
      squares[serialNumber] = 'x';
      this.setState({squares: squares});
    }

    /**
     * 实现 “X” 和 “O” 轮流落子的效果
     */
    handleClick_X_O_Move_Respectively(serialNumber) {
      const squares = this.state.squares.slice();
      // 当有玩家胜出时，或者某个 Square 已经被填充时，该函数不做任何处理直接返回
      // let hasWinner // TODO
      let hasWinner = calculateWinner(squares) || squares[serialNumber];
      if (hasWinner) {
        return;
      }
      squares[serialNumber] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext
      });
    }
  
    render() {
      // const status = 'Next player: X';
      // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

      const winer = calculateWinner(this.state.squares);
      let status = 'x';
      if (winer) {
        status = 'Winner: ' + winer;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare_FunctionalInterface(9)}
            {this.renderSquare_FunctionalInterface(10)}
            {this.renderSquare_FunctionalInterface(11)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  /**
   * 传入长度为 9 的数组，此函数将判断出获胜者，并根据情况返回 “X”，“O” 或 “null”。
   */
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
// tic-tac-toe(三连棋)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const var1 = 'var1'
let var2 = 'var2'

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

    renderSquare(serialNumber) {

      return (
            <Square 
              value = {this.props.squares[serialNumber]}
              onClick={() => this.props.onClick(serialNumber) } 
            />
          );
    }
  
    render() {
      return (
        <div>
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
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
        </div>
      );
    }
  }
  
  class Game_1 extends React.Component {
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

  /**
   * Game 组件展示出一个历史步骤的列表。这个功能需要访问 history 的数据，
   * 因此我们把 history 这个 state 放在顶层 Game 组件中
   */
  class Game extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        history: [{
          squares: Array(12).fill(null),
        }],
        
        xIsNext: true,
        // 用于给用户展示当前的步骤
        stepNumber: 0,
        
      }

      console.log(this);
      console.log(this.state);
    }

    jumpTo(index) {
      this.setState({
        stepNumber: index,
        xIsNext: (index % 2) === 0
      });
    }

    /**
     * 实现 “X” 和 “O” 轮流落子的效果
     */
    handleClick_X_O_Move_Respectively(serialNumber) {
      // const history = this.state.history;
      // 我们还把读取 this.state.history 换成了读取 this.state.history.slice(0, this.state.stepNumber + 1) 的值。如果我们“回到过去”，然后再走一步新棋子，原来的“未来”历史记录就不正确了，这个替换可以保证我们把这些“未来”的不正确的历史记录丢弃掉。
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const currentHistory = history[history.length - 1]
      const squares = currentHistory.squares.slice();
      // 当有玩家胜出时，或者某个 Square 已经被填充时，该函数不做任何处理直接返回
      let hasWinner = calculateWinner(squares) || squares[serialNumber];
      if (hasWinner) {
        return;
      }
      squares[serialNumber] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        // 把新的历史记录拼接到 history 上
        // concat() 方法可能与你比较熟悉的 push() 方法不太一样，它并不会改变原数组，所以我们推荐使用 concat()。
        history: history.concat([{
          squares: squares,
        }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length
      });
    }

    /**
     * 每当一个列表重新渲染时，React 会根据每一项列表元素的 key 来检索上一次渲染时与每个 key 
     * 所匹配的列表项。如果 React 发现当前的列表有一个之前不存在的 key，那么就会创建出一个新的组件。
     * 如果 React 发现和之前对比少了一个 key，那么就会销毁之前对应的组件。如果一个组件的 key 
     * 发生了变化，这个组件会被销毁，然后使用新的 state 重新创建一份。
     * 
     * 
     * key 是 React 中一个特殊的保留属性（还有一个是 ref，拥有更高级的特性）。当 React 元素被
     * 创建出来的时候，React 会提取出 key 属性，然后把 key 直接存储在返回的元素上。虽然 key 
     * 看起来好像是 props 中的一个，但是你不能通过 this.props.key 来获取 key。React 会通过 
     * key 来自动判断哪些组件需要更新。组件是不能访问到它的 key 的。
     * 
     * 
     * 强烈推荐，每次只要你构建动态列表的时候，都要指定一个合适的 key。
     * 
     * 组件的 key 值并不需要在全局都保证唯一，只需要在当前的同一级元素之前保证唯一即可。 TODO
     * 
     */
    render() {
      const history = this.state.history;
      const currentHistory = history[this.state.stepNumber];
      const winner = calculateWinner(currentHistory.squares);

      const moves = history.map((setp, index) => {
        debugger
        console.log(setp);
        console.log(index);
        const desc = index ? "Go to move #" + index : "Go to game start";
        return (
          // Warning: Each child in a list should have a unique "key" prop.
          // <li>
          //   <button onClick={() => {this.jumpTo(index)}}>{desc}</button>
          // </li>

          <li key={index}>
            <button onClick={() => {this.jumpTo(index)}}>{desc}</button>
          </li>
        )
      });

      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              state = {this.state}
              squares={currentHistory.squares}
              // See: board -> onClick={() => this.props.onClick(serialNumber) }
              // 感觉像是 board 组件调用了 game 提供的回调函数
              onClick={ (serialNumber) => {this.handleClick_X_O_Move_Respectively(serialNumber)}}
              />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
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
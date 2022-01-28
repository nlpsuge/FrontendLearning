import React from 'react';
import ReactDOM from 'react-dom';

/**
 * ShoppingList 是一个 React 组件类，或者说是一个 React 组件类型。
 * 
 * 
 * 一个组件接收一些参数，我们把这些参数叫做 props（“props” 是 “properties” 简写），
 * 然后通过 render 方法返回需要展示在屏幕上的视图的层次结构。
 * 
 * 
 * render 返回了一个 React 元素，这是一种对渲染内容的轻量级描述
 * 
 * @see ShoppingList_Use_JSX
 * 
 */
class ShoppingList extends React.Component {
    render() {
        return (
        <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
            </ul>
        </div>
        );
    }
}

// 用法示例: <ShoppingList name="Mark" />

class ShoppingList_Use_JSX extends React.Component {
    render() {

        return 
        React.createElement("div", {
            className: "shopping-list"
            }, 
            /*#__PURE__*/React.createElement("h1", null, "Shopping List for ", props.name), 
            /*#__PURE__*/React.createElement("ul", null, 
            /*#__PURE__*/React.createElement("li", null, "Instagram"), 
            /*#__PURE__*/React.createElement("li", null, "WhatsApp"), 
            /*#__PURE__*/React.createElement("li", null, "Oculus")));
    }
}
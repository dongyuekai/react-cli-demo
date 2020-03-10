// 实现一个蒙层效果 抽象出一个通用的Overlay组件
import React, { Component } from "react";
import ReactDOM from "react-dom";
require('./main.css')

export default class Overlay extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
  }
  componentWillUnmount() {
    document.body.removeChild(this.container);
  }
  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <span className="overlay-close" onClick={this.props.onClose}>
          &times;
        </span>
        {this.props.children}
      </div>,
      this.container
    );
  }
}

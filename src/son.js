import React from 'react'
import { Consumer } from './App'
import Grandson from "./grandson.js";//引入子组件

export default function Son(props) {
  return (
    // Consumer容器 消费者  可以拿到上文传递下来的name属性 并可以展示对应的值
    <Consumer>
      {(val) => (
        <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto', textAlign: 'center' }}>
          <p>子组件获取父组件的值：{val}</p>
          <Grandson />
        </div>
      )}
    </Consumer>
  )
}
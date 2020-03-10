import React from 'react'
import Son from './son'

// 父组件
// 创建一个theme context
export const { Provider, Consumer } = React.createContext('dyk_context')

export default class App extends React.Component {
  render() {
    let name = '小人头'
    return (
      <Provider value={name}>
        <div style={{ border: '1px solid red', width: '30%', margin: '50px auto', textAlign: 'center' }}>
          <p>父组件定义的值:{name}</p>
          <Son />
        </div>
      </Provider>
    )
  }
}
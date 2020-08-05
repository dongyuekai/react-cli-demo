import React from 'react'


export default class UEditor extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let UE = window.UE
    UE.getEditor('container', {
      autoHeightEnabled: true,
      autoFloatEnabled: true,
    })
  }
  render() {
    return (
      <div id='container'></div>
    )
  }
}
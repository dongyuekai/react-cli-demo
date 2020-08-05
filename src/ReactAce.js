import React from 'react'
import { render } from 'react-dom'
import AceEditor from 'react-ace';
//language_tools语言工具，（这个好像是检测语法，有点忘了，想不起来从哪里找到的）
import 'ace-builds/src-noconflict/ext-language_tools'
//searchbox过滤框，快捷键ctrl+F
import 'ace-builds/src-noconflict/ext-searchbox'
//一下import的是编辑器支持的语法，我的项目都用到了，所以全部导入
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-lua'
import 'ace-builds/src-noconflict/mode-xml'
import 'ace-builds/src-noconflict/mode-ruby'
import 'ace-builds/src-noconflict/mode-sass'
import 'ace-builds/src-noconflict/mode-markdown'
import 'ace-builds/src-noconflict/mode-mysql'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-typescript'
//以下import的是风格，还有好多种，可以根据自己需求导入
// github、tomorrow、kuioir、twilight、xcode、textmeta、terminal、solarized-light、solarized-dark
import 'ace-builds/src-noconflict/theme-monokai'


export default class ReactAce extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: ''
    }
  }
  onChange = (newValue) => {
    console.log('change---', newValue)
  }
  render() {
    return (
      <AceEditor
        mode={this.state.mode}
        readOnly={this.state.readOnly}
        theme="monokai"
        name="app_code_editor"
        onChange={this.onChange}
        fontSize={'20'}
        showPrintMargin
        showGutter
        highlightActiveLine  //突出活动线
        enableSnippets  //启用代码段
        value={this.state.editorContent}
        style={{ width: '100%', height: this.state.deskHeight, minHeight: 600 }}
        commands={[{    //命令是键绑定数组。
          name: 'saveFile', //键绑定的名称。
          bindKey: { win: 'Ctrl-S', mac: 'Command-S' }, //用于命令的组合键。
          exec: () => {
            if (!this.state.changed) {

            } else {
              //保存文件操作
            }
          }   //重新绑定命令的名称
        }]}
        setOptions={{
          enableBasicAutocompletion: false,   //启用基本自动完成功能
          enableLiveAutocompletion: true,   //启用实时自动完成功能 （比如：智能代码提示）
          enableSnippets: false,  //启用代码段
          showLineNumbers: true,
          tabSize: 4
        }}
      />
    )
  }
}


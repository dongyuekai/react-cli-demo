import React, { Component } from 'react'
import ReactUeditor from 'ifanrx-react-ueditor'

export default class ReactUIEditorExample extends Component {
  constructor(props) {
    super(props)
  }
  updateEditorContent = content => {
    this.editorResult = content
  }
  uploadImage = e => {
    return new Promise(function (resolve, reject) {
      resolve(window.URL.createObjectURL(e.target.files[0]))
    })
  }
  render() {
    return (
      <ReactUeditor
        ueditorPath='../public/ueditor'
        plugins={['uploadImage']}
        uploadImage={this.uploadImage}
        onChange={this.updateEditorContent}
        multipleImagesUpload={true}
      // plugins={[
      //   'insertCode',
      //   'uploadImage',
      //   'uploadVideo',
      //   'uploadAudio',
      //   'insertLink',
      // ]}
      />
    )
  }
}
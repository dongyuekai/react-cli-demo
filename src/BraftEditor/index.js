// import React, { Component } from 'react'
// import BraftEditor from 'braft-editor'
// import 'braft-editor/dist/index.css'

// export default class Main extends Component {

//   state = {
//     editorState: BraftEditor.createEditorState('<p>初始值</p>'), // 设置编辑器初始内容
//     outputHTML: '<p></p>' // 编辑器输出内容
//   }

//   componentDidMount() {
//     this.setState({
//       editorState: BraftEditor.createEditorState('<p>hello，<b>world!</b><p>')
//     })
//   }

//   handleChange = (editorState) => {
//     this.setState({
//       editorState: editorState,
//       outputHTML: editorState.toHTML()
//     }, () => {
//       console.log(editorState)
//       console.log(this.state.outputHTML)
//     })
//   }

//   render() {
//     const { editorState, outputHTML } = this.state

//     return (
//       <div>
//         <div className="editor-wrapper">
//           <BraftEditor
//             value={editorState}
//             onChange={this.handleChange}
//           />
//         </div>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import BraftEditor from 'braft-editor'
import {
  Select,
  Button,
  Input,
  Radio,
  Card,
  TreeSelect,
  Modal,
  Upload,
  message,
  Spin,
} from 'antd'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import 'braft-editor/dist/index.css'
import './index.css'
// import requestUtil from '../Utils/requestUtil'

const Option = Select.Option;
const { TextArea } = Input;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const ds =
  [
    { empName: '董曰凯1', empId: '11604' },
    { empName: '董曰凯2', empId: '11605' },
    { empName: '董曰凯3', empId: '11606' },
    { empName: '董曰凯4', empId: '11607' },
    { empName: '董曰凯5', empId: '11608' },
    { empName: '董曰凯6', empId: '11609' },
  ]


export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editorState: BraftEditor.createEditorState(null), // 设置编辑器初始内容
      outputHTML: '<p></p>', // 编辑器输出内容
      title: '',
      flag: '',
      first: 0,
      second: 0,
      isTop: 1,
      cardType: 'big',
      description: '',
      uploadModalPic: '',
      uploadVisible: false,
      cardPic: '',
      inputCount: 0,
      uploadModalPicLoading: false,
      sendScope: 'all',
      deptLevels: [],
      selectedDeptLevel: [],
      loading: false,
      selectedUsers: [],
      attachmentFileList: []
    }

    this.bigCardPic = [
      "https://www2.autoimg.cn/g3/M08/6F/9D/ChsEkV2Mk6yAelL9AAV9sgZJwW4974.png",
      "https://www2.autoimg.cn/g3/M07/6F/9E/ChsEkV2Mk7iARWbPAAY7PbfdGmk785.png",
      "https://www2.autoimg.cn/g3/M01/5B/35/ChsEm12Mk8WARxc5AAc91fCiysk540.png",
      "https://www2.autoimg.cn/g3/M01/5B/36/ChsEm12Mk9KAPzwnAAYkgAaY11w667.png",
      "https://www2.autoimg.cn/g3/M00/6F/A2/ChsEkV2Mk96AIhSoAAZnCoWuA5U764.png",
      "https://www2.autoimg.cn/g3/M00/67/5F/ChcCRV2Mk-qAPX6JAAY0xU7sdVU474.png",
      "https://www2.autoimg.cn/g24/M0A/CF/67/ChcCL12QhQWAW4NCAAWaMfLa5rQ307.png",
      "https://www2.autoimg.cn/g24/M0B/CB/CC/ChsEeV2QhRaAXteYAAZwnSVeInA237.png",
      "https://www2.autoimg.cn/g24/M06/CB/CD/ChsEeV2QhSOAOCx8AAXmbK03Xxw118.png",
      "https://www2.autoimg.cn/g24/M0B/CB/CE/ChsEeV2QhTCAaZh6AAYfrtHq4ZY981.png"
    ];

    this.smallCardPic = [
      // "http://efile.autoimg.cn/efile/g1/M0A/EE/2D/ChcCQ127-L-ANyS9AAe5bo7KRso395.jpg",
      "https://www2.autoimg.cn/g3/M0B/6F/9D/ChsEkV2MkwyALavlAADkW4clS5M553.png",
      "https://www2.autoimg.cn/g30/M00/5F/48/ChsEoF2MkzCAD9_8AAD8KhXp8EQ776.png",
      "https://www2.autoimg.cn/g27/M0A/62/D2/ChsEfF2Mkz6AATP9AAEO0S3FRGI990.png",
      "https://www2.autoimg.cn/g27/M0B/62/D4/ChsEfF2Mk0qAIBbUAAEP0fZZAQI994.png",
      "https://www2.autoimg.cn/g27/M05/66/95/ChcCQF2Mk1aAZbJMAAEp5BcxRZ8447.png",
      "https://www2.autoimg.cn/g1/M0B/81/30/ChsEmV2Mk2KAHPgpAAE2r6Ab6GY160.png",
      "https://www2.autoimg.cn/g2/M09/5A/E5/ChcCRF2QhWWAE2llAAEIChl0lFg406.png",
      "https://www2.autoimg.cn/g28/M07/6C/02/ChsEnl2QhXOAYkAGAAEwZ2ZJM4M122.png",
      "https://www2.autoimg.cn/g28/M0B/6C/03/ChsEnl2QhYCABlF2AAELtDJFOTg513.png",
      "https://www2.autoimg.cn/g28/M02/6F/C8/ChcCR12QhY-ASBa8AAEsG7If4aA991.png"
    ];
  }

  componentDidMount() {
    this.setState({
      editorState: BraftEditor.createEditorState(null)
    })

    // requestUtil('/api/msg/getDeptList', {})
    //   .then(data => {
    //     if (data) {
    //       this.setState({ deptLevels: data })
    //     }
    //   })
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    }, () => {
      console.log(editorState)
      console.log(this.state.outputHTML)
    })
  }

  firstHandleChange(v) {
    this.setState({ first: v })
  }

  secondHandleChange(v) {
    this.setState({ second: v })
  }

  isTopHandleChange(e) {
    this.setState({ isTop: e.target.value })
  }

  cardTypeChange = (e) => {
    this.setState({ cardType: e.target.value })
  }

  handleModal = (visible) => {
    if (!visible) {
      this.setState({
        uploadModalPic: ""
      })
    }
    this.setState({ uploadVisible: visible })
  }
  modalPicChange(info) {
    if (info.file.response) {
      this.setState({ uploadModalPicLoading: false })
      if (info.file.response.code === '200') {
        // 调用接口返回的图片
        this.setState({
          uploadModalPic: info.file.response.returnObject
        })
      }
      return
    }
    this.setState({
      uploadModalPicLoading: true
    })
  }
  handleChangeAttachment = (info) => {
    let fileList = [...info.fileList];
    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);
    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    this.setState({
      attachmentFileList: fileList
    });
  }

  getUploadModal() {
    let pics = this.state.cardType === 'big' ? this.bigCardPic : this.smallCardPic
    return (
      <Modal
        destroyOnClose
        title='添加图片'
        visible={this.state.uploadVisible}
        width={800}
        footer={null}
        onCancel={() => {
          this.handleModal(false)
        }}
      >
        <div>方式一：选择系统模板制作图片</div>
        <div className='picTemplate'>
          {
            pics.map((item, index) => {
              return (
                <Card
                  key={`${index}`}
                  hoverable
                  className='picTemplateItem'
                  onClick={() => {
                    this.setState({ uploadModalPic: item })
                  }}
                >
                  <div className='picTemplateItemAvatar'>
                    <img src={item} alt='' />
                  </div>
                </Card>
              )
            })
          }
        </div>
        <div>方式二：自定义上传图片</div>
        <div className="customPic">
          <div>
            <Upload
              listType='picture-card'
              showUploadList={false}
              action={'http://xxxx.upload.xxx'} // 上传路径
              beforeUpload={(file, fileList) => {
                this.setState({
                  uploadModalPic: '',
                  uploadModalPicLoading: true
                })
                return true
              }}
              onChange={e => this.modalPicChange(e)}
            >
              {
                this.state.uploadModalPic
                  ?
                  <div className='uploadCardImg'>
                    <img src={this.state.uploadModalPic} />
                  </div>
                  :
                  <div className="uploadAddImg">
                    {
                      this.state.uploadModalPicLoading ?
                        <LoadingOutlined style={{ color: 'blue', width: '20px', height: '20px' }} /> : <PlusOutlined style={{ color: 'blue', width: '20px', height: '20px' }} />
                    }
                    <div style={{ width: '90px', textAlign: 'center', height: '14px', fontSize: '14px', color: '#3A5FFF' }}>选择封面图</div>
                    <div style={{ opacity: '0.5', marginTop: '8px', fontSize: '12px', color: '#3A5FFF' }}>(1023*453，5M以内)</div>
                  </div>
              }
            </Upload>
          </div>
        </div>
        <div className='modalBtn'>
          <Button size='large' style={{ marginRight: '10px' }} onClick={
            () => {
              this.handleModal(false)
            }
          }>取消</Button>
          <Button size='large' type='primary' onClick={() => {
            if (!this.state.uploadModalPic) {
              message.warning("请选择模板图片或上传图片")
            } else {
              this.setState({
                cardPic: this.state.uploadModalPic
              })
              this.handleModal(false)
            }
          }}>保存</Button>
        </div>
      </Modal>
    )
  }

  deptChange = (e) => {
    this.setState({ selectedDeptLevel: e });
  }
  searchUsers = (e) => {

  }
  empChange = (e) => {
    this.setState({ selectedUsers: e });
  }

  render() {
    const { editorState, outputHTML } = this.state
    const controls = [
      'undo', 'redo', 'separator',
      'font-size', 'line-height', 'letter-spacing', 'separator',
      'text-color', 'bold', 'italic', 'underline', 'separator',
      'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
      'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
      'link', 'separator', 'hr', 'separator',
      'media',
      'separator',
      'clear'
    ]
    const filterOptions = ds.filter(o => !this.state.selectedUsers.includes(o))
    return (
      <div className='wrapper' >
        <div className='content'>
          <div className='content_l'>

          </div>
          <div className='content_r'>
            <div className='editor'>
              <BraftEditor
                value={editorState}
                controls={controls}
                onChange={this.handleChange}
                contentStyle={{ height: 260, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
              />
            </div>
            <div className='title'>
              <p>文章标题</p>
              <Input
                placeholder='请输入文章标题'
                onChange={v => { this.setState({ title: v.target.value }) }}
                value={this.state.title}
              />
            </div>
            <div className='flag'>
              <p>文章标签</p>
              <Input
                placeholder='空格或回车添加标签'
                onChange={v => { this.setState({ flag: v.target.value }) }}
                value={this.state.flag}
              />
            </div>
            <div className='lanmu'>
              <p>归属栏目设置</p>
              <Select
                className='first'
                placeholder='选择一级栏目'
                defaultValue={0}
                value={this.state.first}
                optionFilterProp="children"
                onChange={(v) => this.firstHandleChange(v)}
              >
                <Option value={0}>全部</Option>
                <Option value={1}>启用</Option>
                <Option value={2}>禁用</Option>
              </Select>
              <Select
                className='second'
                placeholder='选择二级栏目'
                defaultValue={0}
                value={this.state.second}
                optionFilterProp="children"
                onChange={(v) => this.secondHandleChange(v)}
              >
                <Option value={0}>全部</Option>
                <Option value={1}>启用</Option>
                <Option value={2}>禁用</Option>
              </Select>
            </div>
            <div className='cardImg'>
              <span>资讯卡片封面</span>
              <Radio.Group
                className='group'
                value={this.state.cardType}
                onChange={this.cardTypeChange}
              >
                <Radio value={"big"}>大图展示</Radio>
                <Radio value={"small"}>小图展示</Radio>
              </Radio.Group>
            </div>
            <div className='cardImgEdit'>
              <Card
                className='cardImgSelect'
                hoverable
                onClick={() => this.handleModal(true)}
              >
                {
                  this.state.cardPic ?
                    <div className='cardPic'>
                      <img src={this.state.cardPic} alt='' />
                    </div> :
                    <div className='uploadTop'>
                      <PlusOutlined style={{ color: 'blue', width: '20px', height: '20px' }} />
                      <div style={{ width: '90px', textAlign: 'center', height: '14px', fontSize: '14px', color: '#3A5FFF' }}>选择封面图</div>
                      <div style={{ opacity: '0.5', marginTop: '8px', fontSize: '12px', color: '#3A5FFF' }}>(1023*453，5M以内)</div>
                    </div>
                }
              </Card>
              <TextArea
                rows={4}
                placeholder="输入文章摘要，未填写将自动抓取文章前50字"
                onChange={(v) => { this.setState({ description: v.target.value }) }}
                value={this.state.description}
              />
            </div>
            <div className='isTop'>
              <span>是否置顶文章</span>
              <Radio.Group
                className='group'
                value={this.state.isTop}
                onChange={(e) => { this.isTopHandleChange(e) }}>
                <Radio value={1}>置顶</Radio>
                <Radio value={0}>不置顶</Radio>
              </Radio.Group>
            </div>
            <div className='sendScope'>
              <span>发布范围</span>
              <Radio.Group
                className='group'
                value={this.state.sendScope}
                onChange={e => {
                  this.setState({ sendScope: e.target.value })
                }}
              >
                <Radio value={"all"}>全部员工</Radio>
                <Radio value={"custom"}>指定范围</Radio>
              </Radio.Group>
            </div>
            <div className='selectOpt'>
              <span>选定部门  </span>
              <div>
                {/* <TreeSelect
                  style={{ width: "700px" }}
                  treeData={treeData}
                  value={this.state.selectedDeptLevel}
                  onChange={this.deptChange}
                  treeCheckable={true}
                  showCheckedStrategy={SHOW_PARENT}
                  placeholder={'请选择部门'}
                  disabled={this.state.sendScope !== 'custom'}
                /> */}
              </div>
            </div>
            <div className='selectEmployees'>
              <span>选定员工  </span>
              <div>
                {/* <Select
                  mode="multiple"
                  labelInValue
                  value={ds}
                  placeholder="请输入员工姓名或工号"
                  notFoundContent={this.state.loading ? <Spin size="small" /> : null}
                  filterOption={false}
                  onSearch={this.searchUsers}
                  onChange={this.empChange}
                  style={{ width: '300px' }}
                  disabled={this.state.sendScope !== 'custom'}
                >
                  {filterOptions.map(d => (
                    <Select.Option key={d.empId}>{d.empName + '(' + d.empId + ')'}</Select.Option>
                  ))}
                </Select> */}
              </div>
            </div>
            <div className='addAttachments'>
              <p>文章附件添加</p>
              <div style={{
                width: '117px',
                height: '38px',
                border: ' 2px dotted #E6EBF5'
              }}>
                {/* <input
                  id="uploadFile"
                  type={"file"}
                  accept={this.props.accept ? this.props.accept : ""}
                  onChange={e => {
                    // let file = e.target.files[0];
                  }}
                /> */}
                <Upload
                  action='https://www.xxx.com/api/xxx'
                  multiple={true}
                  onChange={this.handleChangeAttachment}
                  fileList={this.state.attachmentFileList}
                >
                  <div className='addAttachDiv'>
                    <PlusOutlined style={{ color: '#3A5FFF' }} />
                    <div style={{ fontSize: '14px', color: '#3A5FFF' }}>上传附件</div>
                  </div>
                </Upload>
              </div>
            </div>
            <div className='bottomBtns'>
              <Button size='large' style={{ marginRight: '10px' }} onClick={
                () => {

                }
              }>保存草稿</Button>
              <Button size='large' style={{ marginRight: '10px' }} onClick={
                () => {

                }
              }>预览</Button>
              <Button size='large' style={{ marginRight: '10px' }} onClick={
                () => {

                }
              }>保存并发布</Button>
            </div>
          </div>
        </div>
        {
          this.getUploadModal()
        }
      </div>
    )
  }
}
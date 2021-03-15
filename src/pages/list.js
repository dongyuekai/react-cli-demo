import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { List, WindowScroller } from 'react-virtualized'
import 'react-virtualized/styles.css'


const list = [
  { name: 'test1', description: 'description1' },
  { name: 'test2', description: 'description2' },
  { name: 'test3', description: 'description3' },
  { name: 'test4', description: 'description4' },
  { name: 'test5', description: 'description5' },
  { name: 'test6', description: 'description6' },
  { name: 'test7', description: 'description7' },
  { name: 'test1', description: 'description8' },
  { name: 'test2', description: 'description9' },
  { name: 'test3', description: 'description10' },
  { name: 'test4', description: 'description11' },
  { name: 'test5', description: 'description12' },
  { name: 'test6', description: 'description13' },
  { name: 'test7', description: 'description14' },
  { name: 'test1', description: 'description15' },
  { name: 'test2', description: 'description16' },
  { name: 'test3', description: 'description17' },
  { name: 'test4', description: 'description18' },
  { name: 'test5', description: 'description19' },
  { name: 'test6', description: 'description20' },
  { name: 'test7', description: 'description21' }
]
const OtherComponent = (props) => {
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              懒加载
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row >
            <Table.Cell>
              {props.data.name}
              <br />
              {props.data.description}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
class App extends Component {
  render() {
    const height = parseInt(document.body.clientHeight)
    const rowHeight = 120
    const width = parseInt(document.body.clientWidth)
    const renderItem = ({ index, key, style }) => {
      return (
        <div key={key} style={style}>
          <OtherComponent data={list[index]} />
        </div>
      )
    }
    return (
      <div>
        <WindowScroller>
          {
            ({ isScrolling, onChildScroll, scrollTop }) => (
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                rowCount={list.length}
                rowHeight={rowHeight}
                rowRenderer={renderItem}
                scrollTop={scrollTop}
                width={width}
              />
            )
          }
        </WindowScroller>
      </div>
    )
  }
}
export default List
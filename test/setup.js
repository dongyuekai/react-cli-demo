import { shallow, render, mount } from 'enzyme'

import TodoList from '../src/pages/todoList'
const props = {
  list: ['first', 'second'],
  deleteTodo: jest.fn()
}
const setup = () => {
  const wrapper = shallow(<TodoList {...props} />)
  return {
    props,
    wrapper
  }
}
const setupByRender = () => {
  const wrapper = render(<TodoList {...props} />)
  return {
    props,
    wrapper
  }
}
const setupByMount = () => {
  const wrapper = mount(<TodoList {...props} />)
  return {
    props,
    wrapper
  }
}

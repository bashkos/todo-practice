import { createContext } from 'react'
import { Map } from 'immutable';

const TodoContext = createContext({
  tasks: Map(),
  filter: 'all',
  handleAddTask: () => {},
  handleChangeState: () => {},
  handleChangeFilter: () => {}
})

export default TodoContext
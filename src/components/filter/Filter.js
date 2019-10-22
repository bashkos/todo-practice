import React, { PureComponent } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TodoContext from '../todo-context/TodoContext';

export default class Filter extends PureComponent {
  render() {
    return (
      <TodoContext.Consumer>
        {value => (
          <Paper square>
            <Tabs
              value={value.filter}
              indicatorColor="primary"
              textColor="primary"
              aria-label="disabled tabs example"
              onChange={(e, filter) => value.handleChangeFilter(filter)}
            >
              <Tab value="all" label="All" />
              <Tab value="active" label="Active" />
              <Tab value="completed" label="Completed" />
            </Tabs>
          </Paper>
        )}
      </TodoContext.Consumer>
    )
  }
}

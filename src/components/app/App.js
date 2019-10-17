import React, { PureComponent} from 'react';
import { Map } from 'immutable';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './App.css';
import AddTask from '../add-task/AddTask'
import TaskList from '../task-list/TaskList'
import Filter from '../filter/Filter';

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
});

class App extends PureComponent {
  state = {
    tasks: Map(),
    filter: 'all'
  }

  handleAddTask = (name) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.set(tasks.size, {
        name,
        completed: false,
      })
    }));
  }

  handleChangeState = (key) => {
    this.setState(({ tasks }) => {
      const task = tasks.get(key);
      return {
        tasks: tasks.set(key, {
          ...task,
          completed: !task.completed
        })
      }
    })
  }

  handleChangeFilter = (filter) => {
    this.setState({
      filter
    });
  }
  
  deleteTask = (key) => this.setState(({tasks}) => ({
	  tasks: tasks.delete(key)
  }));

  render() {
    const { tasks, filter } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.paper}>
          <AddTask onAddTask={this.handleAddTask} />
          <TaskList tasks={tasks} filter={filter} onChangeState={this.handleChangeState} 
			  		deleteTask={this.deleteTask}/>
          <Filter filter={filter} onChangeFilter={this.handleChangeFilter} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);

import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import TodoContext from '../todo-context/TodoContext';

export default class AddTask extends PureComponent {
  state = {
    task: ''
  }

	static contextType = TodoContext;

  handleChangeTask = (e) => {
    this.setState({
      task: e.target.value
    });
  }

  handleSubmit = (e) => {
    const { handleAddTask } = this.context;;
    const { task } = this.state;

    if (typeof handleAddTask === 'function') {
      handleAddTask(task);

      this.setState({
        task: ''
      });
    }

    e.preventDefault();
  }

  render() {
    const { task } = this.state;

    return (
			<form onSubmit={this.handleSubmit}>
				<TextField
					label="Task"
					margin="normal"
					variant="outlined"
					value={task}
					onChange={this.handleChangeTask}
				/>
			</form>
    )
  }
}

import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';

export default class AddTask extends PureComponent {
  state = {
    task: ''
  }

  handleChangeTask = (e) => {
    this.setState({
      task: e.target.value
    });
  }

  handleSubmit = (e) => {
    const { onAddTask } = this.props;
    const { task } = this.state;

    if (typeof onAddTask === 'function') {
      onAddTask(task);

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

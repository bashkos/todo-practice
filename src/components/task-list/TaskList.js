import React, { PureComponent } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class TaskList extends PureComponent {
  filter = (item) => {
    const { filter } = this.props;
    switch(filter) {
      case 'active':
        return item.completed === false;
      case 'completed':
        return item.completed === true;
      default:
        return true;
    }
  }
	deleteTask(key) {
		this.props.deleteTask(key);
	}

  render() {
    const { tasks, onChangeState } = this.props;

    return (
      <List>
        {tasks.filter(this.filter).toArray().map(([key, task]) => (
          <ListItem key={key}>
            <FormControlLabel
              control={<Checkbox checked={task.completed} onChange={() => onChangeState(key)} />}
              label={task.name}
            />
			<button
				onClick={() => this.deleteTask(key)}
				>
				X
				</button>
          </ListItem>
        ))}
      </List>
    )
  }
}

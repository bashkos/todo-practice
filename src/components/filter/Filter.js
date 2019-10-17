import React, { PureComponent } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class Filter extends PureComponent {
  handleChange = (e, value) => {
    const { onChangeFilter } = this.props;

    if (typeof onChangeFilter === 'function') {
      onChangeFilter(value);
    }
  }


  render() {
    const { filter } = this.props;

    return (
      <Paper square>
        <Tabs
          value={filter}
          indicatorColor="primary"
          textColor="primary"
          aria-label="disabled tabs example"
          onChange={this.handleChange}
        >
          <Tab value="all" label="All" />
          <Tab value="active" label="Active" />
          <Tab value="completed" label="Completed" />
        </Tabs>
      </Paper>
    )
  }
}

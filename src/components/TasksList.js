import React from 'react';

const filters = [['all', 'all'], ['active', 'active'], ['finished', 'finished']];

export default class TasksList extends React.Component {
  state = { activeFilter: 'all' };

  removeTask = id => (e) => {
    e.preventDefault();
    this.props.removeTask({ id });
  }

  toggleTaskState = id => (e) => {
    e.preventDefault();
    this.props.toggleTaskState({ id });
  }

  applyFilter(state) {
    this.setState({ activeFilter: state });
  }

  renderTasks() {
    const rawTasks = this.props.tasks;
    const filter = this.state.activeFilter;
    const tasks = filter === 'all' ? rawTasks : rawTasks.filter(t => t.state === filter);

    return (
      <ul className="list-group">
        {tasks.map(({ id, text, state } ) =>  (
          <li key={id} className="list-group-item d-flex justify-content-end">
            <button className="btn border-0 p-0 app-toggle-state mr-3" onClick={this.toggleTaskState(id)}>-</button>
            <div className="mr-auto">{(state === 'finished' ? <s>{text}</s> : text)}</div>
            <button className="btn border-0 p-0 app-remove-task" onClick={this.removeTask(id)}>x</button>
          </li>
        ))}
      </ul>
    );
  }

  renderFilter([state, name]) {
    return this.state.activeFilter === state ?
      name : <button key={state} className={`btn btn-link border-0 p-0 app-filter-${state}`} onClick={() => this.applyFilter(state)}>{name}</button>;
  }

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
        {this.renderTasks()}
        <div className="col-8 mt-3 d-flex justify-content-around">
          {filters.map(filter => this.renderFilter(filter))}
        </div>
      </div>
    );
  }
}

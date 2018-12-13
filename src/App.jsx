import React from 'react';
import NewTaskFormContainer from './containers/NewTaskForm';
import TasksListContainer from './containers/TasksList';
import './App.css'

const App = () => (
  <div className="col-5 container">
    <NewTaskFormContainer />
    <TasksListContainer />
  </div>
);

export default App;

import { createSelector } from 'reselect';

export const getTasks = state => state.tasks;
export const tasksSelector = createSelector(
  getTasks,
  tasks => Object.values(tasks),
);
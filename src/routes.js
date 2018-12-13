const host = 'https://menuapp-82b72.firebaseio.com/menu_data.json';
export default {
  tasksUrl: () => [host, 'tasks'].join('/'), // get tasks list
  taskUrl: id => [host, 'tasks', id].join('/'),
};
// https://menuapp-82b72.firebaseio.com/menu_data.json
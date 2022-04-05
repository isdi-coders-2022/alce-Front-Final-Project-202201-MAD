import { configureStore } from '@reduxjs/toolkit';
// import { counterReducer } from './counter/counter-reducer';
import { tasksReducer } from './tasks/tasks-reducers';
import { usersReducer } from './users/users-reducers';

const preloadedState = {
  user: {},
  tasks: [],
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: usersReducer,
  },
  preloadedState,
});

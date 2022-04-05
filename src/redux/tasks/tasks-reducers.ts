import { AnyAction } from '@reduxjs/toolkit';
import { TaskI } from '../../interfaces/models';
import { actionTypes } from './action-types';

const initialState: Array<TaskI> = [];

export const tasksReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.loadTasks:
      return [...action.payload];
    case actionTypes.createTask:
      return [...state, action.payload];
    case actionTypes.removeTask:
      return state.filter((item) => item.id !== action.payload.id);
    case actionTypes.updateTask:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};

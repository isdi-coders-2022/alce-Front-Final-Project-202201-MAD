import { actionTypes } from './action-types';
import * as api from '../../services/tasks-api';
import { Dispatch } from '@reduxjs/toolkit';
import { TaskI } from '../../interfaces/models';
import { AxiosResponse } from 'axios';

export const loadTasks = () => {
  return (dispatch: Dispatch) => {
    api.getAll().then((resp: AxiosResponse<Array<TaskI>>) => {
      dispatch({
        type: actionTypes.loadTasks,
        payload: resp.data,
      });
    });
  };
};

export const createTask = (task: TaskI) => {
  return (dispatch: Dispatch) => {
    api.set(task).then((resp: AxiosResponse<TaskI>) => {
      dispatch({
        type: actionTypes.createTask,
        payload: resp.data,
      });
    });
  };
};

export const removeTask = (task: TaskI) => {
  return (dispatch: Dispatch) => {
    api.remove(task.id).then((resp: AxiosResponse<{}>) => {
      if (resp.statusText.toLowerCase() === 'ok') {
        dispatch({
          type: actionTypes.removeTask,
          payload: task,
        });
      }
    });
  };
};

export const updateTask = (task: TaskI) => {
  return (dispatch: Dispatch) => {
    api.update(task).then((resp: AxiosResponse<TaskI>) => {
      dispatch({
        type: actionTypes.updateTask,
        payload: resp.data,
      });
    });
  };
};

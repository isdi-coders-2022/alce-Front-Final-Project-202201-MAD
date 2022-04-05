import { AnyAction } from '@reduxjs/toolkit';
import { actionTypes } from './action-types';

const initialState: any = {};

export const usersReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

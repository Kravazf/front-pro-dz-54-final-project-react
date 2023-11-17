import { createAction } from '@reduxjs/toolkit';
import { modulName } from './constans';

const filterAction = createAction(`${modulName}/filterAction`, (payload) => ({ payload }));

const toggleFavoriteAction = createAction(`${modulName}/toggleFavorite`, (testId) => ({ payload: testId }));

export default {
  filterAction,
  toggleFavoriteAction,
};

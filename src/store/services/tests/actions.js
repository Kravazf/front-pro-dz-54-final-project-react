import { createAction } from '@reduxjs/toolkit';
import { modulName } from './constans';

const filterAction = createAction(`${modulName}/filterAction`, (payload) => ({ payload }));

export default {
  filterAction,
};

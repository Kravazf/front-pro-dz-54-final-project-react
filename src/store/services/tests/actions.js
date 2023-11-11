import { createAction } from '@reduxjs/toolkit';
import { modulName } from './constans';

const filterAction = createAction(`${modulName}/filterAction`, (payload) => ({ payload }));

export default {
  filterAction,
};

// export const TESTS_FILTER = 'TESTS_FILTER';
// export const filterAction = (payload) => ({ type: TESTS_FILTER, payload });

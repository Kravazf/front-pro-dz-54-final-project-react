import { createSlice } from '@reduxjs/toolkit';
import { modulName } from './constans';
import actions from './actions';
import thunks from './thunks';

const initialState = {
  tests: [],
  filter: '',
  filteredTests: '',
};

export const testsReduser = createSlice({
  name: modulName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = payload;
      // eslint-disable-next-line no-param-reassign
      state.filteredTests = state.tests.filter((test) => {
        const testInitial = test.name.toLowerCase();
        return testInitial.indexOf(payload.toLowerCase()) !== -1;
      });
    });
    builder.addCase(thunks.fetchTests.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.tests = payload;
    });
  },
});

export default testsReduser.reducer;

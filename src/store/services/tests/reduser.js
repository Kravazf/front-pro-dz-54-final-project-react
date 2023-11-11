import { createSlice } from '@reduxjs/toolkit';
import { modulName } from './constans';
import actions from './actions';
// import { TESTS_FILTER } from './actions';

const initialState = {
  tests: [],
  filter: '',
};

export const testsReduser = createSlice({
  name: modulName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = payload;
    });
  },
});

export default testsReduser.reducer;

// eslint-disable-next-line default-param-last
// function testsReduser(state = initialState, { type, payload }) {
//   switch (type) {
//     case TESTS_FILTER:
//       return { ...state, filter: payload };
//     default:
//       return state;
//   }
// }

// export default testsReduser;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { modulName } from './constans';
import { quizCardContent } from '../../../api/quiz-card-content/quiz-card-content';

const fetchTests = createAsyncThunk(`${modulName}/fetchTests`, async (id) => {
  try {
    const response = await quizCardContent.get(id);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

const deleteTest = createAsyncThunk(`${modulName}/deleteTest`, async (testId, { rejectWithValue }) => {
  try {
    await quizCardContent.delete(testId);
    console.log(testId);
    return testId;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export default { fetchTests, deleteTest };

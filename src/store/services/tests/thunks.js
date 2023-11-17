import { createAsyncThunk } from '@reduxjs/toolkit';
import { modulName } from './constans';
import { quizCardContent } from '../../../api/quiz-card-content/quiz-card-content';
import actions from './actions';

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

const updateTest = createAsyncThunk('tests/updateTest', async ({ id, updatedData }) => {
  try {
    const response = await quizCardContent.update(id, updatedData);
    // Додаткові дії, якщо потрібно
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

const toggleFavorite = createAsyncThunk(`${modulName}/toggleFavorite`, async (testId, { getState, dispatch }) => {
  const { tests } = getState().testsReduser;
  const testToUpdate = tests.find((test) => test.id === testId);

  if (testToUpdate) {
    const updatedTest = { ...testToUpdate, Favorite: !testToUpdate.Favorite };
    const response = await quizCardContent.update(testId, updatedTest);

    if (response) {
      // Оновлюємо стан Redux
      dispatch(actions.toggleFavoriteAction(testId));
    }
  }
});

export default {
  fetchTests,
  deleteTest,
  updateTest,
  toggleFavorite,
};

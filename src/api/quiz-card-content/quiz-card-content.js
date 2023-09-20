import axios from '../service';

const quizCardContent = {
  get: () => axios.get('/quiz-card-content')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/quiz-card-content', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizCardContent };

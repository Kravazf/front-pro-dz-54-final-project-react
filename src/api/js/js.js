import axios from '../service';

const quizCardJs = {
  get: () => axios.get('/js')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizCardJs };

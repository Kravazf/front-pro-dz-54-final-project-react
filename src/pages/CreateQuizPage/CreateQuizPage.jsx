/* eslint-disable no-console */
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import InputText from '../../components/Forms/InputText';
import { testRules } from '../../constans';
import { quizCardContent } from '../../api/quiz-card-content/quiz-card-content';
import thunks from '../../store/services/tests/thunks';

const CreateQuizPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { control, handleSubmit, getValues } = useForm();
  const onSubmit = () => {
    console.log(getValues());

    const quizData = getValues();
    quizCardContent.post(quizData)
      .then(() => {
        console.log(`Відправленні данні: ${JSON.stringify(getValues())}`);
        return dispatch(thunks.fetchTests(id)); // Оновлюємо список тестів у Redux Store
      })
      .catch((error) => {
        console.error('Помилка при створенні тесту:', error);
      });
  };

  return (
    <>
      <InputText
        fullWidth
        control={control}
        name='name'
        rules={testRules.quizName}
        label='Quiz name'
      />
      <InputText
        fullWidth
        control={control}
        name='description'
        rules={testRules.description}
        label='Description'
      />
      <InputText
        fullWidth
        control={control}
        name='image'
        rules={testRules.imageUrl}
        label='Image URL'
      />
      <Button onClick={handleSubmit(onSubmit)}>Create Quiz Test</Button>
    </>
  );
};

export default CreateQuizPage;

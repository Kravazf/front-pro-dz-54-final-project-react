import { TextField } from '@mui/material';
import useInputValidation from '../../hooks/useInputValidation';

const CreateQuizPage = () => {
  const [
    test,
    setTest,
    testIsValid,
  ] = useInputValidation('');
  const [
    question,
    setquestion,
    questionIsValid,
  ] = useInputValidation('');

  const handleChageInput = (e) => {
    if (e.target.name === 'Test') setTest(e.target.value);
    if (e.target.name === 'question') setquestion(e.target.value);
  };

  return (
    <>
      <TextField
        fullWidth
        label='Test'
        defaultValue='Node.js'
        onChange={handleChageInput}
        margin='normal'
        name='Test'
        value={test}
        error={!!testIsValid(2, 15)}
        helperText={testIsValid(2, 15)}
      />
      <TextField
        fullWidth
        label='question'
        defaultValue='Write your question'
        onChange={handleChageInput}
        margin='normal'
        name='question'
        value={question}
        error={!!questionIsValid(5, 30)}
        helperText={questionIsValid(5, 30)}
      />
      <TextField
        fullWidth
        label='question'
        defaultValue='Write your question'
        onChange={handleChageInput}
        margin='normal'
      />
    </>
  );
};

export default CreateQuizPage;

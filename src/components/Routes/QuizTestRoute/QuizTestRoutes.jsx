import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QuizTests } from '../../../pages/QuizTests';
import NotFound from '../../NotFound/NotFound';
import ProgramingTests from '../../../pages/ProgrammingTests/ProgramingTests';

export default function QuizTestRoutes() {
  return (
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route path='/' element={<QuizTests />} />
      <Route path='/QuizTest/:QuizTest' element={<ProgramingTests />} />
    </Routes>
  );
}

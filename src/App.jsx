import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Template from './components/Templates/Template';
import QuizTestRoutes from './components/Routes/QuizTestRoute/QuizTestRoutes';
import QuizPage from './pages/QuizPage/QuizPage';
import NotFound from './components/NotFound/NotFound';
import Results from './pages/Results/Results';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Template />}>
            <Route path='/' element={<QuizTestRoutes />} />
            <Route path='/MinistryOfSmartPlay/*' element={<QuizTestRoutes />} />
            <Route path='/MinistryOfSmartPlay/QuizTest/:id' element={<QuizPage />} />
            <Route path='/results' element={<Results />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

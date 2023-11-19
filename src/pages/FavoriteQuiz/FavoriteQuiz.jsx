import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import CardItem from '../../components/Cards/Card';
import { updateFavoriteTestsState } from '../../store/services/tests/actions';
import { CenteredItem } from '../QuizTests/styled';

const FavoriteQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tests } = useSelector((state) => state.testsReduser);
  const favoriteTests = tests.filter((test) => test.Favorite);

  useEffect(() => {
    // Відновлення улюблених тестів при монтуванні компонента
    const storedFavoriteTests = localStorage.getItem('favoriteTests');
    if (storedFavoriteTests) {
      dispatch(updateFavoriteTestsState(JSON.parse(storedFavoriteTests)));
    }
  }, [dispatch]);

  const handleNavigate = (name) => {
    const params = name.replaceAll(' ', '_').toLowerCase();
    navigate(`/MinistryOfSmartPlay/QuizTest/${params}`);
  };

  return (
    <Grid container spacing={2}
      style={{
        minHeight: '45vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {favoriteTests.length > 0 ? (
        favoriteTests.map((test) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={test.id}>
            <CardItem
              test={test}
              name={test.name}
              img={test.image}
              title={test.description}
              handleNavigate={handleNavigate}
            />
          </Grid>
        ))
      ) : (
        <CenteredItem item xs={12}>
          <Typography variant="h5">No selected Quiz</Typography>
        </CenteredItem>
      )}
    </Grid>
  );
};

export default FavoriteQuiz;

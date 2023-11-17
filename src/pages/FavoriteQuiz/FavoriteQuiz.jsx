// FavoriteQuiz.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardItem from '../../components/Cards/Card';

const FavoriteQuiz = () => {
  const navigate = useNavigate();
  const { tests } = useSelector((state) => state.testsReduser);
  const favoriteTests = tests.filter((test) => test.Favorite);

  console.log(favoriteTests);

  const handleNavigate = (name) => {
    const params = name.replaceAll(' ', '_').toLowerCase();
    navigate(`/MinistryOfSmartPlay/QuizTest/${params}`);
  };

  return (
    <div>
      {favoriteTests.length > 0 ? (
        favoriteTests.map((test) => (
          <CardItem
            key={test.id}
            test={test}
            name={test.name}
            img={test.image}
            title={test.description}
            handleNavigate={handleNavigate}
          />
        ))
      ) : (
        <p>Немає обраних тестів</p>
      )}
    </div>
  );
};

export default FavoriteQuiz;

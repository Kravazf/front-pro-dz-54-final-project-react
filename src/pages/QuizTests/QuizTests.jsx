/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import CardItem from '../../components/Cards/Card';
import { quizCardContent } from '../../api/quiz-card-content/quiz-card-content';

export default function QuizTests() {
  const navigate = useNavigate();
  const [quizCardContentList, setQuizCardContentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const fetchQuizCardContentList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizCardContent.get();
      setQuizCardContentList(response);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setQuizCardContentList, setLoading, setError]);

  useEffect(() => {
    fetchQuizCardContentList();
  }, [fetchQuizCardContentList]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleNavigate = (name) => {
    const params = name.replaceAll(' ', '_').toLowerCase();
    navigate(`/MinistryOfSmartPlay/QuizTest/${params}`);
  };

  return (
    <Grid container spacing={2}>
      {quizCardContentList.map((quizCardContent) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={quizCardContent.id}>
          <CardItem
            name={quizCardContent.name}
            img={quizCardContent.image}
            title={quizCardContent.description}
            handleNavigate={handleNavigate}
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </Grid>
      ))}
    </Grid>
  );
}

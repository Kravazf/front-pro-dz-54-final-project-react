import React, { useCallback, useEffect, useState } from 'react';
import CardItem from '../../components/Cards/Card';
import { quizCardContent } from '../../api/quiz-card-content/quiz-card-content';
import { Grid } from '@mui/material';

export default function QuizTests() {
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

  return (
    <Grid container spacing={2}>
      {quizCardContentList.map((quizCardContent) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={quizCardContent.id}>
          <CardItem
            quizCardContent={quizCardContent}
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </Grid>
      ))}
    </Grid>
  );
}
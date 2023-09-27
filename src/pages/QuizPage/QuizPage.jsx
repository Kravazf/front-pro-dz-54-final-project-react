/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import CardItem from '../../components/Cards/Card';
import { quizCardJs } from '../../api/js/js';

export default function QuizPage() {
  const navigate = useNavigate();
  const [QuizJsList, setQuizJsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const fetchQuizJsList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizCardJs.get();
      console.log(response); // Вивести дані у консоль

      setQuizJsList(response);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setQuizJsList, setLoading, setError]);

  useEffect(() => {
    fetchQuizJsList();
  }, [fetchQuizJsList]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleNavigate = (name) => {
    const params = name.replaceAll(' ', '_').toLowerCase();
    navigate(`/MinistryOfSmartPlay/QuizTest/${params}`);
  };

  return (
    <Grid container spacing={2}>
      {QuizJsList.map((quizCardContent) => (
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

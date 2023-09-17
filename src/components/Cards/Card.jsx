/* eslint-disable no-alert */
import React, { useState } from 'react';
import { CardContent, Typography } from '@mui/material';
import ModalWindow from '../Modal/ModalWindow';
import {
  Buttons,
  CardAction,
  StyledCard,
  StyledCardMedia,
} from './styled';

export default function CardItem({ quizCardContent }) {
  const [isShowModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleStartQuiz = () => {
    window.alert('Quiz is started');
  };

  return (
    <>
      <StyledCard>
        <StyledCardMedia
          component='img'
          alt={quizCardContent.name}
          src={quizCardContent.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {quizCardContent.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {quizCardContent.description.slice(0, 100)}
          </Typography>
        </CardContent>
        <CardAction>
          <Buttons size='small' onClick={handleStartQuiz}>
            Start quiz
          </Buttons>
          <Buttons size='small' onClick={handleShowModal}>
            Show More
          </Buttons>
        </CardAction>
      </StyledCard>
      {isShowModal && (
        <ModalWindow
          open={isShowModal}
          onClose={handleCloseModal}
          title={quizCardContent.name}
          image={quizCardContent.image}
          description={quizCardContent.description}
        >
          <Typography gutterBottom>
            {quizCardContent.description}
          </Typography>
        </ModalWindow>
      )}
    </>
  );
}

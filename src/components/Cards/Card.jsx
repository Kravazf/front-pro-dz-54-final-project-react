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

export default function CardItem({
  name,
  img,
  title,
  description,
  handleNavigate,
}) {
  const [isShowModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <StyledCard>
        <StyledCardMedia
          component='img'
          alt={name}
          src={img}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
          {typeof title === 'string' ? title.slice(0, 100) : ''}
          </Typography>
        </CardContent>
        <CardAction>
          <Buttons size='small' onClick={() => handleNavigate(name)}>
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
          title={title}
          image={img}
          description={description}
        >
          <Typography gutterBottom>
            {description}
          </Typography>
        </ModalWindow>
      )}
    </>
  );
}

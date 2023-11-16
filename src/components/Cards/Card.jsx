/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardContent, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalWindow from '../Modal/ModalWindow';
import {
  Buttons,
  CardAction,
  StyledCard,
  StyledCardMedia,
} from './styled';
import thunks from '../../store/services/tests/thunks';

export default function CardItem({
  test,
  name,
  img,
  title,
  description,
  handleNavigate,
}) {
  const [isShowModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const showDeleteButton = test && test.AutorName;
  const handleDelete = () => {
    if (test && test.id) {
      dispatch(thunks.deleteTest(test.id));
    }
  };

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
          <Typography
            variant='body2'
            color='text.secondary'
            style={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
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
          {showDeleteButton && (
          <DeleteForeverIcon
          size='small'
          onClick={handleDelete}
          style={{
            position: 'absolute',
            top: '210px',
            right: '5px',
            color: 'red',
          }}
          >
          </DeleteForeverIcon>
          )}
        </CardAction>
      </StyledCard>
      {isShowModal && (
        <ModalWindow
          open={isShowModal}
          onClose={handleCloseModal}
          title={title}
          image={img}
          description={description}
          name={name} // Передаємо name в ModalWindow
          handleNavigate={handleNavigate} // Передаємо handleNavigate в ModalWindow
        >
          <Typography gutterBottom>
            {description}
          </Typography>
        </ModalWindow>
      )}
    </>
  );
}

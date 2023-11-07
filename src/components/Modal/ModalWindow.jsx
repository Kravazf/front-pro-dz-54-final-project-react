/* eslint-disable no-alert */
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonModal, DialogAction } from './styled';

export default function ModalWindow({
  name,
  open,
  onClose,
  title,
  image,
  description,
  timeEstimate = 30,
  handleNavigate,
}) {
  const handleClose = () => {
    onClose();
  };

  const handleStartQuiz = () => {
    handleClose();
    handleNavigate(name);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {title}
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <img src={image} alt={title} />
        <p>{description}</p>
        <p>TIME ESTIMATE: {timeEstimate} MINUTES</p>
      </DialogContent>
      <DialogAction>
        <ButtonModal onClick={handleStartQuiz}>
          Start Quiz
        </ButtonModal>
      </DialogAction>
    </Dialog>
  );
}

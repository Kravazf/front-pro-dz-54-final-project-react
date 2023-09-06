import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonModal, DialogAction } from './styled';

export default function ModalWindow({ open, onClose, title, image, description }) {
  const handleClose = () => {
    onClose();
  };

  const handleStartQuiz = () => {
    handleClose();
    setTimeout(() => {
      window.alert('Quiz is started');
    }, 50);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
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
      </DialogContent>
      <DialogAction>
        <ButtonModal onClick={handleStartQuiz}>
          Start Quiz
        </ButtonModal>
      </DialogAction>
    </Dialog>
  );
}

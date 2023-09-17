import { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonModal, DialogAction } from './styled';

class ModalWindow extends Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleStartQuiz = () => {
    this.handleClose();
    setTimeout(() => {
      window.alert('Quiz is started');
    }, 50);
  };

  render() {
    const { open, title, image, description } = this.props;

    return (
      <Dialog open={open} onClose={this.handleClose}>
        <DialogTitle>
          {title}
          <IconButton
            aria-label="close"
            onClick={this.handleClose}
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
          <ButtonModal onClick={this.handleStartQuiz}>
            Start Quiz
          </ButtonModal>
        </DialogAction>
      </Dialog>
    );
  }
}

export default ModalWindow;

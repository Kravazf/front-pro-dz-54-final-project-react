import { Component } from 'react';
import { CardContent, Typography } from '@mui/material';
import ModalWindow from '../Modal/ModalWindow';
import { Buttons, CardAction, StyledCard, StyledCardMedia } from './styled';

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }

  handleShowModal = () => {
    this.setState({ isShowModal: true });
  };

  handleCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  handleStartQuiz = () => {
    window.alert('Quiz is started');
  };

  render() {
    const { quizCardContent } = this.props;
    const { isShowModal } = this.state;

    return (
      <>
        <StyledCard>
          <StyledCardMedia
            component="img"
            alt={quizCardContent.name}
            src={quizCardContent.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {quizCardContent.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {quizCardContent.description.slice(0, 100)}
            </Typography>
          </CardContent>
          <CardAction>
            <Buttons size="small" onClick={this.handleStartQuiz}>
              Start quiz
            </Buttons>
            <Buttons size="small" onClick={this.handleShowModal}>
              Show More
            </Buttons>
          </CardAction>
        </StyledCard>
        {isShowModal && (
          <ModalWindow
            open={isShowModal}
            onClose={this.handleCloseModal}
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
}

export default CardItem;
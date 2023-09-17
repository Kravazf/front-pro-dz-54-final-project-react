import { Component } from 'react';
import CardItem from '../../components/Cards/Card';
import { quizCardContent } from '../../api/quiz-card-content/quiz-card-content';
import { Grid } from '@mui/material';

class QuizTests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizCardContentList: [],
      loading: true,
      error: '',
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  fetchQuizCardContentList = async () => {
    this.setState({ loading: true });

    try {
      const response = await quizCardContent.get();
      this.setState({ quizCardContentList: response });
    } catch (err) {
      console.error(err);
      this.setState({ error: err });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.fetchQuizCardContentList();
  }

  render() {
    const { quizCardContentList, loading, error, isModalOpen } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
      <Grid container spacing={2}>
        {quizCardContentList.map((quizCardContent) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={quizCardContent.id}>
            <CardItem
              quizCardContent={quizCardContent}
              isModalOpen={isModalOpen}
              openModal={this.openModal}
              closeModal={this.closeModal}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default QuizTests;
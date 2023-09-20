import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProgramingTests() {
  const { QuizTest } = useParams();
  return (<>{QuizTest}</>);
}

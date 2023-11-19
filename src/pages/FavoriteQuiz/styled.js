import styled from 'styled-components';

export const FavoriteContainer = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap', // Дозволяє карткам обтікати та формувати кілька рядів
  justifyContent: 'center', // Центрує картки
  gap: '15px', // Додає відстань між картками
  padding: '15px 0',
}));

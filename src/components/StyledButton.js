import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-top: 1rem;
  font-weight: 700;
  border: 2px solid white;
  border-radius: 0.25rem;
  background-color: transparent;

  &:hover {
    border-color: transparent;
    color: #6574cd;
    background-color: white;
  }
`;

export default StyledButton;

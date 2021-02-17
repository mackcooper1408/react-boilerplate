import styled from 'styled-components';

const Button = styled.button`
  font-size: 0.8em;
  text-align: center;
  padding: 0.15em 0.5em;
  margin: 0.25em;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover:not([disabled]) {
    transform: scale(1.1);
    background-color: grey;
    color: white;
  }
`;

export default Button;

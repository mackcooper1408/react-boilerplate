import styled from 'styled-components';

const Input = styled.input`
  font-size: 0.9em;
  text-align: center;
  padding: 0.15em;
  width: 100%;
  border-left: none;
  border-right: none;
  border-color: black;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export default Input;

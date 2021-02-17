import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2em;
  margin: 0.8em 0.25em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Form;

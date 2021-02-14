import styled from 'styled-components';

const Wrapper = styled.li`
  color: black;
  height: 100%;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
  margin: 0.5em 1em;
  padding: 0.2em 1em;
  border: 1px solid black;
  border-radius: 3px;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Wrapper;

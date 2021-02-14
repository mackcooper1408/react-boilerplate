import styled from 'styled-components';

const Wrapper = styled.li`
  color: black;
  height: 100%;
  text-decoration: none;
  text-align: center;
  font-size: 1.5em;
  transition: all 0.2s;
  margin: 0.5em 1em;
  padding: 0.2em 1em;
  border-bottom: 1px solid black;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Wrapper;

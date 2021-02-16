import styled from 'styled-components';

const Item = styled.link`
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s;
  padding: 0 1em;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Item;

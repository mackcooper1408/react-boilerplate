import styled from 'styled-components';

const Item = styled.div`
  color: black;
  text-decoration: none;
  text-align: center;
  transition: size 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Item;

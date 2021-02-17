import styled from 'styled-components';

const Item = styled.a`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  transition: all 0.2s;
  padding: 0 1em;
  &:hover {
    transform: scale(1.1);
  }
  &.is-active {
    border-bottom: 1px solid #eee;
  }
`;

export default Item;

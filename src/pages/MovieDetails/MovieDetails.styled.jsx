import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackButton = styled(Link)`
  padding: 4px 8px;
  width: fit-content;
  display: block;
  border-radius: 10px;
  border: 1px solid #2e2e2e70;
  cursor: pointer;
  color: #2e2e2e;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: #ffa600b9;
  }
`;

export { BackButton };

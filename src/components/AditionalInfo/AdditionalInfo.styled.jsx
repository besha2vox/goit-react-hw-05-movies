import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AdditionalList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  border-bottom: 1px solid #2e2e2e;
`;

const AdditionalInfoLink = styled(NavLink)`
  font-size: 20px;
  color: #2e2e2e;

  &.active {
    text-shadow: 0 0 10px #ffa600;
    font-weight: 700;
  }
`;

export { AdditionalInfoLink, AdditionalList };

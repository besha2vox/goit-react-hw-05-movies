import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  border-bottom: 1px solid #db8f2c50;
  padding: 10px 0;
  background-color: #db8f2c37;
  box-shadow: 0 1px 3px 2px #db8f2c50;

  & ul {
    display: flex;
    margin: 0 auto;
    width: fit-content;
    list-style: none;
    column-gap: 20px;
  }
`;

const NavigateLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  font-size: 24px;
  color: #2e2e2e;
  border-radius: 10px;
  transition: background-color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #ffa6006f;
  }

  &.active {
    background-color: #ffa600b9;
  }
`;

export { Header, NavigateLink };

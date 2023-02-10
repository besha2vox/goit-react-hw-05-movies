import { Header, NavigateLink } from './Header.styled';

const HeaderMenu = () => {
  return (
    <Header>
      <ul>
        <li>
          <NavigateLink to="/">Home</NavigateLink>
        </li>
        <li>
          <NavigateLink to="/movies">Movies</NavigateLink>
        </li>
      </ul>
    </Header>
  );
};

export default HeaderMenu;

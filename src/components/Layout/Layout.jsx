import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Loyaut.styled';
const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;

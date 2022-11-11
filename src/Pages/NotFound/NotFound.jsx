import { Layout, Link, Icon, Title } from './NotFound.styled';

const NotFound = () => {
  return (
    <Layout>
      <Icon>🤷‍♀️🥺🤦</Icon>
      <Title>404 Oh no! Page not found.</Title>
      <Link to="/" end>
        Go to the main page
      </Link>
    </Layout>
  );
};
export default NotFound;

import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Main;

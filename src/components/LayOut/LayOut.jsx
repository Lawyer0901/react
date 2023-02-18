import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const LayOut = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

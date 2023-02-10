import HeaderMenu from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayOut = () => {
  return (
    <>
      <HeaderMenu />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayOut;

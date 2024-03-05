import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainBox } from './SharedLayOut.styled';

const SharedLayOut = () => {
  return (
    <MainBox>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </MainBox>
  );
};

export default SharedLayOut;

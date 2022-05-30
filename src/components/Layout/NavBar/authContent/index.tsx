import { useSession } from 'next-auth/react';
import React from 'react';
import AuthModal from '../../../modal/auth/AuthModal';
import PortfolioModal from '../../../modal/portfolio/PortfolioModal';
import AuthMenu from './auth/AuthMenu';
import UserMenu from './user/UserMenu';

const AuthContent = () => {
  const { status } = useSession();

  return (
    <>
      <AuthModal />
      <PortfolioModal />
      {status === 'authenticated' ? <UserMenu /> : <AuthMenu />}
    </>
  );
};

export default AuthContent;

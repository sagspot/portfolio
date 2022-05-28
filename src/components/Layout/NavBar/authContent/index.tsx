import { useSession } from 'next-auth/react';
import React from 'react';
import AuthModal from '../modal/auth/AuthModal';
import AuthMenu from './auth/AuthMenu';
import UserMenu from './user/UserMenu';

const AuthContent = () => {
  const { status } = useSession();

  return (
    <>
      <AuthModal />
      {status === 'authenticated' ? <UserMenu /> : <AuthMenu />}
    </>
  );
};

export default AuthContent;

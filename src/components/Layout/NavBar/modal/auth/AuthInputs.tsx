import { Flex, HStack, Divider } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../../../../../app/hooks';
import ResetPassword from './ResetPassword';
import SignIn from './SignIn';

type Props = {};

const AuthInputs = (props: Props) => {
  const view = useAppSelector((state) => state.authModal.view);
  return (
    <Flex direction="column" align="center" justify="center" width="70%">
      {view === 'resetPassword' ? (
        <ResetPassword />
      ) : (
        <Flex direction="column" width="100%" mt={4}>
          {view === 'signin' && <SignIn />}
        </Flex>
      )}
    </Flex>
  );
};

export default AuthInputs;

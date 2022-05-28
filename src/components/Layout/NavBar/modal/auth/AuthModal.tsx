import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { modalClosed } from '../../../../../features/modals/authModalSlice';
import AuthInputs from './AuthInputs';

type Props = {};

const AuthModal = (props: Props) => {
  const dispatch = useAppDispatch();
  const { open, view } = useAppSelector((state) => state.authModal);
  return (
    <Modal isOpen={open} onClose={() => dispatch(modalClosed())}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          {view === 'signin' && 'Sign In'}
          {view === 'resetPassword' && 'Reset Password'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pb={6}
        >
          <AuthInputs />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;

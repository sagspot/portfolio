import { Flex, Icon, Input, Button, Text, VStack } from '@chakra-ui/react';
import error from 'next/error';
import React from 'react';
import { BsReddit, BsDot } from 'react-icons/bs';
import { useAppDispatch } from '../../../../../app/hooks';
import { modalOpened } from '../../../../../features/modals/authModalSlice';
import sendRequest from '../../../../../lib/requests';
import InputItem from './InputItem';

type Props = {};

const ResetPassword = (props: Props) => {
  const dispatch = useAppDispatch();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.length === 0) return setError('Email is required');
    if (!!email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      return setError('Invalid email');

    setLoading(true);

    try {
      await sendRequest('/api/user/reset-password', {
        method: 'POST',
        body: email,
      });
      setSuccess(true);
      setEmail('');
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Icon as={BsReddit} color="brand.100" fontSize={40} mb={2} />
      <Text fontWeight={700} mb={2}>
        Reset your password
      </Text>
      {success ? (
        <VStack spacing={2} mb={4}>
          <Text textAlign="center">
            Instructions to reset your password have been sent to your email
            address.
          </Text>
          <Text textAlign="center"> Check your inbox :)</Text>
        </VStack>
      ) : (
        <>
          <Text fontSize="sm" textAlign="center" mb={2}>
            Enter the email associated with your account and we will send you a
            reset link
          </Text>

          <form onSubmit={submitHandler} style={{ width: '100%' }} noValidate>
            <InputItem
              name="email"
              placeholder="Email"
              type="text"
              mb={2}
              onChange={(event) => setEmail(event.target.value)}
            />

            {error && (
              <Text textAlign="center" fontSize="10pt" color="red">
                {error}
              </Text>
            )}
            <Button
              width="100%"
              height="36px"
              mb={2}
              mt={2}
              type="submit"
              isLoading={loading}
            >
              Reset Password
            </Button>
          </form>
        </>
      )}
      <Text
        fontSize="9pt"
        color="blue.500"
        fontWeight={700}
        cursor="pointer"
        onClick={() => dispatch(modalOpened('signin'))}
      >
        LOGIN
      </Text>
    </Flex>
  );
};

export default ResetPassword;

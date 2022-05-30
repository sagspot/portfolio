import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import React from 'react';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  modalClosed,
  modalOpened,
} from '../../../../../features/modals/authModalSlice';
import InputItem from './InputItem';

type Props = {};

const SignIn = (props: Props) => {
  const dispatch = useAppDispatch();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);
  const [values, setValues] = React.useState({ email: '', password: '' });
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.email || !values.password)
      return setError('Please fill all fields');
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      return setError('Invalid email');

    setLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', { ...values, redirect: false });

      if (res && res.error) throw res.error;

      dispatch(modalClosed());
      setValues({ email: '', password: '' });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setValues((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form onSubmit={submitHandler} noValidate>
      <InputItem
        name="email"
        placeholder="Email"
        type="text"
        mb={2}
        onChange={changeHandler}
      />

      <InputGroup mt={3}>
        <InputItem
          name="password"
          placeholder="Password"
          type={showPass ? 'text' : 'password'}
          onChange={changeHandler}
        />
        <InputRightElement width="4.5rem">
          <Button
            variant="ghost"
            h="1.75rem"
            onClick={() => setShowPass((state) => !state)}
          >
            {showPass ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Text textAlign="center" mt={2} fontSize="10pt" color="red">
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
        Log In
      </Button>

      <Flex justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
          onClick={() => dispatch(modalOpened('resetPassword'))}
        >
          Reset
        </Text>
      </Flex>
    </form>
  );
};

export default SignIn;

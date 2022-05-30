import { Button, ModalBody, Text } from '@chakra-ui/react';
import React from 'react';
import PortfolioInput from './PortfolioInput';
import { PortfolioValues } from './PortfolioModal';

interface Props {
  values: PortfolioValues;
  sending: boolean;
  error: string;
  setValues: (values: PortfolioValues) => void;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

const TextInputs = ({
  sending,
  error,
  values,
  setValues,
  submitHandler,
}: Props) => {
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <ModalBody>
      <form onSubmit={submitHandler} noValidate>
        <PortfolioInput changeHandler={changeHandler} values={values} />

        <Text textAlign="center" mt={2} fontSize="10pt" color="red">
          {error}
        </Text>

        <Button
          variant="solid"
          w="full"
          mt={2}
          type="submit"
          isLoading={sending}
        >
          Add Portfolio Item
        </Button>
      </form>
    </ModalBody>
  );
};

export default TextInputs;

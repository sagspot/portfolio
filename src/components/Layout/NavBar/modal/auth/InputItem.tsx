import { Input } from '@chakra-ui/react';
import React from 'react';

type Props = {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  mb?: string | number;
  size?: string;
  bg?: string;
};

const InputItem = (props: Props) => {
  return (
    <Input
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      required
      onChange={props.onChange}
      mb={props.mb}
      fontSize="10pt"
      _placeholder={{ color: 'gray.500' }}
      _hover={{
        bg: 'white',
        border: '1px solid',
        borderColor: 'blue.500',
      }}
      _focus={{
        outline: 'none',
        bg: 'white',
        border: '1px solid',
        borderColor: 'blue.500',
      }}
      bg={props.bg || 'gray.50'}
      size={props.size}
      type={props.type}
      borderRadius={4}
    />
  );
};

export default InputItem;

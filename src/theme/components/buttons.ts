import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '4px',
    fontSize: '10pt',
    fontWeight: 700,
    _focus: {
      boxShadow: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: '8pt',
    },
    md: {
      fontSize: '10pt',
      // height: "28px",
    },
  },
  variants: {
    solid: (props) => ({
      color: props.colorMode === 'light' ? 'white' : 'brand.100',
      bg: props.colorMode === 'light' ? 'brand.100' : 'whiteAlpha.800',
      _hover: {
        bg: props.colorMode === 'light' ? 'brand.100' : 'whiteAlpha.800',
        filter: 'brightness(80%)',
      },
    }),
    outline: (props) => ({
      color: props.colorMode === 'light' ? 'brand.100' : 'white',
      border: '1px solid',
      borderColor: props.colorMode === 'light' ? 'brand.100' : 'whiteAlpha.700',
    }),
    oauth: {
      height: '34px',
      border: '1px solid',
      borderColor: 'gray.300',
      _hover: {
        bg: 'gray.50',
      },
    },
  },
};

export default Button;

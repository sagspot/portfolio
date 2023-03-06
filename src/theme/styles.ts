import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      lineHeight: 'base',
      color: mode('brand.700', 'white')(props),
      bg: mode('white', 'brand.800')(props),
    },
  }),
};

export default styles;

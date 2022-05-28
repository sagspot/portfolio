import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      lineHeight: 'base',
      color: mode('brand.100', 'white')(props),
      bg: mode('white', 'brand.100')(props),
    },
  }),
};

export default styles;

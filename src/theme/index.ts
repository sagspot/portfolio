import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Foundational style overrides
import colors from './foundations/colors';
import typography from './foundations/typography';

// Component style overrides
import Button from './components/buttons';

const overrides = {
  styles,
  colors,
  ...typography,
  // Other foundational style overrides go here
  components: {
    Button,
    // Other components go here
  },
};

export default extendTheme(overrides);

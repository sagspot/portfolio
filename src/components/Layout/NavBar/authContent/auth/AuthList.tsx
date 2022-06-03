import { MenuList, MenuItem, Flex, Icon, MenuDivider } from '@chakra-ui/react';
import React from 'react';
import { VscSignIn } from 'react-icons/vsc';
import { useAppDispatch } from '../../../../../app/hooks';
import { modalOpened } from '../../../../../features/modals/authModalSlice';

const AuthList = () => {
  const dispatch = useAppDispatch();
  return (
    <MenuList>
      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: 'brand.100', color: 'white' }}
        onClick={() => dispatch(modalOpened('signin'))}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={VscSignIn} />
          Sign in
        </Flex>
      </MenuItem>
    </MenuList>
  );
};

export default AuthList;

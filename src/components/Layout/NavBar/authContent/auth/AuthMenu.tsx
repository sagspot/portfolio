import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import AuthList from './AuthList';

const AuthMenu = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex align="center">
          <Icon fontSize={24} mr={1} color="gray.400" as={VscAccount} />

          <Icon as={ChevronDownIcon} />
        </Flex>
      </MenuButton>

      <AuthList />
    </Menu>
  );
};

export default AuthMenu;

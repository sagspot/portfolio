import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  Flex,
  Avatar,
  Box,
  Icon,
  Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React from 'react';
import UserList from './UserList';

const UserMenu = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const name = user?.name || user?.email?.split('@')[0] || 'Guest';
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex align="center">
          <Avatar
            name={name}
            size="sm"
            color="brand.primary"
            bg="white"
            src={user?.image as string}
          />

          <Box
            display={{ base: 'none', lg: 'flex' }}
            flexDirection="column"
            fontSize="8pt"
            alignItems="center"
            mr={8}
          >
            <Text as="span" fontWeight={700}>
              {name}
            </Text>
          </Box>

          <Icon as={ChevronDownIcon} />
        </Flex>
      </MenuButton>

      <UserList />
    </Menu>
  );
};

export default UserMenu;

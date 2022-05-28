import { MenuList, MenuItem, Flex, Icon, MenuDivider } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { VscDashboard } from 'react-icons/vsc';
import { GiCargoCrate } from 'react-icons/gi';
import { MdOutlineLogin } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

const UserList = () => {
  const router = useRouter();
  return (
    <MenuList>
      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: 'brand.100', color: 'white' }}
        onClick={() => router.push('/dashboard')}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={VscDashboard} />
          Dashboard
        </Flex>
      </MenuItem>

      <MenuDivider />

      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: 'brand.100', color: 'white' }}
        onClick={() => router.push('/account/cargo/history')}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={GiCargoCrate} />
          Cargo History
        </Flex>
      </MenuItem>

      <MenuDivider />

      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: 'brand.100', color: 'white' }}
        onClick={() => router.push('/account/profile')}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={CgProfile} />
          Profile
        </Flex>
      </MenuItem>

      <MenuDivider />

      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: 'brand.100', color: 'white' }}
        onClick={() => signOut({ redirect: false })}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
          Sign Out
        </Flex>
      </MenuItem>
    </MenuList>
  );
};

export default UserList;

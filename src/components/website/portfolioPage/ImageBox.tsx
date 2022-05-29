import { Box, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const ImageBox = ({ img }: { img: string }) => {
  return (
    <Box
      w="80%"
      h={135}
      mt="-16"
      rounded="base"
      border="8px solid"
      borderColor={useColorModeValue('gray.50', 'blue.700')}
      overflow="hidden"
      shadow="0 0 8px 1px rgba(0,0,0,0.25)"
      transition="all .15s ease-in-out"
      _groupHover={{ borderWidth: '2px' }}
    >
      <Box
        position="relative"
        rounded="base"
        w="100%"
        h="100%"
        overflow="hidden"
        transition="all .15s ease-in-out"
        _groupHover={{ transform: 'scale(1.05)' }}
      >
        <Image
          src={img}
          alt="ps"
          objectFit="cover"
          layout="fill"
          draggable={false}
        />
      </Box>
    </Box>
  );
};

export default ImageBox;

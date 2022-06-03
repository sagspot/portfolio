import { Box, Stack, Button } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface Props {
  imageData: string | null;
  setSelectedTab: (tab: string) => void;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setImageData: React.Dispatch<React.SetStateAction<string | null>>;
}

const DisplayImage = ({
  imageData,
  setSelectedTab,
  setImage,
  setImageData,
}: Props) => {
  return (
    <>
      <Box
        width={275}
        height={138}
        border="2px solid"
        rounded="md"
        overflow="hidden"
        borderColor="blue.200"
      >
        <Image
          src={imageData}
          alt="selected image"
          width={275}
          height={138}
          objectFit="cover"
        />
      </Box>

      <Stack direction="row" mt={4}>
        <Button
          height="28px"
          rounded="full"
          onClick={() => setSelectedTab('Text')}
        >
          Done
        </Button>
        <Button
          height="28px"
          rounded="full"
          onClick={() => {
            setImage(null);
            setImageData(null);
          }}
        >
          Remove Image
        </Button>
      </Stack>
    </>
  );
};

export default DisplayImage;

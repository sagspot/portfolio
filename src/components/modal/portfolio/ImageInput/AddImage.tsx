import { Flex, Button } from '@chakra-ui/react';
import React from 'react';

interface Props {
  selectedFileRef: React.RefObject<HTMLInputElement>;
  handleSelectImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddImage = ({ selectedFileRef, handleSelectImage }: Props) => {
  return (
    <Flex
      justify="center"
      align="center"
      p={20}
      border="1px dashed"
      borderColor="gray.200"
      width="100%"
      borderRadius={4}
    >
      <Button
        variant="outline"
        height="28px"
        rounded="full"
        onClick={() => selectedFileRef.current?.click()}
      >
        Upload
      </Button>
      <input
        ref={selectedFileRef}
        type="file"
        hidden
        onChange={handleSelectImage}
      />
    </Flex>
  );
};

export default AddImage;

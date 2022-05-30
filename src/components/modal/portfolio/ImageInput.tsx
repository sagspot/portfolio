import { Box, Button, Flex, ModalBody, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { PortfolioValues } from './PortfolioModal';

interface Props {
  values: PortfolioValues;
  setValues: (values: PortfolioValues) => void;
  setSelectedTab: (tab: string) => void;
}

const ImageInput = ({ values, setValues, setSelectedTab }: Props) => {
  const selectedFileRef = React.useRef<HTMLInputElement>(null);

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files?.[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setValues({ ...values, img: readerEvent.target.result as string });
      }
    };
  };
  return (
    <ModalBody
      as={Flex}
      direction="column"
      justify="center"
      align="center"
      width="100%"
    >
      {values.img ? (
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
              src={values.img}
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
              onClick={() => setValues({ ...values, img: '' })}
            >
              Remove Image
            </Button>
          </Stack>
        </>
      ) : (
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
      )}
    </ModalBody>
  );
};

export default ImageInput;

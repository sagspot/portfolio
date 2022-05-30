import { Flex, ModalBody } from '@chakra-ui/react';
import React from 'react';
import AddImage from './AddImage';
import DisplayImage from './DisplayImage';

interface Props {
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setSelectedTab: (tab: string) => void;
}

const ImageInput = ({ setImage, setSelectedTab }: Props) => {
  const selectedFileRef = React.useRef<HTMLInputElement>(null);
  const [imageData, setImageData] = React.useState<string | null>(null);

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (e.target.files?.[0]) {
      setImage(file);
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result)
        setImageData(readerEvent.target.result as string);
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
      {imageData ? (
        <DisplayImage
          imageData={imageData}
          setSelectedTab={setSelectedTab}
          setImage={setImage}
          setImageData={setImageData}
        />
      ) : (
        <AddImage
          selectedFileRef={selectedFileRef}
          handleSelectImage={handleSelectImage}
        />
      )}
    </ModalBody>
  );
};

export default ImageInput;

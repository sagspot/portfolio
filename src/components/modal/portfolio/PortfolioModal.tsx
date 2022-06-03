import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Icon,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { FiImage } from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { modalToggled } from '../../../features/modals/portfolioModalSlice';
import ImageInput from './ImageInput';
import TabItem from './TabItem';
import TextInputs from './TextInputs';

const formTabs: TabItem[] = [
  { label: 'Text', icon: HiOutlineDocumentText },
  { label: 'Image', icon: FiImage },
];

export interface TabItem {
  label: string;
  icon: typeof Icon.arguments;
}

export interface PortfolioValues {
  title: string;
  category: string;
  source: string;
  url: string;
  desc: string;
  isFeatured: string;
}

const initialValueState: PortfolioValues = {
  title: '',
  category: '',
  source: '',
  url: '',
  desc: '',
  isFeatured: '',
};

const PortfolioModal = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.portfolioModal.open);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState(formTabs[0].label);
  const [values, setValues] = React.useState(initialValueState);
  const [image, setImage] = React.useState<File | null>(null);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.title) return setError('Title is required');
    if (!values.category) return setError('Category is required');
    if (!values.url) return setError('Live url is required');
    if (!values.desc) return setError('Description is required');
    if (!values.isFeatured) return setError('Specify if it is featured');
    if (!image) return setError('Please upload an image');

    const formData = new FormData();

    if (!!values.title) formData.append('title', values.title);
    if (!!values.category) formData.append('category', values.category);
    if (!!values.source) formData.append('source', values.source);
    if (!!values.url) formData.append('url', values.url);
    if (!!values.desc) formData.append('desc', values.desc);
    if (!!values.isFeatured) formData.append('isFeatured', values.isFeatured);
    if (!!image) formData.append('image', image);

    setSending(true);
    setError('');

    try {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error(response.statusText);

      await response.json();

      dispatch(modalToggled());
      setValues(initialValueState);
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <Modal isOpen={open} onClose={() => dispatch(modalToggled(false))}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader as={Flex} width="100%">
          {formTabs.map((item) => (
            <TabItem
              key={item.label}
              item={item}
              selected={item.label === selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ModalHeader>

        <ModalCloseButton />

        {selectedTab === 'Text' && (
          <TextInputs
            values={values}
            setValues={setValues}
            submitHandler={submitHandler}
            sending={sending}
            error={error}
          />
        )}
        {selectedTab === 'Image' && (
          <ImageInput setSelectedTab={setSelectedTab} setImage={setImage} />
        )}
      </ModalContent>
    </Modal>
  );
};

export default PortfolioModal;

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
import sendRequest from '../../../lib/requests';
import ImageInput from './ImageInput';
import TabItem from './TabItem';
import TextInputs from './TextInputs';

const formTabs: TabItem[] = [
  {
    label: 'Text',
    icon: HiOutlineDocumentText,
  },
  {
    label: 'Image',
    icon: FiImage,
  },
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
  img?: string;
}

const initialValueState: PortfolioValues = {
  title: '',
  category: '',
  source: '',
  url: '',
  desc: '',
  img: '',
};

const PortfolioModal = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.portfolioModal.open);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState(formTabs[0].label);
  const [values, setValues] =
    React.useState<PortfolioValues>(initialValueState);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.title) return setError('Title is required');
    if (!values.category) return setError('Category is required');
    if (!values.url) return setError('Live url is required');
    if (!values.desc) return setError('Description is required');
    if (!values.img) return setError('Please upload an image');

    setSending(true);
    setError('');

    try {
      const res = await sendRequest('/api/portfolio', {
        method: 'POST',
        body: values,
      });
      console.log(res);
      setValues(initialValueState);
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
          <ImageInput
            setSelectedTab={setSelectedTab}
            values={values}
            setValues={setValues}
          />
        )}
      </ModalContent>
    </Modal>
  );
};

export default PortfolioModal;

import { Select, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import InputItem from '../../Helpers/InputItem';
import { PortfolioValues } from './PortfolioModal';

interface Props {
  changeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  values: PortfolioValues;
}

const PortfolioInput = ({ changeHandler, values }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={4}>
      <InputItem
        name="title"
        placeholder="Title"
        type="text"
        mb={2}
        onChange={changeHandler}
        value={values.title}
      />

      <InputItem
        name="desc"
        placeholder="Description / Stacks"
        type="text"
        mb={2}
        onChange={changeHandler}
        value={values.desc}
      />

      <Select
        name="category"
        placeholder="Category"
        onChange={changeHandler}
        value={values.category}
      >
        <option value="api">Api</option>
        <option value="website">Website</option>
      </Select>

      <Select
        name="isFeatured"
        placeholder="Featured?"
        onChange={changeHandler}
        value={values.isFeatured}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </Select>

      <InputItem
        name="source"
        placeholder="Github Link"
        type="url"
        mb={2}
        onChange={changeHandler}
        value={values.source}
      />

      <InputItem
        name="url"
        placeholder="Live Link"
        type="url"
        mb={2}
        onChange={changeHandler}
        value={values.url}
      />
    </SimpleGrid>
  );
};

export default PortfolioInput;

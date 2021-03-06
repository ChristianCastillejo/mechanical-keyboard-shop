import CustomSelect from '../CustomSelect/CustomSelect.component';
import styled from 'styled-components';

const Selectors = styled.div`
  display grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.2rem;
  justtify-items: start;
  width: 100%;
`;

interface IOption {
  id: string;
  name: string;
  values: [];
}

interface ISelectedVariants {
  name: string;
  value: string;
  [key: string]: string;
}

interface IProps {
  options: IOption[];
  handleSelect: (name: string, value: string) => void;
  selectedVariants: ISelectedVariants;
}

const VariantsSelector = ({ options, selectedVariants, handleSelect }: IProps) => {
  const VariantSelect = options?.map(option => {
    return (
      <CustomSelect
        key={option.id}
        name={option.name}
        options={option.values}
        handleSelect={handleSelect}
        selectedVariants={selectedVariants}
      />
    );
  });

  return <Selectors>{VariantSelect}</Selectors>;
};

export default VariantsSelector;

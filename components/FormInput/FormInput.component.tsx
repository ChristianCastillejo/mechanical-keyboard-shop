import { GroupContainer, FormInputContainer, FormInputLabel } from './FormInput.styles';

interface IProps {
  label: string;
  type: string;
  name: string;
  required: boolean;
  defaultValue: string;
}
const FormInput = ({ label, ...props }: IProps) => (
  <GroupContainer>
    <FormInputContainer {...props} />
    {label ? (
      <FormInputLabel className={props.defaultValue.length ? 'shrink' : ''}>{label}</FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;

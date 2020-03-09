import { useState } from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { FormContainer } from './CheckoutForm.styles';

const CheckoutForm = () => {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Your order is confirmed!');
  };

  const { firstName, lastName, email, address, city } = shippingInfo;
  return (
    <>
      <h2>Shipping adress</h2>
      <FormContainer onSubmit={e => handleSubmit(e)}>
        <FormInput
          type="text"
          name="firstName"
          defaultValue={firstName}
          label="First Name"
          required
        />
        <FormInput type="text" name="lastName" defaultValue={lastName} label="Last Name" required />
        <FormInput type="email" name="email" defaultValue={email} label="Email" required />
        <FormInput type="text" name="address" defaultValue={address} label="Address" required />
        <FormInput type="text" name="city" defaultValue={city} label="City" required />
        <CustomButton type="submit">Proced to payment</CustomButton>
      </FormContainer>
    </>
  );
};

export default CheckoutForm;

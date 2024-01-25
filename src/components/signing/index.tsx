import React from 'react';
import Card from '../ui/card';
import CardHeader from '../ui/card-header';
import Divider from '../ui/divider';
import PersonalSign from './personal-sign';
import SignTypedDataV3 from './sign-typed-data-v3';
import SignTypedDataV4 from './sign-typed-data-v4';

export const SigningMethods = () => {
  return (
    <Card>
      <CardHeader id="signing">Signing</CardHeader>
      <PersonalSign />
      <Divider />
      <SignTypedDataV3 />
      <Divider />
      <SignTypedDataV4 />
    </Card>
  );
};

export default SigningMethods;

import React, { useState } from 'react';
import { recoverTypedSignature, SignTypedDataVersion } from '@metamask/eth-sig-util';
import FormButton from '../ui/form-button';
import CardLabel from '../ui/card-label';
import { magic } from '../../libs/magic';
import { signTypedDataV3Payload } from '../../utils/signTypedData-payload';

const SignTypedDataV3 = () => {
  const [disabled, setDisabled] = useState(false);
  const publicAddress = localStorage.getItem('user');

  const signTypedDataV3 = async () => {
    try {
      setDisabled(true);
      const params = [publicAddress, signTypedDataV3Payload];
      const method = 'eth_signTypedData_v3';
      const signature = await magic.rpcProvider.request({
        method,
        params,
      });
      console.log('signature', signature);
      const recoveredAddress = recoverTypedSignature({
        data: signTypedDataV3Payload as any,
        signature,
        version: SignTypedDataVersion.V3,
      });
      console.log('recoveredAddress', recoveredAddress.toLocaleLowerCase());
      console.log('publicAddress', publicAddress?.toLocaleLowerCase());
      console.log(
        recoveredAddress.toLocaleLowerCase() === publicAddress?.toLocaleLowerCase()
          ? 'Signing success!'
          : 'Signing failed!',
      );
      setDisabled(false);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  };

  return (
    <div>
      <CardLabel leftHeader="Sign Typed Data v3" />
      <FormButton onClick={signTypedDataV3} disabled={disabled}>
        Sign
      </FormButton>
    </div>
  );
};

export default SignTypedDataV3;

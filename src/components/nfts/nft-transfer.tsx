import React, { useEffect, useState } from 'react';
import FormButton from '../ui/form-button';
import FormInput from '../ui/form-input';
import CardLabel from '../ui/card-label';
import ErrorText from '../ui/error';
import { web3 } from '../../libs/web3';
import { getNftContract } from '../../utils/contracts';

const NftTransfer = () => {
  const [tokenId, setTokenId] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [disabled, setDisabled] = useState(!tokenId || !toAddress);
  const [toAddressError, setToAddressError] = useState(false);
  const [tokenIdError, setTokenIdError] = useState(false);
  const contract = getNftContract();
  const publicAddress = localStorage.getItem('user');

  useEffect(() => {
    setDisabled(!toAddress || !tokenId);
    setTokenIdError(false);
    setToAddressError(false);
  }, [tokenId, toAddress]);

  const mintNFT = () => {
    if (!web3.utils.isAddress(toAddress)) {
      return setToAddressError(true);
    }
    if (isNaN(Number(tokenId))) {
      return setTokenIdError(true);
    }
    setDisabled(true);
    contract.methods
      .transferFrom(publicAddress, toAddress, tokenId)
      .send({ from: publicAddress })
      .on('transactionHash', (hash: string) => {
        console.log('Transaction hash:', hash);
      })
      .then((receipt: any) => {
        setToAddress('');
        setTokenId('');
        console.log('Transaction receipt:', receipt);
      })
      .catch((error: any) => {
        setDisabled(false);
        console.error(error);
      });
  };

  return (
    <div>
      <CardLabel leftHeader="Transfer NFT" />
      <FormInput
        value={toAddress}
        onChange={(e: any) => setToAddress(e.target.value)}
        placeholder="Receiving Address"
      />
      {toAddressError ? <ErrorText>Invalid address</ErrorText> : null}
      <FormInput value={tokenId} onChange={(e: any) => setTokenId(e.target.value)} placeholder="Token Id" />
      {tokenIdError ? <ErrorText className="error">Invalid token ID</ErrorText> : null}
      <FormButton onClick={mintNFT} disabled={!toAddress || !tokenId || disabled}>
        Transfer
      </FormButton>
    </div>
  );
};

export default NftTransfer;

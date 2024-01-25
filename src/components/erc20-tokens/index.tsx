import React from 'react';
import TransferToken from './transfer-token';
import MintToken from './mint-token';
import TokenBalance from './token-balance';
import Divider from '../ui/divider';
import Card from '../ui/card';
import CardHeader from '../ui/card-header';

export const Erc20Tokens = () => {
  return (
    <Card>
      <CardHeader id="erc20-tokens">ERC20 Tokens</CardHeader>
      <MintToken />
      <Divider />
      <TokenBalance />
      <Divider />
      <TransferToken />
    </Card>
  );
};

export default Erc20Tokens;

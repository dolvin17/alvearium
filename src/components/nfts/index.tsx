import React from 'react';
import MintNft from './mint-nft';
import MyNfts from './my-nfts';
import NftTransfer from './nft-transfer';
import Divider from '../ui/divider';
import Card from '../ui/card';
import CardHeader from '../ui/card-header';

export const NFTs = () => {
  return (
    <Card>
      <CardHeader id="nfts">NFT Marketplace</CardHeader>
      <MintNft />
      <Divider />
      <MyNfts />
      <Divider />
      <NftTransfer />
    </Card>
  );
};

export default NFTs;

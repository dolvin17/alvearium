import React from 'react';
import TableOfContents from '../components/table-of-contents';
import AppHeader from '../components/app-header';
import Wallet from '../components/wallet';
import NFTs from '../components/nfts';
import Spacer from '../components/ui/spacer';

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Home({ setAccount }: Props) {
  return (
    <div
      className="home-page"
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      <div>
        <AppHeader />
      </div>
      <Spacer size={300} />
      <TableOfContents />
      <div className="cards-container">
        <Wallet setAccount={setAccount} />
        <NFTs />
        <Spacer size={30} />
      </div>
    </div>
  );
}

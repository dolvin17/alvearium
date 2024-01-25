import React, { useEffect, useState } from 'react';
import Loading from '../../images/loading.svg';
import nftImageOne from '../../images/nikenft.jpg';
import nftImageTwo from '../../images/nikenft.jpg';
import nftImageThree from '../../images/nikenft.jpg';
import Spacer from '../ui/spacer';
import CardLabel from '../ui/card-label';
import { getNftContract } from '../../utils/contracts';

const NFTDisplay = ({ id, name }: { id: string; name: string }) => {
  const getNftImage = () => {
    switch (Number(id) % 3) {
      case 1:
        return nftImageOne;
      case 2:
        return nftImageTwo;
      default:
        return nftImageThree;
    }
  };

  return (
    <div className="nft code">
      <div className="flex-row" style={{ justifyContent: 'flex-start' }}>
        <img src={getNftImage()} alt="nft-logo" />
        <div style={{ marginLeft: '12px' }}>
          <div className="nft-name">{name}</div>
          <Spacer size={5} />
          <div>Token ID: {id}</div>
        </div>
      </div>
    </div>
  );
};

interface NftDataType {
  tokenId: string;
  tokenURI: string;
}

const MyNfts = () => {
  const [nftData, setNftData] = useState<NftDataType[] | undefined>();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const contract = getNftContract();
  const publicAddress = localStorage.getItem('user');

  const formatNftMetadata = (nftIds: string[], tokenURIs: string[]) => {
    return nftIds.map((nftId: string, i: number) => {
      return {
        tokenId: nftId,
        tokenURI: tokenURIs[i],
      };
    });
  };

  const getOwnedNfts = async () => {
    if (!isRefreshing) {
      try {
        const nftIds = await contract.methods.getNftsByAddress(publicAddress).call();
        const tokenURIPromises = nftIds.map(async (nftId: string) => {
          return await contract.methods.tokenURI(nftId).call();
        });
        const tokenURIs = await Promise.all(tokenURIPromises);
        const nftMetadata = formatNftMetadata(nftIds, tokenURIs);
        setNftData(nftMetadata);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (!nftData) {
      getOwnedNfts();
    }
  });

  return (
    <div>
      <CardLabel
        style={{ height: '20px' }}
        leftHeader="NFT"
        rightAction={
          isRefreshing ? (
            <div className="loading-container">
              <img className="loading" alt="loading" src={Loading} />
            </div>
          ) : (
            <div
              onClick={() => {
                setIsRefreshing(true);
                setTimeout(() => {
                  setIsRefreshing(false);
                }, 500);
              }}
            >
              Refresh
            </div>
          )
        }
      />
      {nftData && nftData.length > 0 ? (
        <div className="nft-list">
          {nftData.map(nft => {
            return <NFTDisplay id={nft.tokenId} key={nft.tokenId} name={nft.tokenURI} />;
          })}
        </div>
      ) : (
        <div className="code" style={{ color: '#777679' }}>
          No NFTs in wallet
        </div>
      )}
    </div>
  );
};

export default MyNfts;

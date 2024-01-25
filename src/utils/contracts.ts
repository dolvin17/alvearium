import { web3 } from '../libs/web3';
import { Networks } from './networks';
import { magicTestTokenAbi, nftAbi, storageContractAbi } from './contract-abis';

const getStorageContractAddress = () => {
  const network = localStorage.getItem('network');
  switch (network) {
    case Networks.Polygon:
      return '0xB7e7313C95b4dB35aB50760c31f29d1AA4679452';
    case Networks.Optimism:
      return '0xB7e7313C95b4dB35aB50760c31f29d1AA4679452';
    default:
      return '0xb57a27201b207E01c2b6781AB18fe1faA924f5CC';
  }
};

export const getStorageContract = () => {
  const contractAddress = getStorageContractAddress();
  return new web3.eth.Contract(storageContractAbi, contractAddress);
};

const getNftContractAddress = () => {
  const network = localStorage.getItem('network');
  switch (network) {
    case Networks.Polygon:
      return '0xfdBa8E462e9442b6077B1FC7B230205CAece2033';
    case Networks.Optimism:
      return '0xb57a27201b207E01c2b6781AB18fe1faA924f5CC';
    default:
      return '0x5Dfec61174fbC58C2b265044F90EE12418FA011c';
  }
};

export const getNftContract = () => {
  const contractAddress = getNftContractAddress();
  return new web3.eth.Contract(nftAbi, contractAddress);
};

const getTokenContractAddress = () => {
  const network = localStorage.getItem('network');
  switch (network) {
    case Networks.Polygon:
      return '0x96d71155fcA2eD56Da251591F59E1DC5ff4095e4';
    case Networks.Optimism:
      return '0x5Dfec61174fbC58C2b265044F90EE12418FA011c';
    default:
      return '0xB7e7313C95b4dB35aB50760c31f29d1AA4679452';
  }
};

export const getTestTokenContract = () => {
  const contractAddress = getTokenContractAddress();
  return new web3.eth.Contract(magicTestTokenAbi, contractAddress);
};

import { Networks } from './networks';

export const signTypedDataV3Payload = {
  types: {
    EIP712Domain: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'version',
        type: 'string',
      },
      {
        name: 'verifyingContract',
        type: 'address',
      },
    ],
    Greeting: [
      {
        name: 'contents',
        type: 'string',
      },
    ],
  },
  primaryType: 'Greeting',
  domain: {
    name: 'Magic',
    version: '1',
    verifyingContract: '0xE0cef4417a772512E6C95cEf366403839b0D6D6D',
  },
  message: {
    contents: 'Hello, from Magic!',
  },
};

const getChainId = () => {
  const network = localStorage.getItem('network');
  switch (network) {
    case Networks.Polygon:
      return 80001;
    case Networks.Optimism:
      return 420;
    default:
      return 5;
  }
};

export const signTypedDataV4Payload = {
  domain: {
    // Defining the chain aka Rinkeby testnet or Ethereum Main Net
    chainId: getChainId(),
    // Give a user friendly name to the specific contract you are signing for.
    name: 'Ether Mail',
    // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    // Just let's you know the latest version. Definitely make sure the field name is correct.
    version: '1',
  },

  // Defining the message signing data content.
  message: {
    /*
     - Anything you want. Just a JSON Blob that encodes the data you want to send
     - No required fields
     - This is DApp Specific
     - Be as explicit as possible when building out the message schema.
    */
    contents: 'Hello, Bob!',
    attachedMoneyInEth: 4.2,
    from: {
      name: 'Cow',
      wallets: ['0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826', '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF'],
    },
    to: [
      {
        name: 'Bob',
        wallets: [
          '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
          '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
          '0xB0B0b0b0b0b0B000000000000000000000000000',
        ],
      },
    ],
  },
  // Refers to the keys of the *types* object below.
  primaryType: 'Mail',
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
    // Not an EIP712Domain definition
    Group: [
      { name: 'name', type: 'string' },
      { name: 'members', type: 'Person[]' },
    ],
    // Refer to PrimaryType
    Mail: [
      { name: 'from', type: 'Person' },
      { name: 'to', type: 'Person[]' },
      { name: 'contents', type: 'string' },
    ],
    // Not an EIP712Domain definition
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallets', type: 'address[]' },
    ],
  },
};

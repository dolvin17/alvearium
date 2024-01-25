import React, { useState } from 'react';
import DownArrow from '../../images/down-arrow.svg';
import Check from '../../images/check.svg';
import { Networks } from '../../utils/networks';

const Network = () => {
  const networkOptions = [Networks.Ethereum, Networks.Polygon, Networks.Optimism];
  const [isOpen, setIsOpen] = useState(false);
  const [network, setNetwork] = useState(localStorage.getItem('network') || Networks.Ethereum);

  const handleNetworkSelected = (networkOption: Networks) => {
    if (networkOption !== network) {
      setNetwork(networkOption);
      localStorage.setItem('network', networkOption);
      window.location.reload();
    }
  };

  const ActiveNetwork = ({ network }: { network: string }) => {
    return (
      <div className="active-network">
        {network}
        <img src={DownArrow} height="20px" alt="down-arrow" className={isOpen ? 'rotate' : ''} />
      </div>
    );
  };

  const NetworkDropdownOption = ({ network }: { network: Networks }) => {
    return (
      <div
        className="network-dropdown-option"
        onClick={() => {
          handleNetworkSelected(network);
        }}
      >
        <img src={Check} height="15px" alt="check" style={{ marginRight: '10px' }} />
        {network}
      </div>
    );
  };

  return (
    <div className="network-dropdown" onClick={() => setIsOpen(!isOpen)}>
      <ActiveNetwork network={network} />
      {isOpen ? (
        <div className="network-options">
          {networkOptions.map(networkOption => (
            <NetworkDropdownOption key={networkOption} network={networkOption} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Network;

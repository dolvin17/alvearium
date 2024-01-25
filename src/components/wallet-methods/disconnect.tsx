import React, { useState } from 'react';
import Loading from '../../images/loading.svg';
import { magic } from '../../libs/magic';

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const Disconnect = ({ setAccount }: Props) => {
  const [disabled, setDisabled] = useState(false);

  const disconnect = async () => {
    try {
      setDisabled(true);
      await magic.wallet.disconnect();
      localStorage.removeItem('user');
      setDisabled(false);
      setAccount(null);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  };

  return (
    <div className="wallet-method-container">
      <button className="wallet-method" onClick={disconnect} disabled={disabled}>
        {disabled ? (
          <div className="loadingContainer" style={{ width: '115px' }}>
            <img className="loading" alt="loading" src={Loading} />
          </div>
        ) : (
          'disconnect()'
        )}
      </button>
      <div className="wallet-method-desc">Disconnects user from dApp.</div>
    </div>
  );
};

export default Disconnect;

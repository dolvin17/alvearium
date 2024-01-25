import React, { useState } from 'react';
import Loading from '../../images/loading.svg';
import Toast from '../ui/toast';
import { magic } from '../../libs/magic';

const GetWalletInfo = () => {
  const [disabled, setDisabled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [walletType, setWalletType] = useState('');

  const getWalletType = async () => {
    try {
      setDisabled(true);
      const walletInfo = await magic.wallet.getInfo();
      setDisabled(false);
      setWalletType(walletInfo.walletType);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  };

  return (
    <div className="wallet-method-container">
      <button className="wallet-method" onClick={getWalletType} disabled={disabled}>
        {disabled ? (
          <div className="loadingContainer" style={{ width: '86px' }}>
            <img className="loading" alt="loading" src={Loading} />
          </div>
        ) : (
          'getInfo()'
        )}
      </button>
      <div className="wallet-method-desc">Returns information about the logged in user's wallet.</div>
      {showToast ? <Toast>Wallet type: {walletType}</Toast> : null}
    </div>
  );
};

export default GetWalletInfo;

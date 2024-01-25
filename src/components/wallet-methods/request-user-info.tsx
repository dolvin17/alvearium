import React, { useState } from 'react';
import Loading from '../../images/loading.svg';
import Toast from '../ui/toast';
import { magic } from '../../libs/magic';

const RequestUserInfo = () => {
  const [disabled, setDisabled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState<string | undefined>('');

  const requestUserInfo = async () => {
    try {
      setDisabled(true);
      const userInfo = await magic.wallet.requestUserInfoWithUI();
      setDisabled(false);
      setEmail(userInfo.email);
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
      <button className="wallet-method" onClick={requestUserInfo} disabled={disabled}>
        {disabled ? (
          <div className="loadingContainer" style={{ width: '220px' }}>
            <img className="loading" alt="loading" src={Loading} />
          </div>
        ) : (
          'requestUserInfoWithUI()'
        )}
      </button>
      <div className="wallet-method-desc">
        Prompts the user to consent to sharing information with the requesting dApp.
      </div>
      {showToast ? <Toast>Email: {email}</Toast> : null}
    </div>
  );
};

export default RequestUserInfo;

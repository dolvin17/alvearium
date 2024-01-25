import React from 'react';
import Loading from '../../images/loading.svg';

interface Props {
  onClick: () => void;
  disabled: boolean;
}

const ConnectButton = ({ onClick, disabled }: Props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <button className="connect-button" onClick={onClick} disabled={disabled}>
        {disabled ? (
          <div className="loadingContainer" style={{ width: '100%' }}>
            <img className="loading" alt="loading" src={Loading} />
          </div>
        ) : (
          'Connect'
        )}
      </button>
    </div>
  );
};

export default ConnectButton;

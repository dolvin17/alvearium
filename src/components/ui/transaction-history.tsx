import React from 'react';
import Link from '../../images/link.svg';
import { getBlockExplorer } from '../../utils/get-block-explorer';

const TransactionHistory = () => {
  const blockExplorer = getBlockExplorer();
  const publicAddress = localStorage.getItem('user');

  return (
    <a className="action-button" href={`${blockExplorer}/address/${publicAddress}`} target="_blank" rel="noreferrer">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Transaction History <img src={Link} alt="link-icon" style={{ marginLeft: '3px' }} />
      </div>
    </a>
  );
};

export default TransactionHistory;

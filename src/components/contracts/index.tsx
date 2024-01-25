import React from 'react';
import Card from '../ui/card';
import CardHeader from '../ui/card-header';
import StorageContract from './storage-contract';

export const SmartContracts = () => {
  return (
    <Card>
      <CardHeader id="smart-contracts">Smart Contracts</CardHeader>
      <StorageContract />
    </Card>
  );
};

export default SmartContracts;

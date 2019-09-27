import { SEARCH_PEERS } from './types';
import axios from 'axios';

export const searchPeers = async quote => {
  // API call
  // const result = awaitaxios.get(
  //   'https://sandbox.iexapis.com/v1/stock/aapl/peers?token=Tpk_a0b1fb97dc4447eb9c128aebc72259d4',
  // );
  const result = ['OOLGG', 'BB', 'HPQ', 'IMB', 'ONK', 'MFTS'];

  return {
    type: SEARCH_PEERS,
    data: result,
  };
};

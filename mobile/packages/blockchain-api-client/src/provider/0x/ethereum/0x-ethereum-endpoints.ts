import { Chain, Network } from '../../../base/types';

const mainUrl = 'https://api.0x.org';
const testUrl = 'https://goerli.api.0x.org';

const polygonMainUrl = 'https://polygon.api.0x.org';
const polygonTestUrl = 'https://mumbai.api.0x.org';

export const zeroExEndpoints = (network: Network, chain: Chain) => {
  const networkPath = getNetworkPath(network, chain);

  return {
    swapQuote: function(params: string): string {
      return `${networkPath}/swap/v1/quote?${params}`;
    },
  };
};

const getNetworkPath = (network: Network, chain: Chain) => {
  if (network === 'MAIN' && chain === 'Ethereum') return mainUrl;

  if (network === 'TEST' && chain === 'Ethereum') return testUrl;

  if (network === 'MAIN' && chain === 'Polygon') return polygonMainUrl;

  if (network === 'TEST' && chain === 'Polygon') return polygonTestUrl;

  return testUrl;
};

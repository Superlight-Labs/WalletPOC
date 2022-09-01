import { ApiSwapQuote, Chain, Network } from '../../base/types';
import { zeroExEthereumFetcher } from '../../provider/0x/ethereum/0x-ethereum-fetcher';
import { mapZeroExSwapQuote } from '../../provider/0x/ethereum/0x-ethereum-mapper';
import { ZeroExSwapQuote } from '../../provider/0x/ethereum/0x-ethereum-types';

export enum EthereumSwappingProviderEnum {
  ZeroEx,
}

export class EthereumSwappingService {
  private network: Network;
  private chain: Chain;

  constructor(network: Network, chain: Chain) {
    this.network = network;
    this.chain = chain;
  }

  getSwapQuote = async (params: string, provider: EthereumSwappingProviderEnum): Promise<ZeroExSwapQuote> => {
    const { fetcher, mapper } = this.getFunctions(provider, this.network, this.chain);

    const apiResult = fetcher.fetchSwapQuote(params);

    return (mapper as any).responseToSwapQuote(apiResult as ApiSwapQuote);
  };

  private getFunctions = (provider: EthereumSwappingProviderEnum, network: Network, chain: Chain) => {
    switch (provider) {
      default:
        return this.zeroEx(network, chain);
    }
  };

  private zeroEx = (network: Network, chain: Chain) => ({
    fetcher: zeroExEthereumFetcher(network, chain),
    mapper: {
      responseToSwapQuote: (input: ApiSwapQuote) => mapZeroExSwapQuote(input as ZeroExSwapQuote),
    },
  });
}

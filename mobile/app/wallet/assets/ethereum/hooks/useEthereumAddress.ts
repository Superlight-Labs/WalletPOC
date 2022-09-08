import { ethereumWalletsState, EthereumWalletsState } from "ethereum/state/ethereum-atoms";
import { useRecoilValue } from "recoil";

export default function useEthereumAddress() {
  const ethereumState = useRecoilValue<EthereumWalletsState>(ethereumWalletsState);
  return ethereumState.accounts[0].external.addresses[0];
}

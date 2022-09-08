import { User } from "api-types/user";
import { alchemyProviderKey } from "ethereum/config/ethereum-config";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { polygonConfig } from "ethereum/polygon/config/polygon-config";
import { ethers } from "ethers";
import { useRecoilValue } from "recoil";
import { authState } from "state/atoms";
import useEthereumAddress from "./useEthereumAddress";

export default function usePolygonSigner() {
  // const [signer, setSignerLocal] = useRecoilState(polygonSignerState);
  const address = useEthereumAddress();
  const user = useRecoilValue<User>(authState);
  // const cacheSigner =
  //   signer ||
  //   new MPCSigner(address, user, polygonConfig).connect(
  //     new ethers.providers.AlchemyProvider(polygonConfig.chain, alchemyProviderKey)
  //   );

  // useEffect(() => {
  //   if (!signer) {
  //     setSignerLocal(cacheSigner);
  //   }
  // }, []);

  return new MPCSigner(address, user, polygonConfig).connect(
    new ethers.providers.AlchemyProvider(polygonConfig.chain, alchemyProviderKey)
  );
}

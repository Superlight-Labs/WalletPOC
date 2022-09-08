import { User } from "api-types/user";
import { alchemyProviderKey, config } from "ethereum/config/ethereum-config";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { ethers } from "ethers";
import { useRecoilValue } from "recoil";
import { authState } from "state/atoms";
import useEthereumAddress from "./useEthereumAddress";

export default function useEthereumSigner() {
  // const [signer, setSignerLocal] = useRecoilState(ethereumSignerState);
  const address = useEthereumAddress();
  const user = useRecoilValue<User>(authState);
  // const cacheSigner =
  //   signer ||
  //   new MPCSigner(address, user, config).connect(
  //     new ethers.providers.AlchemyProvider(config.chain, alchemyProviderKey)
  //   );

  // useEffect(() => {
  //   if (!signer) {
  //     setSignerLocal(cacheSigner);
  //   }
  // }, []);

  return new MPCSigner(address, user, config).connect(
    new ethers.providers.AlchemyProvider(config.chain, alchemyProviderKey)
  );
}

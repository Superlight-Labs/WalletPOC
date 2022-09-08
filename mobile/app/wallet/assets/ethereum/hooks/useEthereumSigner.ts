import { User } from "api-types/user";
import { alchemyProviderKey, config } from "ethereum/config/ethereum-config";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { ethereumSignerState } from "ethereum/state/ethereum-signer-atoms";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "state/atoms";
import useEthereumAddress from "./useEthereumAddress";

export default function useEthereumSigner() {
  const [signer, setSignerLocal] = useRecoilState(ethereumSignerState);
  const address = useEthereumAddress();
  const user = useRecoilValue<User>(authState);

  function setSigner() {
    if (!signer)
      setSignerLocal(
        new MPCSigner(address, user).connect(new ethers.providers.AlchemyProvider(config.chain, alchemyProviderKey))
      );
  }

  useEffect(() => {
    setSigner();
  }, []);

  return signer;
}

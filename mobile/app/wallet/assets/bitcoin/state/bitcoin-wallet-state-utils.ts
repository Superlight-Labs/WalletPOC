import { useSetRecoilState } from "recoil";
import { getAccountIndex } from "wallet/state/wallet-state-utils";
import { BitcoinBalance, CoinTypeAccount } from "wallet/types/wallet";

export const useUpdateAccountBalance = (state: any) => {
  const setCoinState = useSetRecoilState(state);

  return function ToCoinState(balance: BitcoinBalance, account: CoinTypeAccount) {
    const index = getAccountIndex(account);
    setCoinState((current: any) => {
      return {
        ...current,
        accounts: [
          {
            ...current.accounts[index],
            balance,
          },
        ],
      };
    });
  };
};

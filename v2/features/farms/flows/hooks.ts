import { useMemo, useState } from "react";
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useMachine } from "@xstate/react";
import { ethers } from "ethers";

// TODO: use pf-core files when they're included in the distribution
import { Erc20__factory as Erc20Factory } from "containers/Contracts/factories/Erc20__factory";
import { Erc20 } from "containers/Contracts/Erc20";
import { Jar__factory as JarFactory } from "containers/Contracts/factories/Jar__factory";
import { Jar } from "containers/Contracts/Jar";

import { useAppDispatch } from "v2/store";
import { Actions } from "./stateMachineUserInput";
import { ThemeActions } from "v2/store/theme";

export const useTokenContract = (address: string) => {
  const { library } = useWeb3React<Web3Provider>();

  const TokenContract = useMemo<Erc20 | undefined>(() => {
    if (!library) return;

    return Erc20Factory.connect(address, library.getSigner());
  }, [library, address]);

  return TokenContract;
};

export const useJarContract = (address: string) => {
  const { library } = useWeb3React<Web3Provider>();

  const JarContract = useMemo<Jar | undefined>(() => {
    if (!library) return;

    return JarFactory.connect(address, library.getSigner());
  }, [library, address]);

  return JarContract;
};

export const useTransaction = (
  transactionFactory: (() => Promise<ethers.ContractTransaction>) | undefined,
  callback: (receipt: ethers.ContractReceipt) => void,
  send: ReturnType<typeof useMachine>[1],
  showConfetti: boolean = false,
) => {
  const [error, setError] = useState<Error | undefined>();
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const sendTransaction = async () => {
    if (!transactionFactory) return;

    setError(undefined);
    setIsWaiting(true);

    try {
      const tx = await transactionFactory();

      send(Actions.TRANSACTION_SENT, { txHash: tx.hash });

      tx.wait()
        .then(
          (receipt) => {
            callback(receipt);
            send(Actions.SUCCESS);

            if (showConfetti) dispatch(ThemeActions.setIsConfettiOn(true));
          },
          () => send(Actions.FAILURE),
        )
        .finally(() => setIsWaiting(false));
    } catch (error) {
      setError(error as Error);
      setIsWaiting(false);
    }
  };

  return { sendTransaction, error, setError, isWaiting };
};

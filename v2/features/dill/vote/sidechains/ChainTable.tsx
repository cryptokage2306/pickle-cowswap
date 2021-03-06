import { FC } from "react";
import ChainTableHeader from "./ChainTableHeaders";
import { ChainTableRow } from "./ChainTableRow";
import { PickleModelJson } from "picklefinance-core";
import { iOffchainVoteData } from "v2/store/offchainVotes";

export const ChainTable: FC<{
  selectedChains: string[];
  core: PickleModelJson.PickleModelJson | undefined;
  offchainVoteData: iOffchainVoteData | undefined;
  wallet: string | undefined | null;
}> = ({ selectedChains, core, offchainVoteData, wallet }) => (
  <div className="flex flex-col mt-10">
    <div className="-my-2 overflow-x-auto">
      <div className="py-2 align-middle inline-block min-w-full">
        <table className="min-w-full table-auto border-collapse">
          <ChainTableHeader />
          <tbody>
            <>
              {selectedChains.map((network: string) => (
                <ChainTableRow
                  key={network}
                  network={network}
                  core={core}
                  offchainVoteData={offchainVoteData}
                  wallet={wallet}
                />
              ))}
            </>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

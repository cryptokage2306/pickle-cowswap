import { FC, HTMLAttributes } from "react";
import { PickleModelJson } from "picklefinance-core";
import { AssetAprComponent, JarDefinition } from "picklefinance-core/lib/model/PickleModelJson";
import { classNames, formatPercentage } from "v2/utils";
import TableSpacerRow from "./TableSpacerRow";
import { iOffchainVoteData, UserVote } from "v2/store/offchainVotes";
import { UserDataV2 } from "v2/store/user";
import { BigNumber } from "ethers";

export const JarTableRow: FC<{
  jar: string;
  core: PickleModelJson.PickleModelJson;
  mainnet: boolean;
  offchainVoteData: iOffchainVoteData | undefined;
  wallet: string | undefined | null;
  user?: UserDataV2;
}> = ({ jar, core, mainnet, offchainVoteData, wallet, user }) => {
  const jarData: JarDefinition = core
    ? core.assets.jars.filter((x) => {
        if (x && x.details && x.details.apiKey) return x.details.apiKey === jar;
      })[0]
    : ({} as JarDefinition);
  const { apyFormatted, pickleApyRange } = getApyData(jarData);
  const thisChain = jarData.chain;
  // Change this once off-chain is figured out, do away with mainnet bool
  const allocPoints: string =
    mainnet && jarData.farm?.details?.allocShare
      ? formatPercentage(jarData.farm.details.allocShare)
      : "0%";

  return (
    <>
      <tr className="group">
        <JarTableCell className="rounded-l-xl">
          <JarTableP text={jar} className="text-left" />
        </JarTableCell>
        <JarTableCell>
          <JarTableP text={apyFormatted} />
        </JarTableCell>
        <JarTableCell>
          <JarTableP text={pickleApyRange} />
        </JarTableCell>
        <JarTableCell>
          {mainnet ? (
            <JarTableP text={allocPoints} />
          ) : (
            <JarTableP text={getOffchainPlatformWeight(thisChain, jar, offchainVoteData)} />
          )}
        </JarTableCell>
        <JarTableCell>
          {mainnet ? (
            <JarTableP text={getMainnetUserWeight(jar, core, user)} />
          ) : (
            <JarTableP text={getOffchainUserWeight(jar, offchainVoteData, wallet)} />
          )}
        </JarTableCell>
        <JarTableCell className="rounded-r-xl">
          <JarTableInput jar={jar} />
        </JarTableCell>
      </tr>
      <TableSpacerRow />
    </>
  );
};

const JarTableCell: FC<HTMLAttributes<HTMLElement>> = ({ children, className }) => (
  <td
    className={classNames(
      "bg-background-light p-4 whitespace-nowrap text-sm text-foreground text-center sm:p-6 group-hover:bg-background-lightest",
      className,
    )}
  >
    {children}
  </td>
);

const JarTableP: FC<{ text: string; className?: string }> = ({ text, className }) => (
  <p className={classNames("font-title font-medium text-base leading-5", className)}>{text}</p>
);

const JarTableInput: FC<{ jar: string }> = ({ jar }) => (
  <>
    <input
      className="bg-background border border-foreground-alt-400 rounded p-2 text-center text-foreground-alt-200 focus:outline-none"
      type="number"
      min="-100"
      max="100"
      id={jar}
    />
    <span className="text-foreground-alt-200"> %</span>
  </>
);

const getApyData = (jarDef: JarDefinition) => {
  const apy: number = jarDef && jarDef.aprStats ? jarDef.aprStats.apy : 0;
  const apyFormatted: string = apy.toFixed(3) + "%";

  const pickleAprComponent: AssetAprComponent | null =
    jarDef && jarDef.farm && jarDef.farm.details && jarDef.farm.details.farmApyComponents
      ? jarDef.farm.details.farmApyComponents.filter((x) => x.name === "pickle")[0]
      : null;

  const pickleApr = pickleAprComponent ? pickleAprComponent.apr : 0;
  const pickleAprFormatted = pickleApr ? pickleApr.toFixed(3) : null;
  const pickleApy = pickleAprComponent && pickleAprComponent.maxApr ? pickleAprComponent.maxApr : 0;
  const pickleApyFormatted = pickleApy ? pickleApy.toFixed(3) : null;

  const pickleApyRange: string =
    pickleAprFormatted && pickleApyFormatted
      ? pickleAprFormatted !== pickleApyFormatted
        ? `${pickleAprFormatted}-${pickleApyFormatted}%`
        : `${pickleAprFormatted}%`
      : pickleAprFormatted
      ? `${pickleAprFormatted}%`
      : "-";
  return { apyFormatted, pickleApyRange };
};

const getOffchainPlatformWeight = (
  chain: string,
  jarKey: string,
  offchainVoteData: iOffchainVoteData | undefined,
) => {
  const thisChainVotes = offchainVoteData?.chains?.find((c) => c.chain === chain);
  const thisJar = thisChainVotes?.jarVotes.find(
    (j) => j.key.toLowerCase() === jarKey.toLowerCase(),
  );
  const thisJarVote = thisJar ? thisJar.jarVoteAsEmissionShare : 0;
  return formatPercentage(thisJarVote);
};

const getOffchainUserWeight = (
  jarKey: string,
  offchainVoteData: iOffchainVoteData | undefined,
  wallet: string | undefined | null,
): string => {
  const thisUserVotes: UserVote | undefined = offchainVoteData?.votes.find(
    (v) => v.wallet.toLowerCase() === wallet?.toLowerCase(),
  );
  const thisJarUserVote = thisUserVotes?.jarWeights?.find(
    (j) => j.jarKey.toLowerCase() === jarKey.toLowerCase(),
  );
  return thisJarUserVote ? thisJarUserVote.weight.toString() + "%" : "0%";
};

const getMainnetUserWeight = (
  jarKey: string,
  core: PickleModelJson.PickleModelJson,
  user: UserDataV2 | undefined
) => {
  const jarFromPfcore = core.assets.jars.find((j) => j.details?.apiKey === jarKey);
  const jarContract = jarFromPfcore?.contract || "";
  console.log(user);
  if (user) {
    let totalWeight = BigNumber.from("0");
    user.votes.forEach(v => totalWeight = totalWeight.add(BigNumber.from(v.weight)));
    if (+totalWeight > 1) {
      const userVote = user.votes.find(v => v.farmDepositToken === jarContract);
      const jarWeight = userVote ? BigNumber.from(userVote.weight) : 0;
      const weightPct = jarWeight ? jarWeight.mul(10000).div(totalWeight).toNumber() / 10000 : 0;
      const weightPctFormatted = weightPct !== 0 ? formatPercentage(weightPct) : "0%"
      return weightPctFormatted
    }
  }
  return "0%"
};

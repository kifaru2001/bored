import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import NFTCard from "../components/NFTCard.js";
import {
  contractAddress2,
  stakingContractAddress,
  tokenContractAddress,
} from "./addresses.js";
import styles from "../styles/Home.module.css";
import NAVI from "../components/navi.js";
import Mint from "./mint.js";

const Mints: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    contractAddress2,
    "nft-drop",
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token",
  );
  const { contract, isLoading } = useContract(stakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress,
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    await contract?.call("stake", [[id]]);
  }

  if (isLoading) {
    return (
      <div
        style={{
          margin: "5%",
          fontSize: "25px",
          width: "100%",
          textAlign: "center",
        }}
      >
        LOADING...
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <hr />
        <img alt="logo" width={200} height={200} src="/whls.png" />

        <hr className={`${styles.divider} ${styles.spacerTop}`} />

        <Mint />
      </div>
    </>
  );
};

export default Mints;

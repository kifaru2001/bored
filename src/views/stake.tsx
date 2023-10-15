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
import NFTCard from "../components/NFTCard.tsx";
import {
  contractAddress2,
  stakingContractAddress1,
  tokenContractAddress,
} from "./addresses.js";
import styles from "../styles/Home.module.css";
import NAVI from "../components/navi";
import Mint from "./mint.tsx";

const Stake: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    contractAddress2,
    "nft-drop",
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token",
  );
  const { contract, isLoading } = useContract(stakingContractAddress1);
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
      stakingContractAddress1,
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress1, true);
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
        }}
      >
        LOADING...
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <NAVI rootClassName="navi-root-class-name"></NAVI>
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <img alt="logo" width={200} height={200} src="/whls.png" />

        <hr className={`${styles.divider} ${styles.spacerTop}`} />

        {!address ? (
          <ConnectWallet />
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>WHALECARD STAKING</h1>
            <Mint />
            <div className={styles.tokenGrid}>
              <div className={styles.tokenItem}>
                <h3 className={styles.tokenLabel}>Rewards Earned</h3>
                <p className={styles.tokenValue}>
                  <b>
                    {!claimableRewards
                      ? "Loading..."
                      : ethers.utils.formatUnits(claimableRewards, 18)}
                  </b>{" "}
                  {tokenBalance?.symbol}
                </p>
              </div>
              <div className={styles.tokenItem}>
                <h3 className={styles.tokenLabel}>Current Balance</h3>
                <p className={styles.tokenValue}>
                  <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
                </p>
              </div>
            </div>

            <Web3Button
              style={{
                backgroundColor: "black",
                borderStyle: "solid",
                borderColor: "Orange",
                color: "Orange",
              }}
              action={(contract) => contract.call("claimRewards")}
              contractAddress={stakingContractAddress1}
            >
              Claim Rewards
            </Web3Button>

            <hr className={`${styles.divider} ${styles.spacerTop}`} />
            <h2 style={{ textAlign: "center" }}>Your Staked Whale NFT</h2>
            <div className={styles.nftBoxGrid}>
              {stakedTokens &&
                stakedTokens[0]?.map((stakedToken: BigNumber) => (
                  <NFTCard
                    tokenId={stakedToken.toNumber()}
                    key={stakedToken.toString()}
                  />
                ))}
            </div>

            <hr className={`${styles.divider} ${styles.spacerTop}`} />
            <h2 style={{ textAlign: "center" }}>Your Unstaked Cards</h2>
            <div className={styles.nftBoxGrid}>
              {ownedNfts?.map((nft) => (
                <div key={nft.metadata.id.toString()}>
                  <ThirdwebNftMedia
                    style={{ borderRadius: "16px", width: "100%" }}
                    metadata={nft.metadata}
                    className={styles.nftMedia}
                  />
                  <hr />
                  <h5 style={{ textAlign: "center" }}>{nft.metadata.name}</h5>
                  <hr />
                  <Web3Button
                    style={{
                      backgroundColor: "black",
                      borderStyle: "solid",
                      borderColor: "Orange",
                      color: "Orange",
                    }}
                    contractAddress={stakingContractAddress1}
                    action={() => stakeNft(nft.metadata.id)}
                  >
                    Stake
                  </Web3Button>
                  <hr />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Stake;

import type { NextPage } from "next";
import styles from "./mint.module.css";
import "./home.css";
import "./styles.css";
import {
  MediaRenderer,
  Web3Button,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useTotalCirculatingSupply,
  useTotalCount,
  ConnectWallet,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";
import { Input } from "web3uikit";
import NAVI from "../components/navi";
import Profile from "../views/profile/[walletAddress].tsx";
import Footer from "../components/footer";
import ProgressBar from "@ramonak/react-progress-bar";

import { useState } from "react";

const Mint: NextPage = () => {
  const address = useAddress();
  const maxClaimQuantity = 100;

  const { contract } = useContract(
    "0x98E8B58c44e3c7f08171bb57aeD010fDF71B351E",
  );

  const { data: contractMetadata, isLoading: isContractMetadataLoading } =
    useContractMetadata(contract);

  const { data: activeClaimPhase, isLoading: isActiveClaimPhaseLoading } =
    useActiveClaimConditionForWallet(contract, address);

  const {
    data: claimIneligibilityReasons,
    isLoading: isClaimIneligibilityReasonsLoading,
  } = useClaimIneligibilityReasons(contract, {
    walletAddress: address || "",
    quantity: 1,
  });

  const { data: totalSupply, isLoading: isTotalSupplyLoading } =
    useTotalCount(contract);
  const { data: totalClaimSupply, isLoading: isTotalClaimSupplyLoading } =
    useTotalCirculatingSupply(contract);

  const [claimQuantity, setClaimQuantity] = useState(1);
  const increment = () => {
    if (claimQuantity < maxClaimQuantity) {
      setClaimQuantity(claimQuantity + 1);
    }
  };
  const decrement = () => {
    if (claimQuantity > 1) {
      setClaimQuantity(claimQuantity - 1);
    }
  };

  return (
    <>
      <div style={{ marginBottom: "10%" }}>
        {" "}
        <NAVI rootClassName="navi-root-class-name"></NAVI>
        <hr />
        <hr />
        <div className={styles.container}>
          <main className={styles.main}>
            {!isContractMetadataLoading && (
              <div className={styles.heroSection}>
                <div>
                  <h4 style={{ textAlign: "center" }}>
                    {contractMetadata.name}
                  </h4>
                  <hr />
                  <p style={{ fontStyle: "italic" }}>
                    {contractMetadata.description}
                  </p>
                  <hr />
                  {!isActiveClaimPhaseLoading ? (
                    <div>
                      <p>
                        PHASE:
                        <p style={{ color: "orange", fontSize: "20px" }}>
                          {activeClaimPhase?.metadata?.name}
                        </p>
                      </p>
                      <hr />
                      <p>
                        Price:{" "}
                        <p style={{ color: "orange", fontSize: "20px" }}>
                          {ethers.utils.formatUnits(activeClaimPhase?.price!)}{" "}
                          CORE
                        </p>
                      </p>
                      <hr />
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                  {!isTotalSupplyLoading && !isTotalClaimSupplyLoading ? (
                    <p>
                      Claimed: <hr />
                      <p style={{ color: "orange", fontSize: "20px" }}>
                        {totalClaimSupply?.toNumber()} /{" "}
                        {totalSupply?.toNumber()}
                      </p>
                      <hr />
                      <ProgressBar
                        maxCompleted={totalSupply?.toString() / 10}
                        bgColor="orange"
                        labelClassName="label"
                        completed={totalClaimSupply?.toString() / 10}
                      />
                    </p>
                  ) : (
                    <p>Loading...</p>
                  )}
                  {address ? (
                    !isClaimIneligibilityReasonsLoading ? (
                      claimIneligibilityReasons?.length! > 0 ? (
                        claimIneligibilityReasons?.map((reason, index) => (
                          <p style={{ margin: "10px" }} key={index}>
                            {reason}
                          </p>
                        ))
                      ) : (
                        <div>
                          <hr />
                          <p style={{ color: "gray" }}>
                            YOU ARE Eligible TO MINT SII WHALES
                          </p>
                          <hr stlye={{ color: "white" }} />
                          <div className={styles.claimContainer}>
                            <div className={styles.claimValue}>
                              <button
                                className={styles.claimBtn}
                                onClick={decrement}
                              >
                                -
                              </button>
                              <input
                                className={styles.claimInput}
                                type="number"
                                value={claimQuantity}
                                placeHolder="Amount"
                              />
                              <button
                                className={styles.claimBtn1}
                                onClick={increment}
                              >
                                +
                              </button>
                            </div>
                            <hr />
                            <Web3Button
                              style={{
                                color: "orange",
                                background: "black",
                                textAlign: "center",
                              }}
                              contractAddress={
                                "0x98E8B58c44e3c7f08171bb57aeD010fDF71B351E"
                              }
                              action={(contract) =>
                                contract.erc721.claim(claimQuantity)
                              }
                              onSuccess={() => `/profile/${address}`}
                            >
                              MINT SEAON II
                            </Web3Button>
                          </div>
                        </div>
                      )
                    ) : (
                      <p>Checking Eligibility...</p>
                    )
                  ) : (
                    <p>Connect wallet</p>
                  )}
                  <div></div>
                </div>
              </div>
            )}
            <hr />
            <Profile />
          </main>
        </div>
      </div>
    </>
  );
};

export default Mint;

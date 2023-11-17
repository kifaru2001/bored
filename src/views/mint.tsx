import type { NextPage } from "next";
import styles from "./mint.module.css";
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
import Members from "../components/members/mems";
import { getInitialData, genNextData } from "../components/members/data/indx";
import Stake from "./stake.tsx";
import BWYC from "./BWYC(II).tsx";

import React, { useState, useEffect } from "react";

const Mint: NextPage = () => {
  const [data, setData] = useState(getInitialData());
  const doSwitch = () => {
    setData((d) => {
      [d[0], d[1]] = [d[1], d[0]];
      d[0].score += 1000;
      d[1].score += 2000;
      return [...d];
    });
  };
  useEffect(() => {
    // const timer = setInterval(() => setData(genNextData()), 1000);
    // return () => clearInterval(timer);
  }, []);

  const address = useAddress();
  const maxClaimQuantity = 100;

  const { contract, isLoading } = useContract(
    "0xF6C2584850Fd1F50fc979F72888Fb67CFa39a2C2",
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

  if (isLoading) {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "center",
          padding: "10%",
        }}
      >
        LOADING..
      </div>
    );
  }
  return (
    <>
      <NAVI />
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>

      <Members data={data} />
      <a
        href="https://gallery.boredwhalesyachtclub.org"
        style={{
          border: "solid 0.5px",
          borderRadius: "8px",
          padding: "20px",
          margin: "50px",
          backgroundColor: "rbga (255, 255, 255, 0.5)",
          borderColor:
            "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        }}
      >
        STAKING
      </a>
      <a
        href="https://gallery.boredwhalesyachtclub.org"
        style={{
          border: "solid 0.5px",
          borderRadius: "8px",
          padding: "20px",
          margin: "50px",
          backgroundColor: "rbga (255, 255, 255, 0.5)",
          borderColor:
            "linear-gradient(0deg, rgba(34,193,195, 1) 2%, rgba(253,187,45, 1) 100%)",
        }}
      >
        GALLERY
      </a>
      <Footer />
    </>
  );
};

export default Mint;

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

import Mint from "./mint.tsx";

const Page: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <hr />
        {<Mint />}
        <hr className={`${styles.divider} ${styles.spacerTop}`} />
      </div>
    </>
  );
};

export default Page;

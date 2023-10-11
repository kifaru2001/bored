import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import { nftDropContractAddress, stakingContractAddress } from "./addresses.js";
import styles from "../styles/Home.module.css";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <>
      {nft && (
        <div>
          {nft.metadata && (
            <ThirdwebNftMedia
              style={{ borderRadius: "16px", width: "100%" }}
              metadata={nft.metadata}
              className={styles.nftMedia}
            />
          )}
          <hr />

          <h5 style={{ textAlign: "center" }}>{nft.metadata.name}</h5>
          <hr />
          <Web3Button
            isDisabled
            style={{
              backgroundColor: "black",
              borderStyle: "solid",
              borderColor: "Orange",
              color: "Orange",
              display: "flex",
              flexDirection: "center",
            }}
            action={(contract) =>
              contract?.call("withdraw", [[nft.metadata.id]])
            }
            contractAddress={stakingContractAddress}
          >
            LOCKED
          </Web3Button>
          <hr />
        </div>
      )}
    </>
  );
};
export default NFTCard;

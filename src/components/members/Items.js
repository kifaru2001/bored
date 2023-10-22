import React from "react";
import { Blockie } from "web3uikit";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useMetamask,
} from "@thirdweb-dev/react";

export default function Item({ row }) {
  const address = useAddress();
  return (
    <li className="item">
      <div className="item__avatar">
        <Blockie seed={row.displayName} />
      </div>
      <span className="item__name">{row.displayName}</span>
      <p>...</p>
      <span className="item__score">{row.score} Whales</span>
    </li>
  );
}

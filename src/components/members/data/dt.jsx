import { useState } from "react";
import truncateEthAddress from "truncate-eth-address";

//0x1a4e3a3a36e01712e95a0e80b6cc8831622119b2, 50, No;
//0x47fefe1a349b3b1f196fe4c6f3b5728ade5f72f1, 50, No;
//0xd72e1dee2a18846978fe39b1721e65e568196e95, 27, No;
//0x0bd539913b2fe4d6c77aba384433417c22465799, 25, No;
//0x9d24ae944e8b4eb0906488d1442b21e27f6d19aa, 25, No;
//0xd72e1dee2a18846978fe39b1721e65e568196e95, 24, No;
//0x0bd539913b2fe4d6c77aba384433417c22465799, 22, No;
//0xa739adbc216168028dad114f7ff75a4fe862cded, 20, No;
//0xfe3754c58f0191be717e40e94c8bd1dbe988c3bc, 20, No;
//0x2705d154198bc00412fc8bf1fb00cd1b3595bdb9, 20, No;
//

const address1 = "0x1a4e3a3a36e01712e95a0e80b6cc8831622119b2";
const address2 = "0x47fefe1a349b3b1f196fe4c6f3b5728ade5f72f1";
const address3 = "0x08adb002d054f37a4576072878dede852f647cbb";
const address4 = "0xfe3754c58f0191be717e40e94c8bd1dbe988c3bc";
const address5 = "0x91e7dbb1e86f2df9a9509a407363ba93aec01bf5";
const address6 = "0x9d24ae944e8b4eb0906488d1442b21e27f6d19aa";
const address7 = "0xd72e1dee2a18846978fe39b1721e65e568196e95";
const address8 = "0x87f34204a8d4848231d5defe63e47b8531a93a9a";
const address9 = "0x0bd539913b2fe4d6c77aba384433417c22465799";
const address10 = "0xa739adbc216168028dad114f7ff75a4fe862cded";

export let data = [
  {
    displayName: address1,
    score: 50,
  },
  {
    displayName: address2,
    score: 50,
  },
  {
    displayName: address3,
    score: 27,
  },
  {
    displayName: address4,
    score: 25,
  },
  {
    displayName: address5,
    score: 25,
  },
  {
    displayName: address6,
    score: 25,
  },
  {
    displayName: address7,
    score: 24,
  },
  {
    displayName: address8,
    score: 23,
  },
  {
    displayName: address9,
    score: 22,
  },
  {
    displayName: address10,
    score: 20,
  },
];

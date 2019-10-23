/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface CounterContract extends Truffle.Contract<CounterInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<CounterInstance>;
}

export interface CounterInstance extends Truffle.ContractInstance {
  initialize: {
    (
      num: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      num: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      num: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      num: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  increaseCounter: {
    (
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  decreaseCounter: {
    (
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
  getCounter(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}
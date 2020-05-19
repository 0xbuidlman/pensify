import BN from 'bn.js';
import { Swap } from '@balancer-labs/sor/dist/types';
import Web3 from 'web3';

export interface GetTermsFunctionArgs {
  amountIn: string;
  tokenFrom: Address;
  tokenTo: Address;
  additionalSlippage: number;
  web3: Web3;
}

export type GetTermsFunction = (args: GetTermsFunctionArgs) => Promise<ProtocolTermsGeneric | null>;

export type Address = string;
export type Protocol = 'uniswap-v2' | 'balancer';

export interface ProtocolTermsGeneric<T extends Protocol = Protocol, A = any> {
  amountIn: string;
  minAmountOut: string;
  expectedSlippage: string;
  tokenFrom: Address;
  tokenTo: Address;
  type: T;
  args: A;
}

export type UniswapV2Terms = ProtocolTermsGeneric<
  'uniswap-v2',
  UniswapV2SwapExactTokensForTokensArgs
>;
export type BalancerTerms = ProtocolTermsGeneric<'balancer', BalancerBatchSwapExactInArgs>;

type ProtocolTerms = UniswapV2Terms | BalancerTerms;

export interface SwapTerms {
  from: ProtocolTerms | null;
  to: ProtocolTerms | null;
  amountIn: string;
  minAmountOut: BN | null;
  flashLoanFee: BN | null;
  gasPrice: BN | null;
  earn: BN | null;
}

type TokenInAddress = string;
type TokenOutAddress = string;
type AmountIn = string;
type MinAmountOut = string;

export type BalancerBatchSwapExactInArgs = [
  Swap[],
  TokenInAddress,
  TokenOutAddress,
  AmountIn,
  MinAmountOut,
];

type Path = string[];
type Account = string;
type DeadlineFromNow = number;

export type UniswapV2SwapExactTokensForTokensArgs = [
  AmountIn,
  MinAmountOut,
  Path,
  Account,
  DeadlineFromNow,
];
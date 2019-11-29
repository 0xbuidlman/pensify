import { CurveModuleInstance } from "../types/truffle-contracts/index";
// tslint:disable-next-line:no-var-requires
const {BN, constants, expectEvent, shouldFail } = require("@openzeppelin/test-helpers");
// tslint:disable-next-line:no-var-requires
const should = require("chai").should;
const expect = require("chai").expect;

const CurveModule = artifacts.require("CurveModule");

contract("CurveModule", async ([_, owner, ...otherAccounts]) => {
    let curveModule: CurveModuleInstance;
  
    beforeEach(async () => {
        curveModule = await CurveModule.new();
        let cm:any = curveModule;
        await cm.methods['initialize(address)'](owner, {from: owner});    //Workaround for typechain issue with method overloading
    });


});
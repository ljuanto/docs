---
title: Constants
---

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via `api.consts.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[claims](#claims)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[identity](#identity)**

- **[indices](#indices)**

- **[market](#market)**

- **[staking](#staking)**

- **[swork](#swork)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[tips](#tips)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**


___


## babe
 
### epochDuration: `u64`
- **interface**: `api.consts.babe.epochDuration`
- **summary**:   The number of **slots** that an epoch takes. We couple sessions to epochs, i.e. we start a new session once the new epoch begins. NOTE: Currently it is not possible to change the epoch duration after the chain has started. Attempting to do so will brick block production. 
 
### expectedBlockTime: `Moment`
- **interface**: `api.consts.babe.expectedBlockTime`
- **summary**:   The expected average block time at which BABE should be creating blocks. Since BABE is probabilistic it is not trivial to figure out what the expected average block time should be based on the slot duration and the security parameter `c` (where `1 - c` represents the probability of a slot being empty). 

___


## balances
 
### existentialDeposit: `Balance`
- **interface**: `api.consts.balances.existentialDeposit`
- **summary**:   The minimum amount required to keep an account open. 

___


## bounties
 
### bountyCuratorDeposit: `Permill`
- **interface**: `api.consts.bounties.bountyCuratorDeposit`
- **summary**:   Percentage of the curator fee that will be reserved upfront as deposit for bounty curator. 
 
### bountyDepositBase: `BalanceOf`
- **interface**: `api.consts.bounties.bountyDepositBase`
- **summary**:   The amount held on deposit for placing a bounty proposal. 
 
### bountyDepositPayoutDelay: `BlockNumber`
- **interface**: `api.consts.bounties.bountyDepositPayoutDelay`
- **summary**:   The delay period for which a bounty beneficiary need to wait before claim the payout. 
 
### bountyUpdatePeriod: `BlockNumber`
- **interface**: `api.consts.bounties.bountyUpdatePeriod`
- **summary**:   Bounty duration in blocks. 
 
### bountyValueMinimum: `BalanceOf`
- **interface**: `api.consts.bounties.bountyValueMinimum`
- **summary**:   Minimum value for a bounty. 
 
### dataDepositPerByte: `BalanceOf`
- **interface**: `api.consts.bounties.dataDepositPerByte`
- **summary**:   The amount held on deposit per byte within bounty description. 
 
### maximumReasonLength: `u32`
- **interface**: `api.consts.bounties.maximumReasonLength`
- **summary**:   Maximum acceptable reason length. 

___


## claims
 
### prefix: `Bytes`
- **interface**: `api.consts.claims.prefix`
- **summary**:   The Prefix that is used in signed Ethereum messages for this network 

___


## democracy
 
### cooloffPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.cooloffPeriod`
- **summary**:   Period in blocks where an external proposal may not be re-submitted after being vetoed. 
 
### enactmentPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.enactmentPeriod`
- **summary**:   The minimum period of locking and the period between a proposal being approved and enacted. 

  It should generally be a little more than the unstake period to ensure that voting stakers have an opportunity to remove themselves from the system in the case where they are on the losing side of a vote. 
 
### fastTrackVotingPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.fastTrackVotingPeriod`
- **summary**:   Minimum voting period allowed for an emergency referendum. 
 
### launchPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.launchPeriod`
- **summary**:   How often (in blocks) new public referenda are launched. 
 
### maxVotes: `u32`
- **interface**: `api.consts.democracy.maxVotes`
- **summary**:   The maximum number of votes for an account. 
 
### minimumDeposit: `BalanceOf`
- **interface**: `api.consts.democracy.minimumDeposit`
- **summary**:   The minimum amount to be used as a deposit for a public referendum proposal. 
 
### preimageByteDeposit: `BalanceOf`
- **interface**: `api.consts.democracy.preimageByteDeposit`
- **summary**:   The amount of balance that must be deposited per byte of preimage stored. 
 
### votingPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.votingPeriod`
- **summary**:   How often (in blocks) to check for new votes. 

___


## elections
 
### candidacyBond: `BalanceOf`
- **interface**: `api.consts.elections.candidacyBond`
 
### desiredMembers: `u32`
- **interface**: `api.consts.elections.desiredMembers`
 
### desiredRunnersUp: `u32`
- **interface**: `api.consts.elections.desiredRunnersUp`
 
### moduleId: `LockIdentifier`
- **interface**: `api.consts.elections.moduleId`
 
### termDuration: `BlockNumber`
- **interface**: `api.consts.elections.termDuration`
 
### votingBondBase: `BalanceOf`
- **interface**: `api.consts.elections.votingBondBase`
 
### votingBondFactor: `BalanceOf`
- **interface**: `api.consts.elections.votingBondFactor`

___


## identity
 
### basicDeposit: `BalanceOf`
- **interface**: `api.consts.identity.basicDeposit`
- **summary**:   The amount held on deposit for a registered identity. 
 
### fieldDeposit: `BalanceOf`
- **interface**: `api.consts.identity.fieldDeposit`
- **summary**:   The amount held on deposit per additional field for a registered identity. 
 
### maxAdditionalFields: `u32`
- **interface**: `api.consts.identity.maxAdditionalFields`
- **summary**:   Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O required to access an identity, but can be pretty high. 
 
### maxRegistrars: `u32`
- **interface**: `api.consts.identity.maxRegistrars`
- **summary**:   Maxmimum number of registrars allowed in the system. Needed to bound the complexity of, e.g., updating judgements. 
 
### maxSubAccounts: `u32`
- **interface**: `api.consts.identity.maxSubAccounts`
- **summary**:   The maximum number of sub-accounts allowed per identified account. 
 
### subAccountDeposit: `BalanceOf`
- **interface**: `api.consts.identity.subAccountDeposit`
- **summary**:   The amount held on deposit for a registered subaccount. This should account for the fact that one storage item's value will increase by the size of an account ID, and there will be another trie item whose value is the size of an account ID plus 32 bytes. 

___


## indices
 
### deposit: `BalanceOf`
- **interface**: `api.consts.indices.deposit`
- **summary**:   The deposit needed for reserving an index. 

___


## market
 
### fileDuration: `BlockNumber`
- **interface**: `api.consts.market.fileDuration`
- **summary**:   The file duration. 
 
### fileInitPrice: `BalanceOf`
- **interface**: `api.consts.market.fileInitPrice`
- **summary**:   The file init price after the chain start. 
 
### fileReplica: `u32`
- **interface**: `api.consts.market.fileReplica`
- **summary**:   The file base replica to get reward. 
 
### maximumFileSize: `u64`
- **interface**: `api.consts.market.maximumFileSize`
- **summary**:   The max file size of a file 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.market.moduleId`
- **summary**:   The market's module id, used for deriving its sovereign account ID. 
 
### renewRewardRatio: `Perbill`
- **interface**: `api.consts.market.renewRewardRatio`
- **summary**:   The renew reward ratio for liquidator. 
 
### stakingRatio: `Perbill`
- **interface**: `api.consts.market.stakingRatio`
- **summary**:   The staking ratio for how much CRU into staking pot. 
 
### storageDecreaseRatio: `Perbill`
- **interface**: `api.consts.market.storageDecreaseRatio`
- **summary**:   The storage decrease ratio for each file price change. 
 
### storageIncreaseRatio: `Perbill`
- **interface**: `api.consts.market.storageIncreaseRatio`
- **summary**:   The storage increase ratio for each file price change. 
 
### storageRatio: `Perbill`
- **interface**: `api.consts.market.storageRatio`
- **summary**:   The storage ratio for how much CRU into storage pot. 
 
### storageReferenceRatio: `(u128,u128)`
- **interface**: `api.consts.market.storageReferenceRatio`
- **summary**:   The storage reference ratio to adjust the file price. 
 
### usedTrashMaxSize: `u128`
- **interface**: `api.consts.market.usedTrashMaxSize`
- **summary**:   The max size of used trash. 

___


## staking
 
### authoringAndStakingRatio: `Perbill`
- **interface**: `api.consts.staking.authoringAndStakingRatio`
- **summary**:   Authoring and Staking ratio for market staking pot 
 
### bondingDuration: `EraIndex`
- **interface**: `api.consts.staking.bondingDuration`
- **summary**:   Number of eras that staked funds must remain bonded for. 
 
### marketStakingPotDuration: `u32`
- **interface**: `api.consts.staking.marketStakingPotDuration`
- **summary**:   Total era duration for once dsm staking pot. 
 
### maxGuarantorRewardedPerValidator: `u32`
- **interface**: `api.consts.staking.maxGuarantorRewardedPerValidator`
- **summary**:   The maximum number of guarantors rewarded for each validator. 

  For each validator only the `$MaxGuarantorRewardedPerValidator` biggest stakers can claim their reward. This used to limit the i/o cost for the guarantor payout. 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.staking.moduleId`
- **summary**:   The staking's module id, used for deriving its sovereign account ID. 
 
### sessionsPerEra: `SessionIndex`
- **interface**: `api.consts.staking.sessionsPerEra`
- **summary**:   Number of sessions per era. 
 
### slashDeferDuration: `EraIndex`
- **interface**: `api.consts.staking.slashDeferDuration`
- **summary**:   Number of eras that slashes are deferred by, after computation. 

  This should be less than the bonding duration. Set to 0 if slashes should be applied immediately, without opportunity for intervention. 
 
### sPowerRatio: `u128`
- **interface**: `api.consts.staking.sPowerRatio`
- **summary**:   Storage power ratio for crust network phase 1 

___


## swork
 
### maxGroupSize: `u32`
- **interface**: `api.consts.swork.maxGroupSize`
- **summary**:   The max number of members in one group 
 
### punishmentSlots: `u32`
- **interface**: `api.consts.swork.punishmentSlots`
- **summary**:   The punishment duration if someone offline 

___


## system
 
### blockHashCount: `BlockNumber`
- **interface**: `api.consts.system.blockHashCount`
- **summary**:   Maximum number of block number to block hash mappings to keep (oldest pruned first). 
 
### blockLength: `BlockLength`
- **interface**: `api.consts.system.blockLength`
- **summary**:   The maximum length of a block (in bytes). 
 
### blockWeights: `BlockWeights`
- **interface**: `api.consts.system.blockWeights`
- **summary**:   Block & extrinsics weights: base values and limits. 
 
### dbWeight: `RuntimeDbWeight`
- **interface**: `api.consts.system.dbWeight`
- **summary**:   The weight of runtime database operations the runtime can invoke. 
 
### ss58Prefix: `u8`
- **interface**: `api.consts.system.ss58Prefix`
- **summary**:   The designated SS85 prefix of this chain. 

  This replaces the "ss58Format" property declared in the chain spec. Reason is that the runtime should know about the prefix in order to make use of it as an identifier of the chain. 
 
### version: `RuntimeVersion`
- **interface**: `api.consts.system.version`
- **summary**:   Get the chain's current version. 

___


## timestamp
 
### minimumPeriod: `Moment`
- **interface**: `api.consts.timestamp.minimumPeriod`
- **summary**:   The minimum period between blocks. Beware that this is different to the *expected* period that the block production apparatus provides. Your chosen consensus system will generally work with this to determine a sensible block time. e.g. For Aura, it will be double this period on default settings. 

___


## tips
 
### dataDepositPerByte: `BalanceOf`
- **interface**: `api.consts.tips.dataDepositPerByte`
- **summary**:   The amount held on deposit per byte within the tip report reason. 
 
### maximumReasonLength: `u32`
- **interface**: `api.consts.tips.maximumReasonLength`
- **summary**:   Maximum acceptable reason length. 
 
### tipCountdown: `BlockNumber`
- **interface**: `api.consts.tips.tipCountdown`
- **summary**:   The period for which a tip remains open after is has achieved threshold tippers. 
 
### tipFindersFee: `Percent`
- **interface**: `api.consts.tips.tipFindersFee`
- **summary**:   The amount of the final tip which goes to the original reporter of the tip. 
 
### tipReportDepositBase: `BalanceOf`
- **interface**: `api.consts.tips.tipReportDepositBase`
- **summary**:   The amount held on deposit for placing a tip report. 

___


## transactionPayment
 
### transactionByteFee: `BalanceOf`
- **interface**: `api.consts.transactionPayment.transactionByteFee`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion. 
 
### weightToFee: `Vec<WeightToFeeCoefficient>`
- **interface**: `api.consts.transactionPayment.weightToFee`
- **summary**:   The polynomial that is applied in order to derive fee from weight. 

___


## treasury
 
### burn: `Permill`
- **interface**: `api.consts.treasury.burn`
- **summary**:   Percentage of spare funds (if any) that are burnt per spend period. 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.treasury.moduleId`
- **summary**:   The treasury's module id, used for deriving its sovereign account ID. 
 
### proposalBond: `Permill`
- **interface**: `api.consts.treasury.proposalBond`
- **summary**:   Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not. 
 
### proposalBondMinimum: `BalanceOf`
- **interface**: `api.consts.treasury.proposalBondMinimum`
- **summary**:   Minimum amount of funds that should be placed in a deposit for making a proposal. 
 
### spendPeriod: `BlockNumber`
- **interface**: `api.consts.treasury.spendPeriod`
- **summary**:   Period between successive spends. 

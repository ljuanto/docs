---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[balances](#balances)**

- **[benefits](#benefits)**

- **[bounties](#bounties)**

- **[candy](#candy)**

- **[claims](#claims)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[market](#market)**

- **[offences](#offences)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[swork](#swork)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[tips](#tips)**

- **[treasury](#treasury)**

- **[utility](#utility)**


___


## balances
 
### BalanceSet(`AccountId`, `Balance`, `Balance`)
- **interface**: `api.events.balances.BalanceSet.is`
- **summary**:   A balance was set by root. \[who, free, reserved\] 
 
### Deposit(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Deposit.is`
- **summary**:   Some amount was deposited (e.g. for transaction fees). \[who, deposit\] 
 
### DustLost(`AccountId`, `Balance`)
- **interface**: `api.events.balances.DustLost.is`
- **summary**:   An account was removed whose balance was non-zero but below ExistentialDeposit, resulting in an outright loss. \[account, balance\] 
 
### Endowed(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Endowed.is`
- **summary**:   An account was created with some free balance. \[account, free_balance\] 
 
### Reserved(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Reserved.is`
- **summary**:   Some balance was reserved (moved from free to reserved). \[who, value\] 
 
### ReserveRepatriated(`AccountId`, `AccountId`, `Balance`, `BalanceStatus`)
- **interface**: `api.events.balances.ReserveRepatriated.is`
- **summary**:   Some balance was moved from the reserve of the first account to the second account. Final argument indicates the destination balance type. \[from, to, balance, destination_status\] 
 
### Transfer(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.balances.Transfer.is`
- **summary**:   Transfer succeeded. \[from, to, value\] 
 
### Unreserved(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Unreserved.is`
- **summary**:   Some balance was unreserved (moved from reserved to free). \[who, value\] 

___


## benefits
 
### AddBenefitFundsSuccess(`AccountId`, `Balance`)
- **interface**: `api.events.benefits.AddBenefitFundsSuccess.is`
- **summary**:   Add benefit funds success. The first item is the account. The second item is the added benefit amount. 
 
### CutBenefitFundsSuccess(`AccountId`, `Balance`)
- **interface**: `api.events.benefits.CutBenefitFundsSuccess.is`
- **summary**:   Cut benefit funds success The first item is the account. The second item is the decreased benefit amount. 

___


## bounties
 
### BountyAwarded(`BountyIndex`, `AccountId`)
- **interface**: `api.events.bounties.BountyAwarded.is`
- **summary**:   A bounty is awarded to a beneficiary. \[index, beneficiary\] 
 
### BountyBecameActive(`BountyIndex`)
- **interface**: `api.events.bounties.BountyBecameActive.is`
- **summary**:   A bounty proposal is funded and became active. \[index\] 
 
### BountyCanceled(`BountyIndex`)
- **interface**: `api.events.bounties.BountyCanceled.is`
- **summary**:   A bounty is cancelled. \[index\] 
 
### BountyClaimed(`BountyIndex`, `Balance`, `AccountId`)
- **interface**: `api.events.bounties.BountyClaimed.is`
- **summary**:   A bounty is claimed by beneficiary. \[index, payout, beneficiary\] 
 
### BountyExtended(`BountyIndex`)
- **interface**: `api.events.bounties.BountyExtended.is`
- **summary**:   A bounty expiry is extended. \[index\] 
 
### BountyProposed(`BountyIndex`)
- **interface**: `api.events.bounties.BountyProposed.is`
- **summary**:   New bounty proposal. \[index\] 
 
### BountyRejected(`BountyIndex`, `Balance`)
- **interface**: `api.events.bounties.BountyRejected.is`
- **summary**:   A bounty proposal was rejected; funds were slashed. \[index, bond\] 

___


## candy
 
### CandyBurned(`AccountId`, `Balance`)
- **interface**: `api.events.candy.CandyBurned.is`
- **summary**:   Some assets were burned. \[from, balance\] 
 
### CandyIssued(`AccountId`, `Balance`)
- **interface**: `api.events.candy.CandyIssued.is`
- **summary**:   Some assets were issued. \[owner, total_supply\] 
 
### CandyTransferred(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.candy.CandyTransferred.is`
- **summary**:   Some assets were transferred. \[from, to, amount\] 

___


## claims
 
### BondEthSuccess(`AccountId`, `EthereumAddress`)
- **interface**: `api.events.claims.BondEthSuccess.is`
- **summary**:   Ethereum address was bonded to account. [who, ethereum_address] 
 
### Claimed(`AccountId`, `EthereumAddress`, `Balance`)
- **interface**: `api.events.claims.Claimed.is`
- **summary**:   Someone claimed some CRUs. [who, ethereum_address, amount] 
 
### MinerChanged(`AccountId`)
- **interface**: `api.events.claims.MinerChanged.is`
- **summary**:   Someone be the new Miner 
 
### MintSuccess(`EthereumTxHash`, `EthereumAddress`, `Balance`)
- **interface**: `api.events.claims.MintSuccess.is`
- **summary**:   Mint claims successfully 
 
### SetLimitSuccess(`Balance`)
- **interface**: `api.events.claims.SetLimitSuccess.is`
- **summary**:   Set limit successfully 
 
### SuperiorChanged(`AccountId`)
- **interface**: `api.events.claims.SuperiorChanged.is`
- **summary**:   Someone be the new Reviewer 

___


## council
 
### Approved(`Hash`)
- **interface**: `api.events.council.Approved.is`
- **summary**:   A motion was approved by the required threshold. \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **interface**: `api.events.council.Closed.is`
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **interface**: `api.events.council.Disapproved.is`
- **summary**:   A motion was not approved by the required threshold. \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **interface**: `api.events.council.Executed.is`
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **interface**: `api.events.council.MemberExecuted.is`
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **interface**: `api.events.council.Proposed.is`
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **interface**: `api.events.council.Voted.is`
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). \[account, proposal_hash, voted, yes, no\] 

___


## democracy
 
### Blacklisted(`Hash`)
- **interface**: `api.events.democracy.Blacklisted.is`
- **summary**:   A proposal \[hash\] has been blacklisted permanently. 
 
### Cancelled(`ReferendumIndex`)
- **interface**: `api.events.democracy.Cancelled.is`
- **summary**:   A referendum has been cancelled. \[ref_index\] 
 
### Delegated(`AccountId`, `AccountId`)
- **interface**: `api.events.democracy.Delegated.is`
- **summary**:   An account has delegated their vote to another account. \[who, target\] 
 
### Executed(`ReferendumIndex`, `bool`)
- **interface**: `api.events.democracy.Executed.is`
- **summary**:   A proposal has been enacted. \[ref_index, is_ok\] 
 
### ExternalTabled()
- **interface**: `api.events.democracy.ExternalTabled.is`
- **summary**:   An external proposal has been tabled. 
 
### NotPassed(`ReferendumIndex`)
- **interface**: `api.events.democracy.NotPassed.is`
- **summary**:   A proposal has been rejected by referendum. \[ref_index\] 
 
### Passed(`ReferendumIndex`)
- **interface**: `api.events.democracy.Passed.is`
- **summary**:   A proposal has been approved by referendum. \[ref_index\] 
 
### PreimageInvalid(`Hash`, `ReferendumIndex`)
- **interface**: `api.events.democracy.PreimageInvalid.is`
- **summary**:   A proposal could not be executed because its preimage was invalid. \[proposal_hash, ref_index\] 
 
### PreimageMissing(`Hash`, `ReferendumIndex`)
- **interface**: `api.events.democracy.PreimageMissing.is`
- **summary**:   A proposal could not be executed because its preimage was missing. \[proposal_hash, ref_index\] 
 
### PreimageNoted(`Hash`, `AccountId`, `Balance`)
- **interface**: `api.events.democracy.PreimageNoted.is`
- **summary**:   A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\] 
 
### PreimageReaped(`Hash`, `AccountId`, `Balance`, `AccountId`)
- **interface**: `api.events.democracy.PreimageReaped.is`
- **summary**:   A registered preimage was removed and the deposit collected by the reaper. \[proposal_hash, provider, deposit, reaper\] 
 
### PreimageUsed(`Hash`, `AccountId`, `Balance`)
- **interface**: `api.events.democracy.PreimageUsed.is`
- **summary**:   A proposal preimage was removed and used (the deposit was returned). \[proposal_hash, provider, deposit\] 
 
### Proposed(`PropIndex`, `Balance`)
- **interface**: `api.events.democracy.Proposed.is`
- **summary**:   A motion has been proposed by a public account. \[proposal_index, deposit\] 
 
### Started(`ReferendumIndex`, `VoteThreshold`)
- **interface**: `api.events.democracy.Started.is`
- **summary**:   A referendum has begun. \[ref_index, threshold\] 
 
### Tabled(`PropIndex`, `Balance`, `Vec<AccountId>`)
- **interface**: `api.events.democracy.Tabled.is`
- **summary**:   A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\] 
 
### Undelegated(`AccountId`)
- **interface**: `api.events.democracy.Undelegated.is`
- **summary**:   An \[account\] has cancelled a previous delegation operation. 
 
### Unlocked(`AccountId`)
- **interface**: `api.events.democracy.Unlocked.is`
- **summary**:   An \[account\] has been unlocked successfully. 
 
### Vetoed(`AccountId`, `Hash`, `BlockNumber`)
- **interface**: `api.events.democracy.Vetoed.is`
- **summary**:   An external proposal has been vetoed. \[who, proposal_hash, until\] 

___


## elections
 
### CandidateSlashed(`AccountId`, `Balance`)
- **interface**: `api.events.elections.CandidateSlashed.is`
- **summary**:   A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or runner-up. 

  Note that old members and runners-up are also candidates. 
 
### ElectionError()
- **interface**: `api.events.elections.ElectionError.is`
- **summary**:   Internal error happened while trying to perform election. 
 
### EmptyTerm()
- **interface**: `api.events.elections.EmptyTerm.is`
- **summary**:   No (or not enough) candidates existed for this round. This is different from `NewTerm(\[\])`. See the description of `NewTerm`. 
 
### MemberKicked(`AccountId`)
- **interface**: `api.events.elections.MemberKicked.is`
- **summary**:   A \[member\] has been removed. This should always be followed by either `NewTerm` or `EmptyTerm`. 
 
### NewTerm(`Vec<(AccountId,Balance)>`)
- **interface**: `api.events.elections.NewTerm.is`
- **summary**:   A new term with \[new_members\]. This indicates that enough candidates existed to run the election, not that enough have has been elected. The inner value must be examined for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to begin with. 
 
### Renounced(`AccountId`)
- **interface**: `api.events.elections.Renounced.is`
- **summary**:   Someone has renounced their candidacy. 
 
### SeatHolderSlashed(`AccountId`, `Balance`)
- **interface**: `api.events.elections.SeatHolderSlashed.is`
- **summary**:   A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set. 

___


## grandpa
 
### NewAuthorities(`AuthorityList`)
- **interface**: `api.events.grandpa.NewAuthorities.is`
- **summary**:   New authority set has been applied. \[authority_set\] 
 
### Paused()
- **interface**: `api.events.grandpa.Paused.is`
- **summary**:   Current authority set has been paused. 
 
### Resumed()
- **interface**: `api.events.grandpa.Resumed.is`
- **summary**:   Current authority set has been resumed. 

___


## identity
 
### IdentityCleared(`AccountId`, `Balance`)
- **interface**: `api.events.identity.IdentityCleared.is`
- **summary**:   A name was cleared, and the given balance returned. \[who, deposit\] 
 
### IdentityKilled(`AccountId`, `Balance`)
- **interface**: `api.events.identity.IdentityKilled.is`
- **summary**:   A name was removed and the given balance slashed. \[who, deposit\] 
 
### IdentitySet(`AccountId`)
- **interface**: `api.events.identity.IdentitySet.is`
- **summary**:   A name was set or reset (which will remove all judgements). \[who\] 
 
### JudgementGiven(`AccountId`, `RegistrarIndex`)
- **interface**: `api.events.identity.JudgementGiven.is`
- **summary**:   A judgement was given by a registrar. \[target, registrar_index\] 
 
### JudgementRequested(`AccountId`, `RegistrarIndex`)
- **interface**: `api.events.identity.JudgementRequested.is`
- **summary**:   A judgement was asked from a registrar. \[who, registrar_index\] 
 
### JudgementUnrequested(`AccountId`, `RegistrarIndex`)
- **interface**: `api.events.identity.JudgementUnrequested.is`
- **summary**:   A judgement request was retracted. \[who, registrar_index\] 
 
### RegistrarAdded(`RegistrarIndex`)
- **interface**: `api.events.identity.RegistrarAdded.is`
- **summary**:   A registrar was added. \[registrar_index\] 
 
### SubIdentityAdded(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.identity.SubIdentityAdded.is`
- **summary**:   A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\] 
 
### SubIdentityRemoved(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.identity.SubIdentityRemoved.is`
- **summary**:   A sub-identity was removed from an identity and the deposit freed. \[sub, main, deposit\] 
 
### SubIdentityRevoked(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.identity.SubIdentityRevoked.is`
- **summary**:   A sub-identity was cleared, and the given deposit repatriated from the main identity account to the sub-identity account. \[sub, main, deposit\] 

___


## imOnline
 
### AllGood()
- **interface**: `api.events.imOnline.AllGood.is`
- **summary**:   At the end of the session, no offence was committed. 
 
### HeartbeatReceived(`AuthorityId`)
- **interface**: `api.events.imOnline.HeartbeatReceived.is`
- **summary**:   A new heartbeat was received from `AuthorityId` \[authority_id\] 
 
### SomeOffline(`Vec<IdentificationTuple>`)
- **interface**: `api.events.imOnline.SomeOffline.is`
- **summary**:   At the end of the session, at least one validator was found to be \[offline\]. 

___


## indices
 
### IndexAssigned(`AccountId`, `AccountIndex`)
- **interface**: `api.events.indices.IndexAssigned.is`
- **summary**:   A account index was assigned. \[index, who\] 
 
### IndexFreed(`AccountIndex`)
- **interface**: `api.events.indices.IndexFreed.is`
- **summary**:   A account index has been freed up (unassigned). \[index\] 
 
### IndexFrozen(`AccountIndex`, `AccountId`)
- **interface**: `api.events.indices.IndexFrozen.is`
- **summary**:   A account index has been frozen to its current account ID. \[index, who\] 

___


## market
 
### AddCollateralSuccess(`AccountId`, `Balance`)
- **interface**: `api.events.market.AddCollateralSuccess.is`
- **summary**:   Add extra collateral for a merchant success. The first item is the account who is the merchant. The second item is the extra collateral amount of currency. 
 
### AddPrepaidSuccess(`AccountId`, `MerkleRoot`, `Balance`)
- **interface**: `api.events.market.AddPrepaidSuccess.is`
- **summary**:   Add prepaid value for an existed file success. The first item is the account who add the prepaid. The second item is the cid of the file. The third item is the prepaid amount of currency. 
 
### CalculateSuccess(`MerkleRoot`)
- **interface**: `api.events.market.CalculateSuccess.is`
- **summary**:   Calculate the reward for a file success. The first item is the cid of the file. 
 
### CutCollateralSuccess(`AccountId`, `Balance`)
- **interface**: `api.events.market.CutCollateralSuccess.is`
- **summary**:   Cut extra collateral for a merchant success. The first item is the account who is the merchant. The second item is the extra collateral amount of currency. 
 
### FileSuccess(`AccountId`, `MerkleRoot`)
- **interface**: `api.events.market.FileSuccess.is`
- **summary**:   Place a storage order success. The first item is the account who places the storage order. The second item is the cid of the file. 
 
### IllegalFileClosed(`MerkleRoot`)
- **interface**: `api.events.market.IllegalFileClosed.is`
- **summary**:   A file is closed due to mismatch file size. The first item is the cid of the file. 
 
### RegisterSuccess(`AccountId`, `Balance`)
- **interface**: `api.events.market.RegisterSuccess.is`
- **summary**:   Register to be a merchant success. The first item is the account who want to register. The second item is the collateral amount of currency. 
 
### RenewFileSuccess(`AccountId`, `MerkleRoot`)
- **interface**: `api.events.market.RenewFileSuccess.is`
- **summary**:   Renew an existed file success. The first item is the account who renew the storage order. The second item is the cid of the file. 
 
### RewardMerchantSuccess(`AccountId`)
- **interface**: `api.events.market.RewardMerchantSuccess.is`
- **summary**:   Reward the merchant success. The first item is the account of the merchant. 
 
### SetBaseFeeSuccess(`Balance`)
- **interface**: `api.events.market.SetBaseFeeSuccess.is`
- **summary**:   Set the file base fee success. 
 
### SetMarketSwitchSuccess(`bool`)
- **interface**: `api.events.market.SetMarketSwitchSuccess.is`
- **summary**:   Set the global market switch success. 

___


## offences
 
### Offence(`Kind`, `OpaqueTimeSlot`, `bool`)
- **interface**: `api.events.offences.Offence.is`
- **summary**:   There is an offence reported of the given `kind` happened at the `session_index` and (kind-specific) time slot. This event is not deposited for duplicate slashes. last element indicates of the offence was applied (true) or queued (false) \[kind, timeslot, applied\]. 

___


## scheduler
 
### Canceled(`BlockNumber`, `u32`)
- **interface**: `api.events.scheduler.Canceled.is`
- **summary**:   Canceled some task. \[when, index\] 
 
### Dispatched(`TaskAddress`, `Option<Bytes>`, `DispatchResult`)
- **interface**: `api.events.scheduler.Dispatched.is`
- **summary**:   Dispatched some task. \[task, id, result\] 
 
### Scheduled(`BlockNumber`, `u32`)
- **interface**: `api.events.scheduler.Scheduled.is`
- **summary**:   Scheduled some task. \[when, index\] 

___


## session
 
### NewSession(`SessionIndex`)
- **interface**: `api.events.session.NewSession.is`
- **summary**:   New session has happened. Note that the argument is the \[session_index\], not the block number as the type might suggest. 

___


## staking
 
### Bonded(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Bonded.is`
- **summary**:   An account has bonded this amount. [stash, amount] 

  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably, it will not be emitted for staking rewards when they are added to stake. 
 
### ChillSuccess(`AccountId`, `AccountId`)
- **interface**: `api.events.staking.ChillSuccess.is`
- **summary**:   An account has been chilled from its stash 
 
### CutGuaranteeSuccess(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.staking.CutGuaranteeSuccess.is`
- **summary**:   An account has called `cut_guarantee` and cut vote for one validator. 
 
### EraReward(`EraIndex`, `Balance`, `Balance`)
- **interface**: `api.events.staking.EraReward.is`
- **summary**:   Total reward at each era 
 
### GuaranteeSuccess(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.staking.GuaranteeSuccess.is`
- **summary**:   An account has called `guarantee` and vote for one validator. 
 
### NotEnoughCurrency(`EraIndex`, `Balance`, `Balance`)
- **interface**: `api.events.staking.NotEnoughCurrency.is`
- **summary**:   Staking pot is not enough 
 
### OldSlashingReportDiscarded(`SessionIndex`)
- **interface**: `api.events.staking.OldSlashingReportDiscarded.is`
- **summary**:   An old slashing report from a prior era was discarded because it could not be processed. 
 
### Reward(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Reward.is`
- **summary**:   All validators have been rewarded by the first balance; the second is the remainder from the maximum amount of reward. 
 
### Slash(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Slash.is`
- **summary**:   One validator (and its guarantors) has been slashed by the given amount. 
 
### Unbonded(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Unbonded.is`
- **summary**:   An account has unbonded this amount. [stash, amount] 
 
### UpdateIdentitiesSuccess(`EraIndex`)
- **interface**: `api.events.staking.UpdateIdentitiesSuccess.is`
- **summary**:   Update the identities success. The stake limit of each identity would be updated. 
 
### ValidateSuccess(`AccountId`, `ValidatorPrefs`)
- **interface**: `api.events.staking.ValidateSuccess.is`
- **summary**:   An account has called `validate` and set guarantee fee. 
 
### Withdrawn(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Withdrawn.is`
- **summary**:   An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance` from the unlocking queue. [stash, amount] 

___


## sudo
 
### KeyChanged(`AccountId`)
- **interface**: `api.events.sudo.KeyChanged.is`
- **summary**:   The \[sudoer\] just switched identity; the old key is supplied. 
 
### Sudid(`DispatchResult`)
- **interface**: `api.events.sudo.Sudid.is`
- **summary**:   A sudo just took place. \[result\] 
 
### SudoAsDone(`DispatchResult`)
- **interface**: `api.events.sudo.SudoAsDone.is`
- **summary**:   A sudo just took place. \[result\] 

___


## swork
 
### ABUpgradeSuccess(`AccountId`, `SworkerPubKey`, `SworkerPubKey`)
- **interface**: `api.events.swork.ABUpgradeSuccess.is`
- **summary**:   AB upgrade success. The first item is the account who're doing AB upgrade. The second item is the pub key of the previous(A) sWorker. The third item is the pub key of the latest(B) sWorker. 
 
### CancelPunishmentSuccess(`AccountId`)
- **interface**: `api.events.swork.CancelPunishmentSuccess.is`
- **summary**:   Cancel the punishment success. 
 
### CreateGroupSuccess(`AccountId`)
- **interface**: `api.events.swork.CreateGroupSuccess.is`
- **summary**:   Create the group success. The first item is the group owner's account. 
 
### JoinGroupSuccess(`AccountId`, `AccountId`)
- **interface**: `api.events.swork.JoinGroupSuccess.is`
- **summary**:   Join the group success. The first item is the member's account. The second item is the group owner's account. 
 
### KickOutSuccess(`AccountId`)
- **interface**: `api.events.swork.KickOutSuccess.is`
- **summary**:   Kick some one out of the group. The first item is the member's account. 
 
### QuitGroupSuccess(`AccountId`, `AccountId`)
- **interface**: `api.events.swork.QuitGroupSuccess.is`
- **summary**:   Quit the group success. The first item is the member's account. The second item is the group owner's account. 
 
### RegisterSuccess(`AccountId`, `SworkerPubKey`)
- **interface**: `api.events.swork.RegisterSuccess.is`
- **summary**:   sWorker registration success. The first item is the account who try to register. The second item is the pub key of the sWorker. 
 
### SetCodeSuccess(`SworkerCode`, `BlockNumber`)
- **interface**: `api.events.swork.SetCodeSuccess.is`
- **summary**:   Set code success. The first item is the enclave code. The second item is the expired block number. 
 
### WorksReportSuccess(`AccountId`, `SworkerPubKey`)
- **interface**: `api.events.swork.WorksReportSuccess.is`
- **summary**:   Send the work report success. The first item is the account who send the work report The second item is the pub key of the sWorker. 

___


## system
 
### CodeUpdated()
- **interface**: `api.events.system.CodeUpdated.is`
- **summary**:   `:code` was updated. 
 
### ExtrinsicFailed(`DispatchError`, `DispatchInfo`)
- **interface**: `api.events.system.ExtrinsicFailed.is`
- **summary**:   An extrinsic failed. \[error, info\] 
 
### ExtrinsicSuccess(`DispatchInfo`)
- **interface**: `api.events.system.ExtrinsicSuccess.is`
- **summary**:   An extrinsic completed successfully. \[info\] 
 
### KilledAccount(`AccountId`)
- **interface**: `api.events.system.KilledAccount.is`
- **summary**:   An \[account\] was reaped. 
 
### NewAccount(`AccountId`)
- **interface**: `api.events.system.NewAccount.is`
- **summary**:   A new \[account\] was created. 

___


## technicalCommittee
 
### Approved(`Hash`)
- **interface**: `api.events.technicalCommittee.Approved.is`
- **summary**:   A motion was approved by the required threshold. \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **interface**: `api.events.technicalCommittee.Closed.is`
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **interface**: `api.events.technicalCommittee.Disapproved.is`
- **summary**:   A motion was not approved by the required threshold. \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **interface**: `api.events.technicalCommittee.Executed.is`
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **interface**: `api.events.technicalCommittee.MemberExecuted.is`
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **interface**: `api.events.technicalCommittee.Proposed.is`
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **interface**: `api.events.technicalCommittee.Voted.is`
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). \[account, proposal_hash, voted, yes, no\] 

___


## technicalMembership
 
### Dummy(`PhantomData`)
- **interface**: `api.events.technicalMembership.Dummy.is`
- **summary**:   Phantom member, never used. 
 
### KeyChanged()
- **interface**: `api.events.technicalMembership.KeyChanged.is`
- **summary**:   One of the members' keys changed. 
 
### MemberAdded()
- **interface**: `api.events.technicalMembership.MemberAdded.is`
- **summary**:   The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **interface**: `api.events.technicalMembership.MemberRemoved.is`
- **summary**:   The given member was removed; see the transaction for who. 
 
### MembersReset()
- **interface**: `api.events.technicalMembership.MembersReset.is`
- **summary**:   The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **interface**: `api.events.technicalMembership.MembersSwapped.is`
- **summary**:   Two members were swapped; see the transaction for who. 

___


## tips
 
### NewTip(`Hash`)
- **interface**: `api.events.tips.NewTip.is`
- **summary**:   A new tip suggestion has been opened. \[tip_hash\] 
 
### TipClosed(`Hash`, `AccountId`, `Balance`)
- **interface**: `api.events.tips.TipClosed.is`
- **summary**:   A tip suggestion has been closed. \[tip_hash, who, payout\] 
 
### TipClosing(`Hash`)
- **interface**: `api.events.tips.TipClosing.is`
- **summary**:   A tip suggestion has reached threshold and is closing. \[tip_hash\] 
 
### TipRetracted(`Hash`)
- **interface**: `api.events.tips.TipRetracted.is`
- **summary**:   A tip suggestion has been retracted. \[tip_hash\] 
 
### TipSlashed(`Hash`, `AccountId`, `Balance`)
- **interface**: `api.events.tips.TipSlashed.is`
- **summary**:   A tip suggestion has been slashed. \[tip_hash, finder, deposit\] 

___


## treasury
 
### Awarded(`ProposalIndex`, `Balance`, `AccountId`)
- **interface**: `api.events.treasury.Awarded.is`
- **summary**:   Some funds have been allocated. \[proposal_index, award, beneficiary\] 
 
### Burnt(`Balance`)
- **interface**: `api.events.treasury.Burnt.is`
- **summary**:   Some of our funds have been burnt. \[burn\] 
 
### Deposit(`Balance`)
- **interface**: `api.events.treasury.Deposit.is`
- **summary**:   Some funds have been deposited. \[deposit\] 
 
### Proposed(`ProposalIndex`)
- **interface**: `api.events.treasury.Proposed.is`
- **summary**:   New proposal. \[proposal_index\] 
 
### Rejected(`ProposalIndex`, `Balance`)
- **interface**: `api.events.treasury.Rejected.is`
- **summary**:   A proposal was rejected; funds were slashed. \[proposal_index, slashed\] 
 
### Rollover(`Balance`)
- **interface**: `api.events.treasury.Rollover.is`
- **summary**:   Spending has finished; this is the amount that rolls over until next spend. \[budget_remaining\] 
 
### Spending(`Balance`)
- **interface**: `api.events.treasury.Spending.is`
- **summary**:   We have ended a spend period and will now allocate funds. \[budget_remaining\] 

___


## utility
 
### BatchCompleted()
- **interface**: `api.events.utility.BatchCompleted.is`
- **summary**:   Batch of dispatches completed fully with no error. 
 
### BatchInterrupted(`u32`, `DispatchError`)
- **interface**: `api.events.utility.BatchInterrupted.is`
- **summary**:   Batch of dispatches did not complete fully. Index of first failing dispatch given, as well as the error. \[index, error\] 

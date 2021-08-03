---
title: Extrinsics
---

The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[benefits](#benefits)**

- **[claims](#claims)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[locks](#locks)**

- **[market](#market)**

- **[multisig](#multisig)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[swork](#swork)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**

- **[utility](#utility)**


___


## authorship
 
### setUncles(new_uncles: `Vec<Header>`)
- **interface**: `api.tx.authorship.setUncles`
- **summary**:   Provide a set of uncles. 

___


## babe
 
### reportEquivocation(equivocation_proof: `BabeEquivocationProof`, key_owner_proof: `KeyOwnerProof`)
- **interface**: `api.tx.babe.reportEquivocation`
- **summary**:   Report authority equivocation/misbehavior. This method will verify the equivocation proof and validate the given key ownership proof against the extracted offender. If both are valid, the offence will be reported. 
 
### reportEquivocationUnsigned(equivocation_proof: `BabeEquivocationProof`, key_owner_proof: `KeyOwnerProof`)
- **interface**: `api.tx.babe.reportEquivocationUnsigned`
- **summary**:   Report authority equivocation/misbehavior. This method will verify the equivocation proof and validate the given key ownership proof against the extracted offender. If both are valid, the offence will be reported. This extrinsic must be called unsigned and it is expected that only block authors will call it (validated in `ValidateUnsigned`), as such if the block author is defined it will be defined as the equivocation reporter. 

___


## balances
 
### forceTransfer(source: `LookupSource`, dest: `LookupSource`, value: `Compact<Balance>`)
- **interface**: `api.tx.balances.forceTransfer`
- **summary**:   Exactly as `transfer`, except the origin must be root and the source account may be specified.  
 
### setBalance(who: `LookupSource`, new_free: `Compact<Balance>`, new_reserved: `Compact<Balance>`)
- **interface**: `api.tx.balances.setBalance`
- **summary**:   Set the balances of a given account. 

  This will alter `FreeBalance` and `ReservedBalance` in storage. it will also decrease the total issuance of the system (`TotalIssuance`). If the new free or reserved balance is below the existential deposit, it will reset the account nonce (`frame_system::AccountNonce`). 

  The dispatch origin for this call is `root`. 

   

___


## benefits
 
### addBenefitFunds(value: `Compact<BalanceOf>`, funds_type: `FundsType`)
- **interface**: `api.tx.benefits.addBenefitFunds`
- **summary**:   Add benefit funds 
 
### cutBenefitFunds(value: `Compact<BalanceOf>`, funds_type: `FundsType`)
- **interface**: `api.tx.benefits.cutBenefitFunds`
- **summary**:   Cut benefit funds 
 
### rebondBenefitFunds(value: `Compact<BalanceOf>`, funds_type: `FundsType`)
- **interface**: `api.tx.benefits.rebondBenefitFunds`
- **summary**:   Withdraw benefit funds 
 
### withdrawBenefitFunds()
- **interface**: `api.tx.benefits.withdrawBenefitFunds`
- **summary**:   Withdraw benefit funds 

___


## claims
 
### changeMiner(new_miner: `LookupSource`)
- **interface**: `api.tx.claims.changeMiner`
- **summary**:   Change miner 

  The dispatch origin for this call must be _Root_. 

  Parameters: 

  - `new_miner`: The new miner's address
 
### changeSuperior(new_superior: `LookupSource`)
- **interface**: `api.tx.claims.changeSuperior`
- **summary**:   Change superior 

  The dispatch origin for this call must be _Root_. 

  Parameter: 

  - `new_superior`: The new superior's address
 
### claim(dest: `AccountId`, tx: `EthereumTxHash`, sig: `EcdsaSignature`)
- **interface**: `api.tx.claims.claim`
 
### initPot(amount: `BalanceOf`)
- **interface**: `api.tx.claims.initPot`
- **summary**:   Init claim pot 

  This dispatch origin for this call must be _Root_. 

  Parameter: 

  - `amount`: The amount set for the claim pot
 
### mintClaim(tx: `EthereumTxHash`, who: `EthereumAddress`, value: `BalanceOf`)
- **interface**: `api.tx.claims.mintClaim`
- **summary**:   Mint the claim 

  This dispatch origin for this call must be _Miner_. 

  Parameters: 

  - `tx`: The claim ethereum tx hash

  - `who`: The claimer ethereum address

  - `value`: The amount of this tx, should be less than claim_limit
 
### setClaimLimit(limit: `BalanceOf`)
- **interface**: `api.tx.claims.setClaimLimit`
- **summary**:   Set claim limit 

  The dispatch origin for this call must be _Superior_. 

  Parameters: 

  - `limit`: The claim CRUs limit

___


## grandpa
 
### noteStalled(delay: `BlockNumber`, best_finalized_block_number: `BlockNumber`)
- **interface**: `api.tx.grandpa.noteStalled`
- **summary**:   Note that the current authority set of the GRANDPA finality gadget has stalled. This will trigger a forced authority set change at the beginning of the next session, to be enacted `delay` blocks after that. The delay should be high enough to safely assume that the block signalling the forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters will start the new authority set using the given finalized block as base. Only callable by root. 
 
### reportEquivocation(equivocation_proof: `GrandpaEquivocationProof`, key_owner_proof: `KeyOwnerProof`)
- **interface**: `api.tx.grandpa.reportEquivocation`
- **summary**:   Report voter equivocation/misbehavior. This method will verify the equivocation proof and validate the given key ownership proof against the extracted offender. If both are valid, the offence will be reported. 
 
### reportEquivocationUnsigned(equivocation_proof: `GrandpaEquivocationProof`, key_owner_proof: `KeyOwnerProof`)
- **interface**: `api.tx.grandpa.reportEquivocationUnsigned`
- **summary**:   Report voter equivocation/misbehavior. This method will verify the equivocation proof and validate the given key ownership proof against the extracted offender. If both are valid, the offence will be reported. 

  This extrinsic must be called unsigned and it is expected that only block authors will call it (validated in `ValidateUnsigned`), as such if the block author is defined it will be defined as the equivocation reporter. 

___


## identity
 
### addRegistrar(account: `AccountId`)
- **interface**: `api.tx.identity.addRegistrar`
- **summary**:   Add a registrar to the system. 

  The dispatch origin for this call must be `T::RegistrarOrigin`. 

  - `account`: the account of the registrar. 

  Emits `RegistrarAdded` if successful. 

   
 
### addSub(sub: `LookupSource`, data: `Data`)
- **interface**: `api.tx.identity.addSub`
- **summary**:   Add the given account to the sender's subs. 

  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated to the sender. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered sub identity of `sub`. 
 
### cancelRequest(reg_index: `RegistrarIndex`)
- **interface**: `api.tx.identity.cancelRequest`
- **summary**:   Cancel a previous request. 

  Payment: A previously reserved deposit is returned on success. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  - `reg_index`: The index of the registrar whose judgement is no longer requested. 

  Emits `JudgementUnrequested` if successful. 

   
 
### clearIdentity()
- **interface**: `api.tx.identity.clearIdentity`
- **summary**:   Clear an account's identity info and all sub-accounts and return all deposits. 

  Payment: All reserved balances on the account are returned. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  Emits `IdentityCleared` if successful. 

   
 
### killIdentity(target: `LookupSource`)
- **interface**: `api.tx.identity.killIdentity`
- **summary**:   Remove an account's identity and sub-account information and slash the deposits. 

  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by `Slash`. Verification request deposits are not returned; they should be cancelled manually using `cancel_request`. 

  The dispatch origin for this call must match `T::ForceOrigin`. 

  - `target`: the account whose identity the judgement is upon. This must be an account   with a registered identity. 

  Emits `IdentityKilled` if successful. 

   
 
### provideJudgement(reg_index: `Compact<RegistrarIndex>`, target: `LookupSource`, judgement: `IdentityJudgement`)
- **interface**: `api.tx.identity.provideJudgement`
- **summary**:   Provide a judgement for an account's identity. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `reg_index`. 

  - `reg_index`: the index of the registrar whose judgement is being made. 

  - `target`: the account whose identity the judgement is upon. This must be an account  with a registered identity. 

  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.

  Emits `JudgementGiven` if successful. 

   
 
### quitSub()
- **interface**: `api.tx.identity.quitSub`
- **summary**:   Remove the sender as a sub-account. 

  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated to the sender (*not* the original depositor). 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered super-identity. 

  NOTE: This should not normally be used, but is provided in the case that the non- controller of an account is maliciously registered as a sub-account. 
 
### removeSub(sub: `LookupSource`)
- **interface**: `api.tx.identity.removeSub`
- **summary**:   Remove the given account from the sender's subs. 

  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated to the sender. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered sub identity of `sub`. 
 
### renameSub(sub: `LookupSource`, data: `Data`)
- **interface**: `api.tx.identity.renameSub`
- **summary**:   Alter the associated name of the given sub-account. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered sub identity of `sub`. 
 
### requestJudgement(reg_index: `Compact<RegistrarIndex>`, max_fee: `Compact<BalanceOf>`)
- **interface**: `api.tx.identity.requestJudgement`
- **summary**:   Request a judgement from a registrar. 

  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement given. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  - `reg_index`: The index of the registrar whose judgement is requested. 

  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:

  ```nocompile Self::registrars().get(reg_index).unwrap().fee ``` 

  Emits `JudgementRequested` if successful. 

   
 
### setAccountId(index: `Compact<RegistrarIndex>`, new: `AccountId`)
- **interface**: `api.tx.identity.setAccountId`
- **summary**:   Change the account associated with a registrar. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `index`. 

  - `index`: the index of the registrar whose fee is to be set. 

  - `new`: the new account ID.

   
 
### setFee(index: `Compact<RegistrarIndex>`, fee: `Compact<BalanceOf>`)
- **interface**: `api.tx.identity.setFee`
- **summary**:   Set the fee required for a judgement to be requested from a registrar. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `index`. 

  - `index`: the index of the registrar whose fee is to be set. 

  - `fee`: the new fee.

   
 
### setFields(index: `Compact<RegistrarIndex>`, fields: `IdentityFields`)
- **interface**: `api.tx.identity.setFields`
- **summary**:   Set the field information for a registrar. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `index`. 

  - `index`: the index of the registrar whose fee is to be set. 

  - `fields`: the fields that the registrar concerns themselves with.

   
 
### setIdentity(info: `IdentityInfo`)
- **interface**: `api.tx.identity.setIdentity`
- **summary**:   Set an account's identity information and reserve the appropriate deposit. 

  If the account already has identity information, the deposit is taken as part payment for the new deposit. 

  The dispatch origin for this call must be _Signed_. 

  - `info`: The identity information. 

  Emits `IdentitySet` if successful. 

   
 
### setSubs(subs: `Vec<(AccountId,Data)>`)
- **interface**: `api.tx.identity.setSubs`
- **summary**:   Set the sub-accounts of the sender. 

  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned and an amount `SubAccountDeposit` will be reserved for each item in `subs`. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  - `subs`: The identity's (new) sub-accounts. 

   

___


## imOnline
 
### heartbeat(heartbeat: `Heartbeat`, _signature: `Signature`)
- **interface**: `api.tx.imOnline.heartbeat`
- **summary**:    

___


## indices
 
### claim(index: `AccountIndex`)
- **interface**: `api.tx.indices.claim`
- **summary**:   Assign an previously unassigned index. 

  Payment: `Deposit` is reserved from the sender account. 

  The dispatch origin for this call must be _Signed_. 

  - `index`: the index to be claimed. This must not be in use. 

  Emits `IndexAssigned` if successful. 

   
 
### forceTransfer(new: `AccountId`, index: `AccountIndex`, freeze: `bool`)
- **interface**: `api.tx.indices.forceTransfer`
- **summary**:   Force an index to an account. This doesn't require a deposit. If the index is already held, then any deposit is reimbursed to its current owner. 

  The dispatch origin for this call must be _Root_. 

  - `index`: the index to be (re-)assigned. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.

  Emits `IndexAssigned` if successful. 

   
 
### free(index: `AccountIndex`)
- **interface**: `api.tx.indices.free`
- **summary**:   Free up an index owned by the sender. 

  Payment: Any previous deposit placed for the index is unreserved in the sender account. 

  The dispatch origin for this call must be _Signed_ and the sender must own the index. 

  - `index`: the index to be freed. This must be owned by the sender. 

  Emits `IndexFreed` if successful. 

   
 
### freeze(index: `AccountIndex`)
- **interface**: `api.tx.indices.freeze`
- **summary**:   Freeze an index so it will always point to the sender account. This consumes the deposit. 

  The dispatch origin for this call must be _Signed_ and the signing account must have a non-frozen account `index`. 

  - `index`: the index to be frozen in place. 

  Emits `IndexFrozen` if successful. 

   
 
### transfer(new: `AccountId`, index: `AccountIndex`)
- **interface**: `api.tx.indices.transfer`
- **summary**:   Assign an index already owned by the sender to another account. The balance reservation is effectively transferred to the new account. 

  The dispatch origin for this call must be _Signed_. 

  - `index`: the index to be re-assigned. This must be owned by the sender. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  Emits `IndexAssigned` if successful. 

   

___


## locks
 
### setUnlockFrom(date: `BlockNumber`)
- **interface**: `api.tx.locks.setUnlockFrom`
- **summary**:   Set the global start date It can only be set once 
 
### unlock()
- **interface**: `api.tx.locks.unlock`
- **summary**:   Unlock the CRU18 or CRU24 one period 

___


## market
 
### addPrepaid(cid: `MerkleRoot`, amount: `Compact<BalanceOf>`)
- **interface**: `api.tx.market.addPrepaid`
- **summary**:   Add prepaid amount of currency for this file. If this file has prepaid value and enough for a new storage order, it can be renewed by anyone. 
 
### calculateReward(cid: `MerkleRoot`)
- **interface**: `api.tx.market.calculateReward`
- **summary**:   Calculate the reward for a file 
 
### placeStorageOrder(cid: `MerkleRoot`, reported_file_size: `u64`, tips: `Compact<BalanceOf>`, _memo: `Bytes`)
- **interface**: `api.tx.market.placeStorageOrder`
- **summary**:   Place a storage order. The cid and file_size of this file should be provided. Extra tips is accepted. 
 
### rewardMerchant()
- **interface**: `api.tx.market.rewardMerchant`
- **summary**:   Reward a merchant 
 
### setBaseFee(base_fee: `Compact<BalanceOf>`)
- **interface**: `api.tx.market.setBaseFee`
- **summary**:   Set the file base fee 

  The dispatch origin for this call must be _Root_. 
 
### setEnableMarket(is_enabled: `bool`)
- **interface**: `api.tx.market.setEnableMarket`
- **summary**:   Open/Close market service 

  The dispatch origin for this call must be _Root_. 

___


## multisig
 
### approveAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId>`, maybe_timepoint: `Option<Timepoint>`, call_hash: `[u8;32]`, max_weight: `Weight`)
- **interface**: `api.tx.multisig.approveAsMulti`
- **summary**:   Register approval for a dispatch to be made from a deterministic composite account if approved by a total of `threshold - 1` of `other_signatories`. 

  Payment: `DepositBase` will be reserved if this is the first approval, plus `threshold` times `DepositFactor`. It is returned once this dispatch happens or is cancelled. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it isnot the first approval, then it must be `Some`, with the timepoint (block number and transaction index) of the first approval transaction. 

  - `call_hash`: The hash of the call to be executed.

  NOTE: If this is the final approval, you will want to use `as_multi` instead. 

   
 
### asMulti(threshold: `u16`, other_signatories: `Vec<AccountId>`, maybe_timepoint: `Option<Timepoint>`, call: `OpaqueCall`, store_call: `bool`, max_weight: `Weight`)
- **interface**: `api.tx.multisig.asMulti`
- **summary**:   Register approval for a dispatch to be made from a deterministic composite account if approved by a total of `threshold - 1` of `other_signatories`. 

  If there are enough, then dispatch the call. 

  Payment: `DepositBase` will be reserved if this is the first approval, plus `threshold` times `DepositFactor`. It is returned once this dispatch happens or is cancelled. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it isnot the first approval, then it must be `Some`, with the timepoint (block number and transaction index) of the first approval transaction. 

  - `call`: The call to be executed.

  NOTE: Unless this is the final approval, you will generally want to use `approve_as_multi` instead, since it only requires a hash of the call. 

  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise on success, result is `Ok` and the result from the interior call, if it was executed, may be found in the deposited `MultisigExecuted` event. 

   
 
### asMultiThreshold1(other_signatories: `Vec<AccountId>`, call: `Call`)
- **interface**: `api.tx.multisig.asMultiThreshold1`
- **summary**:   Immediately dispatch a multi-signature call using a single approval from the caller. 

  The dispatch origin for this call must be _Signed_. 

  - `other_signatories`: The accounts (other than the sender) who are part of the multi-signature, but do not participate in the approval process. 

  - `call`: The call to be executed.

  Result is equivalent to the dispatched result. 

   
 
### cancelAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId>`, timepoint: `Timepoint`, call_hash: `[u8;32]`)
- **interface**: `api.tx.multisig.cancelAsMulti`
- **summary**:   Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously for this operation will be unreserved on success. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `timepoint`: The timepoint (block number and transaction index) of the first approvaltransaction for this dispatch. 

  - `call_hash`: The hash of the call to be executed.

   

___


## scheduler
 
### cancel(when: `BlockNumber`, index: `u32`)
- **interface**: `api.tx.scheduler.cancel`
- **summary**:   Cancel an anonymously scheduled task. 

   
 
### cancelNamed(id: `Bytes`)
- **interface**: `api.tx.scheduler.cancelNamed`
- **summary**:   Cancel a named scheduled task. 

   
 
### schedule(when: `BlockNumber`, maybe_periodic: `Option<Period>`, priority: `Priority`, call: `Call`)
- **interface**: `api.tx.scheduler.schedule`
- **summary**:   Anonymously schedule a task. 

   
 
### scheduleAfter(after: `BlockNumber`, maybe_periodic: `Option<Period>`, priority: `Priority`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleAfter`
- **summary**:   Anonymously schedule a task after a delay. 

   
 
### scheduleNamed(id: `Bytes`, when: `BlockNumber`, maybe_periodic: `Option<Period>`, priority: `Priority`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleNamed`
- **summary**:   Schedule a named task. 

   
 
### scheduleNamedAfter(id: `Bytes`, after: `BlockNumber`, maybe_periodic: `Option<Period>`, priority: `Priority`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleNamedAfter`
- **summary**:   Schedule a named task after a delay. 

   

___


## session
 
### purgeKeys()
- **interface**: `api.tx.session.purgeKeys`
- **summary**:   Removes any session key(s) of the function caller. This doesn't take effect until the next session. 

  The dispatch origin of this function must be signed. 

   
 
### setKeys(keys: `Keys`, proof: `Bytes`)
- **interface**: `api.tx.session.setKeys`
- **summary**:   Sets the session key(s) of the function caller to `keys`. Allows an account to set its session key prior to becoming a validator. This doesn't take effect until the next session. 

  The dispatch origin of this function must be signed. 

   

___


## staking
 
### bond(controller: `LookupSource`, value: `Compact<BalanceOf>`, payee: `RewardDestination`)
- **interface**: `api.tx.staking.bond`
- **summary**:   Take the origin account as a stash and lock up `value` of its balance. `controller` will be the account that controls it. 

  `value` must be more than the `minimum_balance` specified by `T::Currency`. 

  The dispatch origin for this call must be _Signed_ by the stash account. 

  Emits `Bonded`. 

   
 
### bondExtra(max_additional: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.bondExtra`
- **summary**:   Add some extra amount that have appeared in the stash `free_balance` into the balance up for staking. 

  Use this if there are additional funds in your stash account that you wish to bond. Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount that can be added. 

  The dispatch origin for this call must be _Signed_ by the stash, not the controller and it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Bonded`. 

   
 
### cancelDeferredSlash(era: `EraIndex`, slash_indices: `Vec<u32>`)
- **interface**: `api.tx.staking.cancelDeferredSlash`
- **summary**:   Cancel enactment of a deferred slash. 

  Can be called by the `T::SlashCancelOrigin`. 

  Parameters: era and indices of the slashes for that era to kill. 

   
 
### chill()
- **interface**: `api.tx.staking.chill`
- **summary**:   Declare no desire to either validate or guarantee. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   
 
### cutGuarantee(target: `(LookupSource,BalanceOf)`)
- **interface**: `api.tx.staking.cutGuarantee`
- **summary**:   Declare the desire to cut guarantee for the origin controller. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   
 
### forceNewEra()
- **interface**: `api.tx.staking.forceNewEra`
- **summary**:   Force there to be a new era at the end of the next session. After this, it will be reset to normal (non-forced) behaviour. 

  The dispatch origin must be Root. 

   
 
### forceNewEraAlways()
- **interface**: `api.tx.staking.forceNewEraAlways`
- **summary**:   Force there to be a new era at the end of sessions indefinitely. 

  The dispatch origin must be Root. 

   
 
### forceNoEras()
- **interface**: `api.tx.staking.forceNoEras`
- **summary**:   Force there to be no new eras indefinitely. 

  The dispatch origin must be Root. 

   
 
### forceUnstake(stash: `AccountId`)
- **interface**: `api.tx.staking.forceUnstake`
- **summary**:   Force a current staker to become completely unstaked, immediately. 

  The dispatch origin must be Root. 

   
 
### guarantee(target: `(LookupSource,BalanceOf)`)
- **interface**: `api.tx.staking.guarantee`
- **summary**:   Declare the desire to guarantee `targets` for the origin controller. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   
 
### increaseValidatorCount(additional: `Compact<u32>`)
- **interface**: `api.tx.staking.increaseValidatorCount`
- **summary**:   Increments the ideal number of validators. 

  The dispatch origin must be Root. 

   
 
### reapStash(stash: `AccountId`)
- **interface**: `api.tx.staking.reapStash`
- **summary**:   Remove all data structure concerning a staker/stash once its balance is zero. This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone and the target `stash` must have no funds left. 

  This can be called from any origin. 

  - `stash`: The stash account to reap. Its balance must be zero. 

   
 
### rebond(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.rebond`
- **summary**:   Rebond a portion of the stash scheduled to be unlocked. 

  The dispatch origin must be signed by the controller, and it can be only called when [`EraElectionStatus`] is `Closed`. 

   
 
### rewardStakers(validator_stash: `AccountId`, era: `EraIndex`)
- **interface**: `api.tx.staking.rewardStakers`
- **summary**:   Pay out all the stakers behind a single validator for a single era. 

  - `validator_stash` is the stash account of the validator. Their guarantors, up to   `T::MaxGuarantorRewardedPerValidator`, will also receive their rewards. 

  - `era` may be any era between `[current_era - history_depth; current_era]`.

  The origin of this call must be _Signed_. Any account can call this function, even if it is not one of the stakers. TODO: Add weight for this one 
 
### setController(controller: `LookupSource`)
- **interface**: `api.tx.staking.setController`
- **summary**:   (Re-)set the controller of a stash. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the stash, not the controller. 

   
 
### setInvulnerables(validators: `Vec<AccountId>`)
- **interface**: `api.tx.staking.setInvulnerables`
- **summary**:   Set the validators who cannot be slashed (if any). 

  The dispatch origin must be Root. 

   
 
### setPayee(payee: `RewardDestination`)
- **interface**: `api.tx.staking.setPayee`
- **summary**:   (Re-)set the payment target for a controller. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   
 
### setStartRewardEra(start_reward_era: `EraIndex`)
- **interface**: `api.tx.staking.setStartRewardEra`
 
### setValidatorCount(new: `Compact<u32>`)
- **interface**: `api.tx.staking.setValidatorCount`
- **summary**:   Sets the ideal number of validators. 

  The dispatch origin must be Root. 

   
 
### unbond(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.unbond`
- **summary**:   Schedule a portion of the stash to be unlocked ready for transfer out after the bond period ends. If this leaves an amount actively bonded less than T::Currency::minimum_balance(), then it is increased to the full amount. 

  Once the unlock period is done, you can call `withdraw_unbonded` to actually move the funds out of management ready for transfer. 

  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`) can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need to be called first to remove some of the chunks (if possible). 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Unbonded`. 

  See also [`Call::withdraw_unbonded`]. 

   
 
### validate(prefs: `ValidatorPrefs`)
- **interface**: `api.tx.staking.validate`
- **summary**:   Declare the desire to validate for the origin controller. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   
 
### withdrawUnbonded()
- **interface**: `api.tx.staking.withdrawUnbonded`
- **summary**:   Remove any unlocked chunks from the `unlocking` queue from our management. 

  This essentially frees up that balance to be used by the stash account to do whatever it wants. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Withdrawn`. 

  See also [`Call::unbond`]. 

   

___


## sudo
 
### setKey(new: `LookupSource`)
- **interface**: `api.tx.sudo.setKey`
- **summary**:   Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key. 

  The dispatch origin for this call must be _Signed_. 

   
 
### sudo(call: `Call`)
- **interface**: `api.tx.sudo.sudo`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Root` origin. 

  The dispatch origin for this call must be _Signed_. 

   
 
### sudoAs(who: `LookupSource`, call: `Call`)
- **interface**: `api.tx.sudo.sudoAs`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Signed` origin from a given account. 

  The dispatch origin for this call must be _Signed_. 

   
 
### sudoUncheckedWeight(call: `Call`, _weight: `Weight`)
- **interface**: `api.tx.sudo.sudoUncheckedWeight`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Root` origin. This function does not check the weight of the call, and instead allows the Sudo user to specify the weight of the call. 

  The dispatch origin for this call must be _Signed_. 

   

___


## swork
 
### addMemberIntoAllowlist(target: `LookupSource`)
- **interface**: `api.tx.swork.addMemberIntoAllowlist`
 
### createGroup()
- **interface**: `api.tx.swork.createGroup`
- **summary**:   Create a group. One account can only create one group once. 
 
### joinGroup(target: `LookupSource`)
- **interface**: `api.tx.swork.joinGroup`
- **summary**:   Join a group. The account should already report works once and cannot have any spower value. The target must be a group owner. 
 
### kickOut(target: `LookupSource`)
- **interface**: `api.tx.swork.kickOut`
- **summary**:   Kick someone out of this group. 
 
### quitGroup()
- **interface**: `api.tx.swork.quitGroup`
- **summary**:   Quit a group. 
 
### register(ias_sig: `IASSig`, ias_cert: `SworkerCert`, applier: `AccountId`, isv_body: `ISVBody`, sig: `SworkerSignature`)
- **interface**: `api.tx.swork.register`
- **summary**:   Register as new trusted node, can only called from sWorker. All `inputs` can only be generated from sWorker's enclave 

  The dispatch origin for this call must be _Signed_ by the reporter account. 

  Emits `RegisterSuccess` if new id has been registered. 

   
 
### removeMemberFromAllowlist(target: `LookupSource`)
- **interface**: `api.tx.swork.removeMemberFromAllowlist`
 
### reportWorks(curr_pk: `SworkerPubKey`, ab_upgrade_pk: `SworkerPubKey`, slot: `u64`, slot_hash: `Bytes`, reported_srd_size: `u64`, reported_files_size: `u64`, added_files: `Vec<(MerkleRoot,u64,u64)>`, deleted_files: `Vec<(MerkleRoot,u64,u64)>`, reported_srd_root: `MerkleRoot`, reported_files_root: `MerkleRoot`, sig: `SworkerSignature`)
- **interface**: `api.tx.swork.reportWorks`
- **summary**:   Report storage works from sWorker All `inputs` can only be generated from sWorker's enclave 

  The dispatch origin for this call must be _Signed_ by the reporter account. 

  Emits `WorksReportSuccess` if new work report has been reported 

   
 
### setCode(new_code: `SworkerCode`, expire_block: `BlockNumber`)
- **interface**: `api.tx.swork.setCode`
- **summary**:   Set code for AB Upgrade, this should only be called by `root` origin Ruled by `sudo/democracy` 

   
 
### setPunishment(is_enabled: `bool`)
- **interface**: `api.tx.swork.setPunishment`
- **summary**:   Set the punishment flag 

___


## system
 
### fillBlock(_ratio: `Perbill`)
- **interface**: `api.tx.system.fillBlock`
- **summary**:   A dispatch that will fill the block weight up to the given ratio. 
 
### killPrefix(prefix: `Key`, _subkeys: `u32`)
- **interface**: `api.tx.system.killPrefix`
- **summary**:   Kill all storage items with a key that starts with the given prefix. 

  **NOTE:** We rely on the Root origin to provide us the number of subkeys under the prefix we are removing to accurately calculate the weight of this function. 

   
 
### killStorage(keys: `Vec<Key>`)
- **interface**: `api.tx.system.killStorage`
- **summary**:   Kill some items from storage. 

   
 
### remark(_remark: `Bytes`)
- **interface**: `api.tx.system.remark`
- **summary**:   Make some on-chain remark. 

   
 
### setChangesTrieConfig(changes_trie_config: `Option<ChangesTrieConfiguration>`)
- **interface**: `api.tx.system.setChangesTrieConfig`
- **summary**:   Set the new changes trie configuration. 

   
 
### setCode(code: `Bytes`)
- **interface**: `api.tx.system.setCode`
- **summary**:   Set the new runtime code. 

   
 
### setCodeWithoutChecks(code: `Bytes`)
- **interface**: `api.tx.system.setCodeWithoutChecks`
- **summary**:   Set the new runtime code without doing any checks of the given `code`. 

   
 
### setHeapPages(pages: `u64`)
- **interface**: `api.tx.system.setHeapPages`
- **summary**:   Set the number of pages in the WebAssembly environment's heap. 

   
 
### setStorage(items: `Vec<KeyValue>`)
- **interface**: `api.tx.system.setStorage`
- **summary**:   Set some items of storage. 

   

___


## timestamp
 
### set(now: `Compact<Moment>`)
- **interface**: `api.tx.timestamp.set`
- **summary**:   Set the current time. 

  This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn't been invoked by that time. 

  The timestamp should be greater than the previous one by the amount specified by `MinimumPeriod`. 

  The dispatch origin for this call must be `Inherent`. 

   

___


## treasury
 
### approveProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.treasury.approveProposal`
- **summary**:   Approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned. 

  May only be called from `T::ApproveOrigin`. 

   
 
### proposeSpend(value: `Compact<BalanceOf>`, beneficiary: `LookupSource`)
- **interface**: `api.tx.treasury.proposeSpend`
- **summary**:   Put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded. 

   
 
### rejectProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.treasury.rejectProposal`
- **summary**:   Reject a proposed spend. The original deposit will be slashed. 

  May only be called from `T::RejectOrigin`. 

   

___


## utility
 
### asDerivative(index: `u16`, call: `Call`)
- **interface**: `api.tx.utility.asDerivative`
- **summary**:   Send a call through an indexed pseudonym of the sender. 

  Filter from origin are passed along. The call will be dispatched with an origin which use the same filter as the origin of this call. 

  NOTE: If you need to ensure that any account-based filtering is not honored (i.e. because you expect `proxy` to have been used prior in the call stack and you do not want the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1` in the Multisig pallet instead. 

  NOTE: Prior to version *12, this was called `as_limited_sub`. 

  The dispatch origin for this call must be _Signed_. 
 
### batch(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.batch`
- **summary**:   Send a batch of dispatch calls. 

  May be called from any origin. 

  - `calls`: The calls to be dispatched from the same origin. 

  If origin is root then call are dispatch without checking origin filter. (This includes bypassing `frame_system::Config::BaseCallFilter`). 

   

  This will return `Ok` in all circumstances. To determine the success of the batch, an event is deposited. If a call failed and the batch was interrupted, then the `BatchInterrupted` event is deposited, along with the number of successful calls made and the error of the failed call. If all were successful, then the `BatchCompleted` event is deposited. 
 
### batchAll(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.batchAll`
- **summary**:   Send a batch of dispatch calls and atomically execute them. The whole transaction will rollback and fail if any of the calls failed. 

  May be called from any origin. 

  - `calls`: The calls to be dispatched from the same origin. 

  If origin is root then call are dispatch without checking origin filter. (This includes bypassing `frame_system::Config::BaseCallFilter`). 

   

---
title: Extrinsics
---

The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

- **[babe](#babe)**

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

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[swork](#swork)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[timestamp](#timestamp)**

- **[tips](#tips)**

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

   
 
### transfer(dest: `LookupSource`, value: `Compact<Balance>`)
- **interface**: `api.tx.balances.transfer`
- **summary**:   Transfer some liquid free balance to another account. 

  `transfer` will set the `FreeBalance` of the sender and receiver. It will decrease the total issuance of the system by the `TransferFee`. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. 

  The dispatch origin for this call must be `Signed` by the transactor. 

   
 
### transferKeepAlive(dest: `LookupSource`, value: `Compact<Balance>`)
- **interface**: `api.tx.balances.transferKeepAlive`
- **summary**:   Same as the [`transfer`] call, but with a check that the transfer will not kill the origin account. 

  99% of the time you want [`transfer`] instead. 

  [`transfer`]: struct.Pallet.html#method.transfer  

___


## benefits
 
### addBenefitFunds(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.benefits.addBenefitFunds`
- **summary**:   Add benefit funds 
 
### cutBenefitFunds(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.benefits.cutBenefitFunds`
- **summary**:   Cut benefit funds 

___


## bounties
 
### acceptCurator(bounty_id: `Compact<BountyIndex>`)
- **interface**: `api.tx.bounties.acceptCurator`
- **summary**:   Accept the curator role for a bounty. A deposit will be reserved from curator and refund upon successful payout. 

  May only be called from the curator. 

   
 
### approveBounty(bounty_id: `Compact<BountyIndex>`)
- **interface**: `api.tx.bounties.approveBounty`
- **summary**:   Approve a bounty proposal. At a later time, the bounty will be funded and become active and the original deposit will be returned. 

  May only be called from `T::ApproveOrigin`. 

   
 
### awardBounty(bounty_id: `Compact<BountyIndex>`, beneficiary: `LookupSource`)
- **interface**: `api.tx.bounties.awardBounty`
- **summary**:   Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay. 

  The dispatch origin for this call must be the curator of this bounty. 

  - `bounty_id`: Bounty ID to award. 

  - `beneficiary`: The beneficiary account whom will receive the payout.

   
 
### claimBounty(bounty_id: `Compact<BountyIndex>`)
- **interface**: `api.tx.bounties.claimBounty`
- **summary**:   Claim the payout from an awarded bounty after payout delay. 

  The dispatch origin for this call must be the beneficiary of this bounty. 

  - `bounty_id`: Bounty ID to claim. 

   
 
### closeBounty(bounty_id: `Compact<BountyIndex>`)
- **interface**: `api.tx.bounties.closeBounty`
- **summary**:   Cancel a proposed or active bounty. All the funds will be sent to treasury and the curator deposit will be unreserved if possible. 

  Only `T::RejectOrigin` is able to cancel a bounty. 

  - `bounty_id`: Bounty ID to cancel. 

   
 
### extendBountyExpiry(bounty_id: `Compact<BountyIndex>`, _remark: `Bytes`)
- **interface**: `api.tx.bounties.extendBountyExpiry`
- **summary**:   Extend the expiry time of an active bounty. 

  The dispatch origin for this call must be the curator of this bounty. 

  - `bounty_id`: Bounty ID to extend. 

  - `remark`: additional information.

   
 
### proposeBounty(value: `Compact<BalanceOf>`, description: `Bytes`)
- **interface**: `api.tx.bounties.proposeBounty`
- **summary**:   Propose a new bounty. 

  The dispatch origin for this call must be _Signed_. 

  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval, or slashed when rejected. 

  - `curator`: The curator account whom will manage this bounty. 

  - `fee`: The curator fee.

  - `value`: The total payment amount of this bounty, curator fee included.

  - `description`: The description of this bounty.
 
### proposeCurator(bounty_id: `Compact<BountyIndex>`, curator: `LookupSource`, fee: `Compact<BalanceOf>`)
- **interface**: `api.tx.bounties.proposeCurator`
- **summary**:   Assign a curator to a funded bounty. 

  May only be called from `T::ApproveOrigin`. 

   
 
### unassignCurator(bounty_id: `Compact<BountyIndex>`)
- **interface**: `api.tx.bounties.unassignCurator`
- **summary**:   Unassign curator from a bounty. 

  This function can only be called by the `RejectOrigin` a signed origin. 

  If this function is called by the `RejectOrigin`, we assume that the curator is malicious or inactive. As a result, we will slash the curator when possible. 

  If the origin is the curator, we take this as a sign they are unable to do their job and they willingly give up. We could slash them, but for now we allow them to recover their deposit and exit without issue. (We may want to change this if it is abused.) 

  Finally, the origin can be anyone if and only if the curator is "inactive". This allows anyone in the community to call out that a curator is not doing their due diligence, and we should pick a new curator. In this case the curator should also be slashed. 

   

___


## candy
 
### burn(target: `LookupSource`, amount: `Compact<Balance>`)
- **interface**: `api.tx.candy.burn`
- **summary**:   Destroy candy from `target` account. Only been called by `root` 

   
 
### issue(target: `LookupSource`, total: `Compact<Balance>`)
- **interface**: `api.tx.candy.issue`
- **summary**:   Issue crust candy. There are, and will only ever be, `total` such candy and they'll all belong to the `root` initially. 

   
 
### transfer(target: `LookupSource`, amount: `Compact<Balance>`)
- **interface**: `api.tx.candy.transfer`
- **summary**:   Move candy from one holder to another. 

   

___


## claims
 
### bondEth(address: `EthereumAddress`)
- **interface**: `api.tx.claims.bondEth`
- **summary**:   Register a Ethereum Address for an given account 

   
 
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
 
### mintClaim(tx: `EthereumTxHash`, who: `EthereumAddress`, value: `BalanceOf`)
- **interface**: `api.tx.claims.mintClaim`
- **summary**:   Mint the claim 
 
### setClaimLimit(limit: `BalanceOf`)
- **interface**: `api.tx.claims.setClaimLimit`
- **summary**:   Set claim limit 

___


## council
 
### close(proposal_hash: `Hash`, index: `Compact<ProposalIndex>`, proposal_weight_bound: `Compact<Weight>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.close`
- **summary**:   Close a vote that is either approved, disapproved or whose voting period has ended. 

  May be called by any signed account in order to finish voting and close the proposal. 

  If called before the end of the voting period it will only close the vote if it is has enough votes to be approved or disapproved. 

  If called after the end of the voting period abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  If the close operation completes successfully with disapproval, the transaction fee will be waived. Otherwise execution of the approved operation will be charged to the caller. 

  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal. + `length_bound`: The upper bound for the length of the proposal in storage. Checked via                   `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

   
 
### disapproveProposal(proposal_hash: `Hash`)
- **interface**: `api.tx.council.disapproveProposal`
- **summary**:   Disapprove a proposal, close, and remove it from the system, regardless of its current state. 

  Must be called by the Root origin. 

  Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

   
 
### execute(proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 

   
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.propose`
- **summary**:   Add a new proposal to either be voted on or executed directly. 

  Requires the sender to be member. 

  `threshold` determines whether `proposal` is executed directly (`threshold < 2`) or put up for voting. 

   
 
### setMembers(new_members: `Vec<AccountId>`, prime: `Option<AccountId>`, old_count: `MemberCount`)
- **interface**: `api.tx.council.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage.               Used for weight estimation. 

  Requires root origin. 

  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but       the weight estimations rely on it to estimate dispatchable weight. 

   
 
### vote(proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.council.vote`
- **summary**:   Add an aye or nay vote for the sender to the given proposal. 

  Requires the sender to be a member. 

  Transaction fees will be waived if the member is voting on any particular proposal for the first time and the call is successful. Subsequent vote changes will charge a fee.  

___


## democracy
 
### blacklist(proposal_hash: `Hash`, maybe_ref_index: `Option<ReferendumIndex>`)
- **interface**: `api.tx.democracy.blacklist`
- **summary**:   Permanently place a proposal into the blacklist. This prevents it from ever being proposed again. 

  If called on a queued public or external proposal, then this will result in it being removed. If the `ref_index` supplied is an active referendum with the proposal hash, then it will be cancelled. 

  The dispatch origin of this call must be `BlacklistOrigin`. 

  - `proposal_hash`: The proposal hash to blacklist permanently. 

  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will becancelled. 

  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a   reasonable value). 
 
### cancelProposal(prop_index: `Compact<PropIndex>`)
- **interface**: `api.tx.democracy.cancelProposal`
- **summary**:   Remove a proposal. 

  The dispatch origin of this call must be `CancelProposalOrigin`. 

  - `prop_index`: The index of the proposal to cancel. 

  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()` 
 
### cancelQueued(which: `ReferendumIndex`)
- **interface**: `api.tx.democracy.cancelQueued`
- **summary**:   Cancel a proposal queued for enactment. 

  The dispatch origin of this call must be _Root_. 

  - `which`: The index of the referendum to cancel. 

  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`. 
 
### cancelReferendum(ref_index: `Compact<ReferendumIndex>`)
- **interface**: `api.tx.democracy.cancelReferendum`
- **summary**:   Remove a referendum. 

  The dispatch origin of this call must be _Root_. 

  - `ref_index`: The index of the referendum to cancel. 

  Weight: `O(1)`. 
 
### clearPublicProposals()
- **interface**: `api.tx.democracy.clearPublicProposals`
- **summary**:   Clears all public proposals. 

  The dispatch origin of this call must be _Root_. 

  Weight: `O(1)`. 
 
### delegate(to: `AccountId`, conviction: `Conviction`, balance: `BalanceOf`)
- **interface**: `api.tx.democracy.delegate`
- **summary**:   Delegate the voting power (with some given conviction) of the sending account. 

  The balance delegated is locked for as long as it's delegated, and thereafter for the time appropriate for the conviction's lock period. 

  The dispatch origin of this call must be _Signed_, and the signing account must either: 

    - be delegating already; or

    - have no voting activity (if there is, then it will need to be removed/consolidated    through `reap_vote` or `unvote`). 

  - `to`: The account whose voting the `target` account's voting power will follow. 

  - `conviction`: The conviction that will be attached to the delegated votes. When the  account is undelegated, the funds will be locked for the corresponding period. 

  - `balance`: The amount of the account's balance to be used in delegating. This must  not be more than the account's current balance. 

  Emits `Delegated`. 

  Weight: `O(R)` where R is the number of referendums the voter delegating to has   voted on. Weight is charged as if maximum votes. 
 
### emergencyCancel(ref_index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.emergencyCancel`
- **summary**:   Schedule an emergency cancellation of a referendum. Cannot happen twice to the same referendum. 

  The dispatch origin of this call must be `CancellationOrigin`. 

  -`ref_index`: The index of the referendum to cancel. 

  Weight: `O(1)`. 
 
### enactProposal(proposal_hash: `Hash`, index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.enactProposal`
- **summary**:   Enact a proposal from a referendum. For now we just make the weight be the maximum. 
 
### externalPropose(proposal_hash: `Hash`)
- **interface**: `api.tx.democracy.externalPropose`
- **summary**:   Schedule a referendum to be tabled once it is legal to schedule an external referendum. 

  The dispatch origin of this call must be `ExternalOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal. 

  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.   Decoding vec of length V. Charged as maximum 
 
### externalProposeDefault(proposal_hash: `Hash`)
- **interface**: `api.tx.democracy.externalProposeDefault`
- **summary**:   Schedule a negative-turnout-bias referendum to be tabled next once it is legal to schedule an external referendum. 

  The dispatch of this call must be `ExternalDefaultOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal. 

  Unlike `external_propose`, blacklisting has no effect on this and it may replace a pre-scheduled `external_propose` call. 

  Weight: `O(1)` 
 
### externalProposeMajority(proposal_hash: `Hash`)
- **interface**: `api.tx.democracy.externalProposeMajority`
- **summary**:   Schedule a majority-carries referendum to be tabled next once it is legal to schedule an external referendum. 

  The dispatch of this call must be `ExternalMajorityOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal. 

  Unlike `external_propose`, blacklisting has no effect on this and it may replace a pre-scheduled `external_propose` call. 

  Weight: `O(1)` 
 
### fastTrack(proposal_hash: `Hash`, voting_period: `BlockNumber`, delay: `BlockNumber`)
- **interface**: `api.tx.democracy.fastTrack`
- **summary**:   Schedule the currently externally-proposed majority-carries referendum to be tabled immediately. If there is no externally-proposed referendum currently, or if there is one but it is not a majority-carries referendum then it fails. 

  The dispatch of this call must be `FastTrackOrigin`. 

  - `proposal_hash`: The hash of the current external proposal. 

  - `voting_period`: The period that is allowed for voting on this proposal. Increased to  `FastTrackVotingPeriod` if too low. 

  - `delay`: The number of block after voting has ended in approval and this should be  enacted. This doesn't have a minimum amount. 

  Emits `Started`. 

  Weight: `O(1)` 
 
### noteImminentPreimage(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.noteImminentPreimage`
- **summary**:   Register the preimage for an upcoming proposal. This requires the proposal to be in the dispatch queue. No deposit is needed. When this call is successful, i.e. the preimage has not been uploaded before and matches some imminent proposal, no fee is paid. 

  The dispatch origin of this call must be _Signed_. 

  - `encoded_proposal`: The preimage of a proposal. 

  Emits `PreimageNoted`. 

  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit). 
 
### noteImminentPreimageOperational(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.noteImminentPreimageOperational`
- **summary**:   Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`. 
 
### notePreimage(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.notePreimage`
- **summary**:   Register the preimage for an upcoming proposal. This doesn't require the proposal to be in the dispatch queue but does require a deposit, returned once enacted. 

  The dispatch origin of this call must be _Signed_. 

  - `encoded_proposal`: The preimage of a proposal. 

  Emits `PreimageNoted`. 

  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit). 
 
### notePreimageOperational(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.notePreimageOperational`
- **summary**:   Same as `note_preimage` but origin is `OperationalPreimageOrigin`. 
 
### propose(proposal_hash: `Hash`, value: `Compact<BalanceOf>`)
- **interface**: `api.tx.democracy.propose`
- **summary**:   Propose a sensitive action to be taken. 

  The dispatch origin of this call must be _Signed_ and the sender must have funds to cover the deposit. 

  - `proposal_hash`: The hash of the proposal preimage. 

  - `value`: The amount of deposit (must be at least `MinimumDeposit`).

  Emits `Proposed`. 

  Weight: `O(p)` 
 
### reapPreimage(proposal_hash: `Hash`, proposal_len_upper_bound: `Compact<u32>`)
- **interface**: `api.tx.democracy.reapPreimage`
- **summary**:   Remove an expired proposal preimage and collect the deposit. 

  The dispatch origin of this call must be _Signed_. 

  - `proposal_hash`: The preimage hash of a proposal. 

  - `proposal_length_upper_bound`: an upper bound on length of the proposal.  Extrinsic is weighted according to this value with no refund. 

  This will only work after `VotingPeriod` blocks from the time that the preimage was noted, if it's the same account doing it. If it's a different account, then it'll only work an additional `EnactmentPeriod` later. 

  Emits `PreimageReaped`. 

  Weight: `O(D)` where D is length of proposal. 
 
### removeOtherVote(target: `AccountId`, index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.removeOtherVote`
- **summary**:   Remove a vote for a referendum. 

  If the `target` is equal to the signer, then this function is exactly equivalent to `remove_vote`. If not equal to the signer, then the vote must have expired, either because the referendum was cancelled, because the voter lost the referendum or because the conviction period is over. 

  The dispatch origin of this call must be _Signed_. 

  - `target`: The account of the vote to be removed; this account must have voted for   referendum `index`. 

  - `index`: The index of referendum of the vote to be removed.

  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.   Weight is calculated for the maximum number of vote. 
 
### removeVote(index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.removeVote`
- **summary**:   Remove a vote for a referendum. 

  If: 

  - the referendum was cancelled, or

  - the referendum is ongoing, or

  - the referendum has ended such that

    - the vote of the account was in opposition to the result; or

    - there was no conviction to the account's vote; or

    - the account made a split vote...then the vote is removed cleanly and a following call to `unlock` may result in more funds being available. 

  If, however, the referendum has ended and: 

  - it finished corresponding to the vote of the account, and

  - the account made a standard vote with conviction, and

  - the lock period of the conviction is not over...then the lock will be aggregated into the overall account's lock, which may involve 

  *overlocking* (where the two locks are combined into a single lock that is the maximumof both the amount locked and the time is it locked for). 

  The dispatch origin of this call must be _Signed_, and the signer must have a vote registered for referendum `index`. 

  - `index`: The index of referendum of the vote to be removed. 

  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.   Weight is calculated for the maximum number of vote. 
 
### second(proposal: `Compact<PropIndex>`, seconds_upper_bound: `Compact<u32>`)
- **interface**: `api.tx.democracy.second`
- **summary**:   Signals agreement with a particular proposal. 

  The dispatch origin of this call must be _Signed_ and the sender must have funds to cover the deposit, equal to the original deposit. 

  - `proposal`: The index of the proposal to second. 

  - `seconds_upper_bound`: an upper bound on the current number of seconds on this  proposal. Extrinsic is weighted according to this value with no refund. 

  Weight: `O(S)` where S is the number of seconds a proposal already has. 
 
### undelegate()
- **interface**: `api.tx.democracy.undelegate`
- **summary**:   Undelegate the voting power of the sending account. 

  Tokens may be unlocked following once an amount of time consistent with the lock period of the conviction with which the delegation was issued. 

  The dispatch origin of this call must be _Signed_ and the signing account must be currently delegating. 

  Emits `Undelegated`. 

  Weight: `O(R)` where R is the number of referendums the voter delegating to has   voted on. Weight is charged as if maximum votes. 
 
### unlock(target: `AccountId`)
- **interface**: `api.tx.democracy.unlock`
- **summary**:   Unlock tokens that have an expired lock. 

  The dispatch origin of this call must be _Signed_. 

  - `target`: The account to remove the lock on. 

  Weight: `O(R)` with R number of vote of target. 
 
### vetoExternal(proposal_hash: `Hash`)
- **interface**: `api.tx.democracy.vetoExternal`
- **summary**:   Veto and blacklist the external proposal hash. 

  The dispatch origin of this call must be `VetoOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist. 

  Emits `Vetoed`. 

  Weight: `O(V + log(V))` where V is number of `existing vetoers` 
 
### vote(ref_index: `Compact<ReferendumIndex>`, vote: `AccountVote`)
- **interface**: `api.tx.democracy.vote`
- **summary**:   Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal; otherwise it is a vote to keep the status quo. 

  The dispatch origin of this call must be _Signed_. 

  - `ref_index`: The index of the referendum to vote for. 

  - `vote`: The vote configuration.

  Weight: `O(R)` where R is the number of referendums the voter has voted on. 

___


## elections
 
### cleanDefunctVoters(_num_voters: `u32`, _num_defunct: `u32`)
- **interface**: `api.tx.elections.cleanDefunctVoters`
- **summary**:   Clean all voters who are defunct (i.e. they do not serve any purpose at all). The deposit of the removed voters are returned. 

  This is an root function to be used only for cleaning the state. 

  The dispatch origin of this call must be root. 

   
 
### removeMember(who: `LookupSource`, has_replacement: `bool`)
- **interface**: `api.tx.elections.removeMember`
- **summary**:   Remove a particular member from the set. This is effective immediately and the bond of the outgoing member is slashed. 

  If a runner-up is available, then the best runner-up will be removed and replaces the outgoing member. Otherwise, a new phragmen election is started. 

  The dispatch origin of this call must be root. 

  Note that this does not affect the designated block number of the next election. 

   
 
### removeVoter()
- **interface**: `api.tx.elections.removeVoter`
- **summary**:   Remove `origin` as a voter. 

  This removes the lock and returns the deposit. 

  The dispatch origin of this call must be signed and be a voter. 
 
### renounceCandidacy(renouncing: `Renouncing`)
- **interface**: `api.tx.elections.renounceCandidacy`
- **summary**:   Renounce one's intention to be a candidate for the next election round. 3 potential outcomes exist: 

  - `origin` is a candidate and not elected in any set. In this case, the deposit is   unreserved, returned and origin is removed as a candidate. 

  - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and  origin is removed as a runner-up. 

  - `origin` is a current member. In this case, the deposit is unreserved and origin is  removed as a member, consequently not being a candidate for the next round anymore.   Similar to [`remove_members`], if replacement runners exists, they are immediately used.   If the prime is renouncing, then no prime will exist until the next round. 

  The dispatch origin of this call must be signed, and have one of the above roles. 

   
 
### submitCandidacy(candidate_count: `Compact<u32>`)
- **interface**: `api.tx.elections.submitCandidacy`
- **summary**:   Submit oneself for candidacy. A fixed amount of deposit is recorded. 

  All candidates are wiped at the end of the term. They either become a member/runner-up, or leave the system while their deposit is slashed. 

  The dispatch origin of this call must be signed. 

  #### Warning 

  Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`] to get their deposit back. Losing the spot in an election will always lead to a slash. 

   
 
### vote(votes: `Vec<AccountId>`, value: `Compact<BalanceOf>`)
- **interface**: `api.tx.elections.vote`
- **summary**:   Vote for a set of candidates for the upcoming round of election. This can be called to set the initial votes, or update already existing votes. 

  Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is reserved. The deposit is based on the number of votes and can be updated over time. 

  The `votes` should: 

    - not be empty.

    - be less than the number of possible candidates. Note that all current members and    runners-up are also automatically candidates for the next round. 

  If `value` is more than `who`'s total balance, then the maximum of the two is used. 

  The dispatch origin of this call must be signed. 

  #### Warning 

  It is the responsibility of the caller to **NOT** place all of their balance into the lock and keep some for further operations. 

   

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


## market
 
### addCollateral(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.market.addCollateral`
- **summary**:   Add extra collateral amount of currency to accept storage order. 

   
 
### addPrepaid(cid: `MerkleRoot`, amount: `Compact<BalanceOf>`)
- **interface**: `api.tx.market.addPrepaid`
- **summary**:   Add prepaid amount of currency for this file. If this file has prepaid value and enough for a new storage order, it can be renewed by anyone. 
 
### calculateReward(cid: `MerkleRoot`)
- **interface**: `api.tx.market.calculateReward`
- **summary**:   Calculate the reward for a file 
 
### cutCollateral(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.market.cutCollateral`
- **summary**:   Decrease extra collateral amount of currency to accept storage order. 

   
 
### placeStorageOrder(cid: `MerkleRoot`, reported_file_size: `u64`, tips: `Compact<BalanceOf>`)
- **interface**: `api.tx.market.placeStorageOrder`
- **summary**:   Place a storage order. The cid and file_size of this file should be provided. Extra tips is accepted. 
 
### register(collateral: `Compact<BalanceOf>`)
- **interface**: `api.tx.market.register`
- **summary**:   Register to be a merchant. This will require you to collateral first, complexity depends on `Collaterals`(P). 

   
 
### rewardMerchant()
- **interface**: `api.tx.market.rewardMerchant`
- **summary**:   Reward a merchant 
 
### setBaseFee(base_fee: `Compact<BalanceOf>`)
- **interface**: `api.tx.market.setBaseFee`
- **summary**:   Set the file base fee 
 
### setMarketSwitch(is_enabled: `bool`)
- **interface**: `api.tx.market.setMarketSwitch`
- **summary**:   Set the global switch 

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

   
 
### rechargeStakingPot(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.rechargeStakingPot`
- **summary**:   Recharge the staking pot 
 
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
 
### cancelPunishment(target: `LookupSource`)
- **interface**: `api.tx.swork.cancelPunishment`
- **summary**:   Cancel punishment for a specific account. This can only be done by Root/Democracy. 
 
### createGroup()
- **interface**: `api.tx.swork.createGroup`
- **summary**:   Create a group. One account can only create one group once. 
 
### joinGroup(target: `LookupSource`)
- **interface**: `api.tx.swork.joinGroup`
- **summary**:   Join a group. The account should already report works once and cannot have any used value. The target must be a group owner. 
 
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

   
 
### reportWorks(curr_pk: `SworkerPubKey`, ab_upgrade_pk: `SworkerPubKey`, slot: `u64`, slot_hash: `Bytes`, reported_srd_size: `u64`, reported_files_size: `u64`, added_files: `Vec<(MerkleRoot,u64,u64)>`, deleted_files: `Vec<(MerkleRoot,u64,u64)>`, reported_srd_root: `MerkleRoot`, reported_files_root: `MerkleRoot`, sig: `SworkerSignature`)
- **interface**: `api.tx.swork.reportWorks`
- **summary**:   Report storage works from sWorker All `inputs` can only be generated from sWorker's enclave 

  The dispatch origin for this call must be _Signed_ by the reporter account. 

  Emits `WorksReportSuccess` if new work report has been reported 

   
 
### setCode(new_code: `SworkerCode`, expire_block: `BlockNumber`)
- **interface**: `api.tx.swork.setCode`
- **summary**:   Set code for AB Upgrade, this should only be called by `root` origin Ruled by `sudo/democracy` 

   

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


## technicalCommittee
 
### close(proposal_hash: `Hash`, index: `Compact<ProposalIndex>`, proposal_weight_bound: `Compact<Weight>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.close`
- **summary**:   Close a vote that is either approved, disapproved or whose voting period has ended. 

  May be called by any signed account in order to finish voting and close the proposal. 

  If called before the end of the voting period it will only close the vote if it is has enough votes to be approved or disapproved. 

  If called after the end of the voting period abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  If the close operation completes successfully with disapproval, the transaction fee will be waived. Otherwise execution of the approved operation will be charged to the caller. 

  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal. + `length_bound`: The upper bound for the length of the proposal in storage. Checked via                   `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

   
 
### disapproveProposal(proposal_hash: `Hash`)
- **interface**: `api.tx.technicalCommittee.disapproveProposal`
- **summary**:   Disapprove a proposal, close, and remove it from the system, regardless of its current state. 

  Must be called by the Root origin. 

  Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

   
 
### execute(proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 

   
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.propose`
- **summary**:   Add a new proposal to either be voted on or executed directly. 

  Requires the sender to be member. 

  `threshold` determines whether `proposal` is executed directly (`threshold < 2`) or put up for voting. 

   
 
### setMembers(new_members: `Vec<AccountId>`, prime: `Option<AccountId>`, old_count: `MemberCount`)
- **interface**: `api.tx.technicalCommittee.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage.               Used for weight estimation. 

  Requires root origin. 

  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but       the weight estimations rely on it to estimate dispatchable weight. 

   
 
### vote(proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.technicalCommittee.vote`
- **summary**:   Add an aye or nay vote for the sender to the given proposal. 

  Requires the sender to be a member. 

  Transaction fees will be waived if the member is voting on any particular proposal for the first time and the call is successful. Subsequent vote changes will charge a fee.  

___


## technicalMembership
 
### addMember(who: `AccountId`)
- **interface**: `api.tx.technicalMembership.addMember`
- **summary**:   Add a member `who` to the set. 

  May only be called from `T::AddOrigin`. 
 
### changeKey(new: `AccountId`)
- **interface**: `api.tx.technicalMembership.changeKey`
- **summary**:   Swap out the sending member for some other key `new`. 

  May only be called from `Signed` origin of a current member. 

  Prime membership is passed from the origin account to `new`, if extant. 
 
### clearPrime()
- **interface**: `api.tx.technicalMembership.clearPrime`
- **summary**:   Remove the prime member if it exists. 

  May only be called from `T::PrimeOrigin`. 
 
### removeMember(who: `AccountId`)
- **interface**: `api.tx.technicalMembership.removeMember`
- **summary**:   Remove a member `who` from the set. 

  May only be called from `T::RemoveOrigin`. 
 
### resetMembers(members: `Vec<AccountId>`)
- **interface**: `api.tx.technicalMembership.resetMembers`
- **summary**:   Change the membership to a new set, disregarding the existing membership. Be nice and pass `members` pre-sorted. 

  May only be called from `T::ResetOrigin`. 
 
### setPrime(who: `AccountId`)
- **interface**: `api.tx.technicalMembership.setPrime`
- **summary**:   Set the prime member. Must be a current member. 

  May only be called from `T::PrimeOrigin`. 
 
### swapMember(remove: `AccountId`, add: `AccountId`)
- **interface**: `api.tx.technicalMembership.swapMember`
- **summary**:   Swap out one member `remove` for another `add`. 

  May only be called from `T::SwapOrigin`. 

  Prime membership is *not* passed from `remove` to `add`, if extant. 

___


## timestamp
 
### set(now: `Compact<Moment>`)
- **interface**: `api.tx.timestamp.set`
- **summary**:   Set the current time. 

  This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn't been invoked by that time. 

  The timestamp should be greater than the previous one by the amount specified by `MinimumPeriod`. 

  The dispatch origin for this call must be `Inherent`. 

   

___


## tips
 
### closeTip(hash: `Hash`)
- **interface**: `api.tx.tips.closeTip`
- **summary**:   Close and payout a tip. 

  The dispatch origin for this call must be _Signed_. 

  The tip identified by `hash` must have finished its countdown period. 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

   
 
### reportAwesome(reason: `Bytes`, who: `AccountId`)
- **interface**: `api.tx.tips.reportAwesome`
- **summary**:   Report something `reason` that deserves a tip and claim any eventual the finder's fee. 

  The dispatch origin for this call must be _Signed_. 

  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as `DataDepositPerByte` for each byte in `reason`. 

  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be   a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

  Emits `NewTip` if successful. 

   
 
### retractTip(hash: `Hash`)
- **interface**: `api.tx.tips.retractTip`
- **summary**:   Retract a prior tip-report from `report_awesome`, and cancel the process of tipping. 

  If successful, the original deposit will be unreserved. 

  The dispatch origin for this call must be _Signed_ and the tip identified by `hash` must have been reported by the signing account through `report_awesome` (and not through `tip_new`). 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

  Emits `TipRetracted` if successful. 

   
 
### slashTip(hash: `Hash`)
- **interface**: `api.tx.tips.slashTip`
- **summary**:   Remove and slash an already-open tip. 

  May only be called from `T::RejectOrigin`. 

  As a result, the finder is slashed and the deposits are lost. 

  Emits `TipSlashed` if successful. 

   
 
### tip(hash: `Hash`, tip_value: `Compact<BalanceOf>`)
- **interface**: `api.tx.tips.tip`
- **summary**:   Declare a tip value for an already-open tip. 

  The dispatch origin for this call must be _Signed_ and the signing account must be a member of the `Tippers` set. 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary   account ID. 

  - `tip_value`: The amount of tip that the sender would like to give. The median tip  value of active tippers will be given to the `who`. 

  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period has started. 

   
 
### tipNew(reason: `Bytes`, who: `AccountId`, tip_value: `Compact<BalanceOf>`)
- **interface**: `api.tx.tips.tipNew`
- **summary**:   Give a tip for something new; no finder's fee will be taken. 

  The dispatch origin for this call must be _Signed_ and the signing account must be a member of the `Tippers` set. 

  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be   a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

  - `tip_value`: The amount of tip that the sender would like to give. The median tip  value of active tippers will be given to the `who`. 

  Emits `NewTip` if successful. 

   

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

   

---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

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

- **[market](#market)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[swork](#swork)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[tips](#tips)**

- **[treasury](#treasury)**


___


## authorship
 
### GenesisUncle
- **interface**: `api.errors.authorship.GenesisUncle.is`
- **summary**:   The uncle is genesis. 
 
### InvalidUncleParent
- **interface**: `api.errors.authorship.InvalidUncleParent.is`
- **summary**:   The uncle parent not in the chain. 
 
### OldUncle
- **interface**: `api.errors.authorship.OldUncle.is`
- **summary**:   The uncle isn't recent enough to be included. 
 
### TooHighUncle
- **interface**: `api.errors.authorship.TooHighUncle.is`
- **summary**:   The uncle is too high in chain. 
 
### TooManyUncles
- **interface**: `api.errors.authorship.TooManyUncles.is`
- **summary**:   Too many uncles. 
 
### UncleAlreadyIncluded
- **interface**: `api.errors.authorship.UncleAlreadyIncluded.is`
- **summary**:   The uncle is already included. 
 
### UnclesAlreadySet
- **interface**: `api.errors.authorship.UnclesAlreadySet.is`
- **summary**:   Uncles already set in the block. 

___


## balances
 
### DeadAccount
- **interface**: `api.errors.balances.DeadAccount.is`
- **summary**:   Beneficiary account must pre-exist 
 
### ExistentialDeposit
- **interface**: `api.errors.balances.ExistentialDeposit.is`
- **summary**:   Value too low to create account due to existential deposit 
 
### ExistingVestingSchedule
- **interface**: `api.errors.balances.ExistingVestingSchedule.is`
- **summary**:   A vesting schedule already exists for this account 
 
### InsufficientBalance
- **interface**: `api.errors.balances.InsufficientBalance.is`
- **summary**:   Balance too low to send value 
 
### KeepAlive
- **interface**: `api.errors.balances.KeepAlive.is`
- **summary**:   Transfer/payment would kill account 
 
### LiquidityRestrictions
- **interface**: `api.errors.balances.LiquidityRestrictions.is`
- **summary**:   Account liquidity restrictions prevent withdrawal 
 
### Overflow
- **interface**: `api.errors.balances.Overflow.is`
- **summary**:   Got an overflow after adding 
 
### VestingBalance
- **interface**: `api.errors.balances.VestingBalance.is`
- **summary**:   Vesting balance too high to send value 

___


## benefits
 
### InsuffientBalance
- **interface**: `api.errors.benefits.InsuffientBalance.is`
- **summary**:   Don't have enough money 
 
### InvalidTarget
- **interface**: `api.errors.benefits.InvalidTarget.is`
- **summary**:   Don't have benefit records 

___


## bounties
 
### InsufficientProposersBalance
- **interface**: `api.errors.bounties.InsufficientProposersBalance.is`
- **summary**:   Proposer's balance is too low. 
 
### InvalidFee
- **interface**: `api.errors.bounties.InvalidFee.is`
- **summary**:   Invalid bounty fee. 
 
### InvalidIndex
- **interface**: `api.errors.bounties.InvalidIndex.is`
- **summary**:   No proposal or bounty at that index. 
 
### InvalidValue
- **interface**: `api.errors.bounties.InvalidValue.is`
- **summary**:   Invalid bounty value. 
 
### PendingPayout
- **interface**: `api.errors.bounties.PendingPayout.is`
- **summary**:   A bounty payout is pending. To cancel the bounty, you must unassign and slash the curator. 
 
### Premature
- **interface**: `api.errors.bounties.Premature.is`
- **summary**:   The bounties cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **interface**: `api.errors.bounties.ReasonTooBig.is`
- **summary**:   The reason given is just too big. 
 
### RequireCurator
- **interface**: `api.errors.bounties.RequireCurator.is`
- **summary**:   Require bounty curator. 
 
### UnexpectedStatus
- **interface**: `api.errors.bounties.UnexpectedStatus.is`
- **summary**:   The bounty status is unexpected. 

___


## candy
 
### AmountZero
- **interface**: `api.errors.candy.AmountZero.is`
- **summary**:   Transfer amount should be non-zero 
 
### BalanceLow
- **interface**: `api.errors.candy.BalanceLow.is`
- **summary**:   Account balance must be greater than or equal to the transfer amount 
 
### BalanceZero
- **interface**: `api.errors.candy.BalanceZero.is`
- **summary**:   Balance should be non-zero 

___


## claims
 
### AlreadyBeClaimed
- **interface**: `api.errors.claims.AlreadyBeClaimed.is`
- **summary**:   Ethereum tx already be claimed 
 
### AlreadyBeMint
- **interface**: `api.errors.claims.AlreadyBeMint.is`
- **summary**:   Ethereum tx already be mint 
 
### ExceedClaimLimit
- **interface**: `api.errors.claims.ExceedClaimLimit.is`
- **summary**:   Exceed claim limitation 
 
### IllegalMiner
- **interface**: `api.errors.claims.IllegalMiner.is`
- **summary**:   Miner should be the registered 
 
### IllegalSuperior
- **interface**: `api.errors.claims.IllegalSuperior.is`
- **summary**:   Superior not exist, should set it first 
 
### InvalidEthereumSignature
- **interface**: `api.errors.claims.InvalidEthereumSignature.is`
- **summary**:   Invalid Ethereum signature. 
 
### MinerNotExist
- **interface**: `api.errors.claims.MinerNotExist.is`
- **summary**:   Miner is not exist, should set it first 
 
### SignatureNotMatch
- **interface**: `api.errors.claims.SignatureNotMatch.is`
- **summary**:   Sign not match 
 
### SignerHasNoClaim
- **interface**: `api.errors.claims.SignerHasNoClaim.is`
- **summary**:   Ethereum address has no claims. 

___


## council
 
### AlreadyInitialized
- **interface**: `api.errors.council.AlreadyInitialized.is`
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **interface**: `api.errors.council.DuplicateProposal.is`
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **interface**: `api.errors.council.DuplicateVote.is`
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **interface**: `api.errors.council.NotMember.is`
- **summary**:   Account is not a member 
 
### ProposalMissing
- **interface**: `api.errors.council.ProposalMissing.is`
- **summary**:   Proposal must exist 
 
### TooEarly
- **interface**: `api.errors.council.TooEarly.is`
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **interface**: `api.errors.council.TooManyProposals.is`
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **interface**: `api.errors.council.WrongIndex.is`
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **interface**: `api.errors.council.WrongProposalLength.is`
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **interface**: `api.errors.council.WrongProposalWeight.is`
- **summary**:   The given weight bound for the proposal was too low. 

___


## democracy
 
### AlreadyCanceled
- **interface**: `api.errors.democracy.AlreadyCanceled.is`
- **summary**:   Cannot cancel the same proposal twice 
 
### AlreadyDelegating
- **interface**: `api.errors.democracy.AlreadyDelegating.is`
- **summary**:   The account is already delegating. 
 
### AlreadyVetoed
- **interface**: `api.errors.democracy.AlreadyVetoed.is`
- **summary**:   Identity may not veto a proposal twice 
 
### BadIndex
- **interface**: `api.errors.democracy.BadIndex.is`
- **summary**:   Unknown index 
 
### DuplicatePreimage
- **interface**: `api.errors.democracy.DuplicatePreimage.is`
- **summary**:   Preimage already noted 
 
### DuplicateProposal
- **interface**: `api.errors.democracy.DuplicateProposal.is`
- **summary**:   Proposal already made 
 
### Imminent
- **interface**: `api.errors.democracy.Imminent.is`
- **summary**:   Imminent 
 
### InstantNotAllowed
- **interface**: `api.errors.democracy.InstantNotAllowed.is`
- **summary**:   The instant referendum origin is currently disallowed. 
 
### InsufficientFunds
- **interface**: `api.errors.democracy.InsufficientFunds.is`
- **summary**:   Too high a balance was provided that the account cannot afford. 
 
### InvalidHash
- **interface**: `api.errors.democracy.InvalidHash.is`
- **summary**:   Invalid hash 
 
### InvalidWitness
- **interface**: `api.errors.democracy.InvalidWitness.is`
- **summary**:   The provided witness data is wrong. 
 
### MaxVotesReached
- **interface**: `api.errors.democracy.MaxVotesReached.is`
- **summary**:   Maximum number of votes reached. 
 
### NoneWaiting
- **interface**: `api.errors.democracy.NoneWaiting.is`
- **summary**:   No proposals waiting 
 
### Nonsense
- **interface**: `api.errors.democracy.Nonsense.is`
- **summary**:   Delegation to oneself makes no sense. 
 
### NoPermission
- **interface**: `api.errors.democracy.NoPermission.is`
- **summary**:   The actor has no permission to conduct the action. 
 
### NoProposal
- **interface**: `api.errors.democracy.NoProposal.is`
- **summary**:   No external proposal 
 
### NotDelegated
- **interface**: `api.errors.democracy.NotDelegated.is`
- **summary**:   Not delegated 
 
### NotDelegating
- **interface**: `api.errors.democracy.NotDelegating.is`
- **summary**:   The account is not currently delegating. 
 
### NotExpired
- **interface**: `api.errors.democracy.NotExpired.is`
- **summary**:   The lock on the account to be unlocked has not yet expired. 
 
### NotImminent
- **interface**: `api.errors.democracy.NotImminent.is`
- **summary**:   Not imminent 
 
### NotLocked
- **interface**: `api.errors.democracy.NotLocked.is`
- **summary**:   The target account does not have a lock. 
 
### NotSimpleMajority
- **interface**: `api.errors.democracy.NotSimpleMajority.is`
- **summary**:   Next external proposal not simple majority 
 
### NotVoter
- **interface**: `api.errors.democracy.NotVoter.is`
- **summary**:   The given account did not vote on the referendum. 
 
### Overflow
- **interface**: `api.errors.democracy.Overflow.is`
- **summary**:   An unexpected integer overflow occurred. 
 
### PreimageInvalid
- **interface**: `api.errors.democracy.PreimageInvalid.is`
- **summary**:   Invalid preimage 
 
### PreimageMissing
- **interface**: `api.errors.democracy.PreimageMissing.is`
- **summary**:   Preimage not found 
 
### ProposalBlacklisted
- **interface**: `api.errors.democracy.ProposalBlacklisted.is`
- **summary**:   Proposal still blacklisted 
 
### ProposalMissing
- **interface**: `api.errors.democracy.ProposalMissing.is`
- **summary**:   Proposal does not exist 
 
### ReferendumInvalid
- **interface**: `api.errors.democracy.ReferendumInvalid.is`
- **summary**:   Vote given for invalid referendum 
 
### TooEarly
- **interface**: `api.errors.democracy.TooEarly.is`
- **summary**:   Too early 
 
### TooManyProposals
- **interface**: `api.errors.democracy.TooManyProposals.is`
- **summary**:   Maximum number of proposals reached. 
 
### Underflow
- **interface**: `api.errors.democracy.Underflow.is`
- **summary**:   An unexpected integer underflow occurred. 
 
### ValueLow
- **interface**: `api.errors.democracy.ValueLow.is`
- **summary**:   Value too low 
 
### VotesExist
- **interface**: `api.errors.democracy.VotesExist.is`
- **summary**:   The account currently has votes attached to it and the operation cannot succeed until these are removed, either through `unvote` or `reap_vote`. 
 
### WrongUpperBound
- **interface**: `api.errors.democracy.WrongUpperBound.is`
- **summary**:   Invalid upper bound. 

___


## elections
 
### DuplicatedCandidate
- **interface**: `api.errors.elections.DuplicatedCandidate.is`
- **summary**:   Duplicated candidate submission. 
 
### InsufficientCandidateFunds
- **interface**: `api.errors.elections.InsufficientCandidateFunds.is`
- **summary**:   Candidate does not have enough funds. 
 
### InvalidRenouncing
- **interface**: `api.errors.elections.InvalidRenouncing.is`
- **summary**:   The renouncing origin presented a wrong `Renouncing` parameter. 
 
### InvalidReplacement
- **interface**: `api.errors.elections.InvalidReplacement.is`
- **summary**:   Prediction regarding replacement after member removal is wrong. 
 
### InvalidVoteCount
- **interface**: `api.errors.elections.InvalidVoteCount.is`
- **summary**:   The provided count of number of votes is incorrect. 
 
### InvalidWitnessData
- **interface**: `api.errors.elections.InvalidWitnessData.is`
- **summary**:   The provided count of number of candidates is incorrect. 
 
### LowBalance
- **interface**: `api.errors.elections.LowBalance.is`
- **summary**:   Cannot vote with stake less than minimum balance. 
 
### MaximumVotesExceeded
- **interface**: `api.errors.elections.MaximumVotesExceeded.is`
- **summary**:   Cannot vote more than maximum allowed. 
 
### MemberSubmit
- **interface**: `api.errors.elections.MemberSubmit.is`
- **summary**:   Member cannot re-submit candidacy. 
 
### MustBeVoter
- **interface**: `api.errors.elections.MustBeVoter.is`
- **summary**:   Must be a voter. 
 
### NotMember
- **interface**: `api.errors.elections.NotMember.is`
- **summary**:   Not a member. 
 
### NoVotes
- **interface**: `api.errors.elections.NoVotes.is`
- **summary**:   Must vote for at least one candidate. 
 
### ReportSelf
- **interface**: `api.errors.elections.ReportSelf.is`
- **summary**:   Cannot report self. 
 
### RunnerUpSubmit
- **interface**: `api.errors.elections.RunnerUpSubmit.is`
- **summary**:   Runner cannot re-submit candidacy. 
 
### TooManyVotes
- **interface**: `api.errors.elections.TooManyVotes.is`
- **summary**:   Cannot vote more than candidates. 
 
### UnableToPayBond
- **interface**: `api.errors.elections.UnableToPayBond.is`
- **summary**:   Voter can not pay voting bond. 
 
### UnableToVote
- **interface**: `api.errors.elections.UnableToVote.is`
- **summary**:   Cannot vote when no candidates or members exist. 

___


## grandpa
 
### ChangePending
- **interface**: `api.errors.grandpa.ChangePending.is`
- **summary**:   Attempt to signal GRANDPA change with one already pending. 
 
### DuplicateOffenceReport
- **interface**: `api.errors.grandpa.DuplicateOffenceReport.is`
- **summary**:   A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **interface**: `api.errors.grandpa.InvalidEquivocationProof.is`
- **summary**:   An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.grandpa.InvalidKeyOwnershipProof.is`
- **summary**:   A key ownership proof provided as part of an equivocation report is invalid. 
 
### PauseFailed
- **interface**: `api.errors.grandpa.PauseFailed.is`
- **summary**:   Attempt to signal GRANDPA pause when the authority set isn't live (either paused or already pending pause). 
 
### ResumeFailed
- **interface**: `api.errors.grandpa.ResumeFailed.is`
- **summary**:   Attempt to signal GRANDPA resume when the authority set isn't paused (either live or already pending resume). 
 
### TooSoon
- **interface**: `api.errors.grandpa.TooSoon.is`
- **summary**:   Cannot signal forced change so soon after last. 

___


## identity
 
### AlreadyClaimed
- **interface**: `api.errors.identity.AlreadyClaimed.is`
- **summary**:   Account ID is already named. 
 
### EmptyIndex
- **interface**: `api.errors.identity.EmptyIndex.is`
- **summary**:   Empty index. 
 
### FeeChanged
- **interface**: `api.errors.identity.FeeChanged.is`
- **summary**:   Fee is changed. 
 
### InvalidIndex
- **interface**: `api.errors.identity.InvalidIndex.is`
- **summary**:   The index is invalid. 
 
### InvalidJudgement
- **interface**: `api.errors.identity.InvalidJudgement.is`
- **summary**:   Invalid judgement. 
 
### InvalidTarget
- **interface**: `api.errors.identity.InvalidTarget.is`
- **summary**:   The target is invalid. 
 
### JudgementGiven
- **interface**: `api.errors.identity.JudgementGiven.is`
- **summary**:   Judgement given. 
 
### NoIdentity
- **interface**: `api.errors.identity.NoIdentity.is`
- **summary**:   No identity found. 
 
### NotFound
- **interface**: `api.errors.identity.NotFound.is`
- **summary**:   Account isn't found. 
 
### NotNamed
- **interface**: `api.errors.identity.NotNamed.is`
- **summary**:   Account isn't named. 
 
### NotOwned
- **interface**: `api.errors.identity.NotOwned.is`
- **summary**:   Sub-account isn't owned by sender. 
 
### NotSub
- **interface**: `api.errors.identity.NotSub.is`
- **summary**:   Sender is not a sub-account. 
 
### StickyJudgement
- **interface**: `api.errors.identity.StickyJudgement.is`
- **summary**:   Sticky judgement. 
 
### TooManyFields
- **interface**: `api.errors.identity.TooManyFields.is`
- **summary**:   Too many additional fields. 
 
### TooManyRegistrars
- **interface**: `api.errors.identity.TooManyRegistrars.is`
- **summary**:   Maximum amount of registrars reached. Cannot add any more. 
 
### TooManySubAccounts
- **interface**: `api.errors.identity.TooManySubAccounts.is`
- **summary**:   Too many subs-accounts. 

___


## imOnline
 
### DuplicatedHeartbeat
- **interface**: `api.errors.imOnline.DuplicatedHeartbeat.is`
- **summary**:   Duplicated heartbeat. 
 
### InvalidKey
- **interface**: `api.errors.imOnline.InvalidKey.is`
- **summary**:   Non existent public key. 

___


## market
 
### AlreadyRegistered
- **interface**: `api.errors.market.AlreadyRegistered.is`
- **summary**:   Already registered before and cannot register again. 
 
### FileNotExist
- **interface**: `api.errors.market.FileNotExist.is`
- **summary**:   The file does not exist. Please check the cid again. 
 
### FileSizeNotCorrect
- **interface**: `api.errors.market.FileSizeNotCorrect.is`
- **summary**:   The file size is not correct. The same file is already on chain and the file size should be same. Please check the file size again. 
 
### FileTooLarge
- **interface**: `api.errors.market.FileTooLarge.is`
- **summary**:   The file is too large. Please check the MaximumFileSize value. 
 
### InsufficientCollateral
- **interface**: `api.errors.market.InsufficientCollateral.is`
- **summary**:   Don't have enough collateral to keep the reward. The collateral value of each merchant must be larger than his current reward. 
 
### InsufficientCurrency
- **interface**: `api.errors.market.InsufficientCurrency.is`
- **summary**:   Don't have enough currency(CRU) to finish the extrinsic(transaction). Please transfer some CRU into this account. 
 
### InsufficientValue
- **interface**: `api.errors.market.InsufficientValue.is`
- **summary**:   Can not choose the value less than the minimum balance. Please increase the value to be larger than the minimu balance. 
 
### NotEnoughReward
- **interface**: `api.errors.market.NotEnoughReward.is`
- **summary**:   The reward is not enough. 
 
### NotInRewardPeriod
- **interface**: `api.errors.market.NotInRewardPeriod.is`
- **summary**:   The file is not in the reward period. Please wait until the file is expired. 
 
### NotRegister
- **interface**: `api.errors.market.NotRegister.is`
- **summary**:   Didn't register as a merchant before and cannot finish the extrinsic(transaction). Please register as a merchant first. 
 
### PlaceOrderNotAvailable
- **interface**: `api.errors.market.PlaceOrderNotAvailable.is`
- **summary**:   Place order is not available right now. Please wait for a while. 

___


## scheduler
 
### FailedToSchedule
- **interface**: `api.errors.scheduler.FailedToSchedule.is`
- **summary**:   Failed to schedule a call 
 
### NotFound
- **interface**: `api.errors.scheduler.NotFound.is`
- **summary**:   Cannot find the scheduled call. 
 
### RescheduleNoChange
- **interface**: `api.errors.scheduler.RescheduleNoChange.is`
- **summary**:   Reschedule failed because it does not change scheduled time. 
 
### TargetBlockNumberInPast
- **interface**: `api.errors.scheduler.TargetBlockNumberInPast.is`
- **summary**:   Given target block number is in the past. 

___


## session
 
### DuplicatedKey
- **interface**: `api.errors.session.DuplicatedKey.is`
- **summary**:   Registered duplicate key. 
 
### InvalidProof
- **interface**: `api.errors.session.InvalidProof.is`
- **summary**:   Invalid ownership proof. 
 
### NoAccount
- **interface**: `api.errors.session.NoAccount.is`
- **summary**:   Key setting account is not live, so it's impossible to associate keys. 
 
### NoAssociatedValidatorId
- **interface**: `api.errors.session.NoAssociatedValidatorId.is`
- **summary**:   No associated validator ID for account. 
 
### NoKeys
- **interface**: `api.errors.session.NoKeys.is`
- **summary**:   No keys are associated with this account. 

___


## staking
 
### AllGuaranteed
- **interface**: `api.errors.staking.AllGuaranteed.is`
- **summary**:   All stakes are guaranteed, cut guarantee first 
 
### AlreadyBonded
- **interface**: `api.errors.staking.AlreadyBonded.is`
- **summary**:   Stash is already bonded. 
 
### AlreadyClaimed
- **interface**: `api.errors.staking.AlreadyClaimed.is`
- **summary**:   Claimed reward twice. 
 
### AlreadyPaired
- **interface**: `api.errors.staking.AlreadyPaired.is`
- **summary**:   Controller is already paired. 
 
### DuplicateIndex
- **interface**: `api.errors.staking.DuplicateIndex.is`
- **summary**:   Duplicate index. 
 
### ExceedGuaranteeLimit
- **interface**: `api.errors.staking.ExceedGuaranteeLimit.is`
- **summary**:   Can not bond with more than limit 
 
### FundedTarget
- **interface**: `api.errors.staking.FundedTarget.is`
- **summary**:   Attempting to target a stash that still has funds. 
 
### InsufficientCurrency
- **interface**: `api.errors.staking.InsufficientCurrency.is`
- **summary**:   Don't have enough balance to recharge the staking pot 
 
### InsufficientValue
- **interface**: `api.errors.staking.InsufficientValue.is`
- **summary**:   Can not bond with value less than minimum balance. 
 
### InvalidEraToReward
- **interface**: `api.errors.staking.InvalidEraToReward.is`
- **summary**:   Invalid era to reward. 
 
### InvalidSlashIndex
- **interface**: `api.errors.staking.InvalidSlashIndex.is`
- **summary**:   Slash record index out of bounds. 
 
### InvalidTarget
- **interface**: `api.errors.staking.InvalidTarget.is`
- **summary**:   Target is invalid. 
 
### NoMoreChunks
- **interface**: `api.errors.staking.NoMoreChunks.is`
- **summary**:   Can not schedule more unlock chunks. 
 
### NotController
- **interface**: `api.errors.staking.NotController.is`
- **summary**:   Not a controller account. 
 
### NotStash
- **interface**: `api.errors.staking.NotStash.is`
- **summary**:   Not a stash account. 
 
### NoUnlockChunk
- **interface**: `api.errors.staking.NoUnlockChunk.is`
- **summary**:   Can not rebond without unlocking chunks. 

___


## sudo
 
### RequireSudo
- **interface**: `api.errors.sudo.RequireSudo.is`
- **summary**:   Sender must be the Sudo account 

___


## swork
 
### ABUpgradeFailed
- **interface**: `api.errors.swork.ABUpgradeFailed.is`
- **summary**:   A/B Upgrade failed 
 
### AlreadyJoint
- **interface**: `api.errors.swork.AlreadyJoint.is`
- **summary**:   Already joint one group 
 
### ExceedGroupLimit
- **interface**: `api.errors.swork.ExceedGroupLimit.is`
- **summary**:   Exceed the limit of members number in one group. 
 
### GroupAlreadyExist
- **interface**: `api.errors.swork.GroupAlreadyExist.is`
- **summary**:   The group already exist. 
 
### GroupOwnerForbidden
- **interface**: `api.errors.swork.GroupOwnerForbidden.is`
- **summary**:   The group owner cannot be a sWorker member. 
 
### IdentityNotExist
- **interface**: `api.errors.swork.IdentityNotExist.is`
- **summary**:   Identity doesn't exist 
 
### IllegalApplier
- **interface**: `api.errors.swork.IllegalApplier.is`
- **summary**:   Illegal applier 
 
### IllegalFilesTransition
- **interface**: `api.errors.swork.IllegalFilesTransition.is`
- **summary**:   Files change not legal 
 
### IllegalIdentity
- **interface**: `api.errors.swork.IllegalIdentity.is`
- **summary**:   Identity check failed 
 
### IllegalReporter
- **interface**: `api.errors.swork.IllegalReporter.is`
- **summary**:   Illegal reporter 
 
### IllegalUsed
- **interface**: `api.errors.swork.IllegalUsed.is`
- **summary**:   The used value is not zero and cannot join a group. 
 
### IllegalWorkReportSig
- **interface**: `api.errors.swork.IllegalWorkReportSig.is`
- **summary**:   Illegal work report signature 
 
### InvalidExpiredBlock
- **interface**: `api.errors.swork.InvalidExpiredBlock.is`
- **summary**:   Cannot extend the valid duration for an existed enclave code. 
 
### InvalidReportTime
- **interface**: `api.errors.swork.InvalidReportTime.is`
- **summary**:   Invalid timing 
 
### NotJoint
- **interface**: `api.errors.swork.NotJoint.is`
- **summary**:   The member is not in this group and cannot quit. 
 
### NotOwner
- **interface**: `api.errors.swork.NotOwner.is`
- **summary**:   The target is not a group owner. Please make sure that the target is a group owner. 
 
### OutdatedReporter
- **interface**: `api.errors.swork.OutdatedReporter.is`
- **summary**:   Outdated reporter 

___


## system
 
### FailedToExtractRuntimeVersion
- **interface**: `api.errors.system.FailedToExtractRuntimeVersion.is`
- **summary**:   Failed to extract the runtime version from the new runtime. 

  Either calling `Core_version` or decoding `RuntimeVersion` failed. 
 
### InvalidSpecName
- **interface**: `api.errors.system.InvalidSpecName.is`
- **summary**:   The name of specification does not match between the current runtime and the new runtime. 
 
### NonDefaultComposite
- **interface**: `api.errors.system.NonDefaultComposite.is`
- **summary**:   Suicide called when the account has non-default composite data. 
 
### NonZeroRefCount
- **interface**: `api.errors.system.NonZeroRefCount.is`
- **summary**:   There is a non-zero reference count preventing the account from being purged. 
 
### SpecVersionNeedsToIncrease
- **interface**: `api.errors.system.SpecVersionNeedsToIncrease.is`
- **summary**:   The specification version is not allowed to decrease between the current runtime and the new runtime. 

___


## technicalCommittee
 
### AlreadyInitialized
- **interface**: `api.errors.technicalCommittee.AlreadyInitialized.is`
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **interface**: `api.errors.technicalCommittee.DuplicateProposal.is`
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **interface**: `api.errors.technicalCommittee.DuplicateVote.is`
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **interface**: `api.errors.technicalCommittee.NotMember.is`
- **summary**:   Account is not a member 
 
### ProposalMissing
- **interface**: `api.errors.technicalCommittee.ProposalMissing.is`
- **summary**:   Proposal must exist 
 
### TooEarly
- **interface**: `api.errors.technicalCommittee.TooEarly.is`
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **interface**: `api.errors.technicalCommittee.TooManyProposals.is`
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **interface**: `api.errors.technicalCommittee.WrongIndex.is`
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **interface**: `api.errors.technicalCommittee.WrongProposalLength.is`
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **interface**: `api.errors.technicalCommittee.WrongProposalWeight.is`
- **summary**:   The given weight bound for the proposal was too low. 

___


## tips
 
### AlreadyKnown
- **interface**: `api.errors.tips.AlreadyKnown.is`
- **summary**:   The tip was already found/started. 
 
### NotFinder
- **interface**: `api.errors.tips.NotFinder.is`
- **summary**:   The account attempting to retract the tip is not the finder of the tip. 
 
### Premature
- **interface**: `api.errors.tips.Premature.is`
- **summary**:   The tip cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **interface**: `api.errors.tips.ReasonTooBig.is`
- **summary**:   The reason given is just too big. 
 
### StillOpen
- **interface**: `api.errors.tips.StillOpen.is`
- **summary**:   The tip cannot be claimed/closed because there are not enough tippers yet. 
 
### UnknownTip
- **interface**: `api.errors.tips.UnknownTip.is`
- **summary**:   The tip hash is unknown. 

___


## treasury
 
### InsufficientProposersBalance
- **interface**: `api.errors.treasury.InsufficientProposersBalance.is`
- **summary**:   Proposer's balance is too low. 
 
### InvalidIndex
- **interface**: `api.errors.treasury.InvalidIndex.is`
- **summary**:   No proposal or bounty at that index. 

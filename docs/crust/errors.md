---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

- **[balances](#balances)**

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
- **summary**:   The uncle is genesis. 
 
### InvalidUncleParent
- **summary**:   The uncle parent not in the chain. 
 
### OldUncle
- **summary**:   The uncle isn't recent enough to be included. 
 
### TooHighUncle
- **summary**:   The uncle is too high in chain. 
 
### TooManyUncles
- **summary**:   Too many uncles. 
 
### UncleAlreadyIncluded
- **summary**:   The uncle is already included. 
 
### UnclesAlreadySet
- **summary**:   Uncles already set in the block. 

___


## balances
 
### DeadAccount
- **summary**:   Beneficiary account must pre-exist 
 
### ExistentialDeposit
- **summary**:   Value too low to create account due to existential deposit 
 
### ExistingVestingSchedule
- **summary**:   A vesting schedule already exists for this account 
 
### InsufficientBalance
- **summary**:   Balance too low to send value 
 
### KeepAlive
- **summary**:   Transfer/payment would kill account 
 
### LiquidityRestrictions
- **summary**:   Account liquidity restrictions prevent withdrawal 
 
### Overflow
- **summary**:   Got an overflow after adding 
 
### VestingBalance
- **summary**:   Vesting balance too high to send value 

___


## bounties
 
### InsufficientProposersBalance
- **summary**:   Proposer's balance is too low. 
 
### InvalidFee
- **summary**:   Invalid bounty fee. 
 
### InvalidIndex
- **summary**:   No proposal or bounty at that index. 
 
### InvalidValue
- **summary**:   Invalid bounty value. 
 
### PendingPayout
- **summary**:   A bounty payout is pending. To cancel the bounty, you must unassign and slash the curator. 
 
### Premature
- **summary**:   The bounties cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **summary**:   The reason given is just too big. 
 
### RequireCurator
- **summary**:   Require bounty curator. 
 
### UnexpectedStatus
- **summary**:   The bounty status is unexpected. 

___


## candy
 
### AmountZero
- **summary**:   Transfer amount should be non-zero 
 
### BalanceLow
- **summary**:   Account balance must be greater than or equal to the transfer amount 
 
### BalanceZero
- **summary**:   Balance should be non-zero 

___


## claims
 
### AlreadyBeClaimed
- **summary**:   Ethereum tx already be claimed 
 
### AlreadyBeMint
- **summary**:   Ethereum tx already be mint 
 
### ExceedClaimLimit
- **summary**:   Exceed claim limitation 
 
### IllegalMiner
- **summary**:   Miner should be the registered 
 
### IllegalSuperior
- **summary**:   Superior not exist, should set it first 
 
### InvalidEthereumSignature
- **summary**:   Invalid Ethereum signature. 
 
### MinerNotExist
- **summary**:   Miner is not exist, should set it first 
 
### SignatureNotMatch
- **summary**:   Sign not match 
 
### SignerHasNoClaim
- **summary**:   Ethereum address has no claims. 
 
### SignerHasNoPreClaim
- **summary**:   Ethereum address and token type has no pre claims. 

___


## council
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### TooEarly
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **summary**:   The given weight bound for the proposal was too low. 

___


## democracy
 
### AlreadyCanceled
- **summary**:   Cannot cancel the same proposal twice 
 
### AlreadyDelegating
- **summary**:   The account is already delegating. 
 
### AlreadyVetoed
- **summary**:   Identity may not veto a proposal twice 
 
### BadIndex
- **summary**:   Unknown index 
 
### DuplicatePreimage
- **summary**:   Preimage already noted 
 
### DuplicateProposal
- **summary**:   Proposal already made 
 
### Imminent
- **summary**:   Imminent 
 
### InstantNotAllowed
- **summary**:   The instant referendum origin is currently disallowed. 
 
### InsufficientFunds
- **summary**:   Too high a balance was provided that the account cannot afford. 
 
### InvalidHash
- **summary**:   Invalid hash 
 
### InvalidWitness
- **summary**:   The provided witness data is wrong. 
 
### MaxVotesReached
- **summary**:   Maximum number of votes reached. 
 
### NoneWaiting
- **summary**:   No proposals waiting 
 
### Nonsense
- **summary**:   Delegation to oneself makes no sense. 
 
### NoPermission
- **summary**:   The actor has no permission to conduct the action. 
 
### NoProposal
- **summary**:   No external proposal 
 
### NotDelegated
- **summary**:   Not delegated 
 
### NotDelegating
- **summary**:   The account is not currently delegating. 
 
### NotExpired
- **summary**:   The lock on the account to be unlocked has not yet expired. 
 
### NotImminent
- **summary**:   Not imminent 
 
### NotLocked
- **summary**:   The target account does not have a lock. 
 
### NotSimpleMajority
- **summary**:   Next external proposal not simple majority 
 
### NotVoter
- **summary**:   The given account did not vote on the referendum. 
 
### Overflow
- **summary**:   An unexpected integer overflow occurred. 
 
### PreimageInvalid
- **summary**:   Invalid preimage 
 
### PreimageMissing
- **summary**:   Preimage not found 
 
### ProposalBlacklisted
- **summary**:   Proposal still blacklisted 
 
### ProposalMissing
- **summary**:   Proposal does not exist 
 
### ReferendumInvalid
- **summary**:   Vote given for invalid referendum 
 
### TooEarly
- **summary**:   Too early 
 
### TooManyProposals
- **summary**:   Maximum number of proposals reached. 
 
### Underflow
- **summary**:   An unexpected integer underflow occurred. 
 
### ValueLow
- **summary**:   Value too low 
 
### VotesExist
- **summary**:   The account currently has votes attached to it and the operation cannot succeed until these are removed, either through `unvote` or `reap_vote`. 
 
### WrongUpperBound
- **summary**:   Invalid upper bound. 

___


## elections
 
### DuplicatedCandidate
- **summary**:   Duplicated candidate submission. 
 
### InsufficientCandidateFunds
- **summary**:   Candidate does not have enough funds. 
 
### InvalidCandidateCount
- **summary**:   The provided count of number of candidates is incorrect. 
 
### InvalidRenouncing
- **summary**:   The renouncing origin presented a wrong `Renouncing` parameter. 
 
### InvalidReplacement
- **summary**:   Prediction regarding replacement after member removal is wrong. 
 
### InvalidVoteCount
- **summary**:   The provided count of number of votes is incorrect. 
 
### LowBalance
- **summary**:   Cannot vote with stake less than minimum balance. 
 
### MaximumVotesExceeded
- **summary**:   Cannot vote more than maximum allowed. 
 
### MemberSubmit
- **summary**:   Member cannot re-submit candidacy. 
 
### MustBeVoter
- **summary**:   Must be a voter. 
 
### NotMember
- **summary**:   Not a member. 
 
### NoVotes
- **summary**:   Must vote for at least one candidate. 
 
### ReportSelf
- **summary**:   Cannot report self. 
 
### RunnerSubmit
- **summary**:   Runner cannot re-submit candidacy. 
 
### TooManyVotes
- **summary**:   Cannot vote more than candidates. 
 
### UnableToPayBond
- **summary**:   Voter can not pay voting bond. 
 
### UnableToVote
- **summary**:   Cannot vote when no candidates or members exist. 

___


## grandpa
 
### ChangePending
- **summary**:   Attempt to signal GRANDPA change with one already pending. 
 
### DuplicateOffenceReport
- **summary**:   A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **summary**:   An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **summary**:   A key ownership proof provided as part of an equivocation report is invalid. 
 
### PauseFailed
- **summary**:   Attempt to signal GRANDPA pause when the authority set isn't live (either paused or already pending pause). 
 
### ResumeFailed
- **summary**:   Attempt to signal GRANDPA resume when the authority set isn't paused (either live or already pending resume). 
 
### TooSoon
- **summary**:   Cannot signal forced change so soon after last. 

___


## identity
 
### AlreadyClaimed
- **summary**:   Account ID is already named. 
 
### EmptyIndex
- **summary**:   Empty index. 
 
### FeeChanged
- **summary**:   Fee is changed. 
 
### InvalidIndex
- **summary**:   The index is invalid. 
 
### InvalidJudgement
- **summary**:   Invalid judgement. 
 
### InvalidTarget
- **summary**:   The target is invalid. 
 
### JudgementGiven
- **summary**:   Judgement given. 
 
### NoIdentity
- **summary**:   No identity found. 
 
### NotFound
- **summary**:   Account isn't found. 
 
### NotNamed
- **summary**:   Account isn't named. 
 
### NotOwned
- **summary**:   Sub-account isn't owned by sender. 
 
### NotSub
- **summary**:   Sender is not a sub-account. 
 
### StickyJudgement
- **summary**:   Sticky judgement. 
 
### TooManyFields
- **summary**:   Too many additional fields. 
 
### TooManyRegistrars
- **summary**:   Maximum amount of registrars reached. Cannot add any more. 
 
### TooManySubAccounts
- **summary**:   Too many subs-accounts. 

___


## imOnline
 
### DuplicatedHeartbeat
- **summary**:   Duplicated heartbeat. 
 
### InvalidKey
- **summary**:   Non existent public key. 

___


## market
 
### AlreadyRegistered
- **summary**:   Register before 
 
### FileNotExist
- **summary**:   File does not exist 
 
### FileSizeNotCorrect
- **summary**:   File size is not correct 
 
### FileTooLarge
- **summary**:   File is too large 
 
### InsufficientCollateral
- **summary**:   Don't have enough collateral 
 
### InsufficientCurrency
- **summary**:   Don't have enough currency 
 
### InsufficientValue
- **summary**:   Can not bond with value less than minimum balance. 
 
### NotEnoughReward
- **summary**:   Reward is not enough 
 
### NotInRewardPeriod
- **summary**:   File is not in the reward period 
 
### NotPermitted
- **summary**:   You are not permitted to this function You are not in the whitelist 
 
### NotRegister
- **summary**:   Not Register before 
 
### PlaceOrderNotAvailable
- **summary**:   Place order is not available right now 
 
### RewardLengthTooLong
- **summary**:   Reward length is too long 

___


## scheduler
 
### FailedToSchedule
- **summary**:   Failed to schedule a call 
 
### NotFound
- **summary**:   Cannot find the scheduled call. 
 
### RescheduleNoChange
- **summary**:   Reschedule failed because it does not change scheduled time. 
 
### TargetBlockNumberInPast
- **summary**:   Given target block number is in the past. 

___


## session
 
### DuplicatedKey
- **summary**:   Registered duplicate key. 
 
### InvalidProof
- **summary**:   Invalid ownership proof. 
 
### NoAssociatedValidatorId
- **summary**:   No associated validator ID for account. 
 
### NoKeys
- **summary**:   No keys are associated with this account. 

___


## staking
 
### AllGuaranteed
- **summary**:   All stakes are guaranteed, cut guarantee first 
 
### AlreadyBonded
- **summary**:   Stash is already bonded. 
 
### AlreadyClaimed
- **summary**:   Claimed reward twice. 
 
### AlreadyPaired
- **summary**:   Controller is already paired. 
 
### DuplicateIndex
- **summary**:   Duplicate index. 
 
### ExceedGuaranteeLimit
- **summary**:   Can not bond with more than limit 
 
### FundedTarget
- **summary**:   Attempting to target a stash that still has funds. 
 
### InsufficientCurrency
- **summary**:   Don't have enough balance to recharge the staking pot 
 
### InsufficientValue
- **summary**:   Can not bond with value less than minimum balance. 
 
### InvalidEraToReward
- **summary**:   Invalid era to reward. 
 
### InvalidSlashIndex
- **summary**:   Slash record index out of bounds. 
 
### InvalidTarget
- **summary**:   Target is invalid. 
 
### NoMoreChunks
- **summary**:   Can not schedule more unlock chunks. 
 
### NotController
- **summary**:   Not a controller account. 
 
### NotStash
- **summary**:   Not a stash account. 

___


## sudo
 
### RequireSudo
- **summary**:   Sender must be the Sudo account 

___


## swork
 
### ABUpgradeFailed
- **summary**:   A/B Upgrade failed 
 
### AlreadyJoint
- **summary**:   Already joint one group 
 
### ExceedBondsLimit
- **summary**:   Exceed the maximum bonding relation per account 
 
### ExceedGroupLimit
- **summary**:   Exceed the limit of members number in one group 
 
### GroupAlreadyExist
- **summary**:   Group already exist 
 
### GroupOwnerForbidden
- **summary**:   Group owner cannot register 
 
### IdentityNotExist
- **summary**:   Identity doesn't exist 
 
### IllegalApplier
- **summary**:   Illegal applier 
 
### IllegalFilesTransition
- **summary**:   Files change not legal 
 
### IllegalIdentity
- **summary**:   Identity check failed 
 
### IllegalPubKey
- **summary**:   Illegal pubkey 
 
### IllegalReporter
- **summary**:   Illegal reporter 
 
### IllegalUsed
- **summary**:   Used is not zero, 
 
### IllegalWorkReportSig
- **summary**:   Illegal work report signature 
 
### InvalidReportTime
- **summary**:   Invalid timing 
 
### NotJoint
- **summary**:   Member is not in a group 
 
### NotOwner
- **summary**:   Not a owner, 
 
### OutdatedReporter
- **summary**:   Outdated reporter 

___


## system
 
### FailedToExtractRuntimeVersion
- **summary**:   Failed to extract the runtime version from the new runtime. 

  Either calling `Core_version` or decoding `RuntimeVersion` failed. 
 
### InvalidSpecName
- **summary**:   The name of specification does not match between the current runtime and the new runtime. 
 
### NonDefaultComposite
- **summary**:   Suicide called when the account has non-default composite data. 
 
### NonZeroRefCount
- **summary**:   There is a non-zero reference count preventing the account from being purged. 
 
### SpecVersionNeedsToIncrease
- **summary**:   The specification version is not allowed to decrease between the current runtime and the new runtime. 

___


## technicalCommittee
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### TooEarly
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **summary**:   The given weight bound for the proposal was too low. 

___


## tips
 
### AlreadyKnown
- **summary**:   The tip was already found/started. 
 
### NotFinder
- **summary**:   The account attempting to retract the tip is not the finder of the tip. 
 
### Premature
- **summary**:   The tip cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **summary**:   The reason given is just too big. 
 
### StillOpen
- **summary**:   The tip cannot be claimed/closed because there are not enough tippers yet. 
 
### UnknownTip
- **summary**:   The tip hash is unknown. 

___


## treasury
 
### InsufficientProposersBalance
- **summary**:   Proposer's balance is too low. 
 
### InvalidIndex
- **summary**:   No proposal or bounty at that index. 

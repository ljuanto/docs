---
title: Listen to balance changes
---

This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates.

```javascript
// Import the API
const { ApiPromise } = require('@polkadot/api');
const { typesBundleForPolkadot } = require('@crustio/type-definitions');

// Known account we want to use (available on dev chain, with funds)
const Alice = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

async function main () {
  // Create an await for the API
  const api = await ApiPromise.create({
            provider: new WsProvider('ws://127.0.0.1:9944'),
            typesBundle: typesBundleForPolkadot
        });

  // Retrieve the initial balance. Since the call has no callback, it is simply a promise
  // that resolves to the current on-chain value
  let { data: { free: previousFree }, nonce: previousNonce } = await api.query.system.account(Alice);

  console.log(`${Alice} has a balance of ${previousFree}, nonce ${previousNonce}`);
  console.log(`You may leave this example running and start example 06 or transfer any value to ${Alice}`);

  // Here we subscribe to any balance changes and update the on-screen value
  api.query.system.account(Alice, ({ data: { free: currentFree }, nonce: currentNonce }) => {
    // Calculate the delta
    const change = currentFree.sub(previousFree);

    // Only display positive value changes (Since we are pulling `previous` above already,
    // the initial balance change will also be zero)
    if (!change.isZero()) {
      console.log(`New balance change of ${change}, nonce ${currentNonce}`);

      previousFree = currentFree;
      previousNonce = currentNonce;
    }
  });
}

main().catch(console.error);
```

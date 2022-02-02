# everscale DID Resolver

This library is intended to use everscale addresses or uint256 publicKeys as fully self-managed
[Decentralized Identifiers](https://w3c.github.io/did-core/#identifier) and wrap them in a
[DID Document](https://w3c.github.io/did-core/#did-document-properties)

It supports the proposed [Decentralized Identifiers](https://w3c.github.io/did-core/#identifier) spec from the
[W3C Credentials Community Group](https://w3c-ccg.github.io).

It requires the `did-resolver` library, which is the primary interface for resolving DIDs.

This DID method relies on the [everscale-did-registry](https://github.com/radianceteam/ssi3/blob/master/contract/docs/documentation.md).

## DID method

To encode a DID for on the everscale mainnet, simply prepend `did:everscale:`

eg:

`did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66`

Multi-network DIDs are also supported, if the proper configuration is provided during setup.

For example:
`did:everscale:testnet:5214b9f26c13a9258245d86995f5b93c34eb9a2c982420cda871919f454ca194` gets resolved on the testnet.

## DID Document

The minimal DID document for a public key `cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66` with no transactions to
the registry looks like this:

```json
{
  "id": "did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66",
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],
  "publicKey": "cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66",
  "verificationMethod": {
    "id": "did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66",
    "publicKeyMultibase": "cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66"
  },
  "service": "testService"
}
```

## Building a DID document

The DID document is stored on Everscale smart contract [everscale-did-registry](https://github.com/radianceteam/ssi3/blob/master/contract/docs/documentation.md)
Check [Everscale SDK](https://github.com/amel007/sdk-did-radiance-test)

## Resolving a DID document

```javascript
import { Resolver } from 'did-resolver';
import { getResolver } from './resolver.js';

const didResolver = new Resolver(getResolver())

didResolver.resolve('did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66').then((doc) => console.log)

// You can also use ES7 async/await syntax
const doc = await didResolver.resolve('did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66')
```

## Multi-network configuration

- `did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66` (defaults to mainnet configuration)
- `did:everscale:mainnet:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66` 
- `did:everscale:testnet:5214b9f26c13a9258245d86995f5b93c34eb9a2c982420cda871919f454ca194` (testnet configuration)
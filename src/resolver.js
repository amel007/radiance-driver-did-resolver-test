import { initSettings, resolveDIDDocument } from 'everscale-did-sdk-radiance-test';

import { libNode } from "@tonclient/lib-node";

const networkId = {
  mainnet: "mainNet",
  testnet: "devNet"
}

export function getResolver() {
  async function resolve(did, parsed, didResolver, options) {
    console.log(parsed)
    // {method: 'mymethod', id: 'abcdefg', did: 'did:mymethod:abcdefg/some/path#fragment=123', path: '/some/path', fragment: 'fragment=123'}

    const networkStr = did.split(':')[2];
    let networkSdk = networkId[networkStr];

    if (networkSdk) {
      did = did.replace(':' + networkStr, '');
    }else{
      networkSdk = "mainNet";
    }

    console.log(networkStr);
    console.log(networkSdk);
    console.log(did);

    initSettings(networkSdk, libNode);

    const didDocument = await resolveDIDDocument(did);

    const didResolution = {
      didResolutionMetadata: { contentType: 'application/did+ld+json' },
      didDocument: didDocument,
      didDocumentMetadata: {}
    };

    if(!didDocument) {
      didResolution.didResolutionMetadata = {
        error: 'notFound',
        message: `Not found ${did}`,
      }
      didResolution.didDocument = null;
    }

    return didResolution
  }

  return { everscale: resolve }
}

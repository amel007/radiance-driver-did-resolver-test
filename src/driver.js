'use strict';

import express from 'express'
import { Resolver } from 'did-resolver';
import { initSettings, resolveDIDDocument } from 'sdk-did-radiance-test';

import { TonClient } from "@tonclient/core";
import { libNode } from "@tonclient/lib-node";

TonClient.useBinaryLibrary(libNode);

const client = new TonClient({network: {endpoints: ["net.ton.dev"]}});

const PORT = 8080;
const ContentType = 'application/did+ld+json';

const app = express();
app.get('/1.0/identifiers/:did', async (req, res) => {

  const did = req.params.did;
  console.log(did);
  // const resolver = new Resolver(getResolver());

  res.setHeader('Content-Type', ContentType);

  try {

    initSettings("devNet", client);

    // const didDocument = await resolver.resolve(did);
    const didDocument = await resolveDIDDocument(did);
    if (didDocument) {

      const didResolution = {
        didResolutionMetadata: { contentType: ContentType },
        didDocument: didDocument,
        didDocumentMetadata: {}
      }

      res.send(didResolution);
    } else {
      const notFoundResolution = {
        didResolutionMetadata: {
          contentType: ContentType,
          error: 'notFound',
          message: `Not found ${did}`,
        },
        didDocumentMetadata: {},
        didDocument: null,
      }
      res.status(404).send(notFoundResolution);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }

});

app.listen(PORT, function () {
  console.log(`Everscele DID resolver driver is running on port ${PORT}`);
});

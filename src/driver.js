import express from 'express'
import { Resolver } from 'did-resolver';
import { getResolver } from './resolver.js';

const PORT = 8080;

const app = express();
app.get('/1.0/identifiers/:did', async (req, res) => {

  const did = req.params.did;
  console.log(did);
  const resolver = new Resolver(getResolver());

  try {

    const didResolution = await resolver.resolve(did);

    if (!didResolution.didDocument) {
      res.status(400);
    }

    res.send(didResolution);

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }

});

app.listen(PORT, function () {
  console.log(`Everscele DID resolver driver is running on port ${PORT}`);
});

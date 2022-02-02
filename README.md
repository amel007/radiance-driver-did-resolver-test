![DIF Logo](https://raw.githubusercontent.com/decentralized-identity/universal-resolver/master/docs/logo-dif.png)

# Universal Resolver Driver: did:everscale

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for **did:everscale** identifiers.

The Docker image is hosted on Docker Hub here:

<https://hub.docker.com/r/amelinio007/everscale-did-resolver-test>

## Specifications

- [W3C Decentralized Identifiers](https://w3c.github.io/did-core/)
- [Everscale SDK](https://github.com/amel007/sdk-did-radiance-test)
- [Resolver Specification](./doc/spec-resolver.md)

## Example DIDs

* `did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66`
* `did:everscale:mainnet:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66`
* `did:everscale:testnet:5214b9f26c13a9258245d86995f5b93c34eb9a2c982420cda871919f454ca194`

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t radiance-ssi/everscale-did-resolver-driver
docker run --name everscale-did-resolver-driver -p 8080:8080 radiance-ssi/everscale-did-resolver-driver
curl -X GET http://localhost:8080/1.0/identifiers/did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66

```

## Curl Tests

Run service with
```
npm start
```

then run queries

```
curl -X GET http://localhost:8080/1.0/identifiers/did:everscale:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66
curl -X GET http://localhost:8080/1.0/identifiers/did:everscale:mainnet:cf8e1b844284ea4ea813e4072d7060ebb4f781a75738b37cc7d7507acdb7fe66
curl -X GET http://localhost:8080/1.0/identifiers/did:everscale:testnet:5214b9f26c13a9258245d86995f5b93c34eb9a2c982420cda871919f454ca194
```
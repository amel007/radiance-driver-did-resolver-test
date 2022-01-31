![DIF Logo](https://raw.githubusercontent.com/decentralized-identity/universal-resolver/master/docs/logo-dif.png)

# Universal Resolver Driver: did:everscale

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for **did:everscale** identifiers.

## Specifications

- [W3C Decentralized Identifiers](https://w3c.github.io/did-core/)

[comment]: <> (- [UNISOT DID Method Specification]&#40;https://gitlab.com/unisot/documentation/unisot-did-method&#41;)

## Example DIDs

```
did:everscale:5214b9f26c13a9258245d86995f5b93c34eb9a2c982420cda871919f454ca194
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t radiance-everscale-did/uni-did-driver
docker run --name uni-did-driver-everscale -p 8080:8080 radiance-everscale-did/uni-did-driver
curl -X GET http://localhost:8080/1.0/identifiers/did:everscale:5214b9f26c13a9258245d86995f5b93c34eb9a2c982420cda871919f454ca194

```

## Build and Run

npm start

http://localhost:8080/1.0/identifiers/did:everscale:5214b9f26c13a9258245d86995f5b93c34eb9a2c982420cda871919f454ca194
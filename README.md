# OpenBazaar-SmartContracts

This repository contains all open bazaar smart contract including token
## Getting Started

It integrates with [Truffle](https://github.com/ConsenSys/truffle), an Ethereum development environment. Please install Truffle.

```sh
npm install -g truffle

```
Install ganache-cli to simulate Ethereum node locally for testing

```sh
npm install -g ganache-cli
```

Clone OpenBazaar-SamrtContracts

```sh
git clone https://github.com/sameepsi/OpenBazaar-SmartContracts.git
cd OpenBazaar-SamrtContracts
```
Start Ganache-cli

```sh
ganache-cli
```
Run and test truffle project. In new console tab

```sh
truffle compile
truffle migrate --network development
```

Run unit test cases

```sh
truffle test
```

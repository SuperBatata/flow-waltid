## Running Tests

To run tests, run the following command :

Deploy Nft contract :

```bash

flow project deploy --network testnet


```

Mint NFT :

```bash

flow transactions send transactions/mint_nft.cdc 0x2f28339dbc046497 "waltid" "testing mint 1" "https://github.com/superbatata.png" '[]' '[]' '[]' --signer khaled --network testnet

```

Get NFT metadata by ID :

```bash

flow scripts execute ./scripts/get_nft_metadata.cdc 0x2f28339dbc046497 0 --network testnet

```

Get NFTs metadata by owner :

````bash
flow scripts execute ./scripts/token_ids_by_address.cdc 0x2f28339dbc046497  --network testnet

    ```
````


Transfer NFT :

```bash
flow transactions send transactions/InitCollection.cdc 0xe8e83eb775b67bc2 1 --signer khaled1 --network testnet
```

Setup collection :

```bash
flow transactions send transactions/InitCollection.cdc 0xe8e83eb775b67bc2 1 --signer khaled1 --network testnet
```
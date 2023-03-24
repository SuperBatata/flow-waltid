
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

Get NFT metadata :

```bash
    
flow scripts execute ./scripts/get_nft_metadata.cdc 0x2f28339dbc046497 0 --network testnet

```

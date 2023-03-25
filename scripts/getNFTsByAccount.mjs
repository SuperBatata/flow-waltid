import * as fcl from "@onflow/fcl";
import * as dotenv from "dotenv";

dotenv.config();

fcl.config().put("accessNode.api", "https://access-testnet.onflow.org");

const getNFTs = async () => {
  const response = await fcl.query({
    cadence: `
    import ExampleNFT from ${process.env.contractAddress}
    import MetadataViews from 0x631e88ae7f1d7c20
   pub fun main(address: Address): [{String: AnyStruct}] {
    let account = getAccount(address)

    let collection = account
        .getCapability(ExampleNFT.CollectionPublicPath)
        .borrow<&{ExampleNFT.ExampleNFTCollectionPublic}>()
        ?? panic("Could not borrow a reference to the collection")

    let nft = collection.getIDs()
       var nfts: [{String: AnyStruct}] = []
    for id in nft {
       
       let nft = collection.borrowExampleNFT(id: id)!

    // Get the basic display information for this NFT
     let display = MetadataViews.getDisplay(nft)!

    	

        
      let nftData = {"id": UInt64(id), "metadata": {"name": display.name, "description": display.description, "thumbnail": display.thumbnail.uri()}}
        nfts.append(nftData)
    }
  
    

    return nfts
}
 
  `,
    args: (arg, t) => [arg(process.env.accountAddress, t.Address)],
  });
  console.log(response);
};

getNFTs();

import ExampleNFT from "../contracts/ExampleNFT.cdc"
import MetadataViews from "../contracts/MetadataViews.cdc"

/// This script gets all the view-based metadata associated with the specified NFT
/// and returns it as a single struct

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
 
export interface OpenSeaType {
    collectionName: string;
    description: string;
    discordUrl?: string;
    externalUrl: string;
    floorPrice: number;
    imageUrl: string;
    lastIngestedAt: string;
    safelistRequestStatus: string;
    twitterUsername: string;
}

export interface ContractType {
    address: string;
    contractDeployer: string;
    deployedBlockNumber: number;
    name: string;
    openSea: OpenSeaType;
    symbol: string;
    tokenType: string;
    totalSupply: string;
}

export interface RawMetadataType {
    attributes: any[];
    compiler: string;
    description: string;
    dna: string;
    image: string;
    name: string;
}

export interface OwndNftType {
    balance: Number;
    contract: ContractType;
    media: any[];
    metadataError?: string;
    rawMetadata: RawMetadataType;
    spamInfo?: string;
    timeLastUpdated: string;
    title: string;
    tokenId: string;
    tokenType: string;
    tokenUri: any;
}

export interface NftType {
    blockHash: string;
    ownedNfts: OwndNftType[];
    pageKey: string;
    totalCount: string;
}

export interface NFTItemType {
    nft: OwndNftType
}
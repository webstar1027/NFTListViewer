import { Network, Alchemy, AlchemySettings } from "alchemy-sdk";
import { NftType, OwndNftType } from '../Interfaces/nftType';

const settings: AlchemySettings = {
	apiKey: 'u919UGCBA5ThYnLJaPwTJ45imyT_32uF',
	network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

export const getNfts = async (address: string) => {
	const { ownedNfts } = await alchemy.nft.getNftsForOwner(address);
	console.log(ownedNfts)
	return {
		nfts: ownedNfts,
	};
};
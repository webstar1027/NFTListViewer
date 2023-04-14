import { Network, Alchemy, AlchemySettings } from "alchemy-sdk";

const settings: AlchemySettings = {
	apiKey: 'u919UGCBA5ThYnLJaPwTJ45imyT_32uF',
	network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

export const getNfts = async (address: string) => {
	const { ownedNfts } = await alchemy.nft.getNftsForOwner(address);
	return {
		nfts: ownedNfts,
	};
};

export const getResponse  = async () => {
	const data = await fetch("https://earth.nullschool.net/#2023/01/18/1500Z/wind/surface/level/orthographic=-6.20,53.93,3000/loc=-1.161,58.415");
	console.log(data);
	return data;
}
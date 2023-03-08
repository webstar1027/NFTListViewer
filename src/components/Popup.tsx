import { addressFilter } from "../utils/Address";
import { NFTItemType } from "../Interfaces/nftType";

const Popup = (props: NFTItemType) => {
	return (
		<>
			<div className="grid grid-cols-2 gap-8 px-4 py-8 w-[700px] h-[480px]">
				<div className="flex items-center">
					<img src={props.nft.rawMetadata.image} alt="" />
				</div>
				<div className="text-white flex flex-col gap-2">
					<div className=""> Title: <span className="">{props.nft.title}</span></div>
					<div className="cursor-pointer">
						<a href={`https://etherscan.io/address/${props.nft.contract.address}`}>
							Address: <span className="leading-5">{addressFilter(props.nft.contract.address)}</span>
						</a>
					</div>
					<div className=""> Collection: <span className="leading-5">{props.nft.contract.openSea.collectionName}</span></div>
					<div className=""> Description: <span className="leading-5">{props.nft.contract.openSea.description}</span></div>

				</div>
			</div>
			<div className="flex justify-end items-end">
				<a type="button"
					href={`https://opensea.io/assets/ethereum/${props.nft.contract.address}/${props.nft.tokenId}`}
					className="text-white cursor-pointer bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					Purchase NFT
				</a>
			</div>
		</>

	);
}

export default Popup;
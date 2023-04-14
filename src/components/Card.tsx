import { useState } from "react";
import Popup from "./Popup";
import ModalBox from "./ModalBox";
import { NFTItemType } from "../Interfaces/nftType";

const Card = (props: NFTItemType) => {
	const [showModal, setShowModal] = useState<boolean>(false);
	return (
		<>
			<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={() => setShowModal(true)}>
				<button>
					<img className="h-rounded-t-lg primary-nft" src={props.nft.rawMetadata.image} alt="" />
				</button>
				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{props.nft.title}
						</h5>
					</a>
				</div>
			</div>
			<ModalBox show={showModal} handleClose={setShowModal}>
				<Popup nft={props.nft} />
			</ModalBox>
		</>
	)
};

export default Card;
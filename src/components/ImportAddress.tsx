import { useState } from 'react';
import { getNfts } from '../services/Api';
import { NftType, OwndNftType } from '../Interfaces/nftType';

const ImportAddress = (props: any) => {
	const [address, setAddress] = useState<string>('');
	const [nfts, setNFTs] = useState<OwndNftType[]>([]);

	const handleSubmit = async (e: any) => {
		const { nfts } = await getNfts(address);
		const _nfts = checkImageURL(nfts as any);
		props.setNFTs(_nfts);
		e.preventDefault();
	}

	const checkImageURL = (nfts: OwndNftType[]) => {
		let _nfts: OwndNftType[] = [];

		for (let index = 0; index < nfts.length; index++) {
			const url = nfts[index].rawMetadata.image;
			if (url?.includes("ipfs://")) {
				let _url = url.replace('ipfs://', 'https://ipfs.io/ipfs/');
				nfts[index].rawMetadata.image = _url;
			}

			_nfts.push(nfts[index]);
		}

		return _nfts;
	}
	return (
		<>
			<div className="mt-4 min-w-full flex relative pb-8 border-b border-slate-200 dark:border-slate-700">
				<input type="text"
					name="address"
					placeholder="Please enter Wallet address"
					className="bg-[#262833;]
										text-white
										w-full
										block
										py-2.5
										px-4
										rounded-full
										bg-surface-subdued
										border-subdued
										shadow-sm
										focus:border-blue-300
										focus:ring
										focus:ring-blue-200
										focus:ring-opacity-50"
					style={{ paddingRight: '50px' }}
					onInput={e => setAddress((e.target as HTMLInputElement).value)}
					onChange={e => setAddress(e.target.value)} />
				<button className="
													bg-[#4f87f6]
													cursor-pointer
													disabled:cursor-auto
													text-md 
													transition
													px-5 py-2
													rounded-full
													border
													flex
													items-center
													justify-center
													text-center
													border-brand-default
													bg-brand-default
													hover:border-brand-hovered
													hover:bg-brand-hovered
													text-white
													absolute
													right-0
													mr-0.5
													mt-0.5"
					type="button"
					onClick={e => handleSubmit(e)}>
					<span>Import</span>
				</button>
			</div>
		</>
	);
}

export default ImportAddress;
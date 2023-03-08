import { useState } from 'react';
import { OwndNftType } from '../Interfaces/nftType';
import ImportAddress from '../components/ImportAddress';
import Card
	from '../components/Card';
const Home = () => {
	const [nfts, setNFTs] = useState<OwndNftType[]>([]);

	return (
		<div className="pt-8">
			<div className="items-center mb-8 w-96 m-auto">
				<div className="h-px bg-slate-200 dark:bg-slate-500"></div>
				<h3 className="mt-8 dark:text-slate-400 font-bold text-xl mb-4 text-center">
					Watch any wallet
				</h3>
				<ImportAddress setNFTs={setNFTs} />
				<div className="h-px bg-slate-200 dark:bg-slate-500"></div>
			</div>
			{nfts?.length > 0 &&
				<div className="grid grid-cols-4 gap-4">
					{
						nfts?.map((nft: OwndNftType, i: number) =>
							<Card nft={nft} key={i} />
						)
					}
				</div>
			}

		</div >
	);
};

export default Home;
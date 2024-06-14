import { dataProps } from '@/types';
import { getMaleCloths } from '@/utils/fetchData';
import Image from 'next/image';
import Link from 'next/link';
import banner from '/public/assets/images/mainbar/redwolf-basics-slider-1920-1920x450.jpg';

const MenClothing = async () => {
	const products = await getMaleCloths();
	return (
		<div className="flex flex-col ">
			<div>
				<Image
					src={banner}
					alt="banner"
					width={1920}
					height={350}
					className="h-[350px]"
				/>
			</div>
			<div className="w-4/5 mx-auto flex flex-col items-start justify-center mt-10 ">
				<h1 className="text-2xl font-bold uppercase">Men Apparal</h1>
				<div className="grid grid-cols-5  max-md:grid-cols-2 max-xl:grid-cols-3 gap-0 mx-5">
					{products?.map((product: dataProps) => {
						return (
							<div key={product._id}>
								<div className="flex flex-col justify-between items-center">
									<div className="flex items-start flex-col justify-start">
										<Link href={`/products/${product._id}`}>
											<Image
												src={product.link}
												alt={product.brandName}
												width={320}
												height={384}
												className="w-80 h-96"
											/>
										</Link>
										<div className="w-full">
											<h1 className="font-semibold text-sm text-left">
												{product.brandName}
											</h1>
											<hr />
										</div>
										<div className="flex items-start justify-between gap-4 text-sm my-2">
											<p className="font-medium text-zinc-800">
												Rs. {product.finalPrice}
											</p>
											<p className="line-through text-zinc-500">
												Rs. {product.strickPrice}{' '}
											</p>
											<p className="text-red-600 font-semibold">
												{product.discount} % off!
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex justify-center items-center flex-col mt-10 border rounded-md border-gray-300 w-full ">
					<div className=" w-full text-sm text-zinc-600 leading-10 bg-zinc-100 p-4">
						<p> Hey Wolfpack!</p>
						<p>You asked for it, and we delivered.</p>
						<p>
							Made from fine-brushed cotton, Redwolf clothing is breathable and
							comfortable
						</p>
						<p>
							A range of your designs ranging from officially licensed
							pop-culture graphics to original fan art printed to perfection{' '}
						</p>
						<p>
							Comfy, trendy, and stylish, Redwolf can be rotated with your
							closet to give you a fresh fit for every day of the week!
						</p>
						<p>
							If you are trying to find something brand-new and off-beat, then
							Redwolf clothing is for you!
						</p>
						<p>
							Make your everyday cool, geeky and nerdy with Redwolf apparel! Get
							yourself awesome tees, polo t-shirts, and more in various fun
							prints and designs and, add them to your cart immediately!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MenClothing;

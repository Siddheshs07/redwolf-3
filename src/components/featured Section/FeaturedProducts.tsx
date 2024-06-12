import { dataProps } from '@/types';
import { getFeaturedProducts } from '@/utils/fetchData';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProducts = async () => {
	const products = await getFeaturedProducts();
	return (
		<div className="flex flex-col ">
			<h1 className="text-2xl font-bold text-center uppercase">
				Featured Products
			</h1>
			<div className=" mx-auto flex flex-col items-start justify-center mt-5">
				<div className="grid grid-cols-5  max-md:grid-cols-2 max-xl:grid-cols-3 gap-0 mx-5">
					{products?.slice(0, 10).map((product: dataProps) => {
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
			</div>
		</div>
	);
};
export default FeaturedProducts;

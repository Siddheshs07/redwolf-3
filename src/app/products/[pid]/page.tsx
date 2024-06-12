import AddToCart from '@/components/AddToCart';
import MultiSlider from '@/components/MultiSlider';
import { featuredCategoryItems } from '@/constants/featured-category-items';
import { keyFeatures } from '@/constants/key-features-item';
import { getProductById } from '@/utils/fetchData';
import Image from 'next/image';
import Link from 'next/link';
import {
	FaFacebookSquare,
	FaGoogle,
	FaHeart,
	FaPinterestSquare,
	FaPlusSquare,
	FaTwitterSquare,
	FaWhatsappSquare,
} from 'react-icons/fa';
import { TbTruckReturn } from 'react-icons/tb';
import 'react-multi-carousel/lib/styles.css';
import infoImage from '/public/assets/images/oversized-feature-icons.jpg';

const SingleProductPage = async ({ params }: { params: any }) => {
	const product = await getProductById(params.pid);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="max-w-[90%] h-full px-4 mx-auto">
			<p className="m-[10px] text-2xl text-[#363636] pt-3 font-bold uppercase">
				{product.brandName}
			</p>
			<hr className="border-2 border-red-600 " />
			{/* product detail container */}
			<div className="container">
				<div className="grid grid-cols-2 max-lg:flex max-lg:flex-col ">
					{/* image */}
					<div className="flex flex-row items-start justify-center gap-3 flex-shrink mt-3">
						<div className="">
							<Image
								src={product.link}
								alt={product.brandName}
								width={600}
								height={800}
								className="h-[475px] w-[355px]"
							/>
						</div>
						<div className="max-md:hidden">
							<Image
								src={product.link}
								alt={product.brandName}
								width={600}
								height={800}
								className="h-[475px] w-[355px] "
							/>
						</div>
					</div>
					{/* details */}
					<div className="flex flex-col ml-[10px] mr-0 mt-[6px] mb-[9px] max-md:items-center max-md:justify-center max-sm:items-center max-sm:justify-center ">
						<p className="text-2xl font-bold uppercase">Redwolf Shirts</p>
						<Image src={infoImage} alt="infoImage" width={546} height={120} />
						<p className="text-zinc-600 max-sm:text-sm my-3">
							The artwork will be screen printed to perfection on our premium,
							100% Cotton Redwolf branded cloth that you know and love.
						</p>
						<div className="flex items-center gap-2">
							<p>
								<TbTruckReturn className="text-6xl max-md:text-4xl " />
							</p>
							<p className="text-sm text-zinc-600 ">
								This product is eligible for return under our easy 15 day return
								policy. No questions asked.
							</p>
						</div>
						<p className="text-red-600 text-sm">view more details...</p>
						<br />
						<hr />
						<div className="flex items-center gap-6 mt-5">
							<p className="text-xl font-bold">
								<span>RS: </span>
								{product.finalPrice}
							</p>
							<p className="line-through text-lg font-bold text-zinc-500">
								<span>Rs: </span>
								{product.strickPrice}
							</p>
							<p className="text-xl font-bold text-red-600">
								{product.discount}% off!
							</p>
						</div>
						<p className="text-sm text-zinc-600">(Incl. of GST)</p>
						<div className="border border-zinc-700 bg-[#f6f6f6] flex items-center justify-center gap-10 rounded-lg my-5 mx-0 p-2">
							<div className="flex flex-col items-center justify-center ">
								<p className="text-sm">Member Price</p>
								<p className="text-sm">RS: {product.finalPrice - 250}</p>
							</div>
							<p className="text-4xl font-extralight">|</p>
							<div className="text-sm">
								Save Rs. 50 with Alpha Membership Rs. 729 and enjoy free returns
							</div>
						</div>
						<div>
							<p className="text-2xl">Click to Select Sizes:</p>
							<p>
								{' '}
								{product.productSize.split(', ').forEach((e: any) => {
									<p>{e}</p>;
								})}
							</p>
						</div>
						<div>
							<AddToCart products={product} />
						</div>
						<div className="bg-[#f5f5f5] w-72 px-[10px] pt-[1px] pb-[10px] mt-[10px]">
							<h4 className="text-lg font-bold">Login to Share & Earn Cash!</h4>
							<div className="flex gap-2 mt-3">
								<FaFacebookSquare className="text-3xl fill-blue-600 " />
								<FaTwitterSquare className="text-3xl fill-blue-500 " />
								<FaWhatsappSquare className="text-3xl fill-green-600 " />
								<FaGoogle className="text-3xl fill-red-600 " />
								<FaPinterestSquare className="text-3xl fill-red-700 " />
								<FaPlusSquare className="text-3xl fill-blue-600 " />
							</div>
						</div>
						<div className="mt-3">
							<button
								type="button"
								className="py-2 px-3 bg-[#ec1a30] rounded-md flex gap-2 items-center"
							>
								<span>
									<FaHeart className="text-sm fill-white" />
								</span>
								<p className="text-sm font-bold uppercase text-zinc-100">
									add to wish list
								</p>
							</button>
						</div>
						<div>review</div>
						<hr />
					</div>
				</div>
			</div>
			{/* key features */}
			<div className="flex flex-col justify-center">
				<h1 className="text-center uppercase font-bold text-2xl my-5">
					Key Features
				</h1>
				<MultiSlider
					slides={keyFeatures}
					width={600}
					height={600}
					autoplay={true}
					infinite={true}
					rounded={'rounded-sm gap-0'}
					responsive={responsive}
				/>
			</div>
			{/* related products */}
			<div className="my-5 p-0 border bg-slate-50 w-full h-full">
				<h1 className="text-center uppercase font-bold text-2xl mt-5 mb-3 ">
					Related products
				</h1>
				<MultiSlider
					slides={featuredCategoryItems}
					width={200}
					height={200}
					autoplay={true}
					infinite={true}
					rounded={'rounded-sm'}
					responsive={responsive}
				/>
			</div>
			{/* product information */}
			<div className="flex gap-5 max-md:flex-col items-start justify-center max-md:items-center  flex-shrink max-sm:text-xs ">
				{/* info */}
				<div className="flex flex-col bg-[#f6f6f6] w-1/2 px-4 pt-10 pb-4 max-sm:w-full ">
					<h3 className="text-center uppercase font-bold text-xl my-5">
						Product Info
					</h3>
					<br />
					<div className="mx-auto w-full">
						<div className="grid grid-cols-2 gap-6">
							<p className=" text-right font-bold text-zinc-500 uppercase">
								fabric
							</p>
							<p className="text-left text-zinc-500 ">
								100% Cotton, 220-225 GSM - Premium Heavy Gauge Fabric
							</p>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<p className=" text-right font-bold text-zinc-500 uppercase">
								COLOUR
							</p>
							<p className="text-left text-zinc-500 ">Sand</p>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<p className=" text-right font-bold text-zinc-500 uppercase">
								PRINTING
							</p>
							<p className="text-left text-zinc-500 ">Silk Screen Printed</p>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<p className=" text-right font-bold text-zinc-500 uppercase">
								STYLE
							</p>
							<p className="text-left text-zinc-500 ">
								Oversized Fit, Round Neck, Oversized Short Sleeves
							</p>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<p className=" text-right font-bold text-zinc-500 uppercase">
								SIZE
							</p>
							<p className="text-left text-zinc-500 ">
								Please refer to the size chart
							</p>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<p className=" text-right font-bold text-zinc-500 uppercase">
								MANUFACTURED, PACKED AND SOLD BY
							</p>
							<p className="text-left text-zinc-500 ">
								Red Wolf Apparel LLP 15, Patel Industrial Estate, Building no.
								2, Gauraipada, Vasai east, Maharashtra 401208, India Contact:
								orders@redwolf.in
							</p>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<p className=" text-right font-bold text-zinc-500 uppercase">
								COUNTRY OF ORIGIN
							</p>
							<p className="text-left text-zinc-500 ">India</p>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<p className=" text-right font-bold text-zinc-500 uppercase">
								SIZES
							</p>
							<div className="text-left text-red-600 ">
								Check out our Size Chart
							</div>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<p className=" text-right font-bold text-zinc-500 uppercase">
								CARE
							</p>
							<p className="text-left text-red-600 ">
								Check out our Washing instructions
							</p>
						</div>
					</div>
				</div>
				{/* review */}
				<div className="flex flex-col gap-2 bg-[#f6f6f6] w-1/2 px-4 pt-10 pb-4 max-sm:text-xs  ">
					<h3 className="text-center uppercase font-bold text-2xl my-5">
						Review
					</h3>
					<div className="flex flex-col items-center justify-center gap-2">
						<p className="text-xs">There are no reviews for this product.</p>
						<p className="text-xl font-bold uppercase">WRITE A REVIEW</p>
						<p>
							Please{' '}
							<span className="text-red-600">
								<Link href="/user">login </Link>
							</span>
							<span>or </span>
							<span className="text-red-600">
								<Link href="/user">register </Link>
							</span>{' '}
							to review
						</p>
					</div>
				</div>
			</div>
			{/* tags */}
			<div className="flex gap-2 my-5">
				<p className="text-sm max-md:text-xs">Tags:</p>
				<p className="text-red-600 text-sm max-md:text-xs">
					caraxes, the blood wyrm, game of thrones, house of the dragon, got,
					hotd, house targaryen, daemon targaryen, dragons, oversized t-shirts,
					baggy tees, tshirts, tees, mens, unisex
				</p>
			</div>
		</div>
	);
};
export default SingleProductPage;

import { footerMenuItems } from '@/constants/footer-menu-items';
import Link from 'next/link';
import { BiRupee } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
import { TbReplace } from 'react-icons/tb';
const Footer = () => {
	const footerLinks = footerMenuItems;
	return (
		<footer className=" flex flex-col items-center bg-zinc-900 text-white mt-5 ">
			<div className="mt-10 p-2 w-4/6 flex items-center justify-between gap-4 bg-zinc-800 rounded-lg">
				<p className="text-sm text-zinc-500 max-md:text-xs text-left">
					Subscribe to our Newsletter for updates and exclusive coupons & deals
				</p>
				<input
					type="text"
					placeholder="Enter your Email address..."
					name="name"
					className="p-2 rounded-sm text-xs w-1/4"
				/>
				<input
					type="button"
					value="Submit"
					className="py-2 px-3 bg-red-600 rounded-md w-56 mx-4 text-xs font-bold uppercase"
				/>
			</div>
			<div className=" flex max-md:flex-col  flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
				<div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
					{footerLinks.map((e) => (
						<div
							key={e.title}
							className="flex flex-col gap-0 text-sm max-md:text-xs min-w-[170px]"
						>
							<h3 className=" font-bold text-zinc-300">{e.title}</h3>
							{e.link.map((item) => {
								return (
									<Link
										key={item.title}
										href={item.url || '/'}
										className=" text-zinc-400"
									>
										{item.title}
									</Link>
								);
							})}
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center items-center flex-col mt-10 sm:px-16 px-6 py-10 ">
				<p className="text-center text-zinc-300 font-semibold text-base">
					Our site uses secure payment gateways. All major credit & debit cards
					accepted.
				</p>
				<div className="flex flex-row justify-center items-center gap-4  mt-10 px-6 py-10 max-md:flex-col text-zinc-500">
					<div className=" flex items-center justify-center  px-4">
						<p>
							<FaShippingFast className=" text-4xl mx-3" />
						</p>
						<p className="text-sm max-sm:text-xs">
							FREE SHIPPING ON ALL PREPAID ORDERS OVER Rs. 499
						</p>
					</div>
					<div className=" flex items-center justify-start px-4">
						<p>
							<BiRupee className=" text-4xl mx-3" />
						</p>
						<p className="text-sm max-sm:text-xs">
							CASH ON DELIVERY AVAILABLE TO MOST PARTS OF INDIA
						</p>
					</div>
					<div className=" flex items-center justify-start px-4">
						<p>
							<TbReplace className="text-4xl mx-3" />
						</p>
						<p className="text-sm max-sm:text-xs">EASY 15 DAY RETURN POLICY</p>
					</div>
				</div>
			</div>
			<div className="text-center text-zinc-200 bg-zinc-800 w-full p-4 text-sm">
				<p>© 2024 Redwolf, All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;

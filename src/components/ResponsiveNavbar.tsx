import { NavbarItems } from '@/constants/nav-items';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Menu from './Menu';
import NavbarIcons from './NavbarIcons';
import SearchBar from './SearchBar';
import logo from '/public/assets/images/logo.png';

const ResponsiveNavbar = () => {
	return (
		<div className="h-12 relative">
			{/* mobile */}
			<div className="h-full flex items-center justify-between  bg-red-600 lg:bg-white lg:hidden">
				<Menu />
				<Link href="/">
					<Image
						src={logo}
						alt="logo"
						width={155}
						height={40}
						className="h-12 bg-red-600"
					/>
				</Link>
				<div className="flex justify-between items-center gap-2">
					<NavbarIcons />
					<div>
						<FaSearch className=" text-2xl fill-white " />
					</div>
				</div>
			</div>
			{/* larger screen */}
			<div className="hidden lg:flex items-center justify-between gap-10  max-lg:gap-0 h-full border-b">
				{/* leftside */}
				<div className="w-2/3 flex items-center 2xl:gap-12 xl:gap-6 lg:gap-4">
					<div className="m-0">
						<Link href="/">
							<Image
								src={logo}
								alt="logo"
								width={155}
								height={40}
								className="bg-red-600 lg:bg-red-600 w-full h-12"
							/>
						</Link>
					</div>
					<div className="hidden lg:flex lg:gap-6 max-xl:gap-14 2xl:gap-28 mx-auto ">
						{NavbarItems.map((item, index) => (
							<div key={index} className="relative group transition-all">
								<div className="flex items-center cursor-pointer font-bold uppercase text-sm">
									<Link href="#">{item.label}</Link>
									<span className="rotate-180 transition-all group-hover:rotate-0">
										<IoIosArrowDown />
									</span>
								</div>
								{/* dropdown */}
								<div className="fixed border left-0 hidden w-screen flex-row rounded-lg bg-white py-3 shadow-lg transition-all group-hover:flex items-start justify-start gap-20 z-50">
									{item.children.map((child, childIndex) => (
										<div key={childIndex} className=" m-2 py-1 px-1">
											<div className="text-left text-sm uppercase text-red-500 font-semibold cursor-default">
												{child.label}
											</div>
											<div className="">
												{child.children
													.slice(0, 10)
													.map((childItem, childItemIndex) => (
														<div className="flex gap-8">
															<Link href={childItem.link}>
																<p className="hover:text-red-600">
																	{childItem.label}
																</p>
															</Link>
														</div>
													))}
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* rightside */}
				<div className="w-1/3 hidden lg:flex items-center justify-between gap-6 flex-shrink">
					<SearchBar />
					<NavbarIcons />
				</div>
			</div>
		</div>
	);
};

export default ResponsiveNavbar;

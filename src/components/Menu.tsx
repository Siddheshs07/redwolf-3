'use client';

import { NavbarItems } from '@/constants/nav-items';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { FaBars, FaLock, FaUser } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Menu = () => {
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	function loginHandler() {
		router.push('/user');
	}
	function trackHandler() {
		router.push('/track');
	}
	return (
		<div className="lg:hidden">
			{isMenuOpen ? (
				<AiOutlineClose
					className="cursor-pointer text-4xl absolute top-20 right-40 z-50 text-white bg-red-600 rounded-full"
					onClick={() => setIsMenuOpen((prev) => !prev)}
				/>
			) : (
				<FaBars
					className="cursor-pointer text-2xl fill-white  lg:bg-red-600 m-1"
					onClick={() => setIsMenuOpen((prev) => !prev)}
				/>
			)}

			{isMenuOpen && (
				<div className="fixed top-12 left-0 h-[calc(100vh-48px)] w-2/3  flex flex-col items-center justify-start gap-2 text-base z-10 text-zinc-900 bg-white">
					{/* login and track order */}
					<div className="bg-[#a40f22] w-full flex justify-evenly p-1 ">
						<div className="w-1/2  flex items-center justify-center gap-2 p-2 mx-1 bg-red-600">
							<FaLock className="fill-zinc-100" />
							<button
								type="button"
								className="text-zinc-100"
								onClick={loginHandler}
							>
								Log-in
							</button>
						</div>
						<div className="w-1/2 flex items-center justify-center gap-2 p-2 mx-1 bg-red-600">
							<FaLocationDot className="fill-zinc-100" />
							<button
								type="button"
								className="text-zinc-100"
								onClick={trackHandler}
							>
								Track
							</button>
						</div>
					</div>
					<div className="text-center text-red-700 font-semibold w-full">
						<p>Shop By Category</p>
						<hr />
					</div>
					{NavbarItems.map((item, index) => (
						<div key={index} className="w-full">
							<div className="flex justify-between top-0">
								<p>{item.label}</p>
								<p>
									<BiPlus />
								</p>
							</div>
							<hr />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Menu;

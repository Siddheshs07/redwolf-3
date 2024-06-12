'use client';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { dataProps } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaInfoCircle, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import CartModal from './CartModal';

const NavbarIcons = () => {
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [cartItem, setCartItem] = useState(0);
	const dispatch = useDispatch<AppDispatch>();
	const cartArray: dataProps[] = useAppSelector((state) => state.cart);

	useEffect(() => {
		setCartItem(cartArray.length);
	}, [cartArray]);

	const router = useRouter();
	const isLoggedIn = false;

	const profileHandler = () => {
		if (!isLoggedIn) {
			router.push('/user');
		}
		setIsProfileOpen((prev) => !prev);
	};
	return (
		<div className="flex items-center flex-shrink gap-10 text-3xl relative">
			<div className="max-lg:hidden">
				<FaInfoCircle className="fill-red-600" />
			</div>
			<div className="max-lg:hidden">
				<FaLocationDot className="fill-red-600" />
			</div>
			<div className="max-lg:hidden">
				<FaUser className="fill-red-600" onClick={profileHandler} />
				{isProfileOpen && (
					<div className="absolute p-4 rounded-md top-12 left-0 text-sm z-20 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
						<Link href="/user">Profile</Link>
						<div className="mt-2 cursor-pointer">LogOut</div>
					</div>
				)}
			</div>
			<div className="relative cursor-pointer">
				<Link href="/cart">
					<FaShoppingCart className="fill-red-600 max-lg:fill-zinc-100" />
					<div className="absolute -top-2 right-2 w-6 h-6 bg-red-400 rounded-full text-white text-sm flex items-center justify-center">
						{cartItem}
					</div>
				</Link>
			</div>
		</div>
	);
};

export default NavbarIcons;

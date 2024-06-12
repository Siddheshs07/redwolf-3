'use client';
import { updateCart } from '@/redux/features/cart-slice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { dataProps } from '@/types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AddToCart = ({ products }: any) => {
	const dispatch = useDispatch<AppDispatch>();
	const cartArray = useAppSelector((state) => state.cart);

	const addToCart = () => {
		const itemIndex = cartArray.findIndex(
			(cartItem) => cartItem.id === products.id
		);

		if (itemIndex !== -1) {
			const updatedCart = cartArray.map((item, index) =>
				index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
			);
			dispatch(updateCart(updatedCart));
		} else {
			const newCartItem = {
				brandName: products.brandName,
				description: products.description,
				id: products.id,
				link: products.link,
				finalPrice: products.finalPrice,
				quantity: 1,
				_id: products._id,
				gender: products.gender,
				strickPrice: products.strickPrice,
				isFeatured: products.isFeatured,
				discount: products.discount,
				productSize: products.productSize,
			};
			const updatedCart = [...cartArray, newCartItem];
			dispatch(updateCart(updatedCart));
		}
	};

	useEffect(() => {
		// console.log("cartArray", cartArray);
	}, [cartArray]);
	return (
		<div>
			<button
				className="w-full bg-[#ec1a30] m-4 p-2 rounded-md text-white font-bold uppercase"
				onClick={() => addToCart()}
			>
				Add To Cart
			</button>
		</div>
	);
};
export default AddToCart;

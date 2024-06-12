'use client';

import { updateCart } from '@/redux/features/cart-slice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { dataProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const CartPage = () => {
	const [cartItems, setCartItems] = useState<dataProps[]>([]);
	const dispatch = useDispatch<AppDispatch>();
	const cartArray: dataProps[] = useAppSelector((state) => state.cart);
	useEffect(() => {
		setCartItems(cartArray);
	}, [cartArray]);

	const incrementCartItem = (id: number) => {
		let newCartItem = cartArray.map((item, index) =>
			index === id ? { ...item, quantity: item.quantity + 1 } : item
		);
		dispatch(updateCart(newCartItem));
	};
	const decrementCartItem = (id: number) => {
		let newCartItem = cartArray.map((item, index) =>
			index === id && item.quantity > 1
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
		dispatch(updateCart(newCartItem));
	};
	const removeCartItem = (id: number) => {
		let newCartItem = [...cartArray];
		newCartItem.splice(id, 1);
		dispatch(updateCart(newCartItem));
	};
	return (
		<>
			<div className="flex items-center justify-center my-8 ">
				{cartItems.length === 0 ? (
					<div className="flex items-center justify-between gap-4 flex-col">
						<h1 className="text-4xl text-center font-bold uppercase">
							Cart Is Empty
						</h1>
						<button className="bg-red-500 m-4 p-2 rounded-lg text-white">
							<Link href="/">SHOP NOW</Link>
						</button>
					</div>
				) : (
					<div className="container">
						{cartItems.map((item, index) => (
							<div key={index} className="flex flex-shrink flex-col">
								<h1 className="font-semibold text-2xl uppercase pt-[11px] text-[#363636]">
									HERE'S WHAT'S IN YOUR CART
								</h1>
								<div className="grid grid-cols-3 gap-2 max-lg:grid-cols-1 p-2 ">
									{/* left side */}
									<div className="col-span-2">
										<div className="grid grid-cols-3 p-2 border border-zinc-300 max-lg:items-center ">
											{/* image */}
											<div className="col-span-1 max-lg:col-span-3 p-2">
												<p className="text-[#373737;]">{item.brandName}</p>
												<Image
													src={item.link}
													alt={item.brandName}
													width={300}
													height={200}
													className="h-80 w-ful"
												/>
											</div>
											{/* details */}
											<div className="col-span-2 max-lg:col-span-3 grid grid-rows-2 gap-2 w-full">
												<div className="grid grid-cols-2 ">
													{/* product detail */}
													<div className="col-span-1 max-lg:col-span-2 max-lg:my-3">
														<p className="uppercase font-semibold">
															style: trendy {item.brandName}
														</p>
														<p className="uppercase font-semibold">size: xl</p>
														<p className="uppercase font-semibold">
															<span> Total: </span>
															<span className="line-through font-normal">
																Rs: {item.quantity * item.strickPrice}
															</span>
															<span>
																{' '}
																RS: {item.quantity * item.finalPrice}
															</span>
														</p>
													</div>
													{/* cart quantity */}
													<div className="col-span-1 max-lg:col-span-2 max-lg:my-3 flex flex-shrink justify-evenly items-center  max-lg:items-center">
														<button
															type="button"
															onClick={() => {
																decrementCartItem(index);
															}}
														>
															<FaMinus className="text-2xl fill-red-600" />
														</button>
														<p className="flex flex-col justify-center items-center gap-2">
															<span>quantity</span>
															<span className="text-center w-8 p-1 border bg-transparent rounded-xl ">
																{item.quantity}
															</span>
														</p>
														<button
															type="button"
															onClick={() => {
																incrementCartItem(index);
															}}
														>
															<FaPlus className="text-2xl fill-red-600" />
														</button>
													</div>
												</div>
												{/* remover cart and whishlist */}
												<div className="row-span-1 flex justify-evenly items-start gap-2 flex-shrink">
													<button
														type="button"
														className="w-40 p-3 rounded-lg border bg-transparent text-zinc-600"
														onClick={() => {
															removeCartItem(index);
														}}
													>
														Remove
													</button>
													<button
														type="button"
														className="w-40 p-3 rounded-lg border bg-transparent text-zinc-600"
													>
														Add to wishlist
													</button>
												</div>
											</div>
										</div>
									</div>

									{/* rightside */}
									<div className="border p-4  w-full flex flex-col items-start justify-center flex-shrink lg:w-full lg:justify-start">
										<div className="">
											<button
												type="button"
												className="py-2 px-3 text-center bg-[#ec1a30] w-full rounded-md"
											>
												<p className="font-bold uppercase text-zinc-100">
													Go to checkout
												</p>
											</button>
										</div>
										<div>
											<p className="my-3 text-sm font-semibold">
												COUPONS AND VOUCHERS
											</p>
										</div>

										<p className="text-sm border border-zinc-700 bg-[#f6f6f6] rounded-lg p-2">
											Save <span className="text-red-600"> Rs. 50</span> with
											Alpha Membership on this order and enjoy free returns
										</p>
										<br />
										{/* discountcode */}
										<div className="text-sm ">
											<p>DISCOUNT COUPON CODE:</p>
											<div className="flex gap-2 my-1 ml-10">
												<input
													type="text"
													name="name"
													id="coupon"
													placeholder="Enter your coupon here"
													className="bg-gray-50 border border-zinc-500 rounded-sm p-[2px]"
												/>
												<input
													type="button"
													value="Apply"
													className="bg-transparent text-red-600 cursor-pointer"
												/>
											</div>
											<input
												type="button"
												value="VIEW AVAILABLE CODES"
												className="bg-transparent text-red-600 cursor-pointer"
											/>
										</div>
										<br />
										{/* giftcode */}
										<div className="text-sm">
											<p>GIFT VOUCHER CODE:</p>
											<div className="flex gap-2 my-1 ml-10">
												<input
													type="text"
													name="name"
													id="coupon"
													placeholder="Enter your coupon here"
													className="bg-gray-50 border border-zinc-500 rounded-sm p-[2px]"
												/>
												<input
													type="button"
													value="Apply"
													className="bg-transparent text-red-600 cursor-pointer"
												/>
											</div>
										</div>
										<br />
										{/* order summary */}
										<div className="flex flex-col">
											<p className="uppercase font-medium text-sm py-1 border-b">
												Your orders summary
											</p>
											<div className="uppercase text-center font-medium text-sm py-1 border-b flex justify-center gap-4">
												<span>subtotal: </span>
												<span>{item.quantity * item.finalPrice}</span>
											</div>
											<div className="uppercase text-center font-medium text-sm py-1 border-b flex justify-center gap-4">
												<span>total: </span>
												<span className="">
													{item.quantity * item.finalPrice + 150}
												</span>
											</div>
											<br />
											<div className="">
												<button
													type="button"
													className="py-2 px-3 bg-[#ec1a30] w-full rounded-md "
												>
													<p className="font-bold uppercase text-zinc-100">
														Go to checkout
													</p>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default CartPage;

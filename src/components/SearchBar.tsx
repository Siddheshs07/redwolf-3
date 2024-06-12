'use client';

import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
	const router = useRouter();

	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get('name') as string;
		if (name) {
			router.push(`/products?/name=${name}`);
		}
	};
	return (
		<form
			className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 "
			onSubmit={searchHandler}
		>
			<input
				type="text"
				placeholder="Search"
				name="name"
				className="flex-1 bg-transparent outline-none "
			/>
			<button className="cursor-pointer">
				<FaSearch className=" text-lg " />
			</button>
		</form>
	);
};

export default SearchBar;

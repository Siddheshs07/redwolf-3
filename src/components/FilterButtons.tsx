import React from 'react';
import { FaFilter, FaSort } from 'react-icons/fa';

const FilterButtons = () => {
	return (
		<div>
			<div className="mx-auto flex justify-evenly items-center gap-2 flex-shrink max-md:flex-wrap">
				<button
					type="button"
					className="text-sm text-center w-20 h-8 border border-[#ec1a30] text-[#ec1a30] rounded-md"
				>
					Men
				</button>
				<button
					type="button"
					className="text-sm text-center w-20 h-8 border border-[#ec1a30] text-[#ec1a30] rounded-md"
				>
					Women
				</button>
				<button
					type="button"
					className="text-sm text-center w-20 h-8  bg-[#ec1a30] text-zinc-50 rounded-md flex items-center justify-center gap-2"
				>
					<p>
						<FaFilter className="text-sm" />
					</p>
					<p>Filter</p>
				</button>
				<button
					type="button"
					className="text-sm text-center w-20 h-8  bg-[#ec1a30] text-zinc-50 rounded-md flex items-center justify-center gap-2"
				>
					<p>
						<FaSort className="text-sm" />
					</p>
					<p>Sort</p>
				</button>
			</div>
		</div>
	);
};

export default FilterButtons;

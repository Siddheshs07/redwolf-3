import { featuredBrandItems } from '@/constants/featured-brand-items';
import 'react-multi-carousel/lib/styles.css';
import MultiSlider from '../MultiSlider';
const FeaturedBrands = () => {
	const slides = featuredBrandItems;
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 8,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
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
	// 140 115
	return (
		<div className="w-full  my-5">
			<h1 className="text-2xl font-bold mb-5 text-center uppercase">
				Featured Brands
			</h1>
			<MultiSlider
				slides={slides}
				width={130}
				height={100}
				autoplay={true}
				infinite={true}
				rounded={'rounded-sm'}
				responsive={responsive}
			/>
		</div>
	);
};

export default FeaturedBrands;

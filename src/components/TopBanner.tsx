import { topBannerItems } from '@/constants/top-banner-items';
import 'react-multi-carousel/lib/styles.css';
import MultiSlider from './MultiSlider';
const TopBanner = () => {
	const slides = topBannerItems;
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 12,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 10,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 6,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 4,
		},
	};
	// 165 75
	return (
		<div className="">
			<MultiSlider
				slides={slides}
				width={165}
				height={75}
				autoplay={true}
				infinite={true}
				rounded={'rounded-full'}
				responsive={responsive}
			/>
		</div>
	);
};

export default TopBanner;

import { featuredThemesItems } from '@/constants/featured-theme-items';
import 'react-multi-carousel/lib/styles.css';
import MultiSlider from '../MultiSlider';

const FeaturedTheme = () => {
	const slides = featuredThemesItems;
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			slidesToSlide: 2, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	// 150 75
	return (
		<div className="w-full m-0 my-5">
			<h1 className="text-2xl font-bold mb-1 text-center uppercase">
				Featured Themes
			</h1>
			<MultiSlider
				slides={slides}
				width={150}
				height={75}
				autoplay={false}
				infinite={false}
				rounded={'rounded-full'}
				responsive={responsive}
			/>
		</div>
	);
};

export default FeaturedTheme;

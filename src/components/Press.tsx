import { pressItems } from '@/constants/press-items';
import 'react-multi-carousel/lib/styles.css';
import MultiSlider from './MultiSlider';
const Press = () => {
	const slides = pressItems;
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
	// 130 100
	return (
		<div className="w-full my-5">
			<h1 className="text-2xl font-bold mb-1 text-center uppercase">PRESS</h1>
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

export default Press;

'use client';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

type SlideProps = {
	slides: any;
	width: number;
	height: number;
	autoplay: boolean;
	infinite: boolean;
	rounded: string;
	responsive: any;
};

const MultiSlider = ({
	slides,
	width,
	height,
	autoplay,
	infinite,
	rounded,
	responsive,
}: SlideProps) => {
	return (
		<div>
			<Carousel
				responsive={responsive}
				infinite={infinite}
				showDots={false}
				autoPlay={autoplay}
				autoPlaySpeed={3000}
				arrows={false}
				className="mb-2"
			>
				{slides.map((e, i) => (
					<div key={i} className="flex flex-col justify-center items-center">
						<Image
							src={e?.url}
							alt={e?.title}
							width={width}
							height={height}
							key={e?.title}
							className={`${rounded}`}
						/>
						{e.title && (
							<p className="text-center font-bold uppercase mt-5 mb-3">
								{e?.title}
							</p>
						)}
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default MultiSlider;

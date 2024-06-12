import { Footer } from '@/components';
import ResponsiveNavbar from '@/components/ResponsiveNavbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppProvider from '../redux/Provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cool T-Shirts Online: Designer T-Shirts & Merch in India | Redwolf',
	description:
		'Look Alive! Redwolf is an Indie T-Shirt brand selling a line of Cool T-Shirts & Merch Online in India fashioned by Music, Art and All Things Pop Culture.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${
					process.env.NODE_ENV == 'development' ? 'debug-screens' : ''
				}`}
			>
				<AppProvider>
					<ResponsiveNavbar />
					{children}
					<Footer />
				</AppProvider>
			</body>
		</html>
	);
}

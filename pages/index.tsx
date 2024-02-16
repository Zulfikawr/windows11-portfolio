import Head from 'next/head';
import Icons from '../components/modules/Icons/Icons';

export default function Home() {
	return (
		<>
			<Head>
				<title>Zulfikar</title>
				<link rel="canonical" href="https://www.kassq.dev" />

				{/* Description */}
				<meta
					name="description"
					content="Zulfikar's personal website. A place to share my projects and learn about me."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Zulfikar" />
				<meta property="og:url" content="https://www.kassq.dev" />
				<meta
					property="og:description"
					content="Zulfikar's personal website. A place to share my projects and learn about me."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<Icons />
			</div>
		</>
	);
}

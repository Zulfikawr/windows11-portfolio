import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';

function Links() {
	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					<Link href={'https://www.linkedin.com/in/muhammad-zulfikar-076a7b227'} passHref>
						<a target="_blank">
							<div className={styles.listItem}>
								<div className={styles.listItemName}>
									<Image
										src="/svg/twitter.svg"
										alt="icon"
										width={18}
										height={18}
									></Image>
									<p>LinkedIn</p>
								</div>
								<p className={styles.listItemDateModified}>
									30/12/2021 02:02
								</p>
								<p className={styles.listItemType}>Shortcut</p>
								<p className={styles.listItemSize}>2kt</p>
							</div>
						</a>
					</Link>
					<Link
						href={'https://discord.com/users/217639084888162304'}
						passHref
					>
						<a target="_blank">
							<div className={styles.listItem}>
								<div className={styles.listItemName}>
									<Image
										src="/svg/discord.svg"
										alt="icon"
										width={18}
										height={18}
									></Image>
									<p>Discord</p>
								</div>
								<p className={styles.listItemDateModified}>
									30/01/2022 12:44
								</p>
								<p className={styles.listItemType}>Shortcut</p>
								<p className={styles.listItemSize}>2kt</p>
							</div>
						</a>
					</Link>
					<Link href={'https://github.com/muhammad-zulfikar/'} passHref>
						<a target="_blank">
							<div className={styles.listItem}>
								<div className={styles.listItemName}>
									<Image
										src="/svg/github.svg"
										alt="icon"
										width={18}
										height={18}
									></Image>
									<p>GitHub</p>
								</div>
								<p className={styles.listItemDateModified}>
									01/08/2022 08:00
								</p>
								<p className={styles.listItemType}>Shortcut</p>
								<p className={styles.listItemSize}>2kt</p>
							</div>
						</a>
					</Link>
					<Link
						href={
							'https://open.spotify.com/user/ayg671h7p08iisz8d2hp8vjw4'
						}
						passHref
					>
						<a target="_blank">
							<div className={styles.listItem}>
								<div className={styles.listItemName}>
									<Image
										src="/svg/spotify.svg"
										alt="icon"
										width={18}
										height={18}
									></Image>
									<p>Spotify</p>
								</div>
								<p className={styles.listItemDateModified}>
									01/01/2024 04:20
								</p>
								<p className={styles.listItemType}>Shortcut</p>
								<p className={styles.listItemSize}>2kt</p>
							</div>
						</a>
					</Link>
					<Link
						href={'https://steamcommunity.com/id/kassqu'}
						passHref
					>
						<a target="_blank">
							<div className={styles.listItem}>
								<div className={styles.listItemName}>
									<Image
										src="/svg/steam.svg"
										alt="icon"
										width={18}
										height={18}
									></Image>
									<p>Steam</p>
								</div>
								<p className={styles.listItemDateModified}>
									20/12/2021 12:20
								</p>
								<p className={styles.listItemType}>Shortcut</p>
								<p className={styles.listItemSize}>2kt</p>
							</div>
						</a>
					</Link>
				</div>
			</>
		);
	};
	return (
		<>
			<Head>
				<title>Zulfikar - Links</title>
				<link
					rel="canonical"
					href="https://www.kassq.dev/explorer/links"
				/>

				{/* Description */}
				<meta
					name="description"
					content="All my social media links combined in one place. How cool is that?"
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Zulfikar - Links" />
				<meta
					property="og:url"
					content="https://www.kassq.dev/explorer/links"
				/>
				<meta
					property="og:description"
					content="All my social media links combined in one place. How cool is that?"
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					icon="folder"
					folder="Links"
					topNav={true}
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Links;

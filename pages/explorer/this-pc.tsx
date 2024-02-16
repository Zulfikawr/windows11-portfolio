import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillPinAngleFill } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/GridList.module.css';

function ThisPC() {
	const content = () => {
		return (
			<>

				<div className={styles.dropdownNav}>
					<RiArrowDropDownLine />
					<h2>Devices and drives (2)</h2>
					<div />
				</div>

				<div className={styles.wrapper}>
					<div className={`${styles.item} ${styles.disk}`}>
						<div>
							<Image
								src="/icons/drives/c.png"
								alt="icon"
								width={50}
								height={50}
							/>
						</div>
						<div>
							<p>Windows (C:)</p>
							<span className={styles.progressBar} />
							<p>85.8 GB free of 222 GB</p>
						</div>
					</div>
					<div className={`${styles.item} ${styles.disk}`}>
						<div>
							<Image
								src="/icons/drives/d.png"
								alt="icon"
								width={50}
								height={50}
							/>
						</div>
						<div>
							<p>Local Disk (D:)</p>
							<span className={styles.progressBar} />
							<p>393 GB free of 465 GB</p>
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<Head>
				<title>Zulfikar - This PC</title>
				<link
					rel="canonical"
					href="https://www.kassq.dev/explorer/this-pc"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Yeah, this is the file explorer's this PC page. Nothing interesting here."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Zulfikar - This PC" />
				<meta
					property="og:url"
					content="https://www.kassq.dev/explorer/this-pc"
				/>
				<meta
					property="og:description"
					content="Yeah, this is the file explorer's this PC page. Nothing interesting here."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					folder="This PC"
					topNav={false}
					icon="this-pc"
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default ThisPC;

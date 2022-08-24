import type { AppProps } from 'next/app'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import { NormalizeStyles } from '../styles/normalize'

const DOMAIN = 'your-site.com'
const URL = 'https://your-site.com'
const TITLE = 'Title'
const PREVIEW_TITLE = 'Preview Title'
const DESCRIPTION = 'Description'
const IMAGE_PREVIEW_LINK = 'https://your-site.com/preview-image-link.jpg'


const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>{TITLE}</title>
				<meta name="description" content={DESCRIPTION} />

				{/* <!-- Facebook Meta Tags --> */}
				<meta property="og:url" content={URL} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={PREVIEW_TITLE} />
				<meta property="og:description" content={DESCRIPTION} />
				<meta property="og:image" content={IMAGE_PREVIEW_LINK} />

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content={DOMAIN} />
				<meta property="twitter:url" content={URL} />
				<meta name="twitter:title" content={PREVIEW_TITLE} />
				<meta name="twitter:description" content={DESCRIPTION} />
				<meta name="twitter:image" content={IMAGE_PREVIEW_LINK} />
				<meta name="twitter:card" content="summary" />

				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:type" content="image/jpg" />

				<meta property="vk:image" content={IMAGE_PREVIEW_LINK} />
			</Head>
			<NormalizeStyles/>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}

export default App

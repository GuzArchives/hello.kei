import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
	static getInitialProps = getInitialProps;

	render() {
		return (
			<Html>
				<Head>
					<meta name='application-name' content='Hello.Kei' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					<meta name='apple-mobile-web-app-title' content='Hello.Kei' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='theme-color' content='#212529' />
					<link rel='shortcut icon' href='/icons/favicon.ico' />
					<link
						rel='icon'
						type='image/png'
						sizes='144x144'
						href='/icons/android-ldpi.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='192x192'
						href='/icons/android-mdpi.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='288x288'
						href='/icons/android-hdpi.png'
					/>
					<link rel='apple-touch-icon' href='/icons/android-hdpi.png' />
					<link rel='manifest' href='/manifest.json' />
					<meta property='og:type' content='website' />
					<meta property='og:title' content='Hello.Kei' />
					<meta property='og:site_name' content='Hello.Kei' />
					<meta property='og:url' content='https://hellokei.vercel.app' />
					<meta
						property='og:image'
						content='https://hellokei.vercel.app/icons/android-hdpi.png'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

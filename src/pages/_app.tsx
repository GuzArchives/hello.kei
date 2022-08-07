import '../styles/globals.css';
import 'windi.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import Layout from '~layouts/DefaultLayout';

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	const preferredColorScheme = useColorScheme();

	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'color-scheme',
		defaultValue: preferredColorScheme,
		getInitialValueInEffect: true,
	});

	// const [primaryColor, setPrimaryColor] = useLocalStorage<string>({
	// 	key: 'color-main',
	// 	defaultValue: 'gray',
	// 	getInitialValueInEffect: true,
	// });

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>

			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme,
						primaryColor: 'gray',
					}}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

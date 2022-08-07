import type { ReactNode } from 'react';

import Menu from '~components/Menu';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<main className='h-screen'>{children}</main>
			<footer className='fixed bottom-0 p-2'>
				<Menu />
			</footer>
		</>
	);
}

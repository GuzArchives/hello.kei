import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Loader } from '@mantine/core';

interface Props {
	children: ReactNode;
	client?: boolean;
	server?: boolean;
}

export default function Render({ children, client, server }: Props) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted && client) return <Loader />;

	if (mounted && server) return <Loader />;

	return children as ReactElement;
}

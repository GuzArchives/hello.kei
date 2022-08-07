import type { NextPage } from 'next';
import { Handler as MessageHandler } from '~components/Message';

const Home: NextPage = () => {
	return (
		<>
			<MessageHandler />
		</>
	);
};

export default Home;

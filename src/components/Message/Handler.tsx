import Message from '~components/Message';
import { Render } from '~components/Utilities';

interface Props {
	size?: string | number;
}

export default function MessageHandler({ size = 'screen' }: Props) {
	return (
		<section
			className={`h-${size} w-${size} flex justify-center items-center text-center`}
		>
			<Render client>
				<Message />
			</Render>
		</section>
	);
}

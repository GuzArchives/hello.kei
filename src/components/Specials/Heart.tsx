import { IconHeart } from '@tabler/icons';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

export default function Heart() {
	const [play] = useSound('/sounds/heartbeat.wav', {
		format: ['wav'],
		volume: 0.3,
	});

	return (
		<motion.div
			whileTap={{ scale: [1, 0.9, 1, 0.8, 1], transition: { duration: 0.2 } }}
			initial={false}
			onClick={() => play()}
		>
			<IconHeart size={100} />
		</motion.div>
	);
}

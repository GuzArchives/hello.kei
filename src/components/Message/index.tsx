import { Text } from '@mantine/core';
import { ReactNode, useEffect } from 'react';
import { motion, HTMLMotionProps, useAnimationControls } from 'framer-motion';
import { Heart } from '~components/Specials';
import useSfx from '~hooks/useSfx';

import Handler from './Handler';
export { Handler };

interface Props {
	text?: string;
	emote?: string;
	icon?: ReactNode;
	style?: {
		text?: string;
		emote?: string;
	};
	animations?: {
		main?: HTMLMotionProps<'div'>;
		text?: HTMLMotionProps<'div'>;
		emote?: HTMLMotionProps<'div'>;
	};
}

export default function Message({
	text = 'Hello, Kei',
	icon = <Heart />,
	emote,
	style = {},
	animations = {
		main: {
			initial: { y: 0 },
			animate: { y: [0, 7, 0] },
			transition: { repeat: Infinity, duration: 4 },
		},
	},
}: Props) {
	if (!icon) style.emote = 'text-5xl mb-2';

	const animControls = useAnimationControls();

	const { play } = useSfx('message_pop.wav', {
		sprite: {
			pop0: [0, 300],
			pop1: [600, 300],
			pop2: [1300, 300],
			pop3: [1850, 300],
			pop4: [2600, 300],
		},
	});

	useEffect(() => {
		animControls.start({ scale: [1, 0.8, 1], transition: { duration: 0.2 } });

		const rnd = Math.floor(Math.random() * (5 - 0) + 0);
		play({ id: `pop${rnd}` });
	}, [animControls, emote, icon, play, text]);

	return (
		<motion.div animate={animControls}>
			<motion.div {...animations?.main}>
				<motion.div {...animations?.emote} className={style?.emote}>
					{emote ?? icon}
				</motion.div>
				<motion.p {...animations?.text} className={style?.text}>
					<Text size='xl'>{text}</Text>
				</motion.p>
			</motion.div>
		</motion.div>
	);
}

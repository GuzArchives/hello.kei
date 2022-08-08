import {
	IconMenu2,
	IconColorSwatch,
	IconVolume,
	IconVolume2,
	IconVolume3,
} from '@tabler/icons';
import { Menu as M, ActionIcon, Popover } from '@mantine/core';
import { useState } from 'react';
import { SwitchTheme } from '~components/MantineUI';
import useSfx from '~hooks/useSfx';

import SchemePicker from './SchemePicker';
import VolumePicker from './VolumePicker';
export { SchemePicker, VolumePicker };

export default function Menu() {
	const [opened, setOpened] = useState(false);

	const { play, volume } = useSfx('click.wav');

	const playClick = (high: boolean) =>
		play({ playbackRate: (high ? 3 : 1) + Math.random() });

	return (
		<M
			opened={opened}
			onChange={setOpened}
			onClose={() => playClick(false)}
			onOpen={() => playClick(true)}
			closeOnItemClick={false}
			position='top-start'
			transition='pop'
			width={200}
		>
			<M.Target>
				<ActionIcon size='sm' variant={opened ? 'filled' : 'outline'}>
					<IconMenu2 size={16} />
				</ActionIcon>
			</M.Target>

			<M.Dropdown>
				<M.Label>Menu</M.Label>

				<M.Item icon={<SwitchTheme onChange={playClick} />}>
					<p>Tema escuro</p>
				</M.Item>
				<M.Item icon={<IconColorSwatch />} disabled>
					<Popover position='right' withArrow>
						<Popover.Target>
							<p>Mudar cores</p>
						</Popover.Target>
						<Popover.Dropdown>
							<SchemePicker />
						</Popover.Dropdown>
					</Popover>
				</M.Item>

				<M.Divider />

				<M.Item
					icon={
						volume == 0 ? (
							<IconVolume3 />
						) : volume < 0.3 ? (
							<IconVolume2 />
						) : (
							<IconVolume />
						)
					}
				>
					<VolumePicker />
				</M.Item>
			</M.Dropdown>
		</M>
	);
}

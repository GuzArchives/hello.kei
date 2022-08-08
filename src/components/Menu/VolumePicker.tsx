import { Slider } from '@mantine/core';
import useSfx from '~hooks/useSfx';

export default function VolumePicker() {
	const { play, volume, setVolume } = useSfx('click.wav');

	const steps = [
		{ value: 0, label: '0' },
		{ value: 25, label: '1' },
		{ value: 50, label: '2' },
		{ value: 75, label: '3' },
		{ value: 100, label: '4' },
	];

	return (
		<Slider
			label={(v) => steps.find((s) => s.value == v)?.label}
			onChangeEnd={(value) => {
				setVolume(() =>
					Number.parseFloat(`0.${steps.find((s) => s.value == value)?.label}`)
				);
			}}
			defaultValue={steps.find((s) => s.label === `${volume * 10}`)?.value}
			step={25}
			marks={steps}
			styles={{ markLabel: { display: 'none' } }}
		/>
	);
}

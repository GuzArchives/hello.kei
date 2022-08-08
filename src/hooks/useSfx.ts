import { useLocalStorage } from '@mantine/hooks';
import { useSound } from 'use-sound';
import { SpriteMap } from 'use-sound/dist/types';

/**
 * Custom hook to play sound effects.
 *
 * @param file The file name of the sound effect.
 */
export default function useSfx(
	file: string,
	config?: { format?: string[]; sprite?: SpriteMap }
) {
	const [sfxVolume, setVolume] = useLocalStorage<number>({
		key: 'sfx-volume',
		defaultValue: 0.3,
	});

	/**
	 * Regex to extract the extension from file name.
	 *
	 * Thanks to Tomalak, on stackoverflow for the regex.
	 * https://stackoverflow.com/a/680982
	 * CC BY-SA 4.0
	 */
	const regExt = /(?:\.([^.]+))?$/;

	const [play] = useSound(`/sounds/sfx/${file}`, {
		format: config?.format ?? [regExt.exec(file)?.[1] ?? file.split('.').pop()],
		volume: sfxVolume,
		sprite: config?.sprite,
	});

	return {
		play,
		volume: sfxVolume,
		setVolume,
	};
}

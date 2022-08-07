import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect, useState } from 'react';

function getColors() {
	const colorList: { values: string[]; names: string[] } = {
		values: [],
		names: [],
	};

	for (const color in DEFAULT_THEME.colors) {
		const currentColor = DEFAULT_THEME.colors[color];
		colorList.names.push(color);
		colorList.values.push(currentColor[currentColor.length - 1]);
	}

	return colorList;
}

export default function SchemePicker() {
	// const [colorValue, onColorChange] = useLocalStorage<string>({
	// 	key: 'color-main',
	// 	defaultValue: 'gray',
	// 	getInitialValueInEffect: true,
	// });

	const [value, onChange] = useState('gray');

	// useEffect(() => {
	// 	onColorChange(value);
	// }, [value]);

	return (
		<div className='translate-x--5'>
			<ColorPicker
				size='xs'
				format='hex'
				value={value}
				onChange={onChange}
				withPicker={false}
				swatches={getColors().values}
			/>
			<Text align='center' style={{ marginTop: 5 }}>
				{getColors().names[getColors().values.indexOf(value)]}
			</Text>
		</div>
	);
}

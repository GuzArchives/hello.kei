import { createContext } from 'react';

const PrimaryColorContext = createContext({
	primaryColor: 'gray',
	setPrimaryColor: (value: string) => {},
});

export default PrimaryColorContext;

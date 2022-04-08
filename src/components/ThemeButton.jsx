import { useEffect, useState, useRef } from 'react';
import isDay from '../utils/isDay';

export default function ThemeButton() {
	const [darkMode, setDarkMode] = useState(true);
	const ref = useRef();

	useEffect(() => {
		if (isDay()) {
			handleTheme('light');
		} else {
			handleTheme('dark');
		}
	}, []);

	const handleTheme = mode => {
		if (mode === 'light') {
			window.document.body.classList.add('light-theme');
			ref.current.classList.remove('bx-moon');
			ref.current.classList.add('bx-sun');
			setDarkMode(false);
		}
		if (mode === 'dark') {
			window.document.body.classList.remove('light-theme');
			ref.current.classList.remove('bx-sun');
			ref.current.classList.add('bx-moon');
			setDarkMode(true);
		}
	};

	const handleButton = () => {
		if (darkMode) {
			handleTheme('light');
		} else {
			handleTheme('dark');
		}
	};
	return (
		<i
			ref={ref}
			onClick={handleButton}
			className={`bx bx-moon change-theme`}
			id='theme-button'
		/>
	);
}

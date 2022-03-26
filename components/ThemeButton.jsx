import { useState, useRef } from 'react';

export default function ThemeButton() {
	const [theme, setTheme] = useState('dark');
	const ref = useRef();
	const handleTheme = () => {
		if (theme === 'dark') {
      // window.document.body.classList.remove('dark')
      window.document.body.classList.add('light-theme')
			ref.current.classList.remove('bx-moon');
			ref.current.classList.add('bx-sun');
			setTheme('light');
		} else {
      window.document.body.classList.remove('light-theme')
			ref.current.classList.remove('bx-sun');
			ref.current.classList.add('bx-moon');
			setTheme('dark');
		}
	};
	return (
		<i
			ref={ref}
			onClick={handleTheme}
			className={`bx bx-moon change-theme`}
			id='theme-button'
		/>
	);
}

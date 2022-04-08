import Link from 'next/link'
import { useHomeContext } from '../../context/HomeContext'
import ThemeButton from '../ThemeButton'

export default function Header() {
	const { homeState } = useHomeContext()
	const navLinks = [
		{
			id: 1,
			to: '#home',
			icon: 'bx bx-home-alt',
		},
		{
			id: 2,
			to: '#about',
			icon: 'bx bx-user',
		},
		{
			id: 3,
			to: '#skills',
			icon: 'bx bx-book',
		},
		{
			id: 4,
			to: '#work',
			icon: 'bx bx-briefcase-alt-2',
		},
		{
			id: 5,
			to: '#contact',
			icon: 'bx bx-message-square-detail',
		},
	]
	return (
		<header className='header' id='header'>
			<nav className='nav container'>
				<Link href='/'>
					<a className='nav__logo'>Juan</a>
				</Link>
				{/* <div className='nav__menu'>
					<ul className='nav__list'>
						{navLinks.map(l => (
							<li key={l.id} className='nav__item'>
								<a
									href={l.to}
									className={`nav__link ${
										l.to === `#${homeState.activeSection}` ? 'active-link' : ''
									}`}
								>
									<i className={l.icon} />
								</a>
							</li>
						))}
					</ul>
				</div> */}
				{/* Theme change button */}
				<ThemeButton />
			</nav>
		</header>
	)
}

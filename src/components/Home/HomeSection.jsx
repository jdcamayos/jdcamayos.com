import Image from 'next/image'
import { useEffect } from 'react'
import { useHomeContext } from '../../context/HomeContext'
import { useObserver } from '../../hooks/useObserver'
//
import profileJuan from '../../../public/assets/no-bg/5.png'

export default function HomeSection() {
	const { homeState, setHomeState } = useHomeContext()
	const [ref, isVisible] = useObserver()

	useEffect(() => {
		setHomeState({
			...homeState,
			activeSection: 'home',
		})
	}, [isVisible])

	const socialLinks = [
		{ id: 1, to: 'https://www.linkedin.com/in/jdcamayos/', icon: 'bx bxl-linkedin-square' },
		{ id: 2, to: 'https://github.com/jdcamayos', icon: 'bx bxl-github' },
		// { id: 3, to: 'https://dribbble.com', icon: 'bx bxl-dribbble' },
	]
	return (
		<section className='home section' id='home' ref={ref}>
			<div className='home__container container grid'>
				<div className='home__data'>
					<span className='home__greeting'>Hello, {"I'm"} </span>
					<h1 className='home__name'>Juan Camayo</h1>
					<h3 className='home__education'>Software Developer</h3>

					<div className='home__buttons'>
						{/* <a href='#' className='button button--ghost'>
							Download CV
						</a> */}
						<a href='#about' className='button'>
							About me
						</a>
					</div>

					<div className='home__handle'>
						{/* <div className='home__img'> */}
						<Image
							src={profileJuan}
							alt='Perfil'
							// layout='responsive'
							// objectFit='contain'
							// objectPosition='bottom'
						/>
						{/* </div> */}
					</div>

					<div className='home__social'>
						{socialLinks.map(l => (
							<a
								key={l.id}
								href={l.to}
								target='_blank'
								rel='noreferrer'
								className='home__social-link'
							>
								<i className={l.icon} />
							</a>
						))}
					</div>

					<a href='#about' className='home__scroll'>
						<i className='bx bx-mouse home__scroll-icon' />
						<span className='home__scroll-name'>Scroll Down</span>
					</a>
				</div>
			</div>
		</section>
	)
}

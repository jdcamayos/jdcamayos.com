import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useHomeContext } from '../../context/HomeContext'
import { useObserver } from '../../hooks/useObserver'

export default function AboutSection() {
	const { homeState, setHomeState } = useHomeContext()
	const [ref, isVisible] = useObserver()

	useEffect(() => {
		setHomeState({
			...homeState,
			activeSection: 'about',
		})
	}, [isVisible])

	const [aboutState, setAboutState] = useState({
		image: '',
		cards: [],
		description: '',
	})
	useEffect(() => {
		setAboutState({
			cards: [
				{
					id: 1,
					title: 'Experience',
					subtitle: '2 Years Working',
					icon: 'bx bx-award',
				},
				{
					id: 2,
					title: 'Customers',
					subtitle: '5 projects done',
					icon: 'bx bx-briefcase-alt',
				},
				{
					id: 3,
					title: 'Personal',
					subtitle: '20 projects done',
					icon: 'bx bx-cycling',
				},
			],
			description:
				'Selft-taugh software developer. I learned to program in 2020, since then I haven’t stopped learning new technologies and applying them to projects.',
		})
	}, [])

	return (
		<section className='about section' id='about' ref={ref}>
			<span className='section__subtitle'>My Intro</span>
			<h2 className='section__title'>About Me</h2>

			<div className='about__container container grid'>
				{aboutState.image && (
					<div className='about__img'>
						<Image
							src={aboutState.image}
							alt='About'
							layout='responsive'
							objectFit='contain'
						/>
					</div>
				)}

				<div className='about__data'>
					<div className='about__info'>
						{aboutState.cards?.map(card => (
							<div key={card.id} className='about__box'>
								<i className={`${card.icon} about__icon`} />
								<h3 className='about__title'>{card.title}</h3>
								<span className='about__subtitle'>{card.subtitle}</span>
							</div>
						))}
					</div>

					<p className='about__description'>{aboutState.description}</p>

					<a href='#contact' className='button'>
						Contact Me
					</a>
				</div>
			</div>
		</section>
	)
}

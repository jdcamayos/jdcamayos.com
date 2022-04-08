import { useEffect, useState } from 'react'
import Image from 'next/image'
import work1 from '../../../public/assets/img/work1.jpg'
import work2 from '../../../public/assets/img/work2.jpg'
import work3 from '../../../public/assets/img/work3.jpg'
import work4 from '../../../public/assets/img/work4.jpg'
import work5 from '../../../public/assets/img/work5.jpg'
import { useHomeContext } from '../../context/HomeContext'
import { useObserver } from '../../hooks/useObserver'

export default function WorkSection() {
	const { homeState, setHomeState } = useHomeContext()
	const [ref, isVisible] = useObserver()

	useEffect(() => {
		setHomeState({
			...homeState,
			activeSection: 'work',
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])

	const workList = [
		{
			id: 1,
			title: 'Web design',
			image: work1,
			tags: ['web'],
		},
		{
			id: 2,
			title: 'App movil',
			image: work2,
			tags: ['movil'],
		},
		{
			id: 3,
			title: 'Brand design',
			image: work3,
			tags: ['design'],
		},
		{
			id: 4,
			title: 'Web design',
			image: work4,
			tags: ['web'],
		},
		{
			id: 5,
			title: 'App movil',
			image: work5,
			tags: ['movil'],
		},
	]
	const [filterWorks, setFilterWorks] = useState([...workList])
	const [filterSelected, setFilterSelected] = useState('all')

	const filterType = {
		all: { id: 1, name: 'All', tag: 'all', filter: workList },
		web: {
			id: 2,
			name: 'Web',
			tag: 'web',
			filter: workList.filter(w => w.tags.includes('web')),
		},
		movil: {
			id: 3,
			name: 'Movil',
			tag: 'movil',
			filter: workList.filter(w => w.tags.includes('movil')),
		},
		design: {
			id: 4,
			name: 'Design',
			tag: 'design',
			filter: workList.filter(w => w.tags.includes('design')),
		},
	}

	const handlerFilter = type => {
		setFilterSelected(type)
		const res = filterType[type].filter
		setFilterWorks(res)
	}

	return (
		<section className='work section' id='work' ref={ref}>
			<span className='section__subtitle'>My Portfolio</span>
			<h2 className='section__title'>Recent Works</h2>

			<div className='work__filters'>
				{Object.keys(filterType).map(t => (
					<span
						key={filterType[t].id}
						onClick={() => handlerFilter(filterType[t].tag)}
						className={`work__item ${
							t === filterSelected ? 'active-work' : ''
						}`}
					>
						{filterType[t].name}
					</span>
				))}
			</div>

			<div className='work__container container grid'>
				{filterWorks.map(w => (
					<div key={w.id} className='work__card'>
						<Image src={w.image} alt='' className='work__img' />

						<h3 className='work__title'>{w.title}</h3>

						<a href='#' className='work__button'>
							Demo <i className='bx bx-right-arrow-alt work__icon' />
						</a>
					</div>
				))}
			</div>
		</section>
	)
}

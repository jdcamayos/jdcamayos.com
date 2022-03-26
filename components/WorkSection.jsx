import { useState } from 'react';
import Image from 'next/image';

export default function WorkSection({ workList }) {
	const [filterWorks, setFilterWorks] = useState([...workList]);
	const [filterSelected, setFilterSelected] = useState('all');

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
	};

	const handlerFilter = type => {
		setFilterSelected(type);
		const res = filterType[type].filter;
		setFilterWorks(res);
	};

	return (
		<section className='work section' id='work'>
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
	);
}

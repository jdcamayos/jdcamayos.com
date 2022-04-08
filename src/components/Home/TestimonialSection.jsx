import Image from 'next/image'
import testimonial1 from '../../../public/assets/img/testimonial1.png'
import testimonial2 from '../../../public/assets/img/testimonial2.png'
import testimonial3 from '../../../public/assets/img/testimonial3.png'

export default function TestimonialSection() {
	const testimonials = [
		{
			id: 1,
			name: 'Jhon Doe',
			description:
				'A really good job, all aspects of the project were followed step by step and with good results.',
			image: testimonial1,
		},
		{
			id: 2,
			name: 'Paula Vusy',
			description:
				'A really good job, all aspects of the project were followed step by step and with good results.',
			image: testimonial2,
		},
		{
			id: 3,
			name: 'Sara Cill',
			description:
				'A really good job, all aspects of the project were followed step by step and with good results.',
			image: testimonial3,
		},
	]
	return (
		<section className='testimonial section'>
			<span className='section__subtitle'>My clients say</span>
			<h2 className='section__title'>Testimonial</h2>

			<div className='testimonial__container container'>
				<div className='testimonial__carousel'>
					{testimonials.map(t => (
						<div key={t.id} className='testimonial__card'>
							<Image src={t.image} className='testimonial__img' alt='' />
							<h3 className='testimonial__name'>{t.name}</h3>
							<p className='testimonial__description'>{t.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

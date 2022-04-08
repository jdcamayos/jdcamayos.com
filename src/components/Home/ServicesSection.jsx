import { useState, useEffect } from 'react'
import { useHomeContext } from '../../context/HomeContext'
import { useObserver } from '../../hooks/useObserver'
import ServiceCard from '../ServiceCard'

export default function ServicesSection() {
	const { homeState, setHomeState } = useHomeContext()
	const [ref, isVisible] = useObserver()

	useEffect(() => {
		setHomeState({
			...homeState,
			activeSection: 'services',
		})
	}, [isVisible])

	const [stateServices, setStateServices] = useState({
		services: [],
	})

	useEffect(() => {
		setStateServices({
			...stateServices,
			services: [
				{
					id: 1,
					title: 'Product \nDesigner',
					description:
						'Service with more than 3 years of experience. Providing quality work to clients and companies.',
					activities: [
						{
							id: 1,
							content: 'I develop the user interface',
						},
						{
							id: 2,
							content: 'Web page development',
						},
						{
							id: 3,
							content: 'I create ux element interactions',
						},
						{
							id: 4,
							content: 'I position your company brand',
						},
						{
							id: 5,
							content: 'Desgin and mockups of products for companies',
						},
					],
				},
				{
					id: 2,
					title: 'Ui/Ux \nDesigner',
					description: '',
					activities: [
						{
							id: 1,
							content: 'I develop the user interface',
						},
						{
							id: 2,
							content: 'Web page development',
						},
						{
							id: 3,
							content: 'I create ux element interactions',
						},
						{
							id: 4,
							content: 'I position your company brand',
						},
						{
							id: 5,
							content: 'Desgin and mockups of products for companies',
						},
					],
				},
				{
					id: 3,
					title: 'Visual \nDesigner',
					description: '',
					activities: [
						{
							id: 1,
							content: 'I develop the user interface',
						},
						{
							id: 2,
							content: 'Web page development',
						},
						{
							id: 3,
							content: 'I create ux element interactions',
						},
						{
							id: 4,
							content: 'I position your company brand',
						},
						{
							id: 5,
							content: 'Desgin and mockups of products for companies',
						},
					],
				},
			],
		})
	}, [])
	return (
		<section className='services section' id='services' ref={ref}>
			<span className='section__subtitle'>My Services</span>
			<h2 className='section__title'>What I Offer</h2>

			<div className='services__container container grid'>
				{stateServices.services?.map(service => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
		</section>
	)
}

import { useEffect, useState } from 'react'
import { useHomeContext } from '../../context/HomeContext'
import { useObserver } from '../../hooks/useObserver'

export default function ContactSection() {
	const { homeState, setHomeState } = useHomeContext()
	const [ref, isVisible] = useObserver()

	useEffect(() => {
		setHomeState({
			...homeState,
			activeSection: 'contact',
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])

	const [stateContact, setStateContact] = useState({
		links: [],
		message: {
			names: '',
			email: '',
			project: '',
		},
	})

	useEffect(() => {
		setStateContact({
			...stateContact,
			links: [
				{
					id: 1,
					title: 'Email',
					subtitle: 'jd.camayo@gmail.com',
					link: 'mailto:examplemail@correo.com',
					icon: 'bx bx-mail-send',
				},
				{
					id: 2,
					title: 'WhatsApp',
					subtitle: '318-485-3359',
					link: 'https://api.whatsapp.com/send?phone=573184853359&text=Hey, I come from jdcamayos.com!',
					icon: 'bx bxl-whatsapp',
				},
				{
					id: 3,
					title: 'Telegram',
					subtitle: '318-485-3359',
					link: 'https://t.me/jdcamayos',
					icon: 'bx bxl-telegram',
				},
			],
		})
	}, [])

	const handleChange = e => {
		setStateContact({
			...stateContact,
			message: {
				...stateContact.message,
				[e.target.name]: e.target.value,
			},
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log(stateContact.message)
		setStateContact({
			...stateContact,
			message: {
				names: '',
				email: '',
				project: '',
			},
		})
	}

	return (
		<section className='contact section' id='contact' ref={ref}>
			<span className='section__subtitle'>Get in touch</span>
			<h2 className='section__title'>Contact me</h2>

			<div className='contact__container container grid'>
				<div className='contact__content'>
					<h3 className='contact__title'>Talk to me</h3>

					<div className='contact__info'>
						{stateContact.links?.map(c => (
							<div key={c.id} className='contact__card'>
								<i className={`${c.icon} contact__card-icon`} />
								<h3 className='contact__card-title'>{c.title}</h3>
								<span className='contact__card-data'>{c.subtitle}</span>

								<a
									href={c.link}
									target='_blank'
									rel='noreferrer'
									className='contact__button'
								>
									Write me{' '}
									<i className='bx bx-right-arrow-alt contact__button-icon' />
								</a>
							</div>
						))}
					</div>
				</div>
				{/* <div className='contact__content'>
					<h3 className='contact__title'>Write me your project</h3>

					<form className='contact__form' onSubmit={handleSubmit}>
						<div className='contact__form-div'>
							<label className='contact__form-tag'>Names:</label>
							<input
								className='contact__form-input'
								placeholder='Insert your name'
								name='names'
								value={stateContact.message.names}
								onChange={handleChange}
								type='text'
							/>
						</div>
						<div className='contact__form-div'>
							<label className='contact__form-tag'>Email:</label>
							<input
								className='contact__form-input'
								placeholder='Insert your email'
								name='email'
								value={stateContact.message.email}
								onChange={handleChange}
								type='email'
							/>
						</div>
						<div className='contact__form-div contact__form-area'>
							<label className='contact__form-tag'>Project:</label>
							<textarea
								rows={10}
								cols={30}
								className='contact__form-input'
								placeholder='Write your project'
								name='project'
								value={stateContact.message.project}
								onChange={handleChange}
							/>
						</div>
						<button className='button' type='submit'>
							Send Message
						</button>
					</form> 
				</div>*/}
			</div>
		</section>
	)
}

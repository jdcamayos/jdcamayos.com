import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ServiceCard from '../components/ServiceCard';
import WorkSection from '../components/WorkSection';
// Images
import perfilImage from '../public/assets/img/perfil.png';
import aboutImage from '../public/assets/img/about.jpg';
import work1 from '../public/assets/img/work1.jpg';
import work2 from '../public/assets/img/work2.jpg';
import work3 from '../public/assets/img/work3.jpg';
import work4 from '../public/assets/img/work4.jpg';
import work5 from '../public/assets/img/work5.jpg';
import testimonial1 from '../public/assets/img/testimonial1.png';
import testimonial2 from '../public/assets/img/testimonial2.png';
import testimonial3 from '../public/assets/img/testimonial3.png';
import ThemeButton from '../components/ThemeButton';

export default function Home() {
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
	];

	const socialLinks = [
		{ id: 1, to: 'https://www.linkedin.com', icon: 'bx bxl-linkedin-square' },
		{ id: 2, to: 'https://github.com', icon: 'bx bxl-github' },
		{ id: 3, to: 'https://dribbble.com', icon: 'bx bxl-dribbble' },
	];

	const aboutBoxes = [
		{
			id: 1,
			title: 'Experience',
			subtitle: '8 Years Working',
			icon: 'bx bx-award',
		},
		{
			id: 2,
			title: 'Completed',
			subtitle: '48+ Projects',
			icon: 'bx bx-briefcase-alt',
		},
		{
			id: 3,
			title: 'Support',
			subtitle: 'Online 24/7',
			icon: 'bx bx-support',
		},
	];

	const services = [
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
	];

	const experienceBox = [
		{
			id: 1,
			title: 'Frontend',
			skills: [
				{ id: 1, name: 'HTML', level: 'Basic' },
				{ id: 2, name: 'CSS', level: 'Advanced' },
				{ id: 3, name: 'Javascript', level: 'Intermediate' },
				{ id: 4, name: 'Bootstrap', level: 'Intermediate' },
				{ id: 5, name: 'Git', level: 'Intermediate' },
				{ id: 6, name: 'React', level: 'Intermediate' },
			],
		},
		{
			id: 2,
			title: 'Backend',
			skills: [
				{ id: 1, name: 'PHP', level: 'Intermediate' },
				{ id: 2, name: 'NodeJS', level: 'Basic' },
				{ id: 3, name: 'Python', level: 'Intermediate' },
				{ id: 4, name: 'MySQL', level: 'Intermediate' },
				{ id: 5, name: 'Firebase', level: 'Intermediate' },
			],
		},
	];

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
	];

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
	];

	const contactLinks = [
		{
			id: 1,
			title: 'Email',
			subtitle: 'user@gmail.com',
			link: 'mailto:examplemail@correo.com',
			icon: 'bx bx-mail-send',
		},
		{
			id: 2,
			title: 'WhatsApp',
			subtitle: '999-888-777',
			link: 'https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!',
			icon: 'bx bxl-whatsapp',
		},
		{
			id: 3,
			title: 'Messenger',
			subtitle: 'user.fb123',
			link: 'https://m.me/bedimcode',
			icon: 'bx bxl-messenger',
		},
	];
	return (
		<>
			<header className='header' id='header'>
				<nav className='nav container'>
					<a href='#' className='nav__logo'>
						Ansel
					</a>
					<div className='nav__menu'>
						<ul className='nav__list'>
							{navLinks.map(l => (
								<li key={l.id} className='nav__item'>
									<a href={l.to} className='nav__link active-link'>
										<i className={l.icon} />
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Theme change button */}
					<ThemeButton />
					{/* <i className='bx bx-moon change-theme' id='theme-button' /> */}
				</nav>
			</header>
			<main className='main'>
				{/* HOME  */}
				<section className='home section' id='home'>
					<div className='home__container container grid'>
						<div className='home__data'>
							<span className='home__greeting'>Hello, {"I'm"} </span>
							<h1 className='home__name'>Ansel Klee</h1>
							<h3 className='home__education'>Frontend Developer</h3>

							<div className='home__buttons'>
								<a href='#' className='button button--ghost'>
									Download CV
								</a>
								<a href='#about' className='button'>
									{' '}
									About me
								</a>
							</div>

							<div className='home__handle'>
								<div className='home__img'>
									<Image
										src={perfilImage}
										alt='Perfil'
										layout='fill'
										objectFit='cover'
									/>
								</div>
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
				{/* ABOUT  */}
				<section className='about section' id='about'>
					<span className='section__subtitle'>My Intro</span>
					<h2 className='section__title'>About Me</h2>

					<div className='about__container container grid'>
						<div className='about__img'>
							<Image
								src={aboutImage}
								alt='About'
								layout='responsive'
								objectFit='contain'
							/>
						</div>

						<div className='about__data'>
							<div className='about__info'>
								{aboutBoxes.map(a => (
									<div key={a.id} className='about__box'>
										<i className={`${a.icon} about__icon`} />
										<h3 className='about__title'>{a.title}</h3>
										<span className='about__subtitle'>{a.subtitle}</span>
									</div>
								))}
							</div>

							<p className='about__description'>
								Frontend developer, I create web pages with UI / UX user
								interface, I have years of experience and many clients are happy
								with the projects carried out.
							</p>

							<a href='#contact' className='button'>
								Contact Me
							</a>
						</div>
					</div>
				</section>
				{/* SKILLS  */}
				<section className='skills section' id='skills'>
					<span className='section__subtitle'>My abilities</span>
					<h2 className='section__title'>My Experience</h2>

					<div className='skills__container container grid'>
						{experienceBox.map(box => (
							<div key={box.id} className='skills__content'>
								<h3 className='skills__title'>{box.title}</h3>

								<div className='skills__box'>
									<div className='skills__group'>
										{box.skills.map(s => (
											<div key={s.id} className='skills__data'>
												<i className='bx bxs-badge-check' />

												<div>
													<h3 className='skills__name'>{s.name}</h3>
													<span className='skills__level'>{s.level}</span>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
				{/* SERVICES  */}
				<section className='services section' id='services'>
					<span className='section__subtitle'>My Services</span>
					<h2 className='section__title'>What I Offer</h2>

					<div className='services__container container grid'>
						{services.map(service => (
							<ServiceCard key={service.id} service={service} />
						))}
					</div>
				</section>
				{/* WORK  */}
				<WorkSection workList={workList} />
				{/* TESTIMONIALS  */}
				<section className='testimonial section'>
					<span className='section__subtitle'>My clients say</span>
					<h2 className='section__title'>Testimonial</h2>

					<div className='testimonial__container container'>
						<div>
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
				{/* Contact */}
				<section className='contact section' id='contact'>
					<span className='section__subtitle'>Get in touch</span>
					<h2 className='section__title'>Contact me</h2>

					<div className='contact__container container grid'>
						<div className='contact__content'>
							<h3 className='contact__title'>Talk to me</h3>

							<div className='contact__info'>
								{contactLinks.map(c => (
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
						<div className='contact__content'>
							<h3 className='contact__title'>Write me your project</h3>

							<form className='contact__form'>
								<div className='contact__form-div'>
									<label className='contact__form-tag'>Names:</label>
									<input
										className='contact__form-input'
										placeholder='Insert your name'
										type='text'
									/>
								</div>
								<div className='contact__form-div'>
									<label className='contact__form-tag'>Email:</label>
									<input
										className='contact__form-input'
										placeholder='Insert your email'
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
									/>
								</div>
								<button className='button'>Send Message</button>
							</form>
						</div>
					</div>
				</section>
			</main>
			<footer className='footer'>
				<div className='footer__container container'>
					<h1 className='footer__title'>Ansel</h1>
					<ul className='footer__list'>
						<li>
							<a href='#about' className='footer__link'>
								About
							</a>
						</li>
						<li>
							<a href='#work' className='footer__link'>
								Projects
							</a>
						</li>
						<li>
							<a href='#testimonial' className='footer__link'>
								Testimonial
							</a>
						</li>
					</ul>
					<ul className='footer__social'>
						{/* <li> */}
						<a href='' target='_blank' className='footer__social-link'>
							<i className='bx bxl-facebook' />
						</a>
						{/* </li> */}
						{/* <li> */}
						<a href='' target='_blank' className='footer__social-link'>
							<i className='bx bxl-instagram' />
						</a>
						{/* </li> */}
						{/* <li> */}
						<a href='' target='_blank' className='footer__social-link'>
							<i className='bx bxl-twitter' />
						</a>
						{/* </li> */}
					</ul>

					<span className='footer__copy'>
						&#169; Bedimcode. All rights reserved
					</span>
				</div>
			</footer>
		</>
	);
}

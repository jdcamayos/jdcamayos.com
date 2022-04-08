export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Juan</h1>
				{/* <ul className='footer__list'>
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
				</ul> */}
				<ul className='footer__social'>
					{/* <a href='' target='_blank' className='footer__social-link'>
						<i className='bx bxl-facebook' />
					</a> */}
					<a
						href='https://instagram.com/jdcamayos'
						target='_blank'
						className='footer__social-link'
						rel='noreferrer'
					>
						<i className='bx bxl-instagram' />
					</a>
					<a
						href='https://twitter.com/jdcamayos'
						target='_blank'
						className='footer__social-link'
						rel='noreferrer'
					>
						<i className='bx bxl-twitter' />
					</a>
				</ul>

				<span className='footer__copy'>Made with ❤ by @jdcamayos</span>
			</div>
		</footer>
	)
}

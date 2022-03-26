import { useEffect, useRef } from 'react';

export default function ModalService({ service, setIsModalOpen }) {
	const ref = useRef();
	useEffect(() => {
		setTimeout(() => {
			ref.current.classList.add('active-modal');
		}, 100);
	}, []);

	const handleClose = () => {
		ref.current.classList.remove('active-modal');
		setTimeout(() => {
			setIsModalOpen(false);
		}, 500);
	};
	return (
		<div className='services__modal' ref={ref}>
			<div className='services__modal-content'>
				<i className='bx bx-x services__modal-close' onClick={handleClose} />

				<h3 className='services__modal-title'>{service.title}</h3>
				<p className='services__modal-description'>{service.description}</p>

				<ul className='services__modal-list'>
					{service.activities.map(a => (
						<li key={a.id} className='services__modal-item'>
							<i className='bx bx-check services__modal-icon' />
							<p className='services__modal-info'>{a.content}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

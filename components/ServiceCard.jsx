import ModalService from './ModalService';
import { useState } from 'react';

export default function ServiceCard({ service }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className='services__card'>
			<h3 className='services__title'>{service.title}</h3>
			<span className='services__button' onClick={() => setIsModalOpen(true)}>
				See more <i className='bx bx-right-arrow-alt services__icon' />
			</span>
			{isModalOpen && (
				<ModalService service={service} setIsModalOpen={setIsModalOpen} />
			)}
		</div>
	);
}

import React, { useState } from 'react'

const CategoriesMobile = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleButtonClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<div className="modal-button-container">
				<button className="open-modal-button" onClick={handleButtonClick}>
					Відкрити модальне вікно
				</button>

				{isModalOpen && (
					<div className="modal-overlay">
						<div className="modal-content">
							<span className="close-modal-button" onClick={closeModal}>
								&times;
							</span>
							<p>Вміст модального вікна</p>
						</div>
					</div>
				)}
			</div>

		</>
	)
}

export default CategoriesMobile
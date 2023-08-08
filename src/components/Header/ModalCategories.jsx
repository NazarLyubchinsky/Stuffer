
import React, { useState } from 'react'
import s from '../../styles/ModalCategories.module.css'
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { ROUTES } from '../../utils/routes'

const ModalCategories = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { list } = useSelector(({ categories }) => categories);
	const limit = 5;

	const handleButtonClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<div className={s.modal_button_container}>
				<div className={s.open_modal_button} onClick={handleButtonClick}>
					<MenuIcon />
				</div>

				{isModalOpen && (
					<>
						<div className={s.modal_overlay} onClick={closeModal}>
						</div>
						<div className={s.modal_content}>
							<section className={s.sidebar}>
								<span className={s.close_modal_button} onClick={closeModal}>
									&times;
								</span>
								<Link to={ROUTES.HOME} className={s.icon} onClick={closeModal} >
									<span style={{
										color: '#6c3eb8',
										fontSize: '25px',
									}}>S</span> <span>TUFFER</span>
								</Link>
								<nav >
									<ul className={s.menu} >
									{list.slice(0, limit).map(({ id, name }) => (
											<li key={id} >
												<NavLink onClick={() => {
													setIsModalOpen(false);
												}}
													className={({ isActive }) =>
														`${s.link} ${isActive ? s.active : ''}`
													}
													to={`/categories/${id}`}>
													{name}
												</NavLink>
											</li>
										))}
									</ul>
								</nav>

								<div className={s.footer}>
									<a href="/help" target="_blank" className={s.link}>
										Help
									</a>
									<a
										href="/terms"
										target="_blank"
										className={s.link}
										style={{ textDecoration: "underline" }}
									>
										Terms & Conditions
									</a>
								</div>
							</section>

						</div>
					</>
				)}
			</div>
		</>
	)
}

export default ModalCategories

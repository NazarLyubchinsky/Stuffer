import React from "react";
import { Link } from "react-router-dom";

import s from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";


const Footer = () => (
	<section className={s.footer}>
		<div className={s.logo}>
			<Link to={ROUTES.HOME}>
				<span style={{
					color: '#6c3eb8',
					fontSize: '25px'
				}}>S</span> <span>TUFFER</span>
			</Link>
		</div>

		<div className={s.rights}>
			Developed by{" "}
			<a href="https://www.linkedin.com/in/nazar-lyubchynskyi-37a89026b/" target="_blank" rel="noreferrer">
				Lyubchinskyi
			</a>
		</div>

		<div className={s.socials}>
			<a href="https://instagram.com" target="_blank" rel="noreferrer">
				<svg className="icon">
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
				</svg>
			</a>

			<a href="https://facebook.com" target="_blank" rel="noreferrer">
				<svg className="icon">
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
				</svg>
			</a>

			<a href="https://youtube.com" target="_blank" rel="noreferrer">
				<svg className="icon">
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
				</svg>
			</a>
		</div>
	</section>
);

export default Footer;
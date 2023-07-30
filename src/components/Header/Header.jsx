import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import s from '../../styles/Header.module.css'

import { ROUTES } from '../../utils/routes'
import { toggleForm } from '../../features/user/userSlice'

import AVATAR from '../../images/avatar.jpg'
import { useGetProductsQuery } from '../../features/api/apiSlice'
import ModalCategories from './ModalCategories'
import FavoriteIcon from '@mui/icons-material/Favorite';

// loader
import OverlayLoader from "overlay-loading-react";

const Header = () => {
	const dispath = useDispatch();
	const navigate = useNavigate();

	const { currentUser, cart, favorite } = useSelector(({ user }) => user)

	const [searchValue, setSearchValue] = useState("");
	const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });
	const { data, isLoading } = useGetProductsQuery({ title: searchValue });

	useEffect(() => {
		if (!currentUser) return;
		setValues(currentUser)
	}, [currentUser])

	const handleClick = () => {
		if (!currentUser) dispath(toggleForm(true));
		else navigate(ROUTES.PROFILE);
	}

	const handleSearch = ({ target: { value } }) => {
		setSearchValue(value)
	}



	return (
		<div className={s.header}>
			<div className={s.logo}>
				<ModalCategories />
				<Link to={ROUTES.HOME} className={s.icon} >
					<span style={{
						color: '#6c3eb8',
						fontSize: '25px'
					}}>S</span> <span>TUFFER</span>
				</Link>
			</div>
			<div className={s.info}>
				<div className={s.user} onClick={handleClick}>
					<div className={s.avatar}
						style={{ backgroundImage: `url(${values.avatar})` }}
					/>
					<div className={s.username}>{values.name}</div>
				</div>
				<form className={s.form}>
					<div className={s.icon}>
						<svg className="icon">
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
						</svg>
					</div>
					<div className={s.input}>
						<input type="search" name='search'
							placeholder='Search for anyting'
							autoComplete='off'
							onChange={handleSearch}
							value={searchValue} />
					</div>

					{searchValue && (
						<div className={s.box}>
							{isLoading
								? (
									<div className="preloader" style={{
										padding: '50px',
										display: 'block'
									}}>
										<OverlayLoader overlayContainerStyle={{
											position: 'unset',
											backgroundColor: 'unset'
										}} loadingText='Loading...' active />

									</div>
								)
								: !data.length
									? "No results"
									: data.map(({ title, images, id }) => {
										return (
											<Link key={id} onClick={() => setSearchValue("")} className={s.item} to={`/products/${id}`}>
												<div className={s.image}
													style={{ backgroundImage: `url(${images[0]})` }} />
												<div className={s.title}>
													{title}
												</div>
											</Link>
										);
									})}
						</div>
					)}
				</form>
				<div className={s.account}>
					<Link to={ROUTES.FAVORITE} className={s.favourites}>
						<FavoriteIcon />
						{favorite.length && (
							<span className={s.count}>{favorite.length}</span>
						)}
					</Link>
					<Link to={ROUTES.CART} className={s.cart}>
						<svg className={s["icon-cart"]}>
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
						</svg>
						{cart.length && (
							<span className={s.count}>{cart.length}</span>
						)}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header




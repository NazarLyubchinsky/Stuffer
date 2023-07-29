import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemToFavorite } from '../../features/user/userSlice';

import s from "../../styles/Favorite.module.css";
const Favorite = () => {
	const dispatch = useDispatch();
	const { favorite } = useSelector(({ user }) => user);
	console.log(favorite)

	const removeItem = (id) => {
		dispatch(removeItemToFavorite(id));
	};

	return (
		<section className={s.favorite}>
			<h2 >Your favorite</h2>

			{!favorite.length ? (
				<div className={s.empty}>Here is empty</div>
			) : (
				<>
					<div className={s.list}>
						{favorite.map((item) => {
							const { title, category, images, price, id, updatedAt } = item;

							const updatedAtDate = new Date(updatedAt);
							const hours = updatedAtDate.getHours();
							const minutes = updatedAtDate.getMinutes();
							const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
							const formattedDate = updatedAtDate.toLocaleDateString();
							return (
								<div className={s.item} key={id}>
									<div className={s.item__left}>
										<div>
											<h3 className={s.name}>{title}</h3>
											<span className={s.category}>{category.name}</span>
										</div>
										<div className={s.text}>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quam officia suscipit architecto dolorem laborum.
										</div>
										<div className={s.price}><div>price:</div><div>{price}$</div></div>
										<div className={s.date}>{formattedDate}, {formattedTime}</div>

									</div>
									<div className={s.item__right}>

										<div
											className={s.image}
											style={{ backgroundImage: `url(${images[0]})` }}
										/>

									</div>
									<div
										className={s.close}
										onClick={() => removeItem(item.id)}
									>
										<svg className="icon">
											<use
												xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
											/>
										</svg>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)
			}
		</section >
	)
}

export default Favorite
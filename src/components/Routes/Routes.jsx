import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

import Home from '../Home/Home'
import SingleCategory from '../Categories/SingleCategory'
import SingleProduct from '../Products/SingleProduct'
import Profile from '../Profile/Profile'
import Cart from '../Cart/Cart'
import Favorite from '../Favorite/Favorite'

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
			<Route path={ROUTES.PROFILE} element={<Profile />} />
			<Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
			<Route path={ROUTES.CART} element={<Cart />} />
			<Route path={ROUTES.FAVORITE} element={<Favorite />} />
		</Routes>
	)
}

export default AppRoutes;
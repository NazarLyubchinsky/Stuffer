import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AppRoutes from '../Routes/Routes'
import Sidebar from '../Sidebar/Sidebar'
import UserForm from '../User/UserForm'

import { getCategories } from '../../features/categories/CategoriesSlice'
import { getProducts } from '../../features/products/productsSlice'

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getProducts());
	}, [dispatch]);

	return <div className='app'>
		<Header />

		<UserForm />

		<div className='container'>
			<Sidebar />
			<AppRoutes />
		</div>
		<Footer />
	</div>
}

export default App
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filteredByPrice } from '../../features/products/productsSlice'

import Banner from '../Banner/Banner'
import Categories from '../Categories/Categories'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'

const Home = () => {
	const dispatch = useDispatch();
	const { products: { list, filtered }, categories } = useSelector((state) => state);

	useEffect(() => {
		if (!list.length) return;

		dispatch(filteredByPrice(100))
	}, [dispatch, list.length]);


	return (
		<>
			<Poster />
			<Products products={list} amount={4} title='Treding' />
			<Categories products={categories.list} amount={4} title='Worth seeing' />
			<Banner />
			<Products products={filtered} amount={4} title='Less than 100$'  />
		</>
	)
}

export default Home
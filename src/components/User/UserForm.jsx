import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import UserSignupForm from './UserSingupForm'
import UserLoginForm from './UserLoginForm';

import s from "../../styles/User.module.css";

import { toggleForm, toggleFormType } from '../../features/user/userSlice';

const UserForm = () => {
	const dispath = useDispatch();
	const { showForm, formType } = useSelector(({ user }) => user);

	const closeForm = () => dispath(toggleForm(false))
	const toggleCurrentFormType = (type) => dispath(toggleFormType(type))

	return (
		showForm ? (<>
			<div className={s.overlay} onClick={closeForm}
			/>
			{formType === "signup" ? (
				<UserSignupForm
					toggleCurrentFormType={toggleCurrentFormType}
					closeForm={closeForm} />
			) : (
				<UserLoginForm
					toggleCurrentFormType={toggleCurrentFormType}
					closeForm={closeForm} />
			)}
		</>
		) : (
			<></>
		)
	);
};

export default UserForm;
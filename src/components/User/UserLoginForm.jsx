import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

import s from "../../styles/User.module.css";

const UserLoginForm = ({ toggleCurrentFormType, closeForm }) => {
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isNotEmpty = Object.values(values).every((val) => val);

		if (!isNotEmpty) return;

		dispatch(loginUser(values));
		closeForm();
	};

	return (
		<div className={s.wrapper}>
			<div className={s.close} onClick={closeForm}>
				<svg className="icon">
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
				</svg>
			</div>

			<div className={s.title}>Log In</div>

			<form className={s.form} onSubmit={handleSubmit}>
				<div className={s.group}>
					<input
						type="email"
						placeholder="Your email"
						name="email"
						value={values.email}
						autoComplete="off"
						onChange={handleChange}
						required
					/>
				</div>

				<div className={s.group}>
					<input
						type="password"
						placeholder="Your password"
						name="password"
						value={values.password}
						autoComplete="off"
						onChange={handleChange}
						required
					/>
				</div>

				<div
					onClick={() => toggleCurrentFormType("signup")}
					className={s.link}
				>
					Create an account
				</div>

				<button type="submit" className={s.submit}>
					Login
				</button>
			</form>
		</div>
	);
};

export default UserLoginForm;
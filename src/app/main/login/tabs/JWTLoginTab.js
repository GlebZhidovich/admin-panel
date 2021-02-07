import Button from '@material-ui/core/Button';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitLogin } from 'app/auth/store/loginSlice';
import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

function JWTLoginTab(props) {
	const dispatch = useDispatch();
	// const login = useSelector(({ auth }) => auth.login);

	const validationSchema = yup.object({
		email: yup
			.string('Enter your email')
			.required('Email is required'),
		password: yup
			.string('Enter your password')
			.required('Password is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: 'admin',
			password: '1234qwer',
			remember: false
		},
		validationSchema: validationSchema,
		onSubmit: handleSubmit,
	});

	// const [isFormValid, setIsFormValid] = useState(false);
	//
	// useEffect(() => {
	// 	if (login.error && (login.error.email || login.error.password)) {
	// 		formRef.current.updateInputsWithError({
	// 			...login.error
	// 		});
	// 		disableButton();
	// 	}
	// }, [login.error]);
	//
	// function disableButton() {
	// 	setIsFormValid(false);
	// }

	function handleSubmit(model) {
		dispatch(submitLogin(model));
	}

	return (
		<div className="w-full">
			<form
				name="loginForm"
				noValidate
				className="flex flex-col justify-center w-full"
				onSubmit={formik.handleSubmit}
			>
				<TextField
					className="mb-16"
					label="Email"
					autoFocus
					type="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
					variant="outlined"
					required
					fullWidth
				/>

				<TextField
					className="mb-16"
					label="Password"
					type="password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
					variant="outlined"
					required
					fullWidth
				/>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					className="w-full mx-auto mt-16"
					aria-label="LOG IN"
					value="legacy"
				>
					Login
				</Button>
			</form>
		</div>
	);
}

export default JWTLoginTab;

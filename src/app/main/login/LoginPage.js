import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as yup from 'yup';
import clsx from 'clsx';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from "formik";

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});

function LoginPage() {
	const history = useHistory();
	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			email: 'foobar@example.com',
			password: 'foobar',
			remember: false
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(JSON.stringify(values, null, 2));
			formik.resetForm();
			// 	history.push('/panel');
			// 	resetForm();
		},
	});

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className="w-full max-w-384 rounded-8">
						<CardContent className="flex flex-col items-center justify-center p-32">
							<img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

							<Typography variant="h6" className="mt-16 mb-32 font-bold text-20 sm:text-24">
								Login to your account
							</Typography>

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

								<div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
									<FormControl>
										<FormControlLabel
											control={
												<Checkbox
													name="remember"
													checked={formik.values.remember}
													onChange={formik.handleChange}
												/>
											}
											label="Remember Me"
										/>
									</FormControl>

									<Link className="font-medium" to="/pages/auth/forgot-password">
										Forgot Password?
									</Link>
								</div>

								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto mt-16"
									aria-label="LOG IN"
									disabled={!formik.isValid}
									type="submit"
								>
									Login
								</Button>
							</form>

						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default LoginPage;

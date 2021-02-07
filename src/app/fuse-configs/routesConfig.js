import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import LoginConfig from "../main/login/LoginConfig";
import { ExpertsConfig } from "../main/pages";


const routeConfigs = [ExampleConfig, LoginConfig, ExpertsConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/example" />
	}
];

export default routes;

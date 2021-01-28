import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import LoginConfig from "../main/login/LoginPageConfig";
import PanelPageConfig from "../main/profile/PanelPageConfig";

const routeConfigs = [LoginConfig, PanelPageConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/login" />
	}
];

export default routes;

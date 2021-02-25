import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import LoginConfig from '../main/login/LoginConfig';
import { ExpertsConfig, MapConfig } from '../main/pages';
import StatisticsConfig from '../main/pages/Statistics/StatisticsConfig';

const routeConfigs = [LoginConfig, ExpertsConfig, MapConfig, StatisticsConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/login" />
	}
];

export default routes;

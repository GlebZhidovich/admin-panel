import React from 'react';
import { authRoles } from "../../auth";

const PanelPageConfig = {
	auth: authRoles.admin,
	routes: [
		{
			path: '/panel',
			component: React.lazy(() => import('./PanelPage'))
		}
	]
};

export default PanelPageConfig;

import React from 'react';

const PanelPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/panel',
			component: React.lazy(() => import('./PanelPage'))
		}
	]
};

export default PanelPageConfig;

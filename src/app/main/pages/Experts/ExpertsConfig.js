import Experts from './Experts';

const ExpertsConfig = {
	settings: {
		layout: {
			config: {
				toolbar: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/experts',
			component: Experts
		}
	]
};

export default ExpertsConfig;

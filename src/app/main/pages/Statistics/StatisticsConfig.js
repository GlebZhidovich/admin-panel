import Statistics from './Statistics';

const StatisticsConfig = {
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
			path: '/statistics',
			component: Statistics
		}
	]
};

export default StatisticsConfig;

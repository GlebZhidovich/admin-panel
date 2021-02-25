import MapLayout from './Map';

const MapConfig = {
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
			path: '/map',
			component: MapLayout
		}
	]
};

export default MapConfig;

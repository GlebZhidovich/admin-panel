import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'login-component',
				title: 'Login',
				translate: 'LOGIN',
				type: 'item',
				icon: 'whatshot',
				url: '/login'
			},
			{
				id: 'experts-component',
				title: 'Experts',
				translate: 'EXPERTS',
				type: 'item',
				icon: 'whatshot',
				url: '/experts'
			},
			{
				id: 'map-component',
				title: 'Map',
				translate: 'MAP',
				type: 'item',
				icon: 'whatshot',
				url: '/map'
			},
			{
				id: 'statistics-component',
				title: 'Statistics',
				translate: 'STATISTICS',
				type: 'item',
				icon: 'whatshot',
				url: '/statistics'
			}
		]
	}
];

export default navigationConfig;

import React from 'react';
import CreateMap from '../components/CreateMap/CreateMap';

function MapLayout() {
	return (
		<div className="p-16">
			<CreateMap />
		</div>
	);
}

export default React.memo(MapLayout);

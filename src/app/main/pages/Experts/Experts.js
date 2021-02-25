import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpertsEdit from '../components/Experts/ExpertsEdit';
import API from '../../utils/API';
import jwtService from '../../../services/jwtService';
import ExpertsList from '../components/Experts/ExpertsList';

function Experts() {
	const [isEdit, setEdit] = useState(false);

	useEffect(() => {
		const token = jwtService.getAccessToken();
		console.log(token);
		axios
			.get('http://localhost:3001/api/expert/list', {
				headers: {
					Authorization: `Bearer ${token}`
					// token,
					// 'Content-Type': 'application/json'
				}
				// proxy: {
				//     host: 'localhost',
				//     port: 3001
				// }
			})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	});

	return (
		<div className="p-16">
			{/* <ExpertsList/> */}
			<ExpertsEdit cbEdit={setEdit} />
		</div>
	);
}

export default React.memo(Experts);

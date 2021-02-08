import React, { useEffect, useState } from 'react';
import ExpertsEdit  from "../components/Experts/ExpertsEdit";
import API from "../../utils/API";
import jwtService from "../../../services/jwtService";
import ExpertsList from "../components/Experts/ExpertsList";

function Experts() {
    const [isEdit, setEdit] = useState(false);

    // useEffect(() => {
    //     const token = jwtService.getAccessToken();
    //
    //     API.get('/expert/list', {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             token,
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // })

    return (
        <div className="p-16">
            {/*<ExpertsList/>*/}
            <ExpertsEdit cbEdit={setEdit}/>
        </div>
    );
}

export default React.memo(Experts);

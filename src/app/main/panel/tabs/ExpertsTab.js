import React, { useState } from 'react';
import { ExpertsCurrent } from "../components/Experts/ExpertsCurrent";
import { ExpertsEdit } from "../components/Experts/ExpertsEdit";

function ExpertsTab() {
    const [isEdit, setEdit] = useState(false);

    return (
        <>
            {isEdit ? <ExpertsEdit cbEdit={setEdit}/> :
                <ExpertsCurrent cbEdit={setEdit}/>}
        </>
    );
}

export default ExpertsTab;

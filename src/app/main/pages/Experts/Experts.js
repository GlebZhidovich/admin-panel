import React, { useState } from 'react';
import { ExpertsEdit } from "../components/Experts/ExpertsEdit";

function Experts() {
    const [isEdit, setEdit] = useState(false);

    return (
        <div className="p-16">
            <ExpertsEdit cbEdit={setEdit}/>
        </div>
    );
}

export default React.memo(Experts);

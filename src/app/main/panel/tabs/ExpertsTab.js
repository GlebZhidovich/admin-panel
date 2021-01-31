import React, { useState } from 'react';
import { ExpertsEdit } from "../components/Experts/ExpertsEdit";

export function ExpertsTab() {
    const [isEdit, setEdit] = useState(false);

    return (
        <>
            <ExpertsEdit cbEdit={setEdit}/>
        </>
    );
}

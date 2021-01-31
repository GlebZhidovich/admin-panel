import React from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export function Password(props) {
    const { label } = props;

    return <div className="flex items-center">
        <TextField label={label} variant="outlined"/>
        <Button className="ml-20 text-white"
                color="secondary"
                variant="contained">
            Генерировать</Button>
    </div>
}
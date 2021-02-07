import { InputLabel, MenuItem, Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: 300,
    },
}));

export function CustomSelect(props) {
    const { label } = props;
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = useCallback((event) => {
        const { value } = event.target;
        setValue(value);
    }, []);

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="label">Сертификат</InputLabel>
            <Select
                label={label}
                onChange={handleChange}
                labelId="label"
                id="select"
                value={value}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="10">Test</MenuItem>
                <MenuItem value="20">Test</MenuItem>
            </Select>
        </FormControl>
    )
}
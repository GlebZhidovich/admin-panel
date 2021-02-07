import React from "react";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CustomSelect } from "./Select";
import { Password } from "./Password";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        '& .MuiBadge-badge': {
            right: '-12px'
        }
    },

    formControl: {
        width: 300,
    },
    wrapTitle: {
        width: 250
    },
    title: {
        maxWidth: 200
    },
    media: {
        height: 300
    }
}));

export function Field(props) {
    const {
        label,
        placeholder,
        type
    } = props;

    const classes = useStyles();

    const fields = {
        input: <TextField label={placeholder} variant="outlined"/>,
        select: <CustomSelect label={placeholder}/>,
        password: <Password label={placeholder}/>,
    }

    return (
        <div className={`${classes.root} flex items-center p-16`}>
            <div className={classes.wrapTitle}>
                <Badge color="primary" badgeContent={'?'}>
                    <Typography className={classes.title} variant="body1">
                        {label}
                    </Typography>
                </Badge>
            </div>
            {
                fields[type]
            }
        </div>
    )
}
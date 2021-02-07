import React from "react";
import Typography from "@material-ui/core/Typography";

export function Title(props) {
    const {children} = props;
    return <Typography className="pb-12" variant="h4">{children}</Typography>
}
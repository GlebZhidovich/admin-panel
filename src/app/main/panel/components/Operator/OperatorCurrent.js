import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import PanelTable from "../table/PanelTable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    }
}));

export function OperatorCurrent(props) {
    const classes = useStyles();

    const title = 'Текущее состояние операторов ТО';
    const date = new Date().toLocaleString('ru');

    const info = [
        {
            title: 'Проведено осмотров',
            value: '10'
        },
        {
            title: 'Остаток лимита',
            value: '5'
        },
        {
            title: 'Выдано отказов',
            value: '0'
        },

    ];

    return (
        <div className="flex flex-col justify-between">
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6">на {date}</Typography>

            <List className={classes.list}>
                {
                    info.map(data =>
                        <ListItem className={'flex justify-between'} key={data.title}>
                            <Typography variant="body1">{data.title + ' '}</Typography>
                            <Typography variant="body2">{data.value}</Typography>
                        </ListItem>)
                }

            </List>

            <PanelTable/>
        </div>
    )
}
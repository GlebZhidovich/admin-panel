import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import PanelTable from "../components/table/PanelTable";
import { makeStyles } from "@material-ui/core/styles";
import { ExpertsEdit } from "../components/Experts/ExpertsEdit";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    }
}));

function ExpertsTab() {
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
        <ExpertsEdit/>
        // <div className="flex flex-col justify-between">
        //     <Typography variant="h4">{title}</Typography>
        //     <Typography variant="h6">на {date}</Typography>
        //
        //     <List className={classes.list}>
        //         {
        //             info.map(data =>
        //                 <ListItem className={'flex justify-between'} key={data.title}>
        //                     <Typography variant="body1">{data.title + ' '}</Typography>
        //                     <Typography variant="body2">{data.value}</Typography>
        //                 </ListItem>)
        //         }
        //
        //     </List>
        //
        //     <PanelTable/>
        // </div>
    );
}

export default ExpertsTab;

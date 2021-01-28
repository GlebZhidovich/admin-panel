import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";

function ExpertsTab() {

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
        <div className="md:flex max-w-2xl">
            <FuseAnimateGroup
                enter={{
                    animation: 'transition.slideUpBigIn'
                }}
            >
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h6">на {date}</Typography>

                <List>
                    {
                        info.map(data =>
                            <ListItem className={'flex justify-between'} key={data.title}>
                                <Typography variant="body1">{data.title + ' '}</Typography>
                                <Typography variant="body2">{data.value}</Typography>
                            </ListItem>)
                    }

                </List>
            </FuseAnimateGroup>
        </div>
    );
}

export default ExpertsTab;

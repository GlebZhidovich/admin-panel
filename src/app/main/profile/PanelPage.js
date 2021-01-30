import FusePageSimple from '@fuse/core/FusePageSimple';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useState } from 'react';
import ExpertsTab from './tabs/ExpertsTab';
import FuseAnimateGroup from "../../../@fuse/core/FuseAnimateGroup/FuseAnimateGroup";

const useStyles = makeStyles(theme => ({
    layout: {
        maxWidth: '100vw',
    }
}));

function PanelPage() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    function handleTabChange(event, value) {
        setSelectedTab(value);
    }

    const tabs = [
        'Система',
        'Оператор',
        'Экссперты',
        'Пункты',
        'Отчеты',
        'Статистика',
        'Настройки',
    ]

    return (
        <FusePageSimple
            contentToolbar={
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="inherit"
                    variant="scrollable"
                    scrollButtons="off"
                    className="w-full px-24 -mx-4 min-h-40"
                    classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
                    TabIndicatorProps={{
                        children: <Divider className="w-full h-full rounded-full opacity-50"/>
                    }}
                >
                    {tabs.map(tab => <Tab
                        key={tab}
                        className="text-14 font-bold min-h-40 min-w-64 mx-4"
                        disableRipple
                        label={tab}/>)}
                </Tabs>
            }
            content={
                    <FuseAnimateGroup>
                        <div className={'p-16 sm:p-24 ' + classes.layout}>
                            <ExpertsTab/>
                        </div>
                    </FuseAnimateGroup>
            }
            footer={
                <div className="">
                    (C) Система - 2021
                </div>
            }
        />
    );
}

export default PanelPage;

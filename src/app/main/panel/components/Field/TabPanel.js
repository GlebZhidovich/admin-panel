import React from 'react';
import { AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Field } from "./Field";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export function CustomTabPanel() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    const operatorFields = [
        {
            label: 'Телефон для уведомлений',
            placeholder: '+79991234567',
            type: 'input'
        },
        {
            label: 'Email для уведомлений',
            placeholder: 'ivan@ivan.com',
            type: 'input'
        },
    ]

    return <div>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Оператор" {...a11yProps(0)} />
                <Tab label="Эксперт Иванов И.И." {...a11yProps(1)} />
                <Tab label="Эксперт Петров П.П." {...a11yProps(2)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Button
                className="m-16 text-white bg-green-500"
                variant="contained">
                Подключить уведомления на телеграм
            </Button>
            <img className="p-16" src="/assets/images/telegram.jpg" alt="img"/>
            <div>
                {
                    operatorFields.map(field => <Field key={field.label} {...field}/>)
                }
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
    </div>
}
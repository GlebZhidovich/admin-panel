import React from "react";
import { Title } from "../Title/Title";
import { Field } from "../Field/Field";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import { Checkbox, FormControlLabel, ListItem, TextField } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& .MuiBadge-badge': {
            right: '-12px'
        },
        '& .col': {
            minWidth: 250,
            maxWidth: 250
        }
    },
    wrapTitle: {
        minWidth: 250,
        maxWidth: 250,
    },
    title: {
        maxWidth: 200
    },
}));

export function PunktEdit() {
    const classes = useStyles();
    const punktFields = [
        {
            label: 'Название пункта',
            placeholder: 'Мой пункт 1',
            type: 'input'
        },
        {
            label: 'Адрес пункта',
            placeholder: 'Тверь, ул. Ленина 5',
            type: 'input'
        },
        {
            label: 'Координаты пункта',
            placeholder: '55.55555',
            type: 'input'
        },
        {
            label: 'Лимит на сутки',
            placeholder: '15',
            type: 'input'
        },
    ];

    const expertsList = new Array(3).fill('Иванов Иван Иванвоич');


    return (
        <div className={classes.root}>
            <Title>
                Пункт ТО - Тверь, ул. Ленина 1
            </Title>
            {
                punktFields.map(field => <Field key={field.label} {...field}/>)
            }

            <div className="flex">
                <div className={classes.wrapTitle + ' p-16'}>
                    <Badge color="primary" badgeContent={'?'}>
                        <Typography className={classes.title} variant="body1">
                            Категории ТС
                        </Typography>
                    </Badge>
                </div>
                <div>
                    <List className="flex">
                        <div>
                            <Typography className="text-center" variant="body1">
                                Стоимость ТО
                            </Typography>
                            {
                                [
                                    {
                                        title: 'L',
                                        label: '15'
                                    },
                                    {
                                        title: 'M1',
                                        label: '15'
                                    },
                                    {
                                        title: 'M2',
                                        label: '15'
                                    },
                                    {
                                        title: 'M3',
                                        label: '15'
                                    },
                                ].map(item => <ListItem
                                    key={item.title}
                                    className="flex justify-between">
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox
                                            color="primary"
                                            checked={true}/>}
                                        label={item.title}
                                        labelPlacement="end"
                                    />
                                    <TextField label={item.label} variant="outlined"/>
                                </ListItem>)
                            }
                        </div>
                        <div>
                            <Typography className="text-center" variant="body1">
                                Стоимость ТО
                            </Typography>
                            {
                                [
                                    {
                                        title: 'N1',
                                        label: '15'
                                    },
                                    {
                                        title: 'N2',
                                        label: '15'
                                    },
                                    {
                                        title: 'N3',
                                        label: '15'
                                    },
                                ].map(item => <ListItem
                                    key={item.title}
                                    className="flex justify-between">
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox
                                            color="primary"
                                            checked={true}/>}
                                        label={item.title}
                                        labelPlacement="end"
                                    />
                                    <TextField label={item.label} variant="outlined"/>
                                </ListItem>)
                            }
                        </div>
                        <div>
                            <Typography className="text-center" variant="body1">
                                Стоимость ТО
                            </Typography>
                            {
                                [
                                    {
                                        title: 'O1',
                                        label: '15'
                                    },
                                    {
                                        title: 'O2',
                                        label: '15'
                                    },
                                    {
                                        title: 'O3',
                                        label: '15'
                                    },
                                ].map(item => <ListItem
                                    key={item.title}
                                    className="flex justify-between">
                                    <FormControlLabel
                                        key={item.title}
                                        value="end"
                                        control={<Checkbox
                                            color="primary"
                                            checked={true}/>}
                                        label={item.title}
                                        labelPlacement="end"
                                    />
                                    <TextField label={item.label} variant="outlined"/>
                                </ListItem>)
                            }
                        </div>
                    </List>
                </div>
            </div>

            <div className="flex min-w-0">
                <div className={classes.wrapTitle + ' p-16'}>
                    <Badge color="primary" badgeContent={'?'}>
                        <Typography className={classes.title} variant="body1">
                            Список доступных регионов для формирования карты
                        </Typography>
                    </Badge>
                </div>

                <div className="flex flex-wrap pl-16">
                    {
                        new Array(16).fill('Адыгея').map((title, i) => <FormControlLabel
                            key={i}
                            value="end"
                            control={<Checkbox
                                color="primary"
                                checked={true}/>}
                            label={title}
                            labelPlacement="end"
                        />)
                    }
                </div>
            </div>

            <Title>
                Эксперты, работающие на этом пункте
            </Title>
            <List className="p-16">
                {
                    expertsList.map((title, i) => <ListItem key={i}>
                        <Typography variant="body1">
                            {`${i + 1}. ${title}`}
                        </Typography>
                    </ListItem>)
                }
            </List>

            <Title>
                Фотографии фона пункта ТО
            </Title>
            <div className="flex">
                <div className="col flex flex-col">
                    <div className="row flex-1"></div>
                    <div className="row flex-1">
                        <Badge color="primary" badgeContent={'?'}>
                            <Typography className={classes.title} variant="body1">
                                С машиной
                            </Typography>
                        </Badge>
                    </div>
                    <div className="row flex-1">
                        <Badge color="primary" badgeContent={'?'}>
                            <Typography className={classes.title} variant="body1">
                                Без машины
                            </Typography>
                        </Badge>
                    </div>
                </div>
                <div className="col flex flex-col">
                    <div className="row p-16 flex-1">
                        <Badge color="primary" badgeContent={'?'}>
                            <Typography className={classes.title} variant="body1">
                                Фотографии фона спереди
                            </Typography>
                        </Badge>
                    </div>
                    <div className="row flex-1">Image cap</div>
                    <div className="row flex-1">Image cap</div>
                </div>
                <div className="col flex flex-col">
                    <div className="row p-16 flex-1">
                        <Badge color="primary" badgeContent={'?'}>
                            <Typography className={classes.title} variant="body1">
                                Фотографии фона сзади
                            </Typography>
                        </Badge>
                    </div>
                    <div className="row flex-1">Image cap</div>
                    <div className="row flex-1">Image cap</div>
                </div>
            </div>

            <div>
                <Button
                    className="p-16 text-white"
                    color="secondary"
                    variant="contained">
                    Сохранить</Button>
            </div>
        </div>
    )
}

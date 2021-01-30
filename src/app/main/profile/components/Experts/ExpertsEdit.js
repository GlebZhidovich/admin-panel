import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Card, Checkbox, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import DoneIcon from '@material-ui/icons/Done';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    credential: {
        '& .MuiBadge-badge': {
            right: '-12px'
        }
    },
    certificate: {},
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
});

export function ExpertsEdit() {
    const title = 'Эксперт - Иванов Иван Иванович';
    const classes = useStyles();
    const credentialInputs = ['Иванов', 'Иван', 'Иванович'];

    const [certificate, setCertificate] = useState('');
    const [isChecked, setChecked] = useState(true);

    const handleCehecked = (event) => {
        const { checked } = event.target;
        setChecked(checked);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setCertificate(value);
    };

    return <div className={classes.credential}>
        <Typography className="pb-12" variant="h4">{title}</Typography>

        <div className="flex items-center p-16">
            <div className={classes.wrapTitle}>
                <Badge color="primary" badgeContent={'?'}>
                    <Typography variant="body1">ФИО</Typography>
                </Badge>
            </div>
            <div className="flex-1 flex justify-between items-center">
                {credentialInputs.map(input => <TextField key={input} label={input} variant="outlined"/>)}
                <Typography variant="body1">
                    <DoneIcon/>
                    Проверка ЭЦП в ЕАИСТО
                </Typography>
            </div>
        </div>

        <div className={`flex items-center p-16`}>
            <div className={classes.wrapTitle}>
                <Badge color="primary" badgeContent={'?'}>
                    <Typography variant="body1">
                        ЭЦП для ручного режима
                    </Typography>
                </Badge>
            </div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="label">Сертификат</InputLabel>
                <Select
                    label="Сертификат"
                    onChange={handleChange}
                    labelId="label"
                    id="select"
                    value={certificate}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="10">Сертификат</MenuItem>
                    <MenuItem value="20">Сертификат</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className="flex items-center p-16">
            <div className={classes.wrapTitle}>
                <Badge color="primary" badgeContent={'?'}>
                    <Typography className={classes.title} variant="body1">
                        Ключ ЭЦП для автоматического режима
                    </Typography>
                </Badge>
            </div>
            <div className="flex flex-col">
                <Button className="text-white"
                        variant="contained"
                        color="secondary">
                    Загрузить ключ ЭЦП для автономной работы
                </Button>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isChecked}
                            onChange={handleCehecked}
                            name="checked"
                            color="secondary"
                        />
                    }
                    label="Автоматическая подпись"
                />
            </div>
        </div>

        <div className="flex items-center p-16">
            <div className={classes.wrapTitle}>
                <Badge color="primary" badgeContent={'?'}>
                    <Typography className={classes.title} variant="body1">
                        Лимит в сутки
                    </Typography>
                </Badge>
            </div>
            <TextField className="w-48" label="15" variant="outlined"/>
        </div>

        <div className="flex items-center p-16">
            <div className={classes.wrapTitle}>
                <Badge color="primary" badgeContent={'?'}>
                    <Typography className={classes.title} variant="body1">
                        Пункт ТО
                    </Typography>
                </Badge>
            </div>
            <TextField label="Мой пункт, адрес:" variant="outlined"/>
        </div>

        <Typography className="pb-12" variant="h4">Доступ в систему</Typography>

        <div className="flex items-center p-16">
            <div className={classes.wrapTitle}>
                <Badge color="primary" badgeContent={'?'}>
                    <Typography className={classes.title} variant="body1">
                        Логин
                    </Typography>
                </Badge>
            </div>
            <TextField label="12345exp001" variant="outlined"/>
        </div>

        <div className="flex items-center p-16">
            <div className={classes.wrapTitle}>
                <Badge color="primary" badgeContent={'?'}>
                    <Typography className={classes.title} variant="body1">
                        Пароль
                    </Typography>
                </Badge>
            </div>
            <TextField label="очень сложный пароль 2" variant="outlined"/>
            <Button className="ml-20 text-white"
                    color="secondary"
                    variant="contained">
                Генерировать</Button>
        </div>

        <div className="flex items-center p-16">
            <div className={classes.wrapTitle}>
                <Badge color="primary" badgeContent={'?'}>
                    <Typography className={classes.title} variant="body1">
                        Телефон для уведомлений
                    </Typography>
                </Badge>
            </div>
            <TextField label="+79991234567" variant="outlined"/>
        </div>

        <div className="p-16">
            <img src="/assets/images/settings.jpg" alt="settings"/>
        </div>
    </div>
}
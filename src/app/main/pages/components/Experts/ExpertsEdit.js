import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Checkbox, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import DoneIcon from '@material-ui/icons/Done';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import * as yup from 'yup';

const useStyles = makeStyles({
    credential: {
        '& .MuiBadge-badge': {
            right: '-12px'
        }
    }
});

const validationSchema = yup.object({});

const ExpertsEdit = function (props) {
    const { cbEdit } = props;
    const title = 'Эксперт - Иванов Иван Иванович';
    const classes = useStyles();
    const credentialInputs = ['Иванов', 'Иван', 'Иванович'];

    const [certificate, setCertificate] = useState('');
    const [isChecked, setChecked] = useState(true);

    const handleChecked = (event) => {
        const { checked } = event.target;
        setChecked(checked);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setCertificate(value);
    };

    const handleClick = () => {
        cbEdit(false);
    }

    const formik = useFormik({
        initialValues: {
            pto: 'foobar',
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid
                container
                direction="column"
                className={classes.credential}
                spacing={2}
            >
                <Grid item>
                    <Typography
                        variant="h4">{title}</Typography>
                </Grid>
                {/*first*/}
                <Grid
                    item
                    container
                    spacing={2}
                >
                    <Grid
                        className="w-full max-w-256 flex items-center min-w-0"
                        item
                    >
                        <Badge
                            className="max-w-216"
                            color="primary"
                            badgeContent={'?'}>
                            <Typography variant="body1">ФИО</Typography>
                        </Badge>
                    </Grid>
                    <Grid
                        item
                        container
                        spacing={2}
                        className="flex-1"
                    >
                        {credentialInputs.map(input => (
                            <Grid
                                key={input}
                                item>
                                <TextField
                                    label={input}
                                    variant="outlined"/>
                            </Grid>
                        ))}
                        <Grid item>
                            <Typography variant="body1">
                                <DoneIcon/>
                                Проверка ЭЦП в ЕАИСТО
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {/*second*/}
                <Grid
                    item
                    container
                    spacing={2}
                >
                    <Grid
                        className="w-full max-w-256 flex items-center"
                        item
                    >
                        <Badge
                            className="max-w-216"
                            color="primary"
                            badgeContent={'?'}>
                            <Typography variant="body1">
                                ЭЦП для ручного режима
                            </Typography>
                        </Badge>
                    </Grid>
                    <Grid
                        item
                        container
                        spacing={2}
                        className="flex-1">
                        <Grid item>
                            <FormControl
                                className="min-w-200"
                                variant="outlined">
                                <InputLabel id="label">Сертификат</InputLabel>
                                <Select
                                    label="Сертификат"
                                    onChange={handleChange}
                                    labelId="label"
                                    id="select"
                                    value={certificate}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="10">Сертификат</MenuItem>
                                    <MenuItem value="20">Сертификат</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                {/*third*/}
                <Grid
                    item
                    container
                    spacing={2}
                >
                    <Grid
                        className="w-full max-w-256 flex items-center"
                        item
                    >
                        <Badge
                            className="max-w-216"

                            color="primary"
                            badgeContent={'?'}>
                            <Typography
                                className={classes.title}
                                variant="body1">
                                Ключ ЭЦП для автоматического режима
                            </Typography>
                        </Badge>
                    </Grid>
                    <Grid
                        item
                        container
                        spacing={2}
                        className="flex-1">
                        <Grid
                            item
                            container
                            direction="column">
                            <Grid item>
                                <Button
                                    className="text-white"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Загрузить ключ ЭЦП для автономной работы
                                </Button>
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isChecked}
                                            onChange={handleChecked}
                                            name="checked"
                                            color="secondary"
                                        />
                                    }
                                    label="Автоматическая подпись"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/*forth*/}
                <Grid
                    item
                    container
                    spacing={2}
                >
                    <Grid
                        className="w-full max-w-256 flex items-center"
                        item
                    >
                        <Badge
                            className="max-w-216"
                            color="primary"
                            badgeContent={'?'}>
                            <Typography
                                className={classes.title}
                                variant="body1">
                                Лимит в сутки
                            </Typography>
                        </Badge>
                    </Grid>
                    <Grid
                        item
                        container
                        spacing={2}
                        className="flex-1">
                        <Grid
                            item>
                            <TextField
                                className="w-48"
                                label="15"
                                variant="outlined"/>
                        </Grid>
                    </Grid>
                </Grid>
                {/*fifth*/}
                <Grid
                    item
                    container
                    spacing={2}
                >
                    <Grid
                        className="w-full max-w-256 flex items-center"
                        item
                    >
                        <Badge
                            className="max-w-216"
                            color="primary"
                            badgeContent={'?'}>
                            <Typography
                                className={classes.title}
                                variant="body1">
                                Пункт ТО
                            </Typography>
                        </Badge>
                    </Grid>
                    <Grid
                        item
                        container
                        spacing={2}
                        className="flex-1">
                        <Grid
                            item>
                            <TextField
                                id="pto"
                                name="pto"
                                value={formik.values.pto}
                                onChange={formik.handleChange}
                                error={formik.touched.pto && Boolean(formik.errors.pto)}
                                helperText={formik.touched.pto && formik.errors.pto}
                                label="Мой пункт, адрес:"
                                variant="outlined"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Typography
                        variant="h4">Доступ в систему</Typography>
                </Grid>

                <Grid
                    item
                    container
                    spacing={2}
                >
                    <Grid
                        className="w-full max-w-256 flex items-center"
                        item
                    >
                        <Badge
                            className="max-w-216"
                            color="primary"
                            badgeContent={'?'}>
                            <Typography
                                className={classes.title}
                                variant="body1">
                                Логин
                            </Typography>
                        </Badge>
                    </Grid>
                    <Grid
                        item
                        container
                        spacing={2}
                        className="flex-1">
                        <Grid
                            item>
                            <TextField
                                label="12345exp001"
                                variant="outlined"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    spacing={2}
                >
                    <Grid
                        className="w-full max-w-256 flex items-center"
                        item
                    >
                        <Badge
                            className="max-w-216"
                            color="primary"
                            badgeContent={'?'}>
                            <Typography
                                className={classes.title}
                                variant="body1">
                                Пароль
                            </Typography>
                        </Badge>
                    </Grid>
                    <Grid
                        item
                        container
                        spacing={2}
                        className="flex-1">
                        <Grid
                            item>
                            <TextField
                                label="очень сложный пароль 2"
                                variant="outlined"/>

                        </Grid>
                        <Grid
                            item
                            className="inline-flex items-center">
                            <Button
                                className="ml-20 text-white"
                                color="secondary"
                                variant="contained"
                            >
                                Генерировать</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    spacing={2}
                >
                    <Grid
                        className="w-full max-w-256 flex items-center"
                        item
                    >
                        <Badge
                            className="max-w-216"
                            color="primary"
                            badgeContent={'?'}>
                            <Typography
                                className={classes.title}
                                variant="body1">
                                Телефон для уведомлений
                            </Typography>
                        </Badge>
                    </Grid>
                    <Grid
                        item
                        container
                        spacing={2}
                        className="flex-1">
                        <Grid
                            item>
                            <TextField
                                label="+79991234567"
                                variant="outlined"/>
                        </Grid>

                    </Grid>
                </Grid>


                <Grid item>
                    <img
                        src="/assets/images/settings.jpg"
                        alt="settings"/>
                </Grid>

                <Grid item>
                    <Button
                        onClick={handleClick}
                        className="text-white"
                        color="secondary"
                        variant="contained"
                        type="submit"
                    >
                        Сохранить</Button>
                </Grid>
            </Grid>
        </form>
    )
};

export default React.memo(ExpertsEdit);

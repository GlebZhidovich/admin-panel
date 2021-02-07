import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
    Card,
    Checkbox, FormControlLabel,
    InputBase,
    InputLabel,
    makeStyles,
    MenuItem,
    Paper, Radio, RadioGroup,
    Select,
    TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    photoWrap: {
        width: 400,
        height: 300
    },
    divider: {
        height: 2,
        margin: '16px 0',
    },
    formControl: {
        minWidth: 180
    }
}));

export function CreateMap() {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Grid
                direction="column"
                container
                spacing={2}>

                <Grid item>
                    <Typography variant="h4">
                        Создание карты
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className="font-bold" variant="body1">
                        Фотография
                    </Typography>
                </Grid>
                <Grid item container>
                    {[1, 1].map((elem, i) => (
                        <Grid key={i} item xs={12} sm={6}>
                            <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Фото ТС до осмотра"
                                />
                                <Button type="submit" color="primary">Обзор</Button>
                            </Paper>

                            <div
                                className={clsx(classes.photoWrap, 'bg-green-400 mt-16 flex justify-center items-center')}>
                                ФОТО
                            </div>
                        </Grid>
                    ))}
                </Grid>

                <Grid item>
                    <Typography className="" variant="body1">
                        Идет обработка фото....
                    </Typography>
                    <div className="flex pt-16">
                        <Typography className="" variant="body1">
                            Распознан госномер:
                        </Typography>
                        <Typography className="font-bold ml-16" variant="body1">
                            А777АА777
                        </Typography>
                    </div>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Grid>
                                <Typography variant="body1">
                                    Заполнение карты по vin и госномеру
                                </Typography>
                            </Grid>
                            <Divider className={classes.divider} orientation="horizontal"/>
                            <Grid
                                container
                                alignItems="center"
                                justify="space-between"
                            >
                                <Grid item className="flex items-center">
                                    <Typography className="font-bold mr-16" variant="body1">
                                        А777АА777
                                    </Typography>
                                    <TextField label="А777АА777" variant="outlined"/>
                                </Grid>
                                <Grid item className="flex items-center">
                                    <Typography className="font-bold mr-16" variant="body1">
                                        VIN
                                    </Typography>
                                    <TextField label="12345678901234567" variant="outlined"/>
                                </Grid>
                                <Grid item>
                                    <Button className="mr-16" variant="contained" color="primary">
                                        Заполнить
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        Сбросить
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item container spacing={3}>
                    <Grid item>
                        <Typography variant="h4">
                            Лицо, представившее ТС для проведения ТО
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Фамилия
                            </Typography>
                            <TextField label="А777АА777" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Имя
                            </Typography>
                            <TextField label="А777АА777" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Отчество
                            </Typography>
                            <TextField label="А777АА777" variant="outlined"/>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Email для отправки карты
                            </Typography>
                            <TextField label="ivan@ivan.com" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Телефон
                            </Typography>
                            <TextField label="+79991234567" variant="outlined"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container spacing={3}>
                    <Grid item>
                        <Typography variant="h4">
                            Сведения о ТС
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Гос. рег. знак
                            </Typography>
                            <TextField label="А777АА777" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                VIN
                            </Typography>
                            <TextField label="012345678901234567" variant="outlined"/>
                            <Box>
                                <FormControlLabel control={<Checkbox/>} label="Отсутствует"/>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Марка
                            </Typography>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="select-label">autocomplete</InputLabel>
                                <Select
                                    labelId="select-label"
                                    label="autocomplete">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Модель
                            </Typography>
                            <TextField label="А777АА777" variant="outlined"/>
                        </Grid>
                    </Grid>

                    <Grid item container>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Категория ТС (ОКП)
                            </Typography>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="select-label">autocomplete</InputLabel>
                                <Select
                                    labelId="select-label"
                                    label="autocomplete">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Год выпуска ТС
                            </Typography>
                            <TextField label="2020" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Шасси (Рама) №
                            </Typography>
                            <TextField label="" variant="outlined"/>
                            <Box>
                                <FormControlLabel control={<Checkbox/>} label="Отсутствует"/>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Кузов №
                            </Typography>
                            <TextField label="" variant="outlined"/>
                            <Box>
                                <FormControlLabel control={<Checkbox/>} label="Отсутствует"/>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid item container>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Разрешенная макс. масса (кг) *
                            </Typography>
                            <TextField label="1500" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Масса без нагрузки (кг) *
                            </Typography>
                            <TextField label="1000" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Тип топлива:
                            </Typography>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="select-label">Бензин</InputLabel>
                                <Select
                                    labelId="select-label"
                                    label="Бензин">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Тип тормозной системы:
                            </Typography>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="select-label">Гидравлическая</InputLabel>
                                <Select
                                    labelId="select-label"
                                    label="Гидравлическая">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid item container>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Регистрационный документ
                            </Typography>
                            <RadioGroup name="document">
                                <FormControlLabel value="female" control={<Radio/>} label="СРТС"/>
                                <FormControlLabel value="male" control={<Radio/>} label="ПТС"/>
                                <FormControlLabel value="other" control={<Radio/>} label="ЭПТС"/>
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Серия *
                            </Typography>
                            <TextField label="" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Номер *
                            </Typography>
                            <TextField label="" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Выдан когда *
                            </Typography>
                            <TextField label="25.11.1996" variant="outlined"/>
                        </Grid>
                    </Grid>

                    <Grid item container>
                        <Grid d item xs={3}></Grid>
                        <Grid item container direction="column" xs={6}>
                            <Typography className="font-bold" variant="body1">
                                Выдан кем *
                            </Typography>
                            <TextField label="" variant="outlined"/>
                        </Grid>
                    </Grid>

                    <Grid item container>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Цель использования
                            </Typography>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="select-label">Личная</InputLabel>
                                <Select
                                    labelId="select-label"
                                    label="Личная">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Марка шин:
                            </Typography>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}>
                                <InputLabel id="select-label">autocomplete</InputLabel>
                                <Select
                                    labelId="select-label"
                                    label="autocomplete">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Пробег ТС (км) *
                            </Typography>
                            <TextField label="150000" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Действует до:
                            </Typography>
                            <TextField label="" variant="outlined"/>
                        </Grid>
                    </Grid>

                    <Grid item container>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Наличие тахографа
                            </Typography>
                            <Box>
                                <FormControlLabel control={<Checkbox/>} label="В наличии"/>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Марка тахографа
                            </Typography>
                            <TextField label="150000" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Модель тахографа
                            </Typography>
                            <TextField label="" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Серийный номер тахографа
                            </Typography>
                            <TextField label="" variant="outlined"/>
                        </Grid>
                    </Grid>

                    <Grid item container>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Газобалонное оборудование
                            </Typography>
                            <Box>
                                <FormControlLabel control={<Checkbox/>} label="В наличии"/>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Номер балона
                            </Typography>
                            <TextField label="" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Дата поверки балона
                            </Typography>
                            <TextField label="" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className="font-bold" variant="body1">
                                Дата поверки оборудования
                            </Typography>
                            <TextField label="" variant="outlined"/>
                        </Grid>
                    </Grid>
                    <Grid item xs={9} container direction="column">
                        <Typography className="font-bold" variant="body1">
                            Примечание
                        </Typography>
                        <TextField
                            multiline
                            rows={5}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item container justify="center">
                        <Typography className="font-bold" variant="h5">
                            Заключение о соответствии или несоответствии транспортного средства обязательным требованиям
                            безопасности транспортных средств
                        </Typography>
                    </Grid>

                    <Grid item container justify="center">
                        <Button variant="contained" className="bg-green-500">
                            Соответствует
                        </Button>
                    </Grid>

                    <Grid item container justify="flex-end">
                        <Button variant="contained" color="primary">
                            Сохранить ДК
                        </Button>
                    </Grid>

                </Grid>


            </Grid>
        </>
    )
}
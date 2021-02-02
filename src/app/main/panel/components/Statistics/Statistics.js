import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Checkbox, FormControlLabel, makeStyles, Paper, TableCell, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";

const columns = [
    { id: 'id', label: '№', minWidth: 30 },
    { id: 'status', label: 'Статус', minWidth: 120 },
    { id: 'date', label: 'Дата и время диагностики', minWidth: 120 },
    { id: 'number', label: 'Номер ДК', minWidth: 120 },
    { id: 'expert', label: 'Эксперт', minWidth: 120 },
    { id: 'govnumber', label: 'Госномер', minWidth: 120 },
    { id: 'vin', label: 'VIN', minWidth: 120 },
    { id: 'category', label: 'Категория', minWidth: 120 },
    { id: 'active', label: 'Действует по', minWidth: 120 },
    { id: 'print', label: 'Печать', minWidth: 120 },

];

function createData(id, status, date, number, expert, govnumber, vin, category, active, print) {
    return { id, status, date, number, govnumber, vin, category, active, print };
}

const rows = [
    createData('1', 'Действующая', '10.10.2021 10:00:00',
        '101230012101694', 'Иванов И.И.', 'А777АА77',
        '12345678901234567', 'M1', '10.10.2022', 'Просмотр'),
    createData('1', 'Действующая', '10.10.2021 10:00:00',
        '101230012101694', 'Иванов И.И.', 'А777АА77',
        '12345678901234567', 'M1', '10.10.2022', 'Просмотр'),
    createData('1', 'Действующая', '10.10.2021 10:00:00',
        '101230012101694', 'Иванов И.И.', 'А777АА77',
        '12345678901234567', 'M1', '10.10.2022', 'Просмотр'),

];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export function Statistics() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return <>
        <Grid container spacing={3}>
            <Grid item>
                <Typography variant="h4">
                    Статистика
                </Typography>
            </Grid>

            <Grid item container>
                <Grid item xs={2}>
                    <Typography className="font-bold" variant="body1">
                        VIN
                    </Typography>
                    <TextField label="Иванов" variant="outlined"/>
                </Grid>
                <Grid item xs={2}>
                    <Typography className="font-bold" variant="body1">
                        Госномер
                    </Typography>
                    <TextField label="Иванов" variant="outlined"/>
                </Grid>
                <Grid item xs={2}>
                    <Typography className="font-bold" variant="body1">
                        Номер кузова
                    </Typography>
                    <TextField label="Иванов" variant="outlined"/>
                </Grid>
                <Grid item xs={2}>
                    <Typography className="font-bold" variant="body1">
                        Номер рамы
                    </Typography>
                    <TextField label="Иванов" variant="outlined"/>
                </Grid>
                <Grid item xs={2}>
                    <Typography className="font-bold" variant="body1">
                        Номер карты
                    </Typography>
                    <TextField label="Иванов" variant="outlined"/>
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item xs={2}>
                    <Typography className="font-bold" variant="body1">
                        Дата диагностики
                    </Typography>
                    <TextField label="10.10.2020" variant="outlined"/>
                </Grid>
                <Grid item container alignItems="flex-end" xs={2}>
                    <TextField label="10.10.2021" variant="outlined"/>
                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item container alignItems="flex-end" xs={2}>
                    <Button variant="contained" color="primary">
                        Найти
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid direction="column" container spacing={3}>
            <Grid item>
                <Box mt={10}>
                    <Typography variant="h4">
                        Результаты поиска
                    </Typography>
                </Box>
            </Grid>

            <Grid item>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </Grid>
        </Grid>
    </>
}
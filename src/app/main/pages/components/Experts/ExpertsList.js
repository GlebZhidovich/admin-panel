import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, Paper, TableCell } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import experts from './experts.json';

const columns = [
    { id: 'id', label: '№', minWidth: 10, maxWidth: 15 },
    { id: 'punkt', label: 'Пункт ТО', minWidth: 100 },
    {
        id: 'region',
        label: 'Регион',
        minWidth: 70,
        align: 'right',
    },
    {
        id: 'city',
        label: 'Город',
        minWidth: 70,
        align: 'right',
    },
    {
        id: 'address',
        label: 'Адрес',
        minWidth: 170,
        align: 'right',
    },

    {
        id: 'coors',
        label: 'Координаты',
        minWidth: 70,
        align: 'right',
    },
    {
        id: 'category',
        label: 'Категории пункта',
        minWidth: 70,
        align: 'right',
    },
    {
        id: 'capacity',
        label: 'Пропускная способность',
        minWidth: 70,
        align: 'right',
    },
    {
        id: 'limits',
        label: 'Использованный лимит',
        minWidth: 70,
        align: 'right',
    },
];

function createData(id, punkt, region, city, address, coors, category, capacity, limits) {
    return { id, punkt, region, city, address, coors, category, capacity, limits };
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const ExpertsList = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const {pto} = experts.experts[0];

    const rows = [
        createData(pto.id, pto.name, pto.region.name, pto.city, pto.address, pto.gpsLat + pto.gpsLat, pto.categories, pto.dayLimit, pto.dayLimit),
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Typography
                    variant="h4">Эксперты ТО</Typography>
            </Grid>
            <Grid item container>
                <Button
                    className="text-white bg-green-500"
                    variant="contained"
                >
                    Добавить</Button>

                <Button
                    className="text-white bg-gray-600 ml-10"
                    variant="contained"
                >
                    Импорт из ЕАИСТО</Button>
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
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
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
    )
}

export default React.memo(ExpertsList);

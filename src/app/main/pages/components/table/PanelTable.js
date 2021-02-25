import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
	{ id: 'id', label: 'N', minWidth: 20 },
	{ id: 'expert', label: 'Эксперт ФИО', minWidth: 100 },
	{
		id: 'date',
		label: 'Дата начала диагностики',
		minWidth: 170,
		align: 'right',
		format(val) {
			return new Date(val).toLocaleString('ru');
		}
	},
	{
		id: 'time',
		label: 'Ожидаемое время окончания диагностики',
		minWidth: 170,
		align: 'right',
		format(val) {
			return new Date(val).toLocaleString('ru');
		}
	},
	{
		id: 'limit',
		label: 'Остаток лимита',
		minWidth: 20,
		align: 'right'
	},
	{
		id: 'governumber',
		label: 'Госномер',
		minWidth: 170,
		align: 'right'
	},
	{
		id: 'vin',
		label: 'VIN / Номер рамы / Номер кузова',
		minWidth: 170,
		align: 'right'
	},
	{
		id: 'category',
		label: 'Категория',
		minWidth: 50,
		align: 'right'
	},
	{
		id: 'photo',
		label: 'Фото',
		minWidth: 20,
		align: 'right'
	}
];

function createData(id, expert, date, time, limit, governumber, vin, category, photo) {
	const formatDate = new Date(date).toLocaleString('ru');
	// const formatTime = new Date(time).toLocaleString('ru');
	return { id, expert, date, time, limit, governumber, vin, category, photo };
}

const rows = [
	createData(1, 'Иван Иванович Иванов', Date.now(), Date.now(), 15, 'A777AA77', 21312312312312312, 'M1', 'photo'),
	createData(2, 'Иван Иванович Иванов', Date.now(), Date.now(), 15, 'A777AA77', 21312312312312312, 'M1', 'photo'),
	createData(3, 'Иван Иванович Иванов', Date.now(), Date.now(), 15, 'A777AA77', 21312312312312312, 'M1', 'photo'),
	createData(4, 'Иван Иванович Иванов', Date.now(), Date.now(), 15, 'A777AA77', 21312312312312312, 'M1', 'photo'),
	createData(5, 'Иван Иванович Иванов', Date.now(), Date.now(), 15, 'A777AA77', 21312312312312312, 'M1', 'photo')
];

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

export default function PanelTable(props) {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleClick = () => {};

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map(column => (
								<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
							return (
								<TableRow onClick={handleClick} hover role="checkbox" tabIndex={-1} key={row.id}>
									{columns.map(column => {
										const value = row[column.id];
										return (
											<TableCell key={column.id} align={column.align}>
												{column.format && typeof value === 'number'
													? column.format(value)
													: value}
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
	);
}

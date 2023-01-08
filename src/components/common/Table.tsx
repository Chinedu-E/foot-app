import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

type StandingsTableProps = {
  headers: string[];
  description: string[];
  data: string[][];
  league: string;
}

const Standings = (props: StandingsTableProps) => {
  const { headers, data, description, league } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const cleanHeader = (header: string) => {
    if (header === "index"){
        return "Pos"
    }
    return header
  }

  const cleanData = (data: string, index: number) => {
    if (index === 0) {
        return parseInt(data)+1
    }
    return data
  }

  return (
    <Box>
    <TableContainer component={Paper} sx={{ minWidth: 650, maxHeight: 460}}>
      <Table stickyHeader aria-label="simple table" size="small">
      <caption>a table</caption>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell>
                <Tooltip title={description[index]} placement="top">
                <Typography variant="subtitle1">{cleanHeader(header)}</Typography>
                </Tooltip>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow hover>
              {row
              .map((cell, index) => (
                <TableCell>
                  <Typography variant="body1">{cleanData(cell, index)}</Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
    rowsPerPageOptions={[10, 20]}
    component="div"
    count={data.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
  </Box>
  );
}

export default Standings;

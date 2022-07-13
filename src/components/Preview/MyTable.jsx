import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import {useSetStreamMutation} from "../store/dataApi";

function createData(name, address, id) {
    return { name, address, id };
}

export default function MyTable(props) {

    const { streams } = props;
    const [setStream] = useSetStreamMutation();

    const rows = streams.map((stream) => createData(stream.name, stream.url, stream.id));

    const handleActivate = async (id) => {
        const stream = streams.find((stream)=> stream.id === id);
        const newStream = {...stream, is_active: true};

        try {
            await setStream(newStream);
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <TableContainer component={Paper} sx={{ mt: 1 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align={`right`}>شناسه</TableCell>
                        <TableCell align="right">اسم</TableCell>
                        <TableCell align="right">آدرس</TableCell>
                        <TableCell align="right">عملکرد</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align={`right`}>
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell align="right">
                                <Button variant={`contained`}
                                        onClick={()=>handleActivate(row.id)}>فعال سازی</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

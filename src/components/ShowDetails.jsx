import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

export default function ShowDetails(props) {
  const { student } = props;
  console.log("hobby is " + student.hobby);
  return (
    <div className="detailsContainer">
      <h3>Student Detail</h3>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">{student.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">{student.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">{student.age}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">About</TableCell>
              <TableCell align="left">{student.about}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Hobby</TableCell>
              <TableCell align="left">
                {student && student.hobby ? student.hobby.toString() : null}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

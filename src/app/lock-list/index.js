import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import locks from '../locks';

export default class LockList extends Component {
  getLockList() {
    const lockList = locks.getLocks();
    return lockList.map((lock) => {
      return (
        <TableRow key={lock.id}>
          <TableCell padding="dense">{lock.name}</TableCell>
          <TableCell padding="dense">{lock.type}</TableCell>
          <TableCell padding="dense" numeric>{lock.weight}</TableCell>
          <TableCell padding="dense" numeric>{lock.widthOnePanel}</TableCell>
          <TableCell padding="dense" numeric>{lock.breakingForce}</TableCell>
          <TableCell padding="dense" numeric>{lock.resistanceMoment}</TableCell>
          <TableCell padding="dense" numeric>{lock.diameter}</TableCell>
          <TableCell padding="dense" numeric>{lock.wallThickness}</TableCell>
          <TableCell padding="dense" numeric>{lock.lockLength}</TableCell>
        </TableRow>
      );
    });
  }
  render() {
    const titles = this.props.titles;
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="dense">{titles.name}</TableCell>
              <TableCell padding="dense">{titles.type}</TableCell>
              <TableCell padding="dense" numeric>{titles.weight}</TableCell>
              <TableCell padding="dense" numeric>{titles.widthOnePanel}</TableCell>
              <TableCell padding="dense" numeric>{titles.breakingForce}</TableCell>
              <TableCell padding="dense" numeric>{titles.resistanceMoment}</TableCell>
              <TableCell padding="dense" numeric>{titles.diameter}</TableCell>
              <TableCell padding="dense" numeric>{titles.wallThickness}</TableCell>
              <TableCell padding="dense" numeric>{titles.lockLength}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { this.getLockList() }
          </TableBody>
        </Table>
      </div>
    );
  }
}

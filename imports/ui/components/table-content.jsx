import React from 'react';

import TableHeader from './table-header';

const Table = ({ showList, onSort }) => (
  <table>
    <TableHeader onSort={onSort} />
    <tbody>
      {
        showList.map((show, index) => (
          <tr key={index}>
            <td>{++index}</td>
            <td>
              <img src={show.poster} alt="Poster" width="100" />
            </td>
            <td>{show.year}</td>
            <td>{show.title}</td>
            <td>{show.watchers}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

Table.displayName = 'Table';

export default Table;

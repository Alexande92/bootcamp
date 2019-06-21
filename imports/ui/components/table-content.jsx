import React from 'react';
import ImageLoader from 'react-load-image';

import Spinner from '../spinner';
import TableHeader from './table-header';

const Table = ({ showList, onSort }) => (
  <table>
    <TableHeader onSort={onSort} />
    <tbody>
      {
        showList.map((show, index) => (
          <tr key={index}>
            <td>{++index}</td>
            <td className="picture" height="100">
              <ImageLoader
                src={show.poster ? show.poster : '/images/no-image.png'}
              >
                <img width="100" alt="poster" />
                <img src="/images/no-image.png" alt="poster" width="100" />
                <Spinner />
              </ImageLoader>
            </td>
            <td>{show.year}</td>
            <td className="title">{show.title}</td>
            <td>{show.watchers}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

Table.displayName = 'Table';

export default Table;

import React from 'react';

const TableHeader = ({ onSort }) => (
  <thead>
    <tr>
      <th>#</th>
      <th>Poster</th>
      <th onClick={() => onSort('year')}>
        Year
      </th>
      <th onClick={() => onSort('title')}>
        Title
      </th>
      <th onClick={() => onSort('watchers')}>
        Watchers
      </th>
    </tr>
  </thead>
);

TableHeader.displayName = 'TableHeader';

export default TableHeader;

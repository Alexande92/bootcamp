import React from 'react';

const TableHeader = ({ onSort }) => (
  <thead>
    <tr>
      <th className="show-number">№</th>
      <th className="picture">Poster</th>
      <th className="year" onClick={() => onSort('year')}>
        Year
      </th>
      <th className="name" onClick={() => onSort('title')}>
        Title
      </th>
      <th className="viewers" onClick={() => onSort('watchers')}>
        Watchers
      </th>
    </tr>
  </thead>
);

TableHeader.displayName = 'TableHeader';

export default TableHeader;

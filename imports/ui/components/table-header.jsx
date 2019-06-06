import React from 'react';

const TableHeader = ({ onSort }) => (
  <thead>
    <tr>
      <th className="show-number">№</th>
      <th className="picture">Poster</th>
      <th className="year" onClick={() => onSort('year')}>
        Year
        <img src="/images/double-arrow.svg" className="table-sort" />
      </th>
      <th className="name" onClick={() => onSort('title')}>
        Title
        <img src="/images/double-arrow.svg" className="table-sort" />
      </th>
      <th className="viewers" onClick={() => onSort('watchers')}>
        Watchers
        <img src="/images/double-arrow.svg" className="table-sort" />
      </th>
    </tr>
  </thead>
);

TableHeader.displayName = 'TableHeader';

export default TableHeader;

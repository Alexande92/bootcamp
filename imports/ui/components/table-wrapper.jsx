import React from 'react';

import Table from './table-content';

const TableWrapper = ({ showList, onSort }) => (
  <section className="show-table ">
    <Table showList={showList} onSort={onSort} />
  </section>
);

TableWrapper.displayName = 'TableWrapper';

export default TableWrapper;

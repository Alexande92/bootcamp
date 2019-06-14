import React from 'react';
import expect from 'expect';
import mock from 'jest-mock';
import { shallow, mount } from 'enzyme';

import AppHeader from '../ui/components/app-header';
import SearchPanel from '../ui/components/search-panel';
import Table from '../ui/components/table-wrapper';
import PagainationWrapper from '../ui/components/pagination-wrapper';

describe('App header component', () => {
  it('should have logo', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.find('.logo').length)
      .toBe(1);
  });

  it('should have navbar', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.find('.navbar').length)
      .toBe(1);
  });

  it('onSet should been called on click', () => {
    const onSet = mock.fn();
    const wrapper = shallow(<AppHeader onSet={onSet} />);

    wrapper.find('a.active')
      .simulate('click');
    expect(onSet)
      .toHaveBeenCalled();
  });
});

describe('Search panel component', () => {
  it('should have input', () => {
    const wrapper = shallow(<SearchPanel />);
    expect(wrapper.find('input').length)
      .toBe(1);
  });

  it('should have search icon', () => {
    const wrapper = shallow(<SearchPanel />);
    expect(wrapper.find('.search-icon').length)
      .toBe(1);
  });

  it('onSearch should been called on click with given phrase', () => {
    const onSearch = mock.fn();
    const wrapper = shallow(<SearchPanel onSearch={onSearch} />);

    wrapper.find('input')
      .simulate('change', { target: { value: 'Disney' } });

    expect(onSearch)
      .toHaveBeenCalled();
    expect(onSearch)
      .toHaveBeenCalledWith('Disney');
  });
});

describe('Table component', () => {
  const showList = [
    {
      year: 2019,
      watchers: 300,
      poster: null,
      title: 'Disney-title',
    },
    {
      year: 2019,
      watchers: 200,
      poster: null,
      title: 'Disney-title-1',
    },
  ];

  it('should have header', () => {
    const wrapper = mount(<Table showList={showList} />);
    expect(wrapper.find('thead').length)
      .toBe(1);
  });

  it('header should have 5 columns', () => {
    const wrapper = mount(<Table showList={showList} />);
    expect(wrapper.find('thead th').length)
      .toBe(5);
  });

  it('onSort should been called on click', () => {
    const onSort = mock.fn();
    const wrapper = mount(<Table showList={showList} onSort={onSort} />);

    wrapper.find('th.year')
      .simulate('click');
    expect(onSort)
      .toHaveBeenCalled();
    expect(onSort)
      .toHaveBeenCalledWith('year');
  });

  it('should have body', () => {
    const wrapper = mount(<Table showList={showList} />);
    expect(wrapper.find('tbody').length)
      .toBe(1);
  });

  it('should have show content', () => {
    const wrapper = mount(<Table showList={showList} />);

    expect(wrapper.find('tbody tr').length)
      .toBe(2);
    expect(wrapper.find('tbody td.title')
      .first()
      .text())
      .toBe('Disney-title');
  });
});

describe('Pagination component', () => {
  it('should have pagination block', () => {
    const wrapper = shallow(<PagainationWrapper />);
    expect(wrapper.find('.pagination').length)
      .toBe(1);
  });

  it('should have buttons', () => {
    const wrapper = mount(<PagainationWrapper current={1} pages={[1, 2, 3, 4, 5]} />);
    expect(wrapper.find('a').length)
      .toBe(5);
  });

  it('setPageNumber should been called on click', () => {
    const setPageNumber = mock.fn();
    const wrapper = mount(<PagainationWrapper
      current={1}
      pages={[1, 2, 3, 4, 5]}
      total={5}
      limit={5}
      setPageNumber={setPageNumber}
    />);

    wrapper.find('a.active')
      .simulate('click');

    expect(setPageNumber)
      .toHaveBeenCalled();
    expect(setPageNumber)
      .toHaveBeenCalledWith(1);
  });
});

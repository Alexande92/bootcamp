import React from 'react';
import expect from 'expect';
import mock from 'jest-mock';
import { shallow, mount } from 'enzyme';

import AppHeader from '../ui/components/app-header';
import Table from '../ui/components/table-wrapper';

describe('App header component', () => {
  it('should have logo', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.find('.logo').length).toBe(1);
  });

  it('should have navbar', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.find('.navbar').length).toBe(1);
  });

  it('onSet should been called on click', () => {
    const onSet = mock.fn();
    const wrapper = shallow(<AppHeader onSet={onSet} />);

    wrapper.find('a.active').simulate('click');
    expect(onSet).toHaveBeenCalled();
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
    expect(wrapper.find('thead').length).toBe(1);
  });

  it('header should have 5 columns', () => {
    const wrapper = mount(<Table showList={showList} />);
    expect(wrapper.find('thead th').length).toBe(5);
  });

  it('onSort should been called on click', () => {
    const onSort = mock.fn();
    const wrapper = mount(<Table showList={showList} onSort={onSort} />);

    wrapper.find('th.year').simulate('click');
    expect(onSort).toHaveBeenCalled();
    expect(onSort).toHaveBeenCalledWith('year');
  });

  it('should have body', () => {
    const wrapper = mount(<Table showList={showList} />);
    expect(wrapper.find('tbody').length).toBe(1);
  });

  it('should have show content', () => {
    const wrapper = mount(<Table showList={showList} />);

    expect(wrapper.find('tbody tr').length).toBe(2);
    expect(wrapper.find('tbody td.title').first().text()).toBe('Disney-title');
  });
});
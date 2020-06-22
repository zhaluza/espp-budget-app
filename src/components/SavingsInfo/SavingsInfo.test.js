import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import SavingsInfo from './SavingsInfo';

const mockStore = configureStore([]);

describe('SavingsInfo', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore({
      data: {
        salary: 100000,
        expense: 0,
        savings: 0,
        percent: 0,
      },
    });
    wrapper = shallow(<SavingsInfo store={store} username="Zac" />)
      .find('SavingsInfo')
      .dive();
  });
  it('mounts succesfully', () => {
    expect(wrapper.length).toBe(1);
  });
  it('renders a card with a heading that greets the user', () => {
    const card = wrapper.find('.card');
    expect(card).toHaveLength(1);
    expect(card.find('h2').text()).toBe('Thanks, Zac.');
  });
  it('fills each row with the proper data passed down through store', () => {
    const data = wrapper.find('.card').find('.data');
    const rows = data.find('.row');
    expect(rows).toHaveLength(4);
    const rowChildren = rows.children();
    expect(rowChildren.slice(1, 2).text()).toBe('0%');
    expect(rowChildren.slice(3, 4).text()).toBe('$100,000.00');
    expect(rowChildren.slice(5, 6).text()).toBe('$0.00');
    expect(rowChildren.slice(7, 8).text()).toBe('$0.00');
  });
  it('renders two buttons', () => {
    const card = wrapper.find('.card');
    const button = card.find('button');
    expect(button).toHaveLength(2);
  });
});

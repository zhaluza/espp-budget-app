import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import BudgetPlanner from './BudgetPlanner';

const mockStore = configureStore([]);

describe('BudgetPlanner', () => {
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
    wrapper = shallow(<BudgetPlanner store={store} username="Zac" />)
      .find('BudgetPlanner')
      .dive();
  });
  it('mounts succesfully', () => {
    expect(wrapper.length).toBe(1);
  });
  it('renders a card with a heading that greets the user', () => {
    const card = wrapper.find('.card');
    expect(card).toHaveLength(1);
    expect(card.find('h2').text()).toBe('Select your monthly budget, Zac.');
  });
  it('displays the correct percentage', () => {
    const percent = wrapper
      .find('.card')
      .find('.budget__slider-container')
      .find('p');
    expect(percent.text()).toBe('0%');
  });
  it('displays the correct initial salary value', () => {
    const salaryInput = wrapper
      .find('.card')
      .find('.budget__data-container')
      .find('.budget__data-salary')
      .find('.budget__data-input-container')
      .find('input');
    expect(salaryInput.props().value).toBe(100000);
  });
  it('displays the correct amount for expense and savings', () => {
    const data = wrapper.find('.card').find('.budget__data-container');
    const rows = data.find('.data-row');
    expect(rows).toHaveLength(2);
    const rowChildren = rows.children();
    expect(rowChildren.slice(1, 2).text()).toBe('$0.00');
    expect(rowChildren.slice(3, 4).text()).toBe('$0.00');
  });
  it('renders two buttons', () => {
    const card = wrapper.find('.card');
    const button = card.find('button');
    expect(button).toHaveLength(2);
  });
});

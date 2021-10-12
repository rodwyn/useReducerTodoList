import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../components/TodoList';
import { demosTodos } from '../fixtures/demosTodos';

describe('Testing <TodoList /> component.', () => {
  const todos = demosTodos;
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const wrapper = shallow(<TodoList
    todos = {todos}
    handleToggle = {handleToggle}
    handleDelete = {handleDelete}
    />);

  test('should render correctly.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render 2 components.', () => {
    console.log(demosTodos.length);
    expect(wrapper.find('TodoListItem').length).toBe(demosTodos.length);
  });
});

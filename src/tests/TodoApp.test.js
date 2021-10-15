import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from '@testing-library/react';
import { TodoApp } from '../TodoApp';
import { demosTodos } from './fixtures/demosTodos';

describe('Testing <TodoApp /> component.', () => {
  const wrapper = shallow(<TodoApp />);

  test('should render correctly.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should add a Todo.', () => {
    const wrapper = mount(<TodoApp />);

    act(()=> {
      wrapper.find('TodoForm').prop('handleAddTodo')(demosTodos[0]);
    });


    expect(wrapper.find('h1').text().trim()).toBe('Todo App (1)');
  });
});

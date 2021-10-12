import React from 'react';
import {shallow} from 'enzyme';
import {TodoListItem} from '../../components/TodoListItem';
import {demosTodos} from '../fixtures/demosTodos';

describe('Testing <TodoListItem /> component.', () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const todo = demosTodos[0];
  todo.done = true;
  const wrapper = shallow(
    <TodoListItem
      todo={demosTodos[0]}
      i={0}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
      />
  );
  
  test('should render correctly.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handleDelete function.', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demosTodos[0].id);
    
  });

  test('should call handleToggle function.', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demosTodos[0].id);
  })
  
  test('should render the text correctly.', () => {
    const paragraph = wrapper.find('p');
    
    expect(paragraph.text()).toBe(`1.${demosTodos[0].desc}`);
  })
  
  test('should have the complete className if ToDO.done is true.', () => {
    expect(wrapper.find('p').hasClass('completed')).toBe(true);
  });
});

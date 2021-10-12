import { shallow } from 'enzyme';
import React from 'react';
import { TodoForm } from '../../components/TodoForm';

describe('Testing <TodoForm /> component.', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoForm handleAddTodo={handleAddTodo} />);

  test('should render correctly.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should not call the handleAddTodo function.', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    
    formSubmit({preventDefault(){}});
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });
  
  test('should call handleAddTodo on form interaction.', () => {
    const value = 'Learn to fly.';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    
    formSubmit({preventDefault(){}});
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  })
  
});
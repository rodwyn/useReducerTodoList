import { todoReducer } from "../todoReducer";
import { demosTodos } from "./fixtures/demosTodos";

describe('Testing todoReducer', () => {
  test('Should return the default state.', () => {
    const state = todoReducer(demosTodos, {});
    expect(state).toEqual(demosTodos);
  });
  
  test('should add a new ToDo.', () => {
    const payload = {
      id: 125,
      desc: 'Leran to run.',
      done: false
    };
    const state = todoReducer(demosTodos, {
      type: 'add',
      payload
    });
 
    expect(state).toEqual([ ...demosTodos, payload ])   
  });

  test('should delete a slected ToDo.', () => {
    const action = {
      type: 'delete',
      payload: 123
    };
    const state = todoReducer(demosTodos, action);

    expect(state).toEqual(demosTodos.filter(todo => todo.id !== action.payload));
  });

  test('should do the toogle behavior.', () => {
    const action = {
      type: 'toggle',
      payload: 124
    };
    const state = todoReducer(demosTodos, action);

    expect(state[0]).toEqual(demosTodos[0]);
    expect(state[1].done).not.toBe(demosTodos[1]);
  });  
});

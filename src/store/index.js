import { createStore } from 'redux';

const initialState = { counter: 0, show: true }

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1,
                show: state.show
            }
        case 'decrement':
            return {
                counter: state.counter - 1,
                show: state.show
            }
        case 'increase':
            return {
                counter: state.counter + action.value,
                show: state.show
            }
        case 'toggle':
            return {
                show: !state.show,
                counter: state.counter
            }
        default:
            return state;
    }

}

const store = createStore(counterReducer);

export default store;
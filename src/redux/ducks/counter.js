
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const MULTIPLY = 'multiply';
const ZERO = 'zero';

export const increment = () => (
    {
        type: INCREMENT
    }
)

export const decrement = () => (
    {
        type: DECREMENT
    }
)

export const multiply = () => (
    {
        type: MULTIPLY
    }
)

export const zero = () => (
    {
        type: ZERO
    }
)


const initialState = {
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case MULTIPLY:
            return { ...state, count: state.count * 2 };
        case ZERO:
            return { ...state, count: state.count = 0 };
        default:
            return state;
    }
}


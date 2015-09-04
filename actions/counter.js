export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
    return {
        type: INCREMENT_COUNTER,
        amount: 100
    };
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER,
        amount: 1
    };
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync(delay = 10000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}

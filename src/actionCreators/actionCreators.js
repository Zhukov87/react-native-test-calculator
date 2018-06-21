import { PRESS_NUMBER, PRESS_OPERATION, PRESS_RESULT, CLEAR_ALL } from './constants';

export function pressNumber(number) {
    return {
        type: PRESS_NUMBER,
        payload: { number }
    }
}

export function pressOperation(operation) {
    return {
        type: PRESS_OPERATION,
        payload: { operation }
    }
}

export function pressResult() {
    return {
        type: PRESS_RESULT
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL
    }
}
import { PRESS_NUMBER, PRESS_OPERATION, PRESS_RESULT, CLEAR_ALL } from '../actionCreators/constants';

const initialState = {
    firstNumber: 0,
    secondNumber: 0,
    lastResult: '',
    operation: '',
    result: '0'
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case PRESS_NUMBER: {
            const nextState = {...state};
            const nextResult = "";
            const nextResultWithSecondNumber = nextState.result;
            if(!nextState.operation) {
                nextState.firstNumber = +(nextState.firstNumber.toString() + payload.number.toString());
                nextState.result = nextResult + nextState.firstNumber;    
            }
            if(nextState.operation) {
                nextState.secondNumber = +(nextState.secondNumber.toString() + payload.number.toString());
                nextState.result = nextResultWithSecondNumber + payload.number;
            }
            return nextState;
        }

        case PRESS_OPERATION: {
            const nextState = {...state};
            nextState.operation = payload.operation;
            nextResult = '0';
            nextState.result = nextState.result + nextState.operation;
            return nextState;
        }

        case PRESS_RESULT: {
            const nextState = {...state};
            if(nextState.operation == '+') {
                nextState.result = nextState.firstNumber + nextState.secondNumber;
            }
            if(nextState.operation == '-') {
                nextState.result = nextState.firstNumber - nextState.secondNumber;
            }
            if(nextState.operation == '*') {
                nextState.result = nextState.firstNumber * nextState.secondNumber;
            }
            if(nextState.operation == '/') {
                nextState.result = nextState.firstNumber / nextState.secondNumber;
            }
            nextState.lastResult = 
                nextState.firstNumber + 
                nextState.operation + 
                nextState.secondNumber + 
                '=' + 
                nextState.result;
            return nextState;
        }

        case CLEAR_ALL: {
            const nextState = {...state};
            nextState.firstNumber = 0;
            nextState.secondNumber = 0;
            nextState.operation = '';
            nextState.result = '0';
            return nextState;
        }
    }

    return state;
}
const InitialValue = {
    user:"user",
    counter:1000
};

const RootReducer = (state, action) => {
    if (action.type === "increment") { return {...state, counter: state.counter + 1};
    } else if (action.type === "decrement") { return { ...state, counter: state.counter - 1 };
    } else if (action.type === "incrementSpec") { return { ...state, counter: state.counter + action.amount };
    } else if (action.type === "decrementSpec") { return { ...state, counter: state.counter - action.amount };
    } else if (action.type === "reset") { return { ...state, counter: 0 }; }
    else {
        return state;
    }
};

export {InitialValue, RootReducer}
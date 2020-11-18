/***
 * 当 useState 复杂的状态逻辑涉及多个子值或下一个状态取决于前一个状态时，
 * 通常 useReducer 更可取。useReduce 还可以让您优化触发深度更新的组件的性能
 */
const initialState = {count: 0};
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
        return {count: state.count + 1};
        case 'decrement':
        return {count: state.count - 1};
        default:
        throw new Error();
    }
}

function Counter({initialState}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    );
}
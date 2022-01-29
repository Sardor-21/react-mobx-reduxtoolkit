import React from 'react';
// import counter from "../../store/counter";
// import {observer} from "mobx-react-lite";
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, toolkitPayload} from "../../reduxtoolkit/toolkitSlice";

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.toolkit.count)
    return (<div>
        {count}
        <div className={"flex"}>
            <button onClick={() => dispatch(increment())}
                    className={"p-2 outline-0 border-0 bg-green-600 rounded-lg mr-3 cursor-pointer text-white"}>Increment
            </button>
            <button onClick={() => dispatch(decrement())}
                    className={"p-2 outline-0 border-0 bg-red-600 rounded-lg mr-2 cursor-pointer text-white"}>Decrement
            </button>
            <button onClick={() => dispatch(toolkitPayload())}
                    className={"p-2 outline-0 border-0 bg-red-600 rounded-lg mr-2 cursor-pointer text-white"}>Action payload
            </button>
        </div>

    </div>);
}

export default Counter

// export default Counter;
// const Counter = observer(() => {
//     return (
//         <div>
//                 {counter.count}
//
//                 <div className={"flex"}>
//                     <button onClick={() => counter.increment()} className={"p-2 outline-0 border-0 bg-green-600 rounded-lg mr-3 cursor-pointer text-white"}>Increment</button>
//                     <button onClick={() => counter.decrement()} className={"p-2 outline-0 border-0 bg-red-600 rounded-lg mr-2 cursor-pointer text-white"}>Decrement</button>
//                 </div>
//
//         </div>
//     );
// })
//
// export default Counter;
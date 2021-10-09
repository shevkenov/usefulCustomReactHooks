import React, { useState } from 'react'
import useTimeout from './useTimeout';

const TimeoutComponent = () => {
    const [counter, setCounter] = useState(10);
    const [clearTime, resetTime] = useTimeout(() => setCounter(0), 5000);
    return (
        <div className="hook">
            <h3>useTimeout hook</h3>
            <div>{counter}</div>
            <button onClick={() => setCounter(prevVal => ++prevVal)}>Increment</button>
            <button onClick={clearTime}>Clear Timeout</button>
            <button onClick={resetTime}>Reset Timeout</button>
        </div>
    )
}

export default TimeoutComponent

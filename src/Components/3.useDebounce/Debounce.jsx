import React, { useState } from 'react'
import useDebounce from './useDebounce';

const Debounce = () => {
    const [count, setCount] = useState(10);
    useDebounce(() => alert('request send'), 5000, [count])

    return (
        <div className='hook'>
            <h3>useDebounce</h3>
            <div>{count}</div>
            <button onClick={() => setCount(prev => ++prev)}>Increment</button>
        </div>
    )
}

export default Debounce;

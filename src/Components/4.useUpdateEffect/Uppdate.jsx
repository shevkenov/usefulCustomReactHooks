import React, {useState} from 'react'
import useUpdateEffect from './useUpdateEffect';

const Uppdate = () => {
    const [count, setCount] = useState(10);
    useUpdateEffect(() => alert('update'), count)
    return (
        <div className='hook'>
            <h3>useUpdateEffect</h3>
            <div>{count}</div>
            <button onClick={() => setCount(prev => ++prev)}>Increment</button>
        </div>
    )
}

export default Uppdate

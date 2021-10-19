import React, { useState } from 'react'
import usePrevValue from './usePrevValue';


const ArrayComp = () => {
    const [value, setValue] = useState(0);
    const prevValue = usePrevValue(value);


    return (
        <div className='hook'>
            <h3>{value} - {prevValue}</h3>
            <button onClick={() => setValue(v => ++v)}>Increase</button>
        </div>
    )
}

export default ArrayComp

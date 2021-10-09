import React from 'react'
import useArray from './useArray'

const ArrayComp = () => {

    const {array, add, remove, filter, set, change, clear} = useArray()

    return (
        <div className='hook'>
            <h3>useArray</h3>
            <div>{array.join(", ")}</div>
            <button onClick={add}>Add 7</button>
            <button onClick={remove}>Remove second element</button>
            <button onClick={change}>Change second element to 7</button>
            <button onClick={filter}>Filter elements less than 4</button>
            <button onClick={set}>Set to [1,2]</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}

export default ArrayComp

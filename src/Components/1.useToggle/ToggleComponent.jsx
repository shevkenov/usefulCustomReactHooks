import React from 'react'
import useToggle from './useToggle'

const ToggleComponent = () => {
    const [value, toggleValue] = useToggle(true)

    return (
        <div className="hook">
            <h3>useToggle hook</h3>
            <div>{value.toString()}</div>
            <button onClick={() => toggleValue()}>Toggle</button>
            <button onClick={() => toggleValue(true)}>True</button>
            <button onClick={() => toggleValue(false)}>False</button>
        </div>
    )
}

export default ToggleComponent

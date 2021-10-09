import { useState } from "react";

function useToggle(defaultValue){
    const [value, setValue] = useState(defaultValue);

    const toggleValue = (val) => {
        typeof val === 'boolean' ? setValue(val) : setValue(prevVal => !prevVal);
    }

    return [value, toggleValue]
}

export default useToggle;
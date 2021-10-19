import { useRef } from "react/cjs/react.development";

export default function usePrevValue(value) {
    const prevValue = useRef()
    const currentValue = useRef()

    if(value !== currentValue.current){
        prevValue.current = currentValue.current;
        currentValue.current = value;
    }

    return prevValue.current
}
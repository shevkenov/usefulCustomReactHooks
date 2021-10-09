import { useEffect, useRef, useCallback } from "react";


function useTimeout(callback, delay) {
    const timeoutRef = useRef(null);
    const callbackRef = useRef(callback)
    
    const set = useCallback(() => {timeoutRef.current = setTimeout(callbackRef.current, delay)}, [delay]);
    const clearTime = useCallback(() => {timeoutRef.current && clearTimeout(timeoutRef.current)},[]);
    
    useEffect(() => {
        callbackRef.current = callback
    },[callback])

    useEffect(() => {
        set();

        return clearTime
        
    }, [set, clearTime, delay])

    
    const resetTime = useCallback(() => {
        clearTime();
        set();
    },[set, clearTime])

    return [clearTime, resetTime]
}

export default useTimeout;
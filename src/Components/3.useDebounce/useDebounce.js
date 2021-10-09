import { useEffect } from 'react';
import useTimeout from '../2.useTimeout/useTimeout';

function useDebounce(callback, delay, dependecies) {
    const [clearTime, resetTime] = useTimeout(callback, delay);
    useEffect(resetTime, [...dependecies, resetTime])
    useEffect(clearTime, []);
}

export default useDebounce;
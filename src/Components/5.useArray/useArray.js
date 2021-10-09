import { useState } from "react";

export default function useArray() {
    const [array, setArray] = useState([1,2,3,4,5]);

    const add = () => setArray(prev => [...prev, 7]);
    const remove = () => setArray(prev => [...prev.slice(0,1), ...prev.slice(2)]);
    const change = () => setArray(prev => [...prev.slice(0,1), 7, ...prev.slice(2)]);
    const filter = () => setArray(prev => prev.filter(el => el < 4));
    const set = () => setArray([1,2]);
    const clear = () => setArray([]);

    return{
        array,
        add,
        remove,
        change,
        filter,
        set,
        clear
    }
}
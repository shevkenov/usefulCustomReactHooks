import { useRef, useEffect } from "react/cjs/react.development";

export default function useUpdateEffect(callback, count) {
    const countRef = useRef(true);

    useEffect(() => {
        if(countRef.current){
            countRef.current = false;
            return;
        }

        return callback()
    },[count])
}
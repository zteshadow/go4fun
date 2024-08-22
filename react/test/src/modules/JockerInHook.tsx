
import React, { useState, useEffect, useMemo } from "react";

export namespace JokerInHook {
    function Joker(props: { count: number }) {
        const [count, setCount] = useState(props.count);
        useEffect(() => {
            setCount(props.count);
        }, [props.count]);
        console.log(`I am joker's render: ${count}`);
        return (
            <div>
                <p style={{color: 'red'}}>
                    Joker: you clicked {count} times
                </p>
            </div>);
    }

    export function DC() {
        const [count, setCount] = useState(0);

        return <div>
            <p> you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <Joker count={count}/>
        </div>;
    }
}

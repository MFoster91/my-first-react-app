import { useState } from 'react';
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <h2>Parent Count: {count}</h2>
            <Child onIncrement={() => setCount(count + 1)} />
        </div>
    );
}

export default Parent;
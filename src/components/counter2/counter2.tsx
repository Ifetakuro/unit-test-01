import { Counter2Props } from "./counter2.types"

export const Counter2 = ({ count, handleIncrement, handleDecrement }: Counter2Props) => {
    return (
        <div>
            <h1>Counter Two</h1>
            <p>{count}</p>
            {handleIncrement && (
                <button onClick={handleIncrement}>Increment</button>
            )}
            {handleDecrement && (
                <button onClick={handleDecrement}>Decrement</button>
            )}
        </div>
    )
}
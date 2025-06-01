function Child({ onIncrement }) {
    return (
        <button onClick={onIncrement}>
        Increment from Child
        </button>
    );
}

export default Child;
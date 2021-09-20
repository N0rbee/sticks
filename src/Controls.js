function Controls({dispatch, inputNumber, selectedNumber, min, max}) {

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: "removeSticks"})
    }

    return (
        <form className="controls" onSubmit={handleSubmit}>
            <div className="remove-sticks">
                <button 
                    className="remove-btn" 
                    type="submit"
                    disabled={selectedNumber < min}>
                    Remove {selectedNumber} sticks
                </button>
            </div>
            <div className="select-sticks">
                <input
                    className="select-input"
                    type="range"
                    onChange={(e) => dispatch({type: "selectSticks", payload: {value: e.target.value}})}
                    value={inputNumber}
                    min={min}
                    max={max}
                    step={1}
                />
                <div className="select-range">
                    <span>Min.: {min}</span>
                    {String(inputNumber) !== String(selectedNumber) && <span className="select-invalid">{inputNumber} forced to {selectedNumber}</span>}
                    <span>Max.: {max}</span>
                </div>
            </div>
        </form>
    );
}

export default Controls;
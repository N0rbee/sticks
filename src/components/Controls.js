function Controls({dispatch, inputNumber, selectedNumber, min, max, currentPlayer}) {

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: "removeSticks"})
  }

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <div className="text-center mb-4">
        <button 
          className={`text-sm tracking-wider uppercase shadow text-white py-2 px-4 rounded ${currentPlayer === 1 ? "bg-green-400" : "bg-red-400"}`}
          type="submit"
          disabled={selectedNumber < min}>
          Take {selectedNumber} sticks
        </button>
      </div>
      <div>
        <input
          className="w-full"
          type="range"
          onChange={(e) => dispatch({type: "selectSticks", payload: {value: e.target.value}})}
          value={inputNumber}
          min={min}
          max={max}
          step={1}
        />
        <div className="flex justify-between text-sm">
          <span>Min.: {min}</span>
          {String(inputNumber) !== String(selectedNumber) && <span className="text-red-500">{inputNumber} forced to {selectedNumber}</span>}
          <span>Max.: {max}</span>
        </div>
      </div>
    </form>
  );
}

export default Controls;
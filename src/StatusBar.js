function StatusBar({total, currentPlayer}) {

    return (
        <div className="flex justify-between">
          <div className={currentPlayer === 1 ? "" : "invisible"}>
            <span className="font-bold text-2xl text-green-500">Player 1</span>
          </div>
          <div className="text-center">
            <span className="block text-lg">Total</span>
            <span className="text-3xl font-light">{total}</span>
          </div>
          <div className={currentPlayer === 0 ? "" : "invisible"}>
            <span className="font-bold text-2xl text-red-500">Player 2</span>
          </div>
        </div>
    );
}

export default StatusBar;
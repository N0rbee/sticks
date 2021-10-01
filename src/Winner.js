function Winner({winner}) {
    if (winner === "") return null;

    return (
      <div className={`fixed inset-x-0 top-1/3 text-white shadow z-20 text-center p-8 ${winner === 'Player 1' ? "bg-green-400" : "bg-red-400"}`}>
        <h2 className="text-6xl">Winner</h2>
        <p className="text-4xl bold mt-4">{winner}</p>
      </div>
    );
}

export default Winner;
function Winner({winner}) {
    if (winner === "") return null;

    return (
      <div className="winner">
        <h2 className="winner-title">Winner</h2>
        <p className="winner-name">{winner}</p>
      </div>
    );
}

export default Winner;
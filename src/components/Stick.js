function Stick({top, left, rotation, selected, currentPlayer}) {

  const stickStyle = {
    width: "6px",
    height: "162px",
    top: `${top}px`,
    left: `${left}px`,
    transform: `rotate(${rotation}deg)`
  }

  let bgClass = "bg-yellow-400 border-white";
  if (selected) {
    bgClass = (currentPlayer === 1) ? "bg-green-400 border-green-600" : "bg-red-400 border-red-600";
  }

  return (
    <div className={`absolute z-10 border ${bgClass}`} style={stickStyle}></div>
  );
}

export default Stick;
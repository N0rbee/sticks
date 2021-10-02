function Stick({top, left, rotation, selected, currentPlayer}) {

  const stickStyle = {
    top: `${top}%`,
    left: `${left}%`,
    transform: `rotate(${rotation}deg)`
  }

  let bgClass = "bg-yellow-400 border-white";
  if (selected) {
    bgClass = (currentPlayer === 1) ? "bg-green-400 border-green-600" : "bg-red-400 border-red-600";
  }

  return (
    <div className={`absolute z-10 border w-2 h-40 ${bgClass}`} style={stickStyle}></div>
  );
}

export default Stick;
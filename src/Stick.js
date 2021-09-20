function Stick({top, left, rotation, selected}) {

    const stickStyle = {
        top: `${top}px`,
        left: `${left}px`,
        transform: `rotate(${rotation}deg)`
    }

    return (
        <div className={`stick ${selected ? "selected" : ""}`} style={stickStyle}></div>
    );
}

export default Stick;
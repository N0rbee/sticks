function StatusBar({total}) {

    return (
        <div className="status-bar">
          <div className={"player"}>
            <span className="player-1-name">Player 1</span>
          </div>
          <div className="sticks-total">
            <span className="total-title">
              Total
            </span>
            <span className="total-number">
              {total}
            </span>
          </div>
          <div className="player">
            <span className="player-2-name">Player 2</span>
          </div>
        </div>
    );
}

export default StatusBar;
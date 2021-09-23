import "./Settings.css";
import Modal from "./Modal";
import { useState, useMemo } from "react";

function calculateValidRanges(total, min) {
  let validTotal = parseInt(total);
  if (isNaN(validTotal)) {
    validTotal = 100;
  } else {
    if (validTotal < 10) {
      validTotal = 10;
    } else if (validTotal > 1000) {
      validTotal = 1000;
    }
  }
  let validMin = parseInt(min);
  if (isNaN(validMin)) {
    validMin = 1;
  }
  let topMin = validTotal - 2;
  return {
    total: [10, 1000],
    min: [1, topMin],
    max: [(Math.min(validMin, topMin) + 1), validTotal - 1]
  }
}

function Settings({open, onClose}) {
  const [total, setTotal] = useState(100);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const validRanges = useMemo(() => calculateValidRanges(total, min), [total, min]);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: check if between valid ranges
  }

    /** 
     * TODO:
     * 
     * reducer to set total, min, max
     * if total change: 
     *  - set total between 10 and 1000
     *  - min = Math.min(min, total)
     *  - max = Math.min(Math.max(min, max), total)
     * if min change:
     *  - set min between 1 and total
     *  - max = Math.min(Math.max(min, max), total)
     * if max change:
     *  - set max between min and total
     * 
     * if save (save and new game):
     *  - call onSave (sets DATA, and call dispatch: reset)
    */

    return (
      <Modal open={open} title="Settings" onClose={onClose}>
        <form className="settings" onSubmit={handleSubmit}>
          <div className="settings-body">
            <div className="settings-setting">
              <label className="settings-label">
                Total <small>({validRanges.total[0]}...{validRanges.total[1]})</small>
              </label>
              <input
                className="settings-input"
                type="text"
                onChange={(e) => setTotal(e.target.value)}
                value={total}
              />
            </div>
            <div className="settings-setting">
              <label className="settings-label">
                Min. <small>({validRanges.min[0]}...{validRanges.min[1]})</small>
              </label>
              <input
                className="settings-input"
                type="text"
                onChange={(e) => setMin(e.target.value)}
                value={min}
              />
            </div>
            <div className="settings-setting">
              <label className="settings-label">
                Max. <small>({validRanges.max[0]}...{validRanges.max[1]})</small>
              </label>
              <input
                className="settings-input"
                type="text"
                onChange={(e) => setMax(e.target.value)}
                value={max}
              />
            </div>
          </div>
          <div className="settings-footer">
            <button className="settings-save" type="submit">Save &amp; New Game</button>
          </div>
        </form>
      </Modal>
    );
}

export default Settings;
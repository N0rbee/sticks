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

function validateRange(input, range) {
  let error = '';
  if (isNaN(input)) {
    error = 'No an Integer';
  } else if (input < range[0] || input > range[1]) {
    error = 'Out of range';
  }
  return error;
}

function Settings({open, onClose, onSave}) {
  const [total, setTotal] = useState(100);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const validRanges = useMemo(() => calculateValidRanges(total, min), [total, min]);
  const [errors, setErrors] = useState({total: '', min: '', max: ''});

  function handleSubmit(e) {
    e.preventDefault();
    const errorTotal = validateRange(total, validRanges.total);
    const errorMin = validateRange(min, validRanges.min);
    const errorMax = validateRange(max, validRanges.max);
    setErrors({
      total: errorTotal,
      min: errorMin,
      max: errorMax
    });
    if (errorTotal === '' && errorMin === '' && errorMax === '') {
      onSave(total, min, max);
      onClose();
    }
  }

  return (
      <Modal open={open} title="Settings" onClose={onClose}>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2">
              <label className="inline-block w-28">
                Total <small>[{validRanges.total[0]}, {validRanges.total[1]}]</small>
              </label>
              <input className="border w-20" type="text" onChange={(e) => setTotal(e.target.value)} value={total} />
              {errors.total && <small className="text-red-500 ml-1">{errors.total}</small>}
            </div>
            <div className="mb-2">
              <label className="inline-block w-28">
                Min. <small>[{validRanges.min[0]}, {validRanges.min[1]}]</small>
              </label>
              <input className="border w-20" type="text" onChange={(e) => setMin(e.target.value)} value={min} />
              {errors.min && <small className="text-red-500 ml-1">{errors.min}</small>}
            </div>
            <div>
              <label className="inline-block w-28">
                Max. <small>[{validRanges.max[0]}, {validRanges.max[1]}]</small>
              </label>
              <input className="border w-20" type="text" onChange={(e) => setMax(e.target.value)} value={max} />
              {errors.max && <small className="text-red-500 ml-1">{errors.max}</small>}
            </div>
          </div>
          <div className="mt-4">
            <button className="text-sm tracking-wider uppercase bg-blue-400 shadow text-white py-2 px-4 rounded" type="submit">
              Save &amp; New Game
            </button>
          </div>
        </form>
      </Modal>
    );
}

export default Settings;
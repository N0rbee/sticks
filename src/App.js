import './App.css';
import Stick from './Stick';
import Header from './Header';
import StatusBar from './StatusBar';
import Controls from './Controls';
import Winner from './Winner';
import HowToPlay from './HowToPlay';
import Settings from './Settings';
import { useReducer, useState } from 'react';

// TODO: object set only once from save
const DATA = {
  MIN: 1,
  MAX: 10,
  TOTAL: 100
}

function initState(numberOfSticks) {
  let sticks = [];
  for (let i = 0; i < numberOfSticks; i++) {
    sticks.push({
      id: i,
      isSelected: false,
      top: Math.floor(Math.random() * 338),
      left: Math.floor(Math.random() * 338) + 78,
      rotation: Math.floor(Math.random() * 180)
    });
  }
  return {
    sticks: sticks,
    inputNumber: 0,
    selectedNumber: 0,
    currentPlayer: 1
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "selectSticks":
      let selectedNumber = parseInt(action.payload.value);
      if (isNaN(selectedNumber) || (state.sticks.length <= DATA.MIN)) {
        selectedNumber = 0;
      } else if (selectedNumber < DATA.MIN) {
        selectedNumber = 0;
      } else  {
        selectedNumber = Math.min(selectedNumber, DATA.MAX, (state.sticks.length - 1));
      }
      let fromId = state.sticks.length - selectedNumber;
      return {
        ...state,
        sticks: state.sticks.map(stick => {
          if (stick.id < fromId) return {...stick, selected: false};
          return {...stick, selected: true}
        }),
        inputNumber: action.payload.value,
        selectedNumber: selectedNumber
      };
    case "removeSticks":
      const sticks = state.sticks.filter(stick => !stick.selected);
      return {
        ...state,
        sticks: sticks,
        inputNumber: 0,
        selectedNumber: 0,
        currentPlayer: (state.currentPlayer + 1) % 2
      };
    case "restart":
      return initState(DATA.TOTAL);
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, DATA.TOTAL, initState);
  const [howToPlayIsOpen, setHowToPlayIsOpen] = useState(false);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

  return (
    <main className={state.currentPlayer === 1 ? "player-1-turn" : "player-2-turn"}>
      <Header
        dispatch={dispatch}
        onHowToPlay={() => setHowToPlayIsOpen(true)}
        onSettings={() => setSettingsIsOpen(true)}
      />
      <section className="game-field">
        <StatusBar total={state.sticks.length} />
        <div className="sticks-wrapper">
          {state.sticks.map(stick => <Stick key={stick.id} selected={stick.selected} top={stick.top} left={stick.left} rotation={stick.rotation} />)}
        </div>
        <Controls
          dispatch={dispatch}
          inputNumber={state.inputNumber}
          selectedNumber={state.selectedNumber}
          min={DATA.MIN}
          max={DATA.MAX}
        />
      </section>
      <Winner winner={(state.sticks.length <= DATA.MIN) ? ((state.currentPlayer === 1) ? "Player 2" : "Player 1") : ""} />
      <HowToPlay open={howToPlayIsOpen} onClose={() => setHowToPlayIsOpen(false)} />
      <Settings open={settingsIsOpen} onClose={() => setSettingsIsOpen(false)} />
    </main>
  );
}

export default App;

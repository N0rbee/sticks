function Header({dispatch, onHowToPlay, onSettings}) {

  return (
    <header className="bg-gray-100 border-b border-gray-200 fixed inset-x-0 top-0 z-20 py-3">
      <nav className="flex justify-between items-center max-w-2xl mx-auto text-gray-700 px-1">
        <span className="text-lg">Sticks</span>
        <ul className="text-sm">
          <li className="inline-block px-2 border-r border-gray-400">
            <button onClick={() => dispatch({type: "restart"})}>New Game</button>
          </li>
          <li className="inline-block px-2 border-r border-gray-400">
            <button onClick={onSettings}>Settings</button>
          </li>
          <li className="inline-block px-2 border-r border-gray-400">
            <button onClick={onHowToPlay}>How to play</button>
          </li>
          <li className="inline-block pl-2">
            <a href="https://github.com/N0rbee/sticks">GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
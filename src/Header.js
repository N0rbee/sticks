import "./Header.css"

function Header({dispatch, onHowToPlay, onSettings}) {

    return (
        <header className="header">
            <nav className="navigation">
                <span className="page-title">Sticks</span>
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <button className="navigation-link" onClick={() => dispatch({type: "restart"})}>[New Game]</button>
                    </li>
                    <li className="navigation-item">
                        <button className="navigation-link" onClick={onSettings}>[Settings]</button>
                    </li>
                    <li className="navigation-item">
                        <button className="navigation-link" onClick={onHowToPlay}>[How to play]</button>
                    </li>
                    <li className="navigation-item">
                        <a href="https://github.com/N0rbee/sticks" className="navigation-link">[GitHub]</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
function Header({dispatch}) {

    return (
        <header className="header">
            <nav className="navigation">
                <span className="page-title">Sticks</span>
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <button className="navigation-link" onClick={() => dispatch({type: "restart"})}>[New Game]</button>
                    </li>
                    <li className="navigation-item">
                        <button className="navigation-link">[How to play]</button>
                    </li>
                    <li className="navigation-item">
                        <button className="navigation-link">[GitHub]</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
import './Modal.css';
import ReactDOM from 'react-dom';

function Modal({open, title, onClose, children}) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className="modal">
                <header className="modal-header">
                    <h1 className="modal-title">{title}</h1>
                    <button className="modal-close-btn" onClick={onClose}>&times;</button>
                </header>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </>,
        document.getElementById("modal")
    );
}

export default Modal;
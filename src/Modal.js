import ReactDOM from 'react-dom';

function Modal({open, title, onClose, children}) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="fixed inset-0 bg-black z-20 opacity-20" onClick={onClose}></div>
            <div className="fixed left-1/2 top-1/4 bg-white border border-gray-300 w-80 z-20 transform -translate-x-1/2">
                <header className="border-b border-gray-300 bg-gray-100 flex justify-between items-center pl-2 text-gray-600">
                    <h1 className="font-bold">{title}</h1>
                    <button className="text-4xl px-2" onClick={onClose}>&times;</button>
                </header>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </>,
        document.getElementById("modal")
    );
}

export default Modal;
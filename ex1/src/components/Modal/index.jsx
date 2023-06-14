import "./style.css";

function Modal({ close }) {
  return (
    <div className="modal">
      <div className="content">
        <h1>Users</h1>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default Modal;

import "./style.css";
import Modal from "../../components/Modal";
import { useState } from "react";

function Main() {
  const [modal, setModal] = useState(false);
  function closeModal() {
    setModal(!modal);
  }
  return (
    <div className="container">
      <button onClick={() => setModal(true)}>Open</button>

      {modal && <Modal close={closeModal} />}
    </div>
  );
}

export default Main;

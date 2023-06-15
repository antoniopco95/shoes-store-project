import "./style.css";

function Modal({  openModal,
    setModalOpen,
    img,
    description,
    oldPrice,
    currentPrice,}) {
    return (
        <div className="modal">
<img src={img}  />
        </div>
    )
}

export default Modal;